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
 