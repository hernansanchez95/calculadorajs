document.getElementById("n1").addEventListener("click", n1);
document.getElementById("n2").addEventListener("click", n2);
document.getElementById("n3").addEventListener("click", n3);
document.getElementById("n4").addEventListener("click", n4);
document.getElementById("n5").addEventListener("click", n5);
document.getElementById("n6").addEventListener("click", n6);
document.getElementById("n7").addEventListener("click", n7);
document.getElementById("n8").addEventListener("click", n8);
document.getElementById("n9").addEventListener("click", n9);
document.getElementById("n0").addEventListener("click", n0);
document.getElementById("suma").addEventListener("click", o1);
document.getElementById("resta").addEventListener("click", o2);
document.getElementById("mult").addEventListener("click", o3);
document.getElementById("divi").addEventListener("click", o4);
document.getElementById("igual").addEventListener("click", mostrarResultado);

function n1() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n1").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function n2() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n2").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function n3() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n3").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function n4() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n4").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function n5() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n5").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function n6() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n6").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function n7() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n7").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function n8() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n8").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function n9() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n9").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function n0() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n0").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function o1() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("suma").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function o2() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("resta").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function o3() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("mult").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function o4() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("divi").innerHTML;
    document.getElementById("resultado").innerHTML = actual + sumado
}

function mostrarResultado() {
    let actual = document.getElementById('resultado').innerHTML;
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
	let divi = actual.indexOf("÷");
	let mult = actual.indexOf("x");
	if (suma !== -1) {
		arr = actual.split("+",2);
		res = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;
	} else if (resta !== -1) {
		arr = actual.split("-",2);
		res = arr[0] - arr[1];
		document.getElementById("resultado").innerHTML = res;
	} else if (divi !== -1) {
		arr = actual.split("&divide;",2);
		res = arr[0] / arr[1];
		document.getElementById("resultado").innerHTML = res;
	} else if (mult !== -1) {
		arr = actual.split("x",2);
		res = arr[0] * arr[1];
		document.getElementById("resultado").innerHTML = res;
	}
}