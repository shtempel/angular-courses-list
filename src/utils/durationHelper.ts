function formatDuration(duration) {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;

    if (duration <= 60) {
        if (duration === 60) {
            return '60min';
        } else {
            return minutes + 'min';
        }
    } else if (duration > 60) {
        return hours + 'hr ' + minutes + 'min';
    }
}

export { formatDuration };
