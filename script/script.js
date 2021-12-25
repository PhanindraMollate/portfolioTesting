
//  Navigation bar script 

const list = document.querySelectorAll('.list');   
        function activeLink() {
            list.forEach((item) =>
                item.classList.remove('active'));
            this.classList.add('active');
        }
        list.forEach((item) =>
            item.addEventListener('click', activeLink));

//    Dark Light Switch Script

let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let audio = document.querySelector('#audio');
btn.onclick = function(){
    body.classList.toggle('off');
    audio.play();
}

document.querySelectorAll('.inverted').forEach((result) =>{
    result.classList.toggle('invert');
})
            