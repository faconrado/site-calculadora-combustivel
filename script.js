function calcular() {
  // 1. Pegar os valores digitados nos campos
  const precoEtanol = parseFloat(document.getElementById("precoEtanol").value);
  const precoGasolina = parseFloat(document.getElementById("precoGasolina").value);
  const autonomiaEtanol = parseFloat(document.getElementById("autonomiaEtanol").value);
  const autonomiaGasolina = parseFloat(document.getElementById("autonomiaGasolina").value);
  const distancia = parseFloat(document.getElementById("distancia").value);
  
  const elementoResultado = document.getElementById("resultado");

  // 2. Verificar se os valores são válidos
  if (
    isNaN(precoEtanol) || isNaN(precoGasolina) ||
    isNaN(autonomiaEtanol) || isNaN(autonomiaGasolina) ||
    isNaN(distancia)
  ) {
    elementoResultado.textContent = "Por favor, preencha todos os campos corretamente com números.";
    return; 
  }

  // 3. Cálculos de custo por km e totais
  const custoPorKmEtanol = precoEtanol / autonomiaEtanol;
  const custoPorKmGasolina = precoGasolina / autonomiaGasolina;

  const totalEtanol = custoPorKmEtanol * distancia;
  const totalGasolina = custoPorKmGasolina * distancia;

  const litrosEtanol = distancia / autonomiaEtanol;
  const litrosGasolina = distancia / autonomiaGasolina;

  // 4. Decidir qual compensa mais
  let melhorCombustivel;
  if (totalEtanol < totalGasolina) {
    melhorCombustivel = "Etanol";
  } else if (totalGasolina < totalEtanol) {
    melhorCombustivel = "Gasolina";
  } else {
    melhorCombustivel = "Ambos têm o mesmo custo";
  }

  // 5. EXIBIR O RESULTADO NA TELA (O que faltava)
  elementoResultado.innerHTML = `
    <strong>Recomendação: ${melhorCombustivel}</strong><br><br>
    Distância informada: ${distancia} km<br>
    <strong>Gasto com Etanol:</strong> R$ ${totalEtanol.toFixed(2)} (${litrosEtanol.toFixed(1)}L)<br>
    <strong>Gasto com Gasolina:</strong> R$ ${totalGasolina.toFixed(2)} (${litrosGasolina.toFixed(1)}L)
  `;
}
