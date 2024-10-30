let firstName = {
  name: document.getElementById("firstName"),
  small: document.getElementById("small-name"),
  img: document.getElementById("img-name"),
};

let lastName = {
  name: document.getElementById("lastName").value,
  small: document.getElementById("small-last"),
  img: document.getElementById("img-last"),
};

let age = {
  age: document.getElementById("age").value,
  small: document.getElementById("small-age"),
  img: document.getElementById("img-age"),
};

let email = {
  email: document.getElementById("email").value,
  small: document.getElementById("small-email"),
  img: document.getElementById("img-email"),
};

let user = {
  user: document.getElementById("user").value,
  smallMax: document.getElementById("small-user-Max"),
  smallMin: document.getElementById("small-user-Min"),
  smallCar: document.getElementById("small-user-@"),
  imgMax: document.getElementById("img-user-Max"),
  imgMin: document.getElementById("img-user-Min"),
  imgCar: document.getElementById("img-user-@"),
};

let password = {
  password: document.getElementById("password").value,
  smallNumber: document.getElementById("small-password-number"),
  smallCar: document.getElementById("small-password-@"),
  smallMax: document.getElementById("small-password-max"),
  smallMin: document.getElementById("small-password-min"),
  imgNumber: document.getElementById("img-password-number"),
  imgCar: document.getElementById("img-password-@"),
  imgMax: document.getElementById("img-password-max"),
  imgMin: document.getElementById("img-password-min"),
};

let confPassword = {
  confPassword: document.getElementById("confPassword").value,
  small: document.getElementById("small-password-conf"),
  img: document.getElementById("img-password-conf"),
};

// Funçoes
const string = /[^A-Za-z/s]/;
const stringNumber = /[^A-Za-z0-9/s]/;
const stringCar = /[0-9]/;

const checkName = {
  // verificar fist name (apenas  A-z)
  firstName: (valor, id) => {
    if (!string.test(valor) && valor != "" && id === "firstName") {
      firstName.small.style.color = "green";
      firstName.img.src = "/img/check.png";
    } else {
      firstName.small.style.color = "red";
      firstName.img.src = "/img/x.png";
    }
  },

  lastName: (valor, id) => {
    // verificar last Name (Apenas A-Z)
    if (!string.test(valor) && valor != "" && id === "lastName") {
      lastName.small.style.color = "green";
      lastName.img.src = "/img/check.png";
    } else {
      lastName.small.style.color = "red";
      lastName.img.src = "/img/x.png";
    }
  },

  age: (valor, id) => {
    if (valor >= 18) {
      age.small.style.color = "green";
      age.img.src = "/img/check.png";
    } else {
      age.small.style.color = "red";
      age.img.src = "/img/x.png";
    }
  },

  email: (valor, id) => {
    if (valor != "" && id === "email") {
      email.small.style.color = "green";
      email.img.src = "/img/check.png";
    } else {
      email.small.style.color = "red";
      email.img.src = "/img/x.png";
    }
  },

  user: (valor, id) => {
    if (id === "user") {
      if (!stringNumber.test(valor) && valor != "") {
        user.smallCar.style.color = "green";
        user.imgCar.src = "/img/check.png";
        console.log("ok");
      } else {
        user.smallCar.style.color = "red";
        console.log("sda");
        user.imgCar.src = "/img/x.png";
      }
      if (valor.length >= 6 && valor.length <= 12) {
        user.smallMax.style.color = "green";
        user.smallMin.style.color = "green";
        user.imgMax.src = "/img/check.png";
        user.imgMin.src = "/img/check.png";
      } else {
        user.smallMax.style.color = "red";
        user.smallMin.style.color = "red";
        user.imgMax.src = "/img/x.png";
        user.imgMin.src = "/img/x.png";
      }
    }
  },

  password: (valor, id) => {
    if (id === "password") {
      if (stringCar.test(valor) && valor != "") {
        password.smallNumber.style.color = "green";
        password.imgNumber.src = "/img/check.png";
      } else {
        password.smallNumber.style.color = "red";
        password.imgNumber.src = "/img/x.png";
      }

      if (stringNumber.test(valor) && valor != "") {
        password.smallCar.style.color = "green";
        password.imgCar.src = "/img/check.png";
      } else {
        password.smallCar.style.color = "red";
        password.imgCar.src = "/img/x.png";
      }

      if (valor.length >= 4 && valor.length <= 12) {
        password.smallMax.style.color = "green";
        password.smallMin.style.color = "green";
        password.imgMax.src = "/img/check.png";
        password.imgMin.src = "/img/check.png";
      } else {
        password.smallMax.style.color = "red";
        password.smallMin.style.color = "red";
        password.imgMax.src = "/img/x.png";
        password.imgMin.src = "/img/x.png";
      }
    }
    return (password.password = valor);
  },

  confPassword: (valor, id) => {
    if (password.password === valor) {
      confPassword.small.style.color = "green";
      confPassword.img.src = "/img/check.png";
    } else {
      confPassword.small.style.color = "red";
      confPassword.img.src = "/img/x.png";
    }
  },
};
