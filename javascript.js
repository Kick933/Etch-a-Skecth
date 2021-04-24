const pad = document.querySelector('#container'); 
let size = 16;
let width_value = 0;

for(let i = 0; i < size*size ; i++){
  const temp = document.createElement('div');
  temp.classList.add("sketch");
  let width_value = 100/size;
  temp.style.width =`${width_value}%`;
  temp.style.height = `${width_value}%`;
  temp.addEventListener('mouseenter', ()=> temp.style.backgroundColor="red");
  pad.appendChild(temp);
}

const btn = document.querySelector("#show")
btn.addEventListener('click', show)

function show(){
  input.classList.toggle("hidden");
  changeBtn.classList.toggle("hidden");
  btn.classList.add("hidden");
}
  
const input = document.querySelector("#pad-size");
const changeBtn = document.querySelector("#change-size");
changeBtn.addEventListener( 'click' , resize);

function resize(){
  for(let i = 0; i < size*size ; i++){
    const temp = document.querySelector('.sketch');
    pad.removeChild(temp);
  }
  size = input.value;
  for(let i = 1; i <= size*size ; i++){
    const temp = document.createElement('div');
    temp.classList.add("sketch");
    let width_value = 100/size;
    temp.style.width =`${width_value}%`;
    temp.style.height = `${width_value}%`;
    temp.addEventListener('mouseover', ()=> temp.style.backgroundColor = "red");
    pad.appendChild(temp);
  }
}
