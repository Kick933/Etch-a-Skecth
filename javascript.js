const pad = document.querySelector('#container'); 
let size = 16;
let width_value = 0;


const btn = document.querySelector("#showForm")
btn.addEventListener('click', () =>{
  btn.classList.toggle("hidden");
  theForm.classList.toggle("hidden")
})


const theInput = document.querySelector("#pad-size");
const theForm = document.querySelector("#sizeChange");
theForm.addEventListener('submit',(e) =>{
e.preventDefault();
resize();
});

function renderGrid(x){
  for(let i = 1; i <= x*x ; i++){
    const temp = document.createElement('div');
    temp.classList.add("sketch");
    let width_value = 100/x;
    temp.style.width =`${width_value}%`;
    temp.style.height = `${width_value}%`;
    temp.addEventListener('mouseover', ()=> temp.style.backgroundColor = "red");
    pad.appendChild(temp);
  }
}
renderGrid(size)


function resize(){
  for(let i = 0; i < size*size ; i++){
    const temp = document.querySelector('.sketch');
    pad.removeChild(temp);
  }
  console.log("Removed")
  size = theInput.value;
  console.log(size)
  renderGrid(size)
}
