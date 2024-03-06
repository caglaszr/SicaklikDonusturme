const celcius = document.getElementById('celcius');
const fahreneit = document.getElementById('fahreneit');
const kelvin = document.getElementById('kelvin');



function calculateTemp(event){
    debugger;
    const currentValue = Number(event.target.value) ;

    switch(event.target.name){
        case 'celcius':
            kelvin.value=(currentValue+273.32).toFixed(2);
            fahreneit.value=(currentValue * 1.8 + 32).toFixed(2);
            break;
        case 'fahreneit':
            celcius.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvin.value = ((currentValue -32) /1.8 + 273.32).toFixed(2);
            break;
        case 'kelvin':
            celcius.value = (currentValue - 273.32).toFixed(2);
            fahreneit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            break;
    }
}