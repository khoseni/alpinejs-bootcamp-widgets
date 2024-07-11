// Greet Function
function greet(neighborName, language) {
    const greetings = {
        'en': 'Hello',
        'zu': 'Sawubona'
    };
    return `${greetings[language] || greetings['en']}, ${neighborName}`;
}

function displayGreeting() {
    const name = document.getElementById('neighborName').value;
    const lang = document.getElementById('language').value;
    document.getElementById('greeting').innerText = greet(name, lang);
}