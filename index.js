const colors = ["green", "red",  "darkblue", "orange", "rgba(133,122,200)", "#f15025"];

let btn=document.getElementById('btn');
let color=document.querySelector('.color');

btn.addEventListener('click',()=>{
console.log("clicked");

const randomno=getrandno();
console.log(randomno);

document.body.style.backgroundColor=colors[randomno];
color.innerHTML=colors[randomno];
})
   
         
function getrandno(){
    return Math.floor(Math.random()*colors.length)
}
