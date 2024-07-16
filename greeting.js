// Greet Function
function greet(name, language) {
    const greetings = {
        'en': 'Hello',
        'zu': 'Sawubona',
        'af': 'Hoe gaan dit',
        'swa': 'Salamu',
        'yo': 'Pẹlẹ o'
    };
    return `${greetings[language] || greetings['en']}, ${name}`;
}

function displayGreeting() {
    const name = document.getElementById('name').value;
    const lang = document.getElementById('language').value;

    // Validate input: Only letters
    const regex = /^[A-Za-z]+$/;

    if (!regex.test(name)) {
        document.getElementById('greeting').innerText = "Please enter a valid name with letters only.";
        return;
    }

    document.getElementById('greeting').innerText = greet(name, lang);
}
