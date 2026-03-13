//igualdad debil//
console.log('5 == 5');
console.log('0 == \"0\"', 0 == "");//da true,aunque no sea el mismo tipo de dato//
//igualdad estricta//
console.log('5 === 5', 5 === 5);    
console.log('0 === \"0\"', 0 === "0");//da false,porque no son del mismo tipo de dato//
//desigualdad debil//
console.log('5 != 3', 5 != 3);
console.log("unidefined != null", undefined != null);//da false,porque ambos representan ausencia de valor//
//desigualdad estricta//
console.log('5 !== \"5\"', 5 !== "5");//da true,porque no son del mismo tipo de dato//  
console.log("unidefined === null", undefined === null);//da false,porque son del mismo tipo de dato//
//mayor que >//
console.log('7 > 4', 7 > 4);
console.log('3 > 8', 3 > 8);
//menor que <//
console.log('1 < 6', 1 < 6);
console.log('9 < 1', 9 < 1);
//mayor o igual que >//
console.log('5 >= 5', 5 >= 5);
console.log('2 >= 7', 2 >= 7);
//menor o igual que <=//
console.log('4 <= 9', 4 <= 9);
console.log('8 <= 3', 8 <= 3);