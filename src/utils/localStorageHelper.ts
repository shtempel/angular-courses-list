function addCoursesToStorage(courses) {
    localStorage.setItem('courses', JSON.stringify(courses));
}

function getCoursesFromStorage(storageKey) {
    const storageObj = localStorage.getItem(storageKey);
    return JSON.parse(storageObj);
}

function clearStorage() {
    localStorage.clear();
}

export { addCoursesToStorage, getCoursesFromStorage, clearStorage };
