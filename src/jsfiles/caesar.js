const encode = (e, shift) => {
  if (/^[a-zA-Z]/.test(e)) {
    const charNo = e.charCodeAt(0);
    const charShift = charNo >= 65 && charNo <= 90 ? 65 : 97;
    return String.fromCharCode(((charNo - charShift + shift) % 26) + charShift);
  }
  return e;
};

const caesar = (str, shift) => str.split('').map((char) => encode(char, shift)).join('');

export default caesar;
