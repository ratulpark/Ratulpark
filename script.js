// Define phonemes for each letter or group of letters
const phonemeMapping = {
    'a': 'AH',
    'b': 'B',
    'c': 'K',
    'd': 'D',
    'e': 'EH',
    'f': 'F',
    'g': 'G',
    'h': 'H',
    'i': 'IH',
    'j': 'JH',
    'k': 'K',
    'l': 'L',
    'm': 'M',
    'n': 'N',
    'o': 'OH',
    'p': 'P',
    'q': 'KW',
    'r': 'R',
    's': 'S',
    't': 'T',
    'u': 'UH',
    'v': 'V',
    'w': 'W',
    'x': 'KS',
    'y': 'Y',
    'z': 'Z',
    'sh': 'SH',
    'ch': 'CH'
};

// Function to convert text to phonemes
function convertToPhonemes(text) {
    let phonemes = [];
    let words = text.toLowerCase().split(/\s+/); // Split by spaces and process each word

    words.forEach(word => {
        let wordPhonemes = [];
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            // Check if the current letter or group of letters has a corresponding phoneme
            if (phonemeMapping[char]) {
                wordPhonemes.push(phonemeMapping[char]);
            }
        }
        phonemes.push(wordPhonemes.join(' '));
    });

    return phonemes.join('\n');
}

// Add event listener to the Convert button
document.getElementById("convertButton").addEventListener("click", function() {
    var inputText = document.getElementById("inputText").value.trim();
    var outputDiv = document.getElementById("output");

    if (inputText === "") {
        outputDiv.innerHTML = "Please enter some text.";
        return;
    }

    var phonemeOutput = convertToPhonemes(inputText);
    outputDiv.innerHTML = `Phenomes:\n${phonemeOutput}`;
});
