const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
const getAllCssVars = () => {
return Array.from(document.styleSheets)
    .filter(
        sheet => sheet.href === null || sheet.href.startsWith(window.location.origin)
    )
    .reduce((acc, sheet) =>
        (acc = [
            ...acc,
            ...Array.from(sheet.cssRules).reduce(
                (def, rule) =>
                    (def = rule.selectorText === ":root" ?
                    [
                        ...def,
                        ...Array.from(rule.style).filter(name => name.startsWith("--"))
                    ] :
                    def),
                []
            )
        ]),
    []
);
}

const makeItWeird = () => {
    getAllCssVars().forEach((variable) => {
        document.documentElement.style
        .setProperty(variable, getRandomColor());
    });
}

const makeItNormal = () => {
    window.location.reload();
}