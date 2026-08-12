/* choices*/
    let jstemPeratureInput=document.getElementById('temPeratureInput');
        let jstemperstureOutput=document.getElementById('temperstureOutput');
           let jsuserInputReceived=document.getElementById('userInputReceived');

                let jsfinalTempForTheUserh1=document.getElementById('finalTempForTheUserh1');
            let jsbtnConvert=document.getElementById('btnConvert');
        let jsbtnRest=document.getElementById('btnRest');
    let areey=['fahrenheit', 'celsius', 'kelvin'];

    areey.forEach(function(temp){
    let newoptionin=document.createElement('option');
    newoptionin.value=temp;
    newoptionin.innerHTML=temp;
    jstemPeratureInput.append(newoptionin);
    let newoption=document.createElement('option');
    newoption.value=temp;
    newoption.innerHTML=temp;
    jstemperstureOutput.append(newoption);})

    function performConversion(){
    let inputval1=jsuserInputReceived.value;
        let uonit2=jstemperstureOutput.value;
            let uonit1=jstemPeratureInput.value;
                let inputcgngeUser=Number(inputval1);

    if(inputval1===''||isNaN(inputcgngeUser)){
    jsfinalTempForTheUserh1.textContent='عدد وارد کنید';
    return;}

    let fainaltemp;
        if(uonit1==='fahrenheit' && uonit2==='celsius'){
            fainaltemp=(inputcgngeUser-32)/1.8;
            jsfinalTempForTheUserh1.textContent='F'+inputcgngeUser+":"+'C'+fainaltemp.toFixed(2);
        }else if(uonit1==='fahrenheit'&&uonit2==='kelvin'){
            fainaltemp=inputcgngeUser*459.67;
            jsfinalTempForTheUserh1.textContent='F '+inputcgngeUser+" : "+' K'+fainaltemp.toFixed(2);
        }else if(uonit1==='celsius' && uonit2==='fahrenheit'){
            fainaltemp=inputcgngeUser*1.8+32;
            jsfinalTempForTheUserh1.textContent='C'+inputcgngeUser+":"+'F'+fainaltemp.toFixed(2);
        }else if(uonit1==='celsius' && uonit2==='kelvin'){
            fainaltemp=inputcgngeUser+273.15;
            jsfinalTempForTheUserh1.textContent='C'+inputcgngeUser+":"+'K'+fainaltemp.toFixed(2);
        }else if(uonit1==='kelvin' && uonit2==='fahrenheit'){
            fainaltemp=inputcgngeUser*1.8-459.67;
            jsfinalTempForTheUserh1.textContent='K'+inputcgngeUser+":"+'F'+fainaltemp.toFixed(2);
        }else if(uonit1==='kelvin' && uonit2==='celsius'){
            fainaltemp=inputcgngeUser-273.15;
            jsfinalTempForTheUserh1.textContent='K'+inputcgngeUser+":"+'C'+fainaltemp.toFixed(2);
        }
    }
    function reset(){
    jsfinalTempForTheUserh1.innerHTML='';
    jsuserInputReceived.value='';}
    jsbtnConvert.addEventListener('click',performConversion);
    jsbtnRest.addEventListener('click',reset);
    jstemPeratureInput.addEventListener('change',performConversion)










