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


var students [ "Deoni" , "Syari" , "Rigoni" , "Drini", "Edlira"]

var [s1, s2, s3, s4, s5] = students

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);



var qytete [ "Tokio", "Stamboll", "Londër", "Paris", "Roma", "Dudai", "Rio de Janeiro", "Singapor", "Nju Jork", "Tirana", "Durrësi", "Shkodra", "Vlora", "Fieri", "Korça", "Kavaja", "Lezha", "Laçi", "Kukësi", "Saranda" ];

    var [q1, q2, q3, q4, q5, q6, q7, q8, ] = qytete
