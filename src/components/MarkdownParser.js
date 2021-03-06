// italic, bold and bold-italic, monospace, deleted text
let regExps = [
    {
        re: /\*{3}(.*?)\*{3}/gi,
        tagBefore: '<b><i>',
        tagAfter: '</i></b>'
    },
    {
        re: /\*{2}(.*?)\*{2}/gi,
        tagBefore: '<b>',
        tagAfter: '</b>'
    },
    {
        re: /\*(.*?)\*/gi,
        tagBefore: '<i>',
        tagAfter: '</i>'
    },
    {
        re: /_(.*?)_/gi,
        tagBefore: '<i>',
        tagAfter: '</i>'
    },
    {
        re: /~(.*?)~/gi,
        tagBefore: '<s>',
        tagAfter: '</s>'
    },
    {
        re: /`(.*?)`/gi,
        tagBefore: '<span style="background: lightgray">',
        tagAfter: '</span>'
    }
];
// headers
for (let i = 6; i > 0; i--) {
    let obj = {
        re: new RegExp(`^#{${i}}(.*)#*`, 'gmiu'),
        tagBefore: `<h${i}>`,
        tagAfter: `</h${i}>`
    };
    regExps.push(obj)
}

// checking for links and images
let imgRe = /(![[](.*?)[\]])\(.*?\)/gi;
let linkRe = /([[](.*?)[\]])?\(.*?\)/gi;

let processMatched = function (matched, typeTag) {
    let indexOfLink = matched.lastIndexOf('(');
    let link = matched.slice(indexOfLink + 1, matched.length - 1);
    let text;
    if (matched.includes('[')) {
        text = matched.slice(1, indexOfLink - 1);
    } else {
        text = link;
    }
    if (typeTag === 'img') {
        return `<img src="${link}" alt="${text.slice(1)}">`
    } else if (typeTag === 'a') {
        return `<a href="${link}">` + text + '</a>'
    }
};


function parse(value) {

    for (let regExp of regExps) {
        value = value.replace(regExp.re, (matched, inside) => {

            return regExp.tagBefore + inside + regExp.tagAfter
        });
    }

    // checking for line-separator
    value = value.replace(/---/gi, () => {
        return '<hr>'
    });

    value = value.replace(imgRe, (matched) => processMatched(matched, 'img'));

    value = value.replace(linkRe, (matched) => processMatched(matched, 'a'));

    // line breaks
    value = value.replace(/ {2}/gi, () => {
        return '<br>'
    });
    return value
}

export default parse