// Example phoneme map (replace with your actual logic or mapping)
const phonemeMap = {
  "a": "A",
  "b": "B",
  "c": "C",
  "d": "D",
  "e": "E",
  "f": "F",
  "g": "G",
  "h": "H",
  "i": "I",
  "j": "J",
  "k": "K",
  "l": "L",
  "m": "M",
  "n": "N",
  "o": "O",
  "p": "P",
  "q": "Q",
  "r": "R",
  "s": "S",
  "t": "T",
  "u": "U",
  "v": "V",
  "w": "W",
  "x": "X",
  "y": "Y",
  "z": "Z",
};

// Function to convert text to phonemes
function convertText() {
  const inputText = document.getElementById("inputText").value;
  const words = inputText.split(" ");
  let phonemeOutput = "";

  words.forEach(word => {
    const phonemes = word.split("").map(char => phonemeMap
