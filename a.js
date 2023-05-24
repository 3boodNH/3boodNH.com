var x = 0;
var y = 0;
var z = 0;
var k1 = 0;
var k2 = 0;
var k3 = 0;
var k4 = 0;
var k1_ = 0;
var k2_ = 0;
var k3_ = 0;
var k4_ = 0;
var h = 4;
window.addEventListener('keydown', e => {

    document.getElementById('mo').
        innerHTML = 'x=' + x + '<br>y=' + y;
    if (z % 3 == 0) {
        document.getElementById('a').
            style.display = ''
        document.getElementById('b').
            style.display = 'none'
    }
    if (z % 3 == 1 || z % 3 == -1) {
        document.getElementById('a').
            style.display = 'none'
        document.getElementById('b').
            style.display = ''
    }

    if (e.key == "w" || e.key == "ArrowUp") {
        y--;
        z++;
        document.getElementById('ch').
            style.top = (y * 2) + 20 + '%'
        document.getElementById('ch').
            style.transform = 'translate(-50%, -50%) rotate(0deg)'

    }

})
window.addEventListener('keydown', e => {
    if (e.key == "d" || e.key == "ArrowRight") {
        x++;
        z++;

        console.log(x)
        document.getElementById('ch').
            style.left = (x * 2) + 69 + '%'
        document.getElementById('ch').
            style.transform = 'translate(-50%, -50%) rotate(90deg)'
    }
})
window.addEventListener('keydown', e => {
    if (e.key == "s" || e.key == "ArrowDown") {
        y++;
        z++;

        console.log(y)
        document.getElementById('ch').
            style.top = (y * 2) + 20 + '%'
        document.getElementById('ch').
            style.transform = 'translate(-50%, -50%) rotate(180deg)'
    }
})

window.addEventListener('keydown', e => {
    if (e.key == "a" || e.key == "ArrowLeft") {
        x--;
        z++;

        console.log(x)
        document.getElementById('ch').
            style.left = (x * 2) + 69 + '%'
        document.getElementById('ch').
            style.transform = 'translate(-50%, -50%) rotate(270deg)'
    }
    if ((x > 1 && y < 37 && x < 15 && y > -2) ||
        (x > -12 && x < 2 && 21 < y && 67 > y) ||
        (x > -12 && x < 15 && 40 < y && 67 > y) ||
        (x > 16 && x < 26 && -2 < y && 110 > y) ||
        (x > -23 && x < -1 && -2 < y && 18 > y) ||
        (x > -23 && x < -13 && 16 < y && 25 > y) ||
        (x > -23 && x < -13 && 28 < y && 110 > y) ||
        (x > -12 && x < 15 && 70 < y && 110 > y)

    ) {
        h--;
        if (h == 0) {
        document.getElementById('lo').
            style.display = 'inline-block'
        document.getElementById('ch').
            style.display = 'none'
        x = 0;
        y = 0;
        }
        if (h == 3) {
            document.getElementById('h3').
            style.color='black'
            document.getElementById('h-1').
            style.animation='h-3 1s 1'
        }
        if (h == 2) {
            document.getElementById('h2').
            style.color='black'
            document.getElementById('h-1').
            style.animation='h-2 1s 1'
        }
        if (h == 1) {
            document.getElementById('h1').
            style.color='black'
             document.getElementById('h-1').
            style.animation='h-1 1s 1'
        }
    }


    if ((x > -23 && y < 30 && x < -18 && y > 23)) {
        k1 = 1;
        document.getElementById('k1').
            style.opacity = '0'
        document.getElementById('k1').
            style.animation = 'k1 1s 1 linear'
        document.getElementById('ks1').
            style.color = 'rgb(0, 187, 255)'
    }
    //2222222===================================================================
    if ((x > -14 && y < 100 && x < -11 && y > 90)) {
        k2 = 1;

        document.getElementById('k2').
            style.opacity = '0'
        document.getElementById('k2').
            style.animation = 'k1 1s 1 linear'
        document.getElementById('ks2').
            style.color = 'rgb(221, 255, 0)'
    }
    //33333333333333===================================================================
    if ((x > 14 && y < 20 && x < 17 && y > 10)) {
        k3 = 1;
        document.getElementById('k3').
            style.opacity = '0'
        document.getElementById('k3').
            style.animation = 'k1 1s 1 linear'
        document.getElementById('ks3').
            style.color = 'rgb(234, 0, 255)'
    }
    //44444444444===================================================================
    if ((x > 4 && y < 40 && x < 9 && y > 35)) {
        k4 = 1;
        document.getElementById('k4').
            style.opacity = '0'
        document.getElementById('k4').
            style.animation = 'k1 1s 1 linear'
        document.getElementById('ks4').
            style.color = 'rgb(13, 255, 0)'
    }
    if (k1_ == 0 || k2_ == 0 || k3_ == 0 || k4_ == 0) {
        if ((x > 13 && y < 86 && x < 18 && y > 81)) {
            y--;
            document.getElementById('lk').
                style.display = 'flex'

            document.getElementById('lk1').
                onclick = function () {
                    if (k1 == 1) {
                        document.getElementById('lk1').
                            style.display = 'none'
                        document.getElementById('lk1-').
                            style.display = 'flex'
                        k1_ = 1;
                    } else {

                        document.getElementById('lk1').
                            style.animation = 'r 1 .3s'
                    }
                }
            document.getElementById('lk2').
                onclick = function () {
                    if (k2 == 1) {
                        document.getElementById('lk2').
                            style.display = 'none'
                        document.getElementById('lk2-').
                            style.display = 'flex'
                        k2_ = 1;
                    } else {

                        document.getElementById('lk2').
                            style.animation = 'r 1 .3s'
                    }
                }
            document.getElementById('lk3').
                onclick = function () {
                    if (k3 == 1) {
                        document.getElementById('lk3').
                            style.display = 'none'
                        document.getElementById('lk3-').
                            style.display = 'flex'
                        k3_ = 1;
                    } else {
                        document.getElementById('lk3').
                            style.animation = 'r 1 .3s'
                    }
                }
            document.getElementById('lk4').
                onclick = function () {
                    if (k4 == 1) {
                        document.getElementById('lk4').
                            style.display = 'none'
                        document.getElementById('lk4-').
                            style.display = 'flex'
                        k4_ = 1;
                    }
                    else {
                        document.getElementById('lk4').
                            style.animation = 'r 1 .3s'
                    }
                }



        }
        else {
            document.getElementById('lk').
                style.display = 'none'
        }
        if ((x > 13 && y < 96 && x < 18 && y > 85)) {

            document.getElementById('lo').
                style.display = 'inline-block'

        }
        if ((x > 13 && y < 107 && x < 18 && y > 96)) {

            document.getElementById('lo1').
                style.display = 'inline-block'

        }
    }

    else {
        document.getElementById('lk').
            style.display = 'none'
        if ((x > 13 && y < 107 && x < 18 && y > 96)) {

            document.getElementById('lo2').
                style.display = 'inline-block'
        }
        document.getElementById('l').
            style.opacity = '0'
        document.getElementById('l').
            style.animation = 'l 1 1s'
    }
})



// ArrowUp ArrowRight ArrowDown ArrowLeft