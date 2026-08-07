let btnTamrin=document.getElementById('BTN-tamrin');

let inputTamrin=document.getElementById('input');

let ms=document.getElementById('ms');

let colorArry=['red','blue','orange','whith','grren','yelo']



inputTamrin.addEventListener('change',()=>{
    
    console.log(inputTamrin.value);
    ms.innerHTML=inputTamrin.value;
    
});

btnTamrin.addEventListener('click',()=>{
    setInterval(() => {
        let random=Math.floor(Math.random()*colorArry.length);
        document.body.style.backgroundColor=colorArry[random];
        
    }, inputTamrin.value);
})