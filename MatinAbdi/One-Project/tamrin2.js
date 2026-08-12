/* let detaUser={
    select:[],
    Tehran:['tehrn','abali','shahryar','pakdash','rodehen'],
    shiraz:['shiraz','abade','jahrom','lar','fasa'],
    esfahan:['semirom','natanz','jahrom','shahrereza','jadegan'],
    kurdstan:['sanandaj','saqqez','bane','saheb','dorgan'] 
}
let receivedProvince=document.getElementById('province');
let receivedCitis=document.getElementById('citis');

Object.keys(detaUser).forEach(function(province){
    let option=document.createElement('option');
    option.value=province;
    option.innerHTML=province;
    receivedProvince.append(option);
})
   
receivedProvince.addEventListener('change',(e)=>{
   let rec =e.target.value;
   let selectuser=detaUser[rec];
   receivedCitis.innerHTML='';

  if(selectuser){
     selectuser.forEach(function(data){
    let croption=document.createElement('option');
    croption.innerHTML=data;
    croption.value=data;
    receivedCitis.append(croption);
   })}
 if(receivedProvince.value==='select'){
    let newoption=document.createElement('option');
    newoption.value='m';
    newoption.innerHTML='pleas enter ';
    receivedCitis.append(newoption)
}}) */

let detaUser={
    select:[],
    Tehran:['tehrn','abali','shahryar','pakdash','rodehen'],
    shiraz:['shiraz','abade','jahrom','lar','fasa'],
    esfahan:['semirom','natanz','jahrom','shahrereza','jadegan'],
    kurdstan:['sanandaj','saqqez','bane','saheb','dorgan'] 
}
let receivedProvince=document.getElementById('province');
let receivedCitis=document.getElementById('citis');
Object.keys(detaUser).forEach(function(province){
    let newoption=document.createElement('option');
    newoption.value=province;
    newoption.innerHTML=province;
    receivedProvince.append(newoption);

})

receivedProvince.addEventListener('change',(e)=>{
    let recuser=e.target.value;
    let selectuser=detaUser[recuser];
    receivedCitis.innerHTML='';
    if(selectuser){
        selectuser.forEach(function(deta){
            let newoption1=document.createElement('option');
            newoption1.value=deta;
            newoption1.innerHTML=deta;
            receivedCitis.append(newoption1)
        })

        
    }if(receivedProvince.value==='select'){
        let newoption2=document.createElement('option');
        newoption2.value='i';
        newoption2.innerHTML='plese enter your city';
        receivedCitis.append(newoption2)
    }
})













