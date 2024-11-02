const numero = Number(prompt("Digite um numero"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Raiz quadrada de ${numero} é ${Math.sqrt(numero)}</p>`;
texto.innerHTML = `<p>${numero} é inteiro ${Number.isInteger(numero)}</p>`;
texto.innerHTML = `<p>É NAN : ${Number.NaN(Number.isNaN(numero))}</p>`;
texto.innerHTML = `<p>Arrendondado para baixo ${numero} : ${Math.floor(numero)}`;
texto.innerHTML = `<p>Arrendondado para cima ${numero} : ${Math.ceil(numero)}`;
texto.innerHTML = `<p>Com duas casas decimais${numero.toFixed(2)}}`;


