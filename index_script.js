const button = document.querySelector('.colorbtn');
const bodybg = document.querySelector('body');
const color = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
button.addEventListener('click',switchcolor);

function switchcolor(){
    let value = '#';
    for(let i=0;i<6;i++){
      let num = color[Math.floor(Math.random() * color.length)];
      value = value + num;
    }
    bodybg.style.backgroundColor = value;
}