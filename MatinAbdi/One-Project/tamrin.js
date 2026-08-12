/* پروزه تمرینی جلسه120 */



/* let btnTamrin=document.getElementById('BTN-tamrin');

let inputTamrin=document.getElementById('input');

let ms=document.getElementById('ms');

let colorArry=['red','blue','orange','whith','grren','yelo']

let redvalue , greenvalue , bluevalue ;

/* inputTamrin.addEventListener('change',()=>{
    
    console.log(inputTamrin.value);
    ms.innerHTML=inputTamrin.value;
    
});

btnTamrin.addEventListener('click',()=>{
    setInterval(() => {
        let random=Math.floor(Math.random()*colorArry.length);
        document.body.style.backgroundColor=colorArry[random];
        
    }, inputTamrin.value);
}) */



/* inputTamrin.addEventListener('change',()=>{
    
    console.log(inputTamrin.value);
    ms.innerHTML=inputTamrin.value;
    
});

btnTamrin.addEventListener('click',()=>{
    setInterval(() => {
        redvalue =Math.floor(Math.random()*255)
        greenvalue =Math.floor(Math.random()*255)
        bluevalue =Math.floor(Math.random()*255)

        document.body.style.backgroundColor='rgb('+redvalue+','+greenvalue+','+bluevalue+')';
        
    }, inputTamrin.value);

}) */ 
/* پروزه تمرینی جلسه120 */

/* پروزه اب و هواش */






/*
let inputSerachUser=document.getElementById('inputSerach');
let btnSerach=document.getElementById('btnSearch');

let backgrounMain=document.getElementById('backgrond-main');

let backgroundCont=document.getElementById('backgruond-con');

let continerInfo=document.getElementById('continer-sitisInfo');

let infoCity=document.getElementById('citytag');

let infoTemp=document.getElementById('temp');

let infoHumidty=document.getElementById('humidity');

let infoSpead=document.getElementById('spead');

let infoWindDirc=document.getElementById('WindDirction');

let errorContiner=document.getElementById('errorContiner');

let continer=document.getElementById('backgruond-con');

let iconcold=document.getElementById('coldIcon');
let suncold=document.getElementById('sunIcon');
let coludyIcon=document.getElementById('cludyIcon');


let weather=[
    {city:'tehran',description:'wear warm clothes',condition:'Cold',humidity:12,WindSpeed:11,WindDirction:"North"},
    {city:'shiraz',description:'Enjoy',condition:'Sunny',humidity:7,windSpeed:13,WindDirction:"West"},
    {city:'bobol',description:'Bw with me',condition:'Cloudy',humidity:12,windSpeed:15,WindDirction:"East"},
    {city:'saqqez',description:'Wear less clothes',condition:'Hot',humidity:18,windSpeed:20,WindDirction:"North"},
    {city:'tabriz',description:'Enjoy',condition:'Sunny',humidity:19,windSpeed:30,WindDirction:"East"}
]

btnSerach.addEventListener('click',()=>{0

 let receivedUser=inputSerachUser.value.trim();
 let weathermap=weather.find(function(item){
     return item.city===receivedUser;
 })
 /*
 if(weathermap){
    continerInfo.classList.add('show')
    continer.classList.add('show');
    infoTemp.textContent='condition: '+weathermap.condition+" c";
    infoCity.textContent=weathermap.description;
    infoHumidty.textContent='humidity: '+weathermap.humidity;
    infoSpead.textContent='WindSpeed: '+weathermap.windSpeed;
    infoWindDirc.textContent='WindDirction: '+weathermap.WindDirction;
    errorContiner.style.display='none';
 }else if(receivedUser===''){
    errorContiner.textContent='invalid';
    errorContiner.style.color='red';
     errorContiner.style.display='flex';
    
    
 } if(weathermap.condition==="Cold"){
     iconcold.classList.remove('iconClodOff');
 }if(weathermap.condition==="Sunny"){
    suncold.classList.remove('iconClodOff');
 }if(weathermap.condition==='Cloudy'){
    coludyIcon.classList.remove('iconClodOff')
 }
 else{
    iconcold.classList.add('iconClodOff');
 }}); */
