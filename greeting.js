// Greet Function
function greet(fullName, language) {
    const greetings = {
        'en': 'Hello',
        'zu': 'Sawubona',
        'af': 'Hoe gaan dit',
        'swa': 'Salamu',
        'yo': 'Pẹlẹ o'
    };
    return `${greetings[language] || greetings['en']}, ${fullName}`;
}

function displayGreeting() {
    const fullName = document.getElementById('name').value;
    const lang = document.getElementById('language').value;

    // Validate input: Only letters and spaces
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(fullName)) {
        document.getElementById('greeting').innerText = "Only letters allowed, try agin.";
        return;
    }

    document.getElementById('greeting').innerText = greet(fullName, lang);
}
