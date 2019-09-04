
let descWords = Array.from(document.getElementsByClassName("content_desc_text"));

function descWordsMix (mixedWords) {
    function funMix(a,b) {
        return Math.random() -0.5;
    }
    return mixedWords = mixedWords.sort(funMix)
}

function descWordsApear() {

    let wordCount = 4;
    for (let i = 0; i < descWords.length; i++){
        descWords[i].style.transitionDelay = wordCount + 1 + "s";
        descWords[i].style.opacity = "1";
        wordCount+=0.05
    }
}



descWordsMix(descWords);
setTimeout(function () {
    descWordsApear();
},10);

console.log(descWords)

