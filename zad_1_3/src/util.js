export function randInt(min, max) {
    return (Math.random() * (max - min) + min) >> 0;
}

export function fillArray(size, funcValue) {
    return [...Array(size)].map(_ => funcValue());
}