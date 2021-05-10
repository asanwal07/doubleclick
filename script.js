const lovemes =document.querySelector('.loveme')
const times =document.getElementById('times')


let timesclicked=0


lovemes.addEventListener('dblclick' , (e)=>
{
createElement(e)
})



function createElement(e){
const heart = document.createElement('i')
heart.classList.add('fas')
heart.classList.add('fa-heart')
  
const x = e.clientX
const y = e.clientY

const leftOffset = e.target.offsetLeft
const topOffset = e.target.offsetTop

const xInside = x - leftOffset
const yInside = y - topOffset

heart.style.top=`${yInside}px`
heart.style.left=`${xInside}px`

lovemes.appendChild(heart)
times.innerHTML=++timesclicked

setTimeout(() => heart.remove(), 1000);
}