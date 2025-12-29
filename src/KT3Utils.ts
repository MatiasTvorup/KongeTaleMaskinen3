import t2024 from './taler/2024.ts'
import t2023 from './taler/2023.ts'
import t2022 from './taler/2022.ts'
import t2021 from './taler/2021.ts'
import t2020 from './taler/2020.ts'
import t2019 from './taler/2019.ts'
import t2018 from './taler/2018.ts'
import t2017 from './taler/2017.ts'
import t2016 from './taler/2016.ts'
import t2015 from './taler/2015.ts'
import t2014 from './taler/2014.ts'
import t2013 from './taler/2013.ts'
import t2012 from './taler/2012.ts'
import t2011 from './taler/2011.ts'
import t2010 from './taler/2010.ts'
import t2009 from './taler/2009.ts'
import t2008 from './taler/2008.ts'
import t2007 from './taler/2007.ts'
import t2006 from './taler/2006.ts'
import t2005 from './taler/2005.ts'
import t2004 from './taler/2004.ts'
import t2003 from './taler/2003.ts'
import t2002 from './taler/2002.ts'
import t2001 from './taler/2001.ts'
import t2000 from './taler/2000.ts'
import t1999 from './taler/1999.ts'
import t1998 from './taler/1998.ts'
import { isBreakStatement } from 'typescript'

module KT3Utils {


    export function cleanString(str: string) {
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

    export function countOccurences(str: string): Map<string, number> {
        var obj: Map<string, number> = new Map<string, number>();
        str.split(" ").forEach(function (el, i, arr) {
            if (obj.has(el)) {
                let currCount: number = obj.get(el)!;
                ++currCount;
                obj.set(el, currCount);
            }
            else {
                obj.set(el, 1);
            }
            // obj[el] = obj[el] ? ++obj[el] : 1;
        });
        return obj;
    }

    export function timeline(): Array<number> {
        return [
            1998,
            1999,
            2000,
            2001,
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022,
            2023,
            2024
        ];
    }

    export function speeches(): Array<string> {
        return [
            t1998,
            t1999,
            t2000,
            t2001,
            t2002,
            t2003,
            t2004,
            t2005,
            t2006,
            t2007,
            t2008,
            t2009,
            t2010,
            t2011,
            t2012,
            t2013,
            t2014,
            t2015,
            t2016,
            t2017,
            t2018,
            t2019,
            t2020,
            t2021,
            t2022,
            t2023,
            t2024
        ]
    }

    export function totalWordCount() {
        let wordMap = new Map<number, string>();
        for (let year = 0; year <= 2024 - 1998; year++) {
            wordMap.set(year, "hej");
        }
    }


    export function wordTimeLine(words: string[]): Array<number> {
        let wordOccurence: Array<number> = [];

        for (let year = 0; year <= 2024 - 1998; year++) {
            let speech: string = speeches()[year]!;
            let occurences: Map<string, number> = countOccurences(cleanString(speech));
            let count: number = 0;

            for (let word of words) {
                word = word.toUpperCase();
                if (!occurences.has(word)) {
                    break;
                }
                count = count + occurences.get(word)!;
            }
            wordOccurence.push(count);
        }
        return wordOccurence;
    }

}

export default KT3Utils