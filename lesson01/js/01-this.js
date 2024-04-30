"use strict";
function foo() {
  console.log("foo=>this", this);
}
foo();

const user = {
  tag: "mango",
  showTag() {
    console.log("showTag -> this", this);
  },
};
console.log(user.showTag);
user.showTag();

// контекст метода объекта, но showtag объявлена как внешняя функция
function showTag() {
  console.log("showTag -> this", this);
  console.log("showTag -> this.tag", this.tag);
}

// showTag();//покажет опшибку

const mango = {
  tag: "mango",
};
mango.showUserTag = showTag;
console.log("mango", mango);

mango.showUserTag();

// вызов без контекста, но showtag объявлена как метод объекта
const poly = {
  tag: "Poly",

  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
  addEmail(userEmail = "") {
    if (userEmail.includes("@")) {
      this.email = userEmail;
    }
  },
};

const ajax = {
  tag: "ajax",
  addEmail(userEmail = "") {
    if (userEmail.includes("@")) {
      this.email = userEmail;
    }
  },
};

poly.showTag(); //или так внизу
poly.addEmail("example@mail.com");
console.log(poly);
ajax.addEmail("ajax@mail.com");
console.log(ajax);
const ajaxEmail = poly.addEmail;
console.log("outerShowTag:", ajaxEmail);
ajax.addOuterEmail = ajaxEmail;
ajax.addOuterEmail("ajaxNewEmail@mail.com");
console.log(ajax);
console.log("-----------------------------------------------------");

// контекст в callback функциях
const jacob = {
  tag: "jacob",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};
function invokeAction(action) {
  //action-> callback
  console.log(action);
  //   action(); //утратили контекст, будет ошибка
}
invokeAction(jacob.showTag);
