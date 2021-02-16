export function setValue(key, obj) {
  localStorage.setItem(key, obj);
}
export function getValue(name) {
  localStorage.getItem(name);
}
