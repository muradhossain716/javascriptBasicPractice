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
  console.log(openingHours);
 console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);