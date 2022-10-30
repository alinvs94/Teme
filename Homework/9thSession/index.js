// 1

const array1 = ['a', 't','s'];

const sortFunction = () => {
   const mapArray = array1.map(data => {
      return data
})
   const reverseArray1 = mapArray.reverse();
   document.getElementById('1st').innerHTML='y = ['+reverseArray1+']';
   console.log('Reversed array:', reverseArray1)
};

// 2 

const array2 = [1, 2, 3, 1, 2];

const deleteDoubles = () => {
   const deleteArray = array2.filter((value, index) => array2.indexOf(value) === index)
   document.getElementById('2nd').innerHTML='y = ['+deleteArray+']';
   console.log('Doubles deleted:', deleteArray)
};

// 3

const array3 = [28, 39, 44, 26, 11];

const minMax = () => {
/* const max = Math.max(...array3);
   const min = Math.min(...array3); */

   let max = array3[0];
   let min = array3[0];
   array3.forEach(element => {
      if (element > max) {
         max = element;
      } else if (element < min) {
         min = element;
      }
   })
   document.getElementById('3rd').innerHTML='Min: '+min+' Max: '+max;
   console.log('Min:', min,'Max:', max);
}

// 4

const array4 = ["Adi", "Andrei", "Maria", "Ioana"];

const removeName = () => {
   const removeArray = array4.filter(data => (data !== 'Adi' && 'Ioana'));
   document.getElementById("4th-1").innerHTML= 'newUsers = ['+removeArray+']';
   console.log('Removed an user:',removeArray);
}

// 5

const addName = () => {
   const addArray = array4.map(data => {return data})
   addArray.unshift('Vlad');
   document.getElementById("4th-2").innerHTML= 'newUsers = ['+addArray+']';
   console.log('Added an user:',addArray);
}

// 6

const copyArray = () => {
   const mapCopy = array4.map(data => {return data})
   const sliceCopy = array4.slice()
   document.getElementById("4th-3").innerHTML= 'mapCopy = ['+mapCopy+'] <br>' + 'sliceCopy = ['+sliceCopy+']';
   console.log('Map copy:',mapCopy, '\nSlice copy:', sliceCopy)
}

// 7

const changeName = () => {
   const changeArray = array4.map(data => {return data});
   changeArray.splice(changeArray.indexOf('Maria'),1,'Teodora');
   document.getElementById("4th-4").innerHTML= 'newUsers = ['+changeArray+']';
   console.log('Changed array:',changeArray);
}

let programming = {
   languages: ["JavaScript", "Python", "Ruby"],
   isChallenging: true,
   isRewarding: true,
   difficulty: 8,
};

// 8 - 9 - 10

const addLang = () => {
   programming.languages.push('Java');
   delete programming.difficulty;
   programming.isChallenging = false;
  // const programminString = JSON.stringify(programming);
  // document.getElementById('objLine').innerHTML= programminString;
   console.log(programming);
}

// 11

const oddEvenF = () => {
   const subNumb = document.getElementById('oddEven').value;
   if (subNumb % 2 === 0) {
      console.log('Number', subNumb,'is Even');
   } else if (subNumb % 2 !== 0) {
      console.log('Number', subNumb,'is Odd');
   }
   document.getElementById('oddEven').value='';
}

const funNumber = (number1, number2) => {
   if (number1 > number2) {
      return number1 + ' > ' + number2;
   } else if (number1 < number2) {
      return number1 + ' < ' + number2;
   } else {
      return number1 + ' = ' + number2;
   }
}
const funNumberF = (number1, number2) => {
console.log('Results:', funNumber(2,8), funNumber(9,8), funNumber(8,8))
}

const tFun = (side1, side2, side3) => {
   if (side1 === side2 && side1 === side3 && side2 === side3) {
      return 'Triangle equilacterium\n';
   } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return 'Triangle Isosceles\n';
   } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      return 'Normal Triangle\n';
   }
} 

const tFunB = () => {
console.log('Results:\n', tFun(1,1,1), tFun(1,2,2), tFun(1,2,3))
}