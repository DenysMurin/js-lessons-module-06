/**
 * напиши класс Storage? которы й создает объекты для руководства складом товаров
 * при вызове отпучать один аргумент - начальный массив товаров и записывать его
 * свойство items
 * добавить методы класса?
 * geItems() - возвращает массив товаров
 * additems(item) - получает новый товар и добавляет его к текущим
 * removeItems(item) - получает товар,и, если он есть - удаляет его из текущих
 */
class Storage {
  constructor(storageCart) {
    this.items = storageCart;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    this.items = this.items.filter((cartItem) => cartItem !== item);
  }
}
const storage = new Storage(["🍅", "🍋", "🍇", "🍑"]);
const items = storage.getItems();
console.table(items);

storage.addItem("🍌");
console.table(storage.items);

storage.removeItem("🍋");
console.table(storage.items);
