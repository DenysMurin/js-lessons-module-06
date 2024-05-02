/**
 * написать класс Blogger для создания объекта блоггера со следующими свойствами:
 * email - почта, строка
 * age - возраст, число
 * numberofPosts - количество постов, число
 * topics - массим тем, на которых специализируется блоггер
 *
 * класс ожидает один параметр - объект натроек с одноименными свойтсвами
 *
 * добавь метод getInfo()? который возвращает строку Blogger${email}is #{age} years old
 * and has ${numberofPosts} posts
 * добавь метод updatePostCount(value)? который в параметре value принимает количество постов, которые нужно добавить пользователю
 *
 */
class Blogger {
  email = "";
  age = 0;
  numberOfPosts = 0;
  topics = [];
  constructor(params) {
    this.email = params.email;
    this.age = params.age;
    this.numberOfPosts = params.numberOfPosts;
    this.topics = params.topics;
  }
  getInfo() {
    return `Blogge r${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }
  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}
const mango = new Blogger({
  email: "mango@mail.com",
  age: 24,
  numberOfPosts: 28,
  topics: ["tech", "cooking"],
});
console.log(mango);
mango.updatePostCount(5);
console.log(mango.getInfo());
