start_time=`date +%s%N | cut -b1-13`
mkdir -p build

# 1. Home page
mustache ./src/site.home.json ./templates/index.mustache > build/index.html

# 2. Blog pages
rm -r ./build/blog
mkdir -p ./build/blog

# Get markdown and convert output it for each file matching ./blog/*.md
cd ./src/blog
for f in *.md ; do 
    printf '%s' "{ \"title\": \"${f%.md}\", \"content\": \"$(node ../../templates/parser.js $f | sed -r "s/\"/'/g")\" }" | sed -r 's/\\/\\\\/g' | mustache - ../../templates/blog.mustache > ../../build/blog/${f%.md}.html; 
done

cp -R ../../css ../../build
cp -R ../../assets ../../build

end_time=`date +%s%N | cut -b1-13`
echo "Build completed in `expr $end_time - $start_time`ms" 