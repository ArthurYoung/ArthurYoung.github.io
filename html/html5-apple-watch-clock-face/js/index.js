var clock = document.querySelector('#utility-clock')
utilityClock(clock)

if (clock.parentNode.classList.contains('fill')) autoResize(clock, 295 + 32)

function utilityClock(container) {
    var dynamic = container.querySelector('.dynamic')
    var hourElement = container.querySelector('.hour')
    var minuteElement = container.querySelector('.minute')
    var secondElement = container.querySelector('.second')
    var minute = function (n) {
        return n % 5 == 0 ? minuteText(n) : minuteLine(n)
    }
    var minuteText = function (n) {
        var element = document.createElement('div')
        element.className = 'minute-text'
        element.innerHTML = (n < 10 ? '0' : '') + n
        position(element, n / 60, 135)
        dynamic.appendChild(element)
    }
    var minuteLine = function (n) {
        var anchor = document.createElement('div')
        anchor.className = 'anchor'
        var element = document.createElement('div')
        element.className = 'tianqi minute-line'
        rotate(anchor, n)
        anchor.appendChild(element)
        dynamic.appendChild(anchor)
    }
    var hour = function (n) {
        var element = document.createElement('div')
        element.className = 'hour-text hour-' + n
        element.innerHTML = n
        position(element, n / 12, 105)
        dynamic.appendChild(element)
    }
    var position = function (element, phase, r) {
        var theta = phase * 2 * Math.PI
        element.style.top = (-r * Math.cos(theta)).toFixed(1) + 'px'
        element.style.left = (r * Math.sin(theta)).toFixed(1) + 'px'
    }
    var rotate = function (element, second) {
        element.style.transform = element.style.webkitTransform = 'rotate(' + (second * 6) + 'deg)'
    }
    var animate = function () {
        /*var time = now.getHours() * 3600 +
            now.getMinutes() * 60 +
            now.getSeconds() * 1 +
            1000*/

        // var time =new Date().getTime() % (1000*60*60*12) /1000 +60*60*8;
      var time = (new Date().getTime() % 43200000 / 1000 + 28800).toFixed(0);
  //     var time =(new Date().getTime() % 43200000 /1000 +28800);


        // now.getMilliseconds() / 1000

        rotate(secondElement, time)
        rotate(minuteElement, time / 60)
        rotate(hourElement, time / 60 / 12)

        requestAnimationFrame(animate)

    }
    for (var i = 1; i <= 60; i++) minute(i)
    for (var i = 1; i <= 12; i++) hour(i)
    animate();
    setInterval(function () {
          animate();
  }, 200)
}

function autoResize(element, nativeSize) {
    var update = function () {
        var scale = Math.min(window.innerWidth, window.innerHeight) / nativeSize
        element.style.transform = element.style.webkitTransform = 'scale(' + scale.toFixed(3) + ')'
    }
    update()
    window.addEventListener('resize', update)
}

function createElement(type, attrArray, evtListener, html) {
    let node = document.createElement(type);

    for (let attr in attrArray) if (attrArray.hasOwnProperty(attr)) {
        node.setAttribute(attr, attrArray[attr]);
    }

    if (evtListener) {
        let a = evtListener.split(' ');
        node.addEventListener(a[0], eval(a[1]), eval(a[2]));
    }

    if (html) node.innerHTML = html;

    return node;
}

setInterval(function () {
    var week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    let date = new Date();
    let w = '<span class="dateRi">' + (date.getUTCDate() + 1) + '</span>' + week[date.getDay()];
    let divDic = createElement('div', {
        id: 'divDic'
    }, null, w);
    // divDic.addEventListener('mousedown', dragHandler, false);
    let hm = document.querySelector('.week');
    let we = document.querySelector("#divDic");
    if (we == null && hm != null) {
        hm.appendChild(divDic);
    } else {
        if (we.innerHTML != w) {
            we.innerHTML = w;
        }
    }

}, 100)

if (document.body.offsetWidth > 1500) {
    document.querySelector('.fill').style.zoom = '80%'
}
for (let i = 0; i < 100; i++) {
    setTimeout(function () {
        let tianqi = document.querySelector('#he-plugin-standard');
        if (tianqi) {
            tianqi.style.position = 'fixed'
            tianqi.style.bottom = '1%'
            tianqi.style.left = '1%'
            tianqi.style.zoom = '150%'
        }
        let h5url = document.querySelector('.wv-lt-refresh');
        if (h5url) {
            h5url.style.position = 'fixed';
            h5url.style.bottom = '1%';
            h5url.style.left = '1%';
            // h5url.innerHTML = '_______';
        }
    }, 100 * i);

}

function drawCircle() {
    var canvas = document.querySelector('#canvas');
    if (canvas) {
        var context = canvas.getContext("2d");
        context.arc(300, 300, 145, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = "#1b445b";
        context.fill();
    } else {
        return;
    }
}

//drawCircle();
