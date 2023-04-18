//You manage a grocery store and need to keep track of theinventory of various items. 
//You will use arrays to store the dataand various functions to manipulate and 
//analyze the data. 

//Create an array containing the names of all items in the inventory maximum of 10.

let    kiosk=['bananas','mangoes','oranges','apples','pinapples','lemon',
'grapes','peas','ovacoda'];
console.log(kiosk);
//Create a separate array with the corresponding stock quantities
// of each item maximum of 10.
let itemsquantity=[10,15,20,25,30,13,16,18,29,22];
console.log(itemsquantity);
//Write a function to add a new item to the inventory, updating both arrays.
function addfruits(itemName,quantity){
    if(kiosk.length < 10){
        kiosk.push(itemName);
        itemsquantity.push(quantity);
        console.log(kiosk)
        console.log(itemsquantity)
}
else{
    console.log("kiosk is full")
}
}
addfruits('jango has been added to kiosk by 19',19);


//Write a function to update the stock quantity of an existing item.
// let index=kiosk.indexOf(bananas)
// function updatequantity(quantity){
//     if(index !==-1){
//         itemsquantity[index]=quantity;
//         console.log(itemsquantity);
//         console.log(kiosk)
//     }
//     else{
//         console.log("frut not found")
//     }

// }
//Write a function to calculate the total number of items in the inventory.
function totalitems() {
    let total = 0;
    for (let quantity of itemsquantity) {
      total += quantity;
    }
    return total;
  }
  console.log(totalitems());

//Write a function to find the item with the lowest stock quantity.
// function lowestitems(){
//   let lowestitems=lowestitems.length;
//   for(let quantity,itemname){
//     lowestitems +=itemname
//   }
//   return lowestitem
// }




