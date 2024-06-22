export function range(max, step) {
    return Array.from({ length: max / step + 1 }, (v, i) => step * i);
}
 