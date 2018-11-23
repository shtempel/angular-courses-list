function addInfoToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getInfoFromStorage(storageKey) {
    const storageObj = localStorage.getItem(storageKey);
    return JSON.parse(storageObj);
}

function clearStorage() {
    localStorage.clear();
}

export { addInfoToStorage, getInfoFromStorage, clearStorage };
