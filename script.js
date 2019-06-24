let num = document.querySelector('input#numero');
let lista = document.querySelector('Select#lista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
	if (Number(n) >= 1 && Number(n) <= 100) {
		return true;
	} else {
		return false;
	}
}

// Verifica se o numero ja existe na lista
function inLista(n, l) {
	if (l.indexOf(Number(n)) != -1) {
		return true;
	} else {
		return false;
	}
}

var add = document.getElementById('add');
add.addEventListener('click', addfun);

// Adiciona o numero na lista
function addfun() {
	if (isNumero(num.value) && !inLista(num.value, valores)) {
		valores.push(Number(num.value));

		var opt = document.createElement('option');
		opt.text = `Valor ${num.value} adicionado`;
		lista.appendChild(opt);
		res.innerHTML = '';
	} else {
		window.alert('Valor invalido ou já encontrado na lista');
	}
	num.value = ''; // para limpar o input
	num.focus(); // é como se desse um clique no input
}

// Mostra as respostas em relação a lista
var fim = document.getElementById('fim');
fim.addEventListener('click', fimfun);

function fimfun() {
	if (valores.length == 0) {
		window.alert('Adicione valores antes de finalizar');
	} else {
		let total = valores.length;
		let maior = valores[0];
		let menor = valores[0];
		let soma = 0;
		let media = 0;
		for (let pos in valores) {
			if (valores[pos] > maior) {
				maior = valores[pos];
			}
			if (valores[pos] < menor) {
				menor = valores[pos];
			}
			soma += valores[pos];
		}
		media = soma / total;
		res.innerHTML = '';
		res.innerHTML += `<p>Temos ${total} números cadastrados</p>`;
		res.innerHTML += `<p>O maior valor é ${maior}</p>`;
		res.innerHTML += `<p>O menor valor é ${menor}</p>`;
		res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`;
		res.innerHTML += `<p>A media de todos os valores é ${media}</p>`;
	}
}
