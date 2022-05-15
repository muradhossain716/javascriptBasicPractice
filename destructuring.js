closingPizza={
        f:{
            c:10
        },
        //3.enhaced object literals
       [`${2+2}`]:{
            c:20
        }
    };
    weekday=[fri]
const restaurant={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //2.enhanced object literals
    order(starterIndex,mainIndex){
            return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
         },
    // order:function(starterIndex,mainIndex){
    //     return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    // },
    //1.enhanced object literals
    closingPizza,
    
    // closingPizza:{
    //     f:{
    //         c:10
    //     },
    //     s:{
    //         c:20
    //     }
    // }
    //enhance object literal
    [weekday[0]]:{
        open:12,
        close:22
    },
    sat:{
        open:10,
        close:20
    },
    sun:{
        open:12,
        close:21
    },
    mon:{
        open:10+3,
        close:20
    },
    orderDeliary:function({mainIndex=0, starterIndex=1,address, time='20.00'} ){
        
        console.log(`your order of ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}.`)
    }
}

restaurant.orderDeliary({
    mainIndex:1,
    address:'galipara,omukroad',
    starterIndex:2,
})
////array///
// const [a,b,c]=[1,2,3]
const arr=[1,2,3];
let [a,b,c]=arr;
[a,b]=[b,a];
console.log(a,b)
//a=1 b=2, c=3

//default array
let [main,secondary]=restaurant.categories;
console.log(main,secondary);
//mutating array
[main,secondary]=[secondary,main]
console.log(main,secondary)
let [,,third]=restaurant.categories;
console.log(third)

let [mainDish, secondaryDish]=restaurant.order(2,0);
console.log(`Your order is ${mainDish} with ${secondaryDish}`);

////object destructuring///

// let {fri,mainMenu,sat}=restaurant;
//let {fri:f,mainMenu:m,sat:s}=restaurant;
let {fri:f={},mainMenu:m=[],sat:s={}}=restaurant;
console.log(f,m,s);

//mutating object
let sun='2nd',mon='first';
({sun,mon}=restaurant);
console.log(sun,mon);