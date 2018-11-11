var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var left = 0;

function stickyTab() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function tabs(event) {
    if(event.target.hasAttribute('data-tab')) {
        var dataTab = event.target.getAttribute('data-tab');
        var tabHeader = document.getElementsByClassName('tab-h');
        for (var i = 0; i < tabHeader.length; i++) {
            tabHeader[i].classList.remove('active');
        }
        event.target.classList.add('active');
        var tabBody = document.getElementsByClassName('tab-b');
        for (var i = 0; i < tabBody.length; i++) {
            if (dataTab == i) {
                tabBody[i].style.display = 'block';
            }
            else {
                tabBody[i].style.display = 'none';
            }
        }
    }
}

function sliderLeft() {
    var polosa = document.getElementById('polosa');
    left = left - 600;
    if (left < -2400) {
        left = 0;
    }
    polosa.style.left = left + 'px';
}

function sliderRight() {
    var polosa = document.getElementById('polosa');
    left = left + 600;
    if (left > 0) {
        left = -2400;
    }
    polosa.style.left = left + 'px';
}

function dots(event) {
    if(event.target.hasAttribute('data-dot')) {
        var dataDot = event.target.getAttribute('data-dot');
        var dotArray = document.getElementsByClassName('dot');
        for (var i = 0; i < dotArray.length; i++) {
            dotArray[i].classList.remove('active');
        }
        event.target.classList.add('active');
        var imageArray = document.querySelectorAll('#polosa img');
        var polosa = document.getElementById('polosa');

        for (var i = 0; i < imageArray.length; i++) {
            if (dataDot == i) {
                polosa.style.left = (-600*i) + 'px';
            }
        }
    }
}

window.addEventListener('load', function (event) {
    document.querySelector('.tabs-header').addEventListener('click', tabs);
    window.addEventListener('scroll', stickyTab);
    var prev = document.getElementsByClassName('prev')[0];
    prev.addEventListener('click', sliderLeft);
    var next = document.getElementsByClassName('next')[0];
    next.addEventListener('click', sliderRight);
    document.querySelector('.dots-container').addEventListener('click', dots);
});

