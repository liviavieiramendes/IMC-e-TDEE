function tdee() {
    const peso = parseFloat(document.getElementById("peso1").value);
    const alturaCm = parseFloat(document.getElementById("altura1").value);
    const idade = parseFloat(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const atividade = document.getElementById("calorias").value;
    const resultado = document.getElementById("result");

    // Validar os dados inseridos
    if (!peso || !alturaCm || !idade || !sexo || !atividade || peso < 0 ||alturaCm < 0 || idade < 0  ) {
        window.alert('Por favor, preencha os campos corretamente.')
        return;
    }

    // Converter altura de cm para metros
    const alturaM = alturaCm / 100;

    let tmb;
    if (sexo === "homem") {
        tmb = 10 * peso + 6.25 * alturaCm - 5 * idade + 5;
    } else {
        tmb = 10 * peso + 6.25 * alturaCm - 5 * idade - 161;
    }

    // Fator de atividade
    const fatores = {
        'sed': 1.2,
        'leve': 1.375,
        'moder': 1.55,
        'muito': 1.725,
        'ext': 1.9
    };
    
    const fator = fatores[atividade] || 1.2; // Caso a atividade não dê certo

    const tdee = tmb * fator;

    resultado.innerHTML = `<p>Seu gasto calórico estimado (TDEE) é de <strong>${Math.round(tdee)}</strong> calorias.</p>`;
}
