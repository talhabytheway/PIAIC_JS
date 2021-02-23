var text = prompt("Enter some Text");
text = text.toLowerCase()
words = text.split(" ")

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ")
var wordss = words.toString()
var res = wordss.replace(/,/g,' ');


alert(res)