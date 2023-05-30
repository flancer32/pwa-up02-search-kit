/**
 * Convert strings from "al-pacino" to "Al Pacino".
 * @param {string} param
 * @return {string}
 */
export function decodeKey(param) {
  const words = param.split("-");
  const capitalized = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalized.join(" ");
}

/**
 * Convert strings from "Al Pacino" to "al-pacino".
 * @param {string} param
 * @return {string}
 */
export function encodeKey(param) {
  const lower = param.toLowerCase();
  return lower.replaceAll(" ", "-");
}
