'use strict'

//Задание 1: Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.
let tc = prompt('Введите температуру в градусах по Цельсию');
let tf = (9/5)*tc+32;
alert ('Температура по Фарингейту равна '+ tf + ' градусов.');

//Задание 2: Объявить две переменные: admin и name. Записать в name строку "Василий". Скопировать значение из name в admin. Вывести в консоль переменную admin (должно вывести "Василий").

let name = 'Василий';
let admin = name;
console.log(admin);

//Задание 3: Вывести в консоль значения выражений и объяснить почему получились такие значения используя комментарии к каждому выражению:

let a = 10+10+"10";
console.log(a);
//="2010" - вычисление по порядку: первые 2 числа - это числа, поэтому они сложились математически(10+10=20), третье число указано в кавычках, значит это строка, значит она просто присоединяется (приклеивается) к предыдущим операндам. Строковое сложение в приоритете над математическим, поэтому в результате у нас тип строка.
let b = 10+"10"+10;
console.log(b);
//="101010" - вычисление по порядку: строковое сложение в приоритете над математическим сложением, поэтому мы видим только объединение(склеивание), тип Строка.
let c = 10+10 + +"10";
console.log(c);
// =30 - первые 2 числа - это числа, поэтому они сложилиcь математически (10+10=20), третье число строка, но при этом перед ним стоит +, а значит это приведение строки в число, поэтому +"10" равнозначно числу 10 -> 20+10=30 (тип число)
let d = 10 / -"";
console.log(d);
//=-Infinity, -"" приведение строки в число - превращается в -0. (в отладчике -infinity(-бесконечность))
let e = 10 / +"2,5";
console.log(e);
//=NaN -  + перед строкой - это приведение строки в число, но т.к. там запятая, а дробная часть в js отделяется точкой, выходит NaN (not a number - не число), определить невозможно, все вычисления с Nan дают результат NaN.
