/**классы
 * объявление классов
 * конструктор классов
 * методы классов
 * прототип экземпляра
 * приватные свойства
 * герреты и сеттеры
 * статические свойства
 */

// нижесделали функцию, где по шаблону можем штамповать объекты
function User(name, pass) {
  this.name = name;
  this.pass = pass;
}
console.log(User.prototype);
console.log(User);

class Usera {
  name;
  password;
  constructor(name, pass) {
    this.name = name;
    this.password = pass;
  }
}
console.log(User);
//  создадим для него экземпляр по данному шаблону
const ajax = new Usera("ajax", "qwe123");
console.log("ajax:", ajax);
const platon = new Usera("rty", "345");
console.log("platon:", platon);

const manga = new User("manga", "qwe123");
console.log("manga:", manga);
const poli = new User("poli", "123qwe");
console.log("poli:", poli);

// два варианта
const mango = {
  userName: "maNgO",
  userPass: "qwe123",
  showUserName() {
    console.log(this.userName);
  },
};
mango.showUserName();

const poly = {
  userName: "PoLy",
  userPass: "qwe123",
  showUserName() {
    console.log(this.userName);
  },
};
poly.showUserName();
// ! методы класса
class Usar {
  name;
  password;

  constructor(name, pass) {
    this.name = name;
    this.pass = pass;
  }
  getName() {
    return this.name;
  }
}
const ayax = new Usar("ayax", "qwe123");
const res = ayax.getName();
console.log("res:", res);

// !не до конца
