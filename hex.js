const colors = [0, 1, 2, 3, 4, 5, 6, 7, 9,"A","B","C","D","E","F","G","H"];

let btn = document.getElementById('btn');
let color = document.querySelector('.color');

btn.addEventListener("click", () => {
 
    
  let a="#";
    for (let i = 0; i < 6; i++) {


        a += colors[getrandno()];
        
    }
    console.log(a);
    document.body.style.backgroundColor = a;
    color.innerHTML = a;


})

function getrandno() {

    return Math.floor(Math.random()*colors.length)
}