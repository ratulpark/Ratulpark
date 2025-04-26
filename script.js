function convertToPhonemes() {
  const text = document.getElementById('textInput').value.toLowerCase();
  let phonemes = '';

  for (let char of text) {
    if ('aei'.includes(char)) {
      phonemes += 'A ';
    } else if ('bmp'.includes(char)) {
      phonemes += 'BMP ';
    } else if ('fv'.includes(char)) {
      phonemes += 'FV ';
    } else if ('cdgkrstxyz'.includes(char)) {
      phonemes += 'CDGK ';
    } else if ('u'.includes(char)) {
      phonemes += 'U ';
    } else if ('chjsh'.includes(char)) {
      phonemes += 'CHJSH ';
    } else if ('l'.includes(char)) {
      phonemes += 'L ';
    } else if ('o'.includes(char)) {
      phonemes += 'O ';
    } else if ('qw'.includes(char)) {
      phonemes += 'QW ';
    } else {
      phonemes += char + ' ';
    }
  }

  document.getElementById('output').innerText = phonemes.trim();
}

// Add event listener properly:
document.getElementById('convertButton').addEventListener('click', convertToPhonemes);
