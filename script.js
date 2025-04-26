// Simple mapping of letters to phonemes for demonstration purposes
const phonemeMap = {
    "A": "AH",
    "B": "B",
    "C": "K",
    "D": "D",
    "E": "EH",
    "F": "F",
    "G": "G",
    "H": "HH",
    "I": "IH",
    "J": "J",
    "K": "K",
    "L": "L",
    "M": "M",
    "N": "N",
    "O": "OW",
    "P": "P",
    "Q": "KW",
    "R": "R",
    "S": "S",
    "T": "T",
    "U": "UW",
    "V": "V",
    "W": "W",
    "X": "KS",
    "Y": "Y",
    "Z": "Z",
    "SH": "SH",
    "CH": "CH"
};

function convertToPhonemes() {
    const inputText = document.getElementById("inputText").value.trim().toLowerCase();
    const words = inputText.split(" ");  // Split text into words
    let outputText = 'Phenomes:\n';  // Start with the "Phenomes:" label

    words.forEach(word => {
        let phonemes = [];

        // For each word, convert it into phonemes
        for (let i = 0; i < word.length; i++) {
            const letter = word[i].toUpperCase();  // Capitalize letter for matching in phonemeMap
            if (phonemeMap[letter]) {
                phonemes.push(phonemeMap[letter]);
            } else {
                phonemes.push(letter);  // If no phoneme mapping, just add the letter (e.g., non-alphabetic characters)
            }
        }

        outputText += `${word.charAt(0).toUpperCase() + word.slice(1)}: ${phonemes.join(', ')}\n`;  // Add formatted word and phonemes
    });

    // Display the result in the output section
    document.getElementById("phonemeOutput").textContent = outputText;
}
