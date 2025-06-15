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

// Contador de acessos invisível usando CountAPI
fetch('https://api.countapi.xyz/hit/fabrizzio-site/visitas')
  .then(res => res.json())
  .then(data => {
    console.log("Contador de visitas (visível apenas no console):", data.value);

    // Mostra no site só se estiver rodando localmente (localhost)
    if (
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1" ||
      location.hostname.includes("fabrizzio") // seu domínio personalizado
    ) {
      const divContador = document.getElementById("contador");
      divContador.style.display = "block";
      divContador.innerText = `Total de acessos: ${data.value}`;
    }
  });


}
