console.log('and again...');


let story;

class WordCounter   {
    constructor (url) {
        this.url = url;
        this.parse;
    }
       
    input() {
        let xhttps = new XMLHttpRequest();
        xhttps.onreadystatechange = () => {
            if (xhttps.readyState == 4 && xhttps.status == 200)  {
                console.log(this);
                document.getElementById("shake").innerHTML = xhttps.responseText;
                this.parse = this.parseCount(xhttps.responseText);
                this.unique = this.uniqueMeth();
            }
        }    
        xhttps.open("GET", this.url, true);
        xhttps.send();
        return (xhttps.responseText);
    }

    parseCount(origstory) {
        let list = {};
        let story = origstory.replace(/[^a-zA-Z]/g, ' ');
        let arrayOfWords = story.split (" ");
        console.log('arrayOfWords: ' + arrayOfWords);
    
        for (let word of arrayOfWords)  {
            word = word.toUpperCase();
            if (list[word])    {
                list[word] = list[word] +1;
            }   else    {
                list[word] = 1;
            }
        }
        console.log(list);
        return list;
    }

    uniqueMeth()    {
        let counter = 0;
        for (let word in this.parse) {
            if (this.parse[word] == 1)    {
                counter = counter +1;
            }
        }
        console.log(`There are ${counter} unique words in the text.`);
        return counter;
    }
}
    // mostMeth()   {
    //     let most = 0;
    //     let list = this.parse;
    //     let mostinstances;
    //     for (let wordck in list) {
    //         for (let word in list)  {
    //             if (list[word] > list[wordck])    {
    //                 mostinstances = list[word];
    //             }
    //         }
    //         mostinstances = list[word];
    //     }
    // }
//     this.least:  ();
//     this.longest:    ();
//     this.count:  0;
// };

let url = "https://class-demo-files-and-resources.s3.amazonaws.com/Alice-In-Wonderland.txt";
const alice = new WordCounter (url);
console.log('alice.input   ' + alice.input());



// PARSE
// function parseResp(story) {
//     let arrayOfWords = story.split (" ");
//     console.log(arrayOfWords);

//     for (let word of arrayOfWords)  {
//         if (list[word])    {
//             list[word] = list[word] +1;
//         }   else    {
//             list[word] = 1;
//         }
//     }
//      console.log(list);

    // for (let word in list) {
    //     if (list[word] == 1)    {
    //         uniqueCounter = uniqueCounter +1:
    //     }
    // } 
    //  console.log(list[word]==1);





//  INPUT
// let xhttps = new XMLHttpRequest();

// xhttps.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200)  {
//         document.getElementById("shake").innerHTML = this.responseText;
//     book = parseResp(this.responseText);
//     }
// }

 
// xhttps.open("GET", "https://class-demo-files-and-resources.s3.amazonaws.com/Alice-In-Wonderland.txt", true)
// xhttps.send();



