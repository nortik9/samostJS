// Первое задание:

// Имеется класс «Exam», позволяющий создавать объекты со следующими характеристиками: фамилия и имя студента, оценка по БД, оценка по JS и оценка по PHP. 
// Создайте объект этого класса

// let firstStudent = new Exam("Самигулов", "Денис", 4, 3, 4);

// Второе задание:

// Создание класса

// Первый способ через синтаксический сахар

class Toy {
    constructor(name, age = (3, 6, 8, 10, 12), rub, kop, madeIn) {
        this.name = name;
        this.age = age;
        this.rub = rub;
        this.kop = kop;
        this.madeIn = madeIn;
    }
    toString() {
        return `Название: ${this.name}, страна производитель: ${this.madeIn}, цена: ${this.price}, рекомендуемый возраст: ${this.age}`
    }
    get fullPrice() {
        return `Рубли: ${this.rub}, копейки: ${this.kop}`
    }
}

// Второй способ через функцию-конструктор

// function Toy(name, age = (3,6,8,10,12), rub, kop, madeIn) {
//     this.name = name;
//     this.age = age;
//     this.rub = rub;
//     this.kop = kop;
//     this.madeIn = madeIn;
// }

// // Оформление методов

// const toyMethods = {
//     toString() {
//         return `Название: ${this.name}, страна производитель: ${this.madeIn}, цена: ${this.price}, рекомендуемый возраст: ${this.age}`
//     },
// }

// // Присоединение методов к прототипу

// Object.assign(Toy.prototype, toyMethods);

// // Определение свойств для прототипа

// Object.defineProperty(Toy.prototype, 'fullPrice', {
//     get() {
//         return `Рубли: ${this.rub}, копейки: ${this.kop}`
//     }
// })

// Работа с объектами класса

// Создание массива с 4 элементами

let toys = [
    new Toy("Плюшевый заяц", "3", 200, 50, "Россия"),
    new Toy("Мыльные пузыри", "6", 15, 49, "США"),
    new Toy("Пистолетик с мягкими пульками", "8", 150, 0, "Китай"),
    new Toy("Подушка пердушка", "10", 50, 50, "Франция"),
];

// Сортировка элементов массива

toys.sort((a,b) => b.kop - a.kop);
toys.sort((a,b) => b.rub - a.rub);

console.table(toys)

// Вывод информации об игрушках для выбранного возраста

document.querySelector(".btnAge").addEventListener("click", () =>{
    let ageRestriction = document.querySelector(".ageRestriction")

    toys.forEach(item => {
        if(ageRestriction.value == item.age) {
            console.log(item)
        }
    })
})

// Вывод информации о самых дешевых игрушках с указанием их количества

let min = 10000;
toys.forEach(item =>{
    if(item.rub < min) {
        min = item.rub;
    }
})
let min2 = 1000;
toys.forEach(item =>{
    if(item.rub < min2) {
        min2 = item.name;
    }
})
console.log(`Самая низкая цена на товар - ${min} рублей. Товар с этой ценой - ${min2}`)