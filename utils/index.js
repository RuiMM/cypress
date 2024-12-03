export const rgbToHex = (rgb) => {
  const result = rgb.match(/\d+/g).map(Number);
  return (
    "#" +
    ((1 << 24) + (result[0] << 16) + (result[1] << 8) + result[2])
      .toString(16)
      .slice(1)
      .toUpperCase()
  );
};
