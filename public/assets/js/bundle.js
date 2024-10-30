/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var nome = {
  name: document.getElementById("name"),
  small: document.getElementById("small-name"),
  img: document.getElementById("img-name")
};
var lastName = {
  lastName: document.getElementById("lastName").value,
  smallLast: document.getElementById("small-last"),
  imgLast: document.getElementById("img-last")
};
var age = {
  age: document.getElementById("age").value,
  small: document.getElementById("small-age"),
  img: document.getElementById("img-age")
};
var email = {
  email: document.getElementById("email").value,
  small: document.getElementById("small-email"),
  img: document.getElementById("img-email")
};
var user = {
  user: document.getElementById("user").value,
  smallMax: document.getElementById("small-user-Max"),
  smallMin: document.getElementById("small-user-Min"),
  smallCar: document.getElementById("small-user-@"),
  imgMax: document.getElementById("img-user-Max"),
  imgMin: document.getElementById("img-user-Min"),
  imgCar: document.getElementById("img-user-@")
};
var password = {
  password: document.getElementById("password").value,
  smallNumber: document.getElementById("small-password-number"),
  smallCar: document.getElementById("small-password-@"),
  smallMax: document.getElementById("small-password-max"),
  smallMin: document.getElementById("small-password-min"),
  imgNumber: document.getElementById("img-password-number"),
  imgCar: document.getElementById("img-password-@"),
  imgMax: document.getElementById("img-password-max"),
  imgMin: document.getElementById("img-password-min")
};
var confPassword = {
  confPassword: document.getElementById("confPassword").value,
  small: document.getElementById("small-password-conf").value,
  img: document.getElementById("img-password-conf").value
};

// Funçoes
var string = /[^A-Za-z/s]/;
var stringNumber = /[^A-Za-z0-9/s]/;
function checkName(valor) {
  if (!string.test(valor.name.value)) {
    valor.small.style.color = "green";
    valor.img.src = "/img/check.png";
  } else {
    valor.small.style.color = "red";
    valor.img.src = "/img/x.png";
  }
}
/******/ })()
;
//# sourceMappingURL=bundle.js.map