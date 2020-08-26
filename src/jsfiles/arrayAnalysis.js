const analyze = (arr) => {
  const obj = {
    average: arr.reduce((a, b) => a + b) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    len: arr.length,
  };
  return obj;
};

export default analyze;
