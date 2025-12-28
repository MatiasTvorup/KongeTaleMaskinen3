module KT3Utils {

    export function cleanString(str) {
        str = str.toUpperCase();
        str = str.replaceAll(".", " ");
        str = str.replaceAll(",", " ");
        str = str.replaceAll("-", " ");
        str = str.replaceAll("–", " ");
        str = str.replaceAll("!", " ");
        str = str.replaceAll("?", " ");
        str = str.replaceAll(";", " ");
        str = str.replaceAll(":", " ");
        str = str.replaceAll("”", " ");
        str = str.replaceAll("\"", " ");
        str = str.replaceAll("\n", " ");
        str = str.replaceAll(/([\s])+/g, " ");
        return str;
    }

    export function count(str) {
        var obj = {};
        str.split(" ").forEach(function (el, i, arr) {
            obj[el] = obj[el] ? ++obj[el] : 1;
        });
        return obj;
    }
}

export default KT3Utils