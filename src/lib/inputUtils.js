export function isValidNumBoxInput(str) {
  const code = str.charCodeAt(0);
  if (isNaN(code)) return false;
  if (code < 48) return false; // Number 0
  if (code > 57) return false; // Number 9
  return true;
}