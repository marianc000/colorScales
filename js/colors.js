const rectangularColorSpace = [
    'srgb',
    'srgb-linear',
    'display-p3',
    'a98-rgb',
    'prophoto-rgb',
    'rec2020',
    'lab',
    'oklab',
    'xyz',
    'xyz-d50',
    'xyz-d65'];

const polarColorSpace = [
    'hsl',
    'hwb',
    'lch',
    'oklch'];

const hueInterpolationMethod = ['shorter', 'longer'].map(v => v + ' hue');
const allPolarColorSpace = polarColorSpace.flatMap(s => hueInterpolationMethod.map(m => s + ' ' + m));

export const methods = [...allPolarColorSpace, ...rectangularColorSpace].map(v => 'in ' + v);
