function hasDoubleProperty(doubleProperty, propCheck1, propCheck2) {
  let propName = "";
  if (
    doubleProperty.hasOwnProperty(propCheck1) &&
    doubleProperty[propCheck1] &&
    doubleProperty[propCheck1].hasOwnProperty(propCheck2)
  ) {
    return doubleProperty[propCheck1][propCheck2];
  }
  if (
    !doubleProperty[propCheck1] ||
    !doubleProperty[propCheck1].hasOwnProperty(propCheck2) ||
    doubleProperty[propCheck1][propCheck2] === ""
  ) {
    propName = propCheck2;
  }
  if (!doubleProperty.hasOwnProperty(propCheck1)) {
    propName = propCheck1;
  }
  return `No such property: ${propName}`;
}
console.log(hasDoubleProperty({ cake: { chocolate: "sweet" } }, " ", "")) // "No such property: ")
console.log(hasDoubleProperty({}, "one", "two"))// "No such property: one"