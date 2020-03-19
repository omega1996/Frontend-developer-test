function parse(value) {
    let regExps = [
        {
            re: /\*{3}((\w)*(\s)*)*\*{3}/gi,
            tagBefore: '<b><i>',
            tagAfter: '</i></b>'
        },
        {
            re: /\*{2}((\w)*(\s)*)*\*{2}/gi,
            tagBefore: '<b>',
            tagAfter: '</b>'
        },
        {
            re: /\*((\w)*(\s)*)*\*/gi,
            tagBefore: '<i>',
            tagAfter: '</i>'
        }
    ];

    for (let regExp of regExps) {
        value = value.replace(regExp.re, (matched, inside) => {
            return regExp.tagBefore + inside + regExp.tagAfter
        });
    }

    // checking for line-separator
    value = value.replace(/---/gi, () => {
        return '<hr>'
    });

    // checking for links and images

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
            return `<img src="${link}" alt="${text}">`
        } else if (typeTag === 'a') {
            return `<a href="${link}">` + text + '</a>'
        }

    };

    let imgRe = /(![[](.*?)[\]])\(.*?\)/;
    value = value.replace(imgRe, (matched) => processMatched(matched, 'img'));

    let linkRe = /([[](.*?)[\]])?\(.*?\)/gi;
    value = value.replace(linkRe, (matched) => processMatched(matched, 'a'));

    return value
}

export default parse