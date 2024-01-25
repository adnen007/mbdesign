export const formatPrice = () => {};

export const getUniqueValues = (propertyName, array) => {
  let newArr = array.map((element) => {
    return element[propertyName];
  });
  if (propertyName === "colors") {
    newArr = newArr.flat();
  }
  return [...new Set(newArr)];
};
