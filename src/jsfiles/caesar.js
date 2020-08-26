const caesar = (str) => {
  function cipher(e) {
    if (/^[a-zA-Z]/.test(e)) {
      if (e.charCodeAt(0) === 90 || e.charCodeAt(0) === 122) {
        return String.fromCharCode(e.charCodeAt(0) + 1 - 26);
      }
      return String.fromCharCode(e.charCodeAt(0) + 1);
    }
    return e;
  }
  return str.split('').map(cipher).join('');
};

export default caesar;
