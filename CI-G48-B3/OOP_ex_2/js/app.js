import { Destination } from "./Destination.js";
import { Park } from "./Park.js";
import { Museum } from "./Museum.js";
import { Restaurant } from "./Restaurant.js";
import { DestinationsList } from "./DestinationsList.js";

let destinationsList = new DestinationsList();
console.log(destinationsList);
// add Park
let hanoiPark = new Park("Ha Noi Park", 500000);
// console.log(hanoiPark);
hanoiPark.images = "https://images.unsplash.com/photo-1598602055533-04e934ea2f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
// console.log(hanoiPark.images);

// console.log(hanoiPark.info);
destinationsList.addDestination(hanoiPark);

// add Restaurant
let newRestaurant = new Restaurant("xxx restaurant", 10000000);
newRestaurant.images = "https://images.unsplash.com/photo-1598397271436-1de0cefdf1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
// console.log(newRestaurant.info);
destinationsList.addDestination(newRestaurant);

// add Museum
let newMuseum = new Museum("HaNoi Museum", 5000000);
newMuseum.images = "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
// console.log(newMuseum.info);
destinationsList.addDestination(newMuseum);

// find
console.log("Result: ", destinationsList.findDestination("xxx restaurant"));

// totalPrice
console.log("Total:", destinationsList.totalPrice);