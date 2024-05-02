/**
 * написать класс User? который создает объект со свойствами login и email
 * объяви приватные свойства #login и #email/ доступ к ним сделать через геттер и сеттер login и email
 */

class User {
  #login;
  #email;
  construcor(params) {
    this.#login = params.login;
    this.#email = params.email;
  }
  get login() {
    return this.#login;
  }
  set login(newLogin) {
    return (this.#login = newLogin);
  }

  get email() {
    return this.#email;
  }
  set email(newEmail) {
    return (this.#email = newEmail);
  }
}

const mango = new User({
  login: "mango",
  email: "mango@mail.com",
});

// вызываем
console.log(mango.login); //почему то вызывает не имя
mango.login = "mangodoge";
console.log(mango.login);

const poly = new User({
  login: "poly",
  email: "poly@maiil.com",
});

console.log(poly.login); //должен вызывать имя
poly.login = "policutie";
console.log(poly.login);
