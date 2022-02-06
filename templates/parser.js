const tm = require('markdown-it-texmath');
const md = require('markdown-it')({html:true})
const fs = require("fs");

const katexOptions = { 
    engine: require('katex'), 
    delimiters: 'dollars', 
    katexOptions: { 
        newLineInDisplayMode: true, 
        strict: "ignore", 
        trust: (context) => ['\\htmlId', '\\href'].includes(context.command),
        macros: {
            "\\eqref": "\\href{###1}{(\\text{#1})}",
            "\\ref": "\\href{###1}{\\text{#1}}",
            "\\label": "\\htmlId{#1}{}" 
        }   
    } 
};
md.use(tm, katexOptions);
md.use(require('markdown-it-highlightjs'));

const path = process.argv[2];

const data = fs.readFileSync(path, "utf8");
console.log(md.render(data).replace(/(?:\r\n|\r|\n)/g, `<newline>`));