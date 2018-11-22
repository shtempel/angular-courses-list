import * as assets from './../constants/_const';

function setPadding(rating) {
    return Number.isInteger(rating) ? assets.styles.PADDING_FOR_INTEGER : assets.styles.PADDING_FOR_NONE_INTEGER;
}

export { setPadding };
