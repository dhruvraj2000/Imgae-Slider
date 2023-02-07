const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const slider = document.querySelector('.slider');
const allimages = document.querySelector('.images');

btn1.addEventListener('click', function() {
    allimages.style.transform = 'translatex(-0px)';
});

btn2.addEventListener('click', function() {
    allimages.style.transform = 'translatex(-105px)';
});

btn3.addEventListener('click', function() {
    allimages.style.transform = 'translatex(-209px)';
});

btn4.addEventListener('click', function() {
    allimages.style.transform = 'translatex(-312px)';
});