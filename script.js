// Basic fake "phoneme" rules (very simplified for English)
const phonemeMap = {
  A: "AH", E: "EE", I: "IH", O: "OH", U: "UH",
  B: "B", C: "K", D: "D", F: "F", G: "G", H: "H",
  J: "JH", K: "K", L: "L", M: "M", N: "N",
  P: "P", Q: "K", R: "R", S: "S", T: "T",
  V: "V", W: "W", X: "KS", Y: "Y", Z: "Z",
  CH: "CH", SH: "SH", TH: "TH", PH: "F", NG: "NG"
};

function generatePhonemes() {
  const input = document.getElementById('textInput').value.toUpperCase();
  const outputDiv = document.getElementById('output');
  let phonemes = [];

  let i = 0;
  while (i < input.length) {
    // Try to match two-letter phonemes first (e.g., CH, SH, TH, PH, NG)
    const twoLetters = input.substring(i, i+2);
    if (phonemeMap[twoLetters]) {
      phonemes.push(phonemeMap[twoLetters]);
      i += 2;
      continue;
    }

    // Then match one-letter phonemes
    const oneLetter = input[i];
    if (phonemeMap[oneLetter]) {
      phonemes.push(phonemeMap[oneLetter]);
    }
    i++;
  }

  outputDiv.innerHTML = "<h3>Phoneme Output:</h3> " + phonemes.join(' ➔ ');
}