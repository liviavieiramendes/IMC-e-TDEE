function imc(){
    const peso = document.getElementById("peso").value
    const al = document.getElementById("altura").value

    //Validar os dados inseridos
    if (peso.trim().length == 0 || al.trim().length == 0){
        window.alert('Por favor, preencha os dados corretamente.')
        peso.value = ""
        altu.value = ""
        return
    }
    
    const altura = al / 100; // Converter cm para metros
    const i = peso / (altura * altura);
    const imc = i.toFixed(2); // Arredonda para 2 casas decimais

    resultado.innerHTML = `Seu IMC é ${imc}`;

    if (i < 18.5) {
        resto.innerHTML = `Você está abaixo do peso`;
    } else if (i <= 24.9) {
        resto.innerHTML = `Você está com peso normal`;
    } else if (i <= 29.9) {
        resto.innerHTML = `Você está com sobrepeso`;
    } else if (i <= 34.9) {
        resto.innerHTML = `Você está em obesidade grau 1`;
    } else if (i <= 39.9) {
        resto.innerHTML = `Você está em obesidade grau 2`;
    } else {
        resto.innerHTML = `Você está em obesidade grau 3`;
    }
}