function calcular() {
  // 1. Pegar os valores digitados. Pegando os valores dos campos preenchidos pelo usuário
  const precoEtanol = parseFloat(document.getElementById("precoEtanol").value);
  const precoGasolina = parseFloat(document.getElementById("precoGasolina").value);
  const autonomiaEtanol = parseFloat(document.getElementById("autonomiaEtanol").value);
  const autonomiaGasolina = parseFloat(document.getElementById("autonomiaGasolina").value);
  const distancia = parseFloat(document.getElementById("distancia").value);

  // 2. Verificar se os valores estão válidos. Verificando se todos os campos foram preenchidos corretamente
  if (
    isNaN(precoEtanol) || isNaN(precoGasolina) ||
    isNaN(autonomiaEtanol) || isNaN(autonomiaGasolina) ||
    isNaN(distancia)
  ) {
    document.getElementById("resultado").innerHTML = "Por favor, preencha todos os campos corretamente.";
    return; // encerra a função se algo estiver inválido
  }

  // 3. Cálculo do custo por km. Calculando o custo por km de cada combustível
  const custoPorKmEtanol = precoEtanol / autonomiaEtanol;
  const custoPorKmGasolina = precoGasolina / autonomiaGasolina;

  // 4. Cálculo do total a gastar. Calculando quanto o usuário vai gastar no total com cada combustível
  const totalEtanol = custoPorKmEtanol * distancia;
  const totalGasolina = custoPorKmGasolina * distancia;

  // 5. Cálculo dos litros necessários. Calculando quantos litros serão necessários
  const litrosEtanol = distancia / autonomiaEtanol;
  const litrosGasolina = distancia / autonomiaGasolina;

  // 6. Decidir qual compensa. Verificando qual combustível compensa mais
  let melhorCombustivel;
  if (totalEtanol < totalGasolina) {
    melhorCombustivel = "Etanol";
  } else if (totalGasolina < totalEtanol) {
    melhorCombustivel = "Gasolina";
  } else {
    melhorCombustivel = "Ambos têm o mesmo custo";
  }

  // 7. Mostrar resultado. Mostrando o resultado final para o usuário
  document.getElementById("resultado").innerHTML = `
    <p><strong>Melhor opção:</strong> ${melhorCombustivel}</p>
    <p>Etanol: ${litrosEtanol.toFixed(2)} litros - R$ ${totalEtanol.toFixed(2)}</p>
    <p>Gasolina: ${litrosGasolina.toFixed(2)} litros - R$ ${totalGasolina.toFixed(2)}</p>
  `;
}
