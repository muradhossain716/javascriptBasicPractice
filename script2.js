// const book=function securebook(){
//     let count=0;
//     return function book2(){
//         count++;
//         console.log(count);
        
//     }
// }
// const booker=book()
// book()
// const secureBooking = function () {
//     let passengerCount = 0;
  
//     return function() {
//       passengerCount++;
//       console.log(`${passengerCount} passengers`);
//     };
//   };
  
//   secureBooking();
  
 const anonymous=function a(){
    
     let count=0;
     return function b(){
         count++;
         console.log(count)
        
     }
    }
 const fb=anonymous();
 fb()
 fb()
 const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
 const openingHours = {
    'thu': {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
 console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);