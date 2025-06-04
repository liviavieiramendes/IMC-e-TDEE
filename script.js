function imc(){
    const peso = document.getElementById("peso").value
    const al = document.getElementById("altura").value
    const resto = document.getElementById("resto")
    const resultado = document.getElementById("resultado")

    //Validar os dados inseridos
    if ( !peso || !al || peso < 0 || al < 0){
        window.alert('Por favor, preencha os dados corretamente.')
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
