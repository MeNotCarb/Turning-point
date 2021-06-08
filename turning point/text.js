const div = document.querySelector('div');
const btn = document.querySelector('button');
div.style.transition = 0.5 + 's';

let rotate = 0;
const deg = 10;

btn.addEventListener("click", function () {
    // rotate = rotate + deg; <- to jest taki zapis jak niżej, tylko zapisany w "ludzki" sposób
    rotate += deg;
    div.style.transform = "rotate(" + rotate + "deg)";
})