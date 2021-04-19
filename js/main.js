alert("Michał życzy smacznej kawusi ale jebać kapusi pozdro 600");
const firstName = "Michał";
const age = 69;
console.log(firstName);
console.log(age);
console.log(`Nazywam się ${firstName} i mam ${age} lat`);

function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  return myNumber * 7;
}
const myResult = calculate(age);
console.log(myResult);





function creatContent(querySelectorConent, content) {
  const element = document.querySelector(querySelectorConent);
  element.innerHTML = content;
}

creatContent(".week-summary__description--js", "Witaj Dupa");

function greet(firstName, age) {
  console.log(`Witaj odwiedzający nazywam się ${firstName} i mam ${age} lat`);
}

greet("Michał", 19);

if ("Java" != "Java") {
  console.log('Java to  Java')
}
const humanOne ={
  name:'Michał',
  age:22,
  address: {
    street: 'Starzyńskiego',
    city: 'Warszawa'
  }
}

  const humanTwo ={
    name: 'Wiktor',
    age: 23,
    address: humanOne.address
  }

if(humanOne.age>humanTwo.age){
  console.log( humanOne.name `jest starszy`)
} else {
  console.log(` humanTwo jest starszy`)
}