
Модуль 7. Объекты

/* Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи 
и значения только собственных свойств. Данная функция не должна возвращать значение. */
const user = {
  name: 'Joe',
  surname: 'Appaloosa',
  age: 30,
}
function func(user) {
  for (let key in user) {
      if (user.hasOwnProperty(key)){
          console.log(key); //ключи
          console.log (user[key]); //значения ключей
        }            
  }
}
func(user);

/* Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false. */

const user = {
  name: 'Joe',
  surname: 'Appaloosa',
  age: 30,
}
const str = 'name';

function func(a, b){
  if ('name' in user){
    console.log (true);
  } else {
    console.log (false);
  }
}
func(str, user);

/* Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа. */

function func() {
  const obj = Object.create();
}


/* Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку.
Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает. */
/*   */

function Electronic(name, power) {
  this.name = name,
  this.power = power,
  this.OffOn = false
}

Electronic.prototype.on = function() {
  console.log(`The ${this.name} is on`);
  this.OffOn = true;
};

Electronic.prototype.off = function() {
  console.log(`The ${this.name} is off`);
  this.OffOn = false;
};

Electronic.prototype.sum = function() {
  if (this.OffOn) return this.power;
  else return 0;
}

const lamp = new Electronic('Lamp', 300);
const computer = new Electronic('Computer', 500);

lamp.on();
computer.off();

console.log(`Sum = ${lamp.sum() + computer.sum()} w`);


/* Задание 5.
Переписать консольное приложение из предыдущего юнита на классы. */

class Electronic {
  constructor(name, power) {
      this.name = name;
      this.power = power;
      this.OffOn = false;
  }

  on() {
      console.log(`The ${this.name} is on`);
      this.OffOn = true;
  }

  off() {
      console.log(`The ${this.name} is off`);
      this.OffOn = false;
  }

  sum() {
      if (this.OffOn) return this.power;
      else return 0;
  }
}

const lamp = new Electronic('Lamp', 300);
const computer = new Electronic('Computer', 500);

lamp.on();
computer.off();

console.log(`Sum = ${lamp.sum() + computer.sum()} w`);
