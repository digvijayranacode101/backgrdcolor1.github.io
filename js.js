const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','c','D','E','F'];
const hex= document.querySelector('.hex')
const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const div = document.querySelector('.outer')
const hex2= document.querySelector('.hex2')
colorBtn.addEventListener('click',gethex);
colorBtn.addEventListener('click',gethex2);

function gethex(){
let hexCol='#';
    for (i=0; i<6; i++){
        let randomhex=Math.floor(Math.random()*colors.length)
        hexCol+=colors[randomhex]
console.log(hexCol)
    }
bodyBcg.style.backgroundColor=hexCol
hex.innerHTML = hexCol
    
}
function gethex2(){
    let hexCol='#';
        for (i=0; i<6; i++){
            let randomhex=Math.floor(Math.random()*colors.length)
            hexCol+=colors[randomhex]
    console.log(hexCol)
        }
div.style.backgroundColor=hexCol
hex2.innerHTML=hexCol 
    }



