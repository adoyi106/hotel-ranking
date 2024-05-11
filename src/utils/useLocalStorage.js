export function saveHotelsToLocalStorage(hotels) {
  localStorage.setItem("hotels", JSON.stringify(hotels));
}
