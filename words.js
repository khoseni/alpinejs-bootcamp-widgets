// Word Game Widget
function processSentence() {
    const sentence = document.getElementById('sentenceInput').value;
    const words = sentence.split(' ');
    let longestWord = '';
    let shortestWord = words[0];

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    });
    const wordLengths = words.map(word => `${word} (${word.length})`).join(', ');
    document.getElementById('longestWord').innerText = longestWord;
    document.getElementById('shortestWord').innerText = shortestWord;
    document.getElementById('wordLengths').innerText = wordLengths;
}