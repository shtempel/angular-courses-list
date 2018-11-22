import * as assets from './../constants/_const';

function setBorderRating(rating: number) {
    let result: string;
    if (rating < 4) {
        result = assets.styles.LOW_RATING_BORDER;
    } else if (rating <= 7) {
        result = assets.styles.MEDIUM_RATING_BORDER;
    }
    if (rating > 7) {
        result = assets.styles.HIGH_RATING_BORDER;
    }
    return result;
}

export { setBorderRating };
