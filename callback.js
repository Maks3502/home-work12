// function makepizza(){
//     return "your pizza is being prepared, plse wait"
// }
// const result = makepizza("") ;
// const pointer = makepizza;

// завдання 2

// function deliverPizza(pizzaName) {

//     return `Delivering ${pizzaName} pizza.`;

//   }

//   function makePizza(pizzaName) {

//     return `Pizza ${pizzaName} is being prepared, please wait...`;

//   }

//   // Chande code below this line

//   function makeMessage(pizzaName, callback) {

//     return callback (pizzaName) ;

//   }
//   завдання 3
function makePizza(pizzaName, callback) {

    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);

    callback(pizzaName);

  }

  makePizza("Royal Grand", function deliverPizza(pizzaName) {

    console.log(`Delivering pizza ${pizzaName}.`);

  });

  function eatPizza (pizzaName){
    const eatingPizza = "fourchese"
  }

  // Change code below this line

  makePizza("Ultracheese", eatPizza);
  
  makePizza("Ultracheese", function eatPizza(pizzaName){
    console.log(`Eating pizza ${pizzaName}`)
  } )


//   завдання 5 
// // const butonRef = document.querySelector(".jsbtn");
// const buttonRef = document.querySelector("[data-button]");
// buttonRef.addEventListener("click", showInfo);
// function showInfo(){
//     console.log("клик по кнопци")
// }



//   завдання 6
const applyCallbackToEachElement = function (arr, callback) {

   

}
const squareCallback = function(arr) {
    for(let i = 0; i < arr.lenght; i++){
        callback = arr[i] * arr[i]
    }
}

const arr = [1, 2, 3, 4, 5];



const result = applyCallbackToEachElement(arr, squareCallback);

applyCallbackToEachElement(arr,squareCallback)

console.log(result); // [1, 4, 9, 16, 25]