console.log('and again...');

let story;
let xhttps = new XMLHttpRequest();
let count = 0;

let list = {};

function parseResp(story) {
    // let spacestory = story.replace(/(\r\n|\n|\r)/gm, " ");
    // console.log(spacestory);
    let arrayOfWords = story.split (" ");
    console.log(arrayOfWords);

    for (let word of arrayOfWords)  {
        if (list[word])    {
            list[word] = list[word] +1;
        }   else    {
            list[word] = 1;
        }
    }
     console.log(list);

}

xhttps.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200)  {
        document.getElementById("shake").innerHTML = this.responseText;
    book = parseResp(this.responseText);
    }
}

 
xhttps.open("GET", "https://class-demo-files-and-resources.s3.amazonaws.com/Alice-In-Wonderland.txt", true)
xhttps.send();



