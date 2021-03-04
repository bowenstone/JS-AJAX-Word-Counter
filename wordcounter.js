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
                }
            }    
            xhttps.open("GET", this.url, true);
            xhttps.send();
        }

        parseCount(story) {
            let list = {};
            let arrayOfWords = story.split (" ");
            console.log('array' + arrayOfWords);
        
            for (let word of arrayOfWords)  {
                if (list[word])    {
                    list[word] = list[word] +1;
                }   else    {
                    list[word] = 1;
                }
            }
            return list;
        }

        unique()    {
            let counter = 0;
            let list = {};
            for (let word in list) {
                if (list[word] == 1)    {
                   counter = counter +1;
                }
            return counter;
            }
        }
}
//     this.most:   ();
//     this.least:  ();
//     this.longest:    ();
//     this.count:  0;
// };

let url = "https://class-demo-files-and-resources.s3.amazonaws.com/Alice-In-Wonderland.txt";
const alice = new WordCounter (url);
console.log(alice.input());
console.log(alice.unique());



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



