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
      phonemes += 'CDGK_RST_XYZ ';
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
    } else if (char === ' ') {
      phonemes += '| '; // space between words
    } else {
      phonemes += char + ' '; // unknown characters
    }
  }

  document.getElementById('output').innerText = phonemes.trim();
}
