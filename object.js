"use strict";
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const time=12;
const str='open';
 const openingHours = {
    'thu': {
      str: time,//value hisabe variable dite cile dewa jabe
      close: 22,
    },
    [weekdays[4]]: {
      [str]: 11,//but key hisabe dite cile [] er modhe dite hobe
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
  const restaurant={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
  }
  console.log(openingHours);

  
 console.log(Object.entries(openingHours));
//  [
//     [ 'thu', { str: 12, close: 22 } ],
//     [ 'fri', { open: 11, close: 23 } ],
//     [ 'sat', { open: 0, close: 24 } ]
//   ]
console.log(Object.keys(openingHours))
// [ 'thu', 'fri', 'sat' ]

console.log(Object.values(openingHours))
// [
//     { str: 12, close: 22 },
//     { open: 11, close: 23 },
//     { open: 0, close: 24 }
//   ]
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Map(3) {
//     'thu' => { str: 12, close: 22 },
//     'fri' => { open: 11, close: 23 },
//     'sat' => { open: 0, close: 24 }
//   }