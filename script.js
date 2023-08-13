const convertTemp = () =>{

    const inputTemp = document.querySelector('#temp').value;

    const selected = document.querySelector('#temp_type');
    const optionSelect = temp_type.options[selected.selectedIndex].value;

    // c to f
    const cToF = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // f to c 
    const fToc = (fah) =>{
        let celsius = ((fah -32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if(optionSelect == 'cel'){
        document.querySelector('#result').innerHTML = cToF(inputTemp) +  "&#176; Fahrenheit";
    }
    else{
        document.querySelector('#result').innerHTML = fToc(inputTemp) + "&#176; Celsius";
    }
    
}