import { range } from './range.js';
import { methods } from './colors.js';


function color(percents1, method) {
    return `color-mix(${method},var(--fromColor) ${percents1}%, var(--toColor))`;
}

function gradient(method) {
    return `linear-gradient(${method}, var(--fromColor), var(--toColor))`;
}

function cell(value, color) {
    return `<div class="cell"><div class="value" style="color:${color}">${value}</div><div class="subcells"><div></div><div></div></div></div>`;
}

function element(labels, gradient, method) {
    return `<div class='scaleContainer'><div class='method'>${method}</div><div class="labeledScale"><div class="labels">${labels}</div><div class="scale" style="background:${gradient}"></div></div></div>`;
}

function scale(method) {
    const max = 100, step = 10;
    const labels = range(max, step).reverse().map(n => cell(n, color(n / max * 100, method))).join('');
    return element(labels, gradient(method), method.replace(/^in /, '').replace(/ hue$/, ''));
}


contentDiv.innerHTML = methods.map(scale).join('');