var programmingLanguages = ["Javascript", "PHP", "Python"];

console.log(programmingLanguages);

var numbers = [1,2,3,4,,5,6,7,8,9,10];

console.log(numbers);

console.log(programmingLanguages[1]);



programmingLanguages.push("Java");

numbers.push(11);

document.write(programmingLanguages);

document.write(numbers);



numbers.pop();

console.log(numbers);



programmingLanguages.unshift("C#");

console.log(programmingLanguages);



programmingLanguages.shift();

console.log(programmingLanguages);



programmingLanguages.splice(1, 2, 'Ruby');

console.log(programmingLanguages);


var students = ["Deoni" , "Syari" , "Rigoni" , "Drini", "Edlira"]

var [s1, s2, s3, s4, s5] = students

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);



var qytete = [ 'Tokio', 'Stamboll', "Londër", "Paris", "Roma", "Dudai", "Rio de Janeiro", "Singapor", "Nju Jork", "Tirana", "Durrësi", "Shkodra", "Vlora", "Fieri", "Korça", "Kavaja", "Lezha", "Laçi", "Kukësi", "Saranda" ];

    var [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 , q11 , q12 , q13 , q14 , q15 , q16 , q17 , q18 , q19 , q20] = qytete


console.log(q1);
console.log(q2);
console.log(q3);
console.log(q4);
console.log(q5);
console.log(q6);
console.log(q7);
console.log(q8);
console.log(q9);
console.log(q10);
console.log(q11);
console.log(q12);
console.log(q13);
console.log(q14);
console.log(q15);
console.log(q16);
console.log(q17);
console.log(q18);
console.log(q19);
console.log(q20);

