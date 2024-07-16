function processSentence() {
    const sentence = document.getElementById('sentenceInput').value;
    const words = sentence.split(' ');
    let longestWords = [];
    let shortestWords = [];
    let maxLength = 0;
    let minLength = Infinity;

    words.forEach(word => {
        const wordLength = word.length;

        if (wordLength > maxLength) {
            maxLength = wordLength;
            longestWords = [word]; 
        } else if (wordLength === maxLength) {
            longestWords.push(word); 
        }

        if (wordLength < minLength) {
            minLength = wordLength;
            shortestWords = [word]; 
        } else if (wordLength === minLength) {
            shortestWords.push(word);
        }
    });

    const wordLengths = words.map(word => `${word} (${word.length})`).join(', ');
    document.getElementById('longestWord').innerText = longestWords.join(', ');
    document.getElementById('shortestWord').innerText = shortestWords.join(', ');
    document.getElementById('wordLengths').innerText = wordLengths;
}
