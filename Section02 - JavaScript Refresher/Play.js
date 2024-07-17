// #13 = Example for a function

var name = 'Max';
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));


// # 15 - Functions

// anonyms Function 

const func1 = function (userName, userAge, userHasHobby) {
    return (
      'Name is ' +
      userName +
      ', age is ' +
      userAge +
      ' and the user has hobbies: ' +
      userHasHobby
    );
  }
  console.log(summarizeUser(name, age, hasHobbies));


  // arrow Function 

  const func2 =  (userName, userAge, userHasHobby) => {
    return (
      'Name is ' +
      userName +
      ', age is ' +
      userAge +
      ' and the user has hobbies: ' +
      userHasHobby
    );
  }
  console.log(summarizeUser(name, age, hasHobbies));

  // small arrow Functions - One line 

  const func3 = (a,b) => a+b




  // #16 - Working with Objects, Properties and Methods

  const person = {
    name: 'Max',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  person.greet();


  // #17 - Working with Arrays and Array Methods

  const person2 = {
    name: 'Max',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  const hobbies = ['Sports', 'Cooking'];
  // for (let hobby of hobbies) {
  //     console.log(hobby);
  // }
  console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
  console.log(hobbies);

  // # 18 - Arrays, Objects and Reference Types

  const person3 = {
    name: 'Max',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  const hobbies3 = ['Sports', 'Cooking'];
hobbies.push('Programming');
console.log(hobbies3);

// # 19 - Understanding the Spread and Rest Operators

const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));

// # 20 - Destructuring

const person4 = {
    name: 'Max',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  const printName = ({ name }) => {
    console.log(name);
  };
  
  printName(person);
  
  const { name, age } = person;
  console.log(name, age);
  
  
  const hobbies4 = ['Sports', 'Cooking'];
  const [hobby1, hobby2] = hobbies;
  console.log(hobby1, hobby2);

  // # 21 - Asyns Code and Promises

  // Callback 

  const fetchData = callback => {
      setTimeout(() => {
        callback('Done!');
      }, 1500);
  };
  
  setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
      })
  }, 2000);
  
  console.log('Hello!');
  console.log('Hi!');
  
// answer Order => Hello, Hi, Timer is Done, Done
  
// Promises

const fetchData2 = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Done!');
      }, 1500);
    });
    return promise;
  };
  
  setTimeout(() => {
    console.log('Timer is done!');
    fetchData2()
      .then(text => {
        console.log(text);
        return fetchData2();
      })
      .then(text2 => {
        console.log(text2);
      });
  }, 2000);
  
  console.log('Hello!');
  console.log('Hi!');


  // answer Order => Hello, Hi, Timer is Done, Done, Done



  