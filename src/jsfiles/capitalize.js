const capitalize = (string) => {
  const slicedString = string.slice(1);
  const result = string.charAt(0).toUpperCase();

  return result + slicedString;
};

export default capitalize;