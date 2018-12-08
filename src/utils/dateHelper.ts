function orderByDateHelper(array) {
    return array.sort((a, b) => {
        const dateA: any = new Date(a.releaseDate);
        const dateB: any = new Date(b.releaseDate);
        return dateB - dateA;
    });
}

export { orderByDateHelper };
