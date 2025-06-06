function tdee() {
    const peso = parseFloat(document.getElementById("peso1").value);
    const alturaCm = parseFloat(document.getElementById("altura1").value);
    const idade = parseFloat(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const atividade = document.getElementById("calorias").value;
    const resultado = document.getElementById("result");

    // Validar infos inseridas
    if (isNaN(peso) || isNaN(alturaCm) || isNaN(idade) || peso <= 0 || alturaCm <= 0 || idade <= 0 || !sexo || !atividade) {
        resultado.innerHTML = "<p style='color:red'>Preencha todos os campos corretamente!</p>";
        return;
    }

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
    
    const fator = fatores[atividade] || 1.2; // Usa 1.2 se atividade for inválida

    const tdee = tmb * fator;

    resultado.innerHTML = `<p>Seu gasto calórico estimado (TDEE) é de <strong>${Math.round(tdee)}</strong> calorias.</p>`;
}
