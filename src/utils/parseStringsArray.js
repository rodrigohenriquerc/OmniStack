module.exports = function parseStringsArray(arrayAsString) {
  return arrayAsString.split(',').map(tech => tech.trim());
}