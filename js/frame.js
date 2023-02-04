const frame = document.getElementById("frame");

const w = document.body.clientWidth;
const h = document.body.clientHeight;

const ratioX = w / 1920;
const ratioY = 1; //980 / h;

//frame.style.transform = `scaleX(${ratioX}) scaleY(${ratioY})`;

frame.style.transform = `scale(0.9)`;
