console.log("----------------tasks-------------------");
function foo() {
  console.log("foo->this", this);
}
foo(); //какой тут this?

console.log("-----------------------------------");
const book = {
  title: "react for beginners",
  showThis() {
    console.log("showThis-> this", this);
  },
  showTitle() {
    console.log("showTitle -> this.title", this.title);
  },
};
book.showThis();

const outerShowThis = book.showThis;
outerShowThis();

const outerShowTitle = book.showTitle;
// outerShowTitle();//будет ошибка
console.log("-----------------------------------");
// напишите метод calcTotalPrice(stoneName), который принимает название камня
// и расчитывает и возвращает общую стоимость камней с таким имененм из свойства stones

const chopShop = {
  stones: [
    { name: "emerald", price: 1300, quantity: 4 },
    { name: "diamond", price: 2700, quantity: 3 },
    { name: "sapphire", price: 1400, quantity: 7 },
    { name: "ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    console.log(stoneName);
    const stone = this.stones.find((stone) => stone.name === stoneName);
    console.log(stone);
    if (stone) {
      return stone.price * stone.quantity;
    }
    return `stone with name ${stoneName} is not found`;
  },
};
console.log(chopShop.calcTotalPrice("emerald"));
