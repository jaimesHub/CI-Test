import { Park } from "./Park.js";
import { Museum } from "./Museum.js";
import { Restaurant } from "./Restaurant.js";
import { Destination } from "./Destination.js";

class DestinationsList {
    destinations;
    dateModified;

    constructor() {
        this.destinations = [];
        this.dateModified = new Date().toISOString();
    }

    addDestination(destination) {
        if (destination instanceof Park || destination instanceof Museum || destination instanceof Restaurant) {
            this.destinations.push(destination);
        }
    }

    findDestination(name) {
        let resultFind = [];
        for (let i = 0; i < this.destinations.length; i++) {
            if (this.destinations[i].name === name) {
                resultFind.push(this.destinations[i]);
            }
        }
        return resultFind;
    }

    get totalPrice() {
        let total = 0;

        for (let i = 0; i < this.destinations.length; i++) {
            // total += this.destinations[i].price;
            if (this.destinations[i] instanceof Park || this.destinations[i] instanceof Museum) {
                total += this.destinations[i].ticketPrice;
            } else if (this.destinations[i] instanceof Restaurant) {
                total += this.destinations[i].buffetPrice;
            }
        }

        return total;
    }

}

export { DestinationsList };