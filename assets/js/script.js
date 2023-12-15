const value1 = document.querySelector(".input1");

const value2 = document.querySelector(".input2");

const res = document.querySelector(".result span");

const ops = document.querySelector(".ops span");

const snl = document.querySelector(".sinal span");

let result = 0;

function sum() {
  if (value1.value == "") {
    alert("Digite um número para valor 1");
  } else if (value2.value == "") {
    alert("Digite um número para valor 2");
  } else {
    result = parseInt(value1.value) + parseInt(value2.value);
    res.innerHTML = result;
    ops.innerHTML = "Soma";
    snl.innerHTML = "+";
  }
}

function subtraction() {
  if (value1.value == "") {
    alert("Digite um número para valor 1");
  } else if (value2.value == "") {
    alert("Digite um número para valor 2");
  } else {
    result = parseInt(value1.value) - parseInt(value2.value);
    res.innerHTML = result;
    ops.innerHTML = "Subtração";
    snl.innerHTML = "-";
  }
}

function multiplication() {
  if (value1.value == "") {
    alert("Digite um número para valor 1");
  } else if (value2.value == "") {
    alert("Digite um número para valor 2");
  } else {
    result = parseInt(value1.value) * parseInt(value2.value);
    res.innerHTML = result;
    ops.innerHTML = "Multiplicação";
    snl.innerHTML = "x";
  }
}

function division() {
  if (value1.value == "") {
    alert("Digite um número para valor 1");
  } else if (value2.value == "") {
    alert("Digite um número para valor 2");
  } else {
    result = parseInt(value1.value) / parseInt(value2.value);
    res.innerHTML = result;
    ops.innerHTML = "Divisão";
    snl.innerHTML = "÷";
  }
}

function rest() {
  if (value1.value == "") {
    alert("Digite um número para valor 1");
  } else if (value2.value == "") {
    alert("Digite um número para valor 2");
  } else {
    result = parseInt(value1.value) % parseInt(value2.value);
    res.innerHTML = result;
    ops.innerHTML = "Resto da divisão";
    snl.innerHTML = "%";
  }
}

function exponential() {
  if (value1.value == "") {
    alert("Digite um número para valor 1");
  } else if (value2.value == "") {
    alert("Digite um número para valor 2");
  } else {
    result = parseInt(value1.value) ** parseInt(value2.value);
    res.innerHTML = result;
    ops.innerHTML = "Exponencial (potência)";
    snl.innerHTML = "^";
  }
}
