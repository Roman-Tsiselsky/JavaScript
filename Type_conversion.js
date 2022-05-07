//строковое преобразование 

let value = true ;
console.log(typeof value);

value = String(value);
console.log(typeof value); 

//числовое преобразование 

let str = 'for Rock and Stone!!';
console.log(typeof str);

let num = Number(str);
console.log(typeof num);

//можно использывать опирации вычесления не применяя к числу

console.log( '6' / '2');
console.log( '6' * '2');
console.log( '6' - '2');

//но + просто складывает строки 
console.log( '6' + '2');

//правила числового преобразования 

console.log( Number('212'));
console.log( Number('212x'));
console.log( Number(true));
console.log( Number(false));

// логическое преобразование 

console.log( Boolean('Salut'));
console.log( Boolean(''));
console.log( Boolean('123'));
console.log( Boolean('0'));
console.log( Boolean(' '));
console.log( Boolean(-1));
