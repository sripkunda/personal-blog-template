const md = require('markdown-it')({ html:true });
const a = require("markdown-it-anchor"); 
const fs = require("fs");
md.use(require('markdown-it-texmath'), { 
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
});
md.use(require('markdown-it-highlightjs'));
md.use(a, {
    level: [2, 3],
    permalink: a.permalink.headerLink({ safariReaderFix: true })
});
const path = process.argv[2];
const data = fs.readFileSync(path, "utf8");
console.log(md.render(data).replace(/(?:\r\n|\r|\n)/g, `<newline>`));