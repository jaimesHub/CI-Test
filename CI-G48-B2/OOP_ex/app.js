class Meal {
    name;
    foods;
    dateModified;

    constructor(name) {
        this.name = name;
        this.foods = [];
        this.dateModified = new Date().toISOString();
    }

    addFood(food) {
        this.foods.push(food);
    }

    calculatePrice() {
        let total = 0;
        for (let i = 0; i < this.foods.length; i++) {
            total += this.foods[i].price;
        }
        return total;
    }

    show() {
        console.log(`* Name: ${this.name}`);
        for (let i = 0; i < this.foods.length; i++) {
            console.log(`
            * Foods: ${this.foods[i].name}
        `);
        }
        console.log(`* Date: ${this.dateModified}`);
    }
}

class VegetableMeal extends Meal {
    constructor(name, foods, dateModified) {
        super(name);
    }

    addFood(vetgetableFood) {
        this.foods.push(vetgetableFood);
    }

    calculatePrice() {
        // down 15% price
        let total = 0;
        for (let i = 0; i < this.foods.length; i++) {
            total += this.foods[i].price;
        }
        return total - total * 0.15;
    }
}

class NonVegetableMeal extends Meal {
    constructor(name, foods, dateModified) {
        super(name);
    }

    add(nonVegetableFood) {
        this.foods.push(nonVegetableFood);
    }

    calculatePrice() {
        // discount 5%
        let total = 0;
        for (let i = 0; i < this.foods.length; i++) {
            total += this.foods[i].price;
        }

        return total - total * 0.05;
    }
}

class Food {
    name;
    luxuriousName;
    price;

    constructor(name, luxuriousName, price) {
        this.name = name;
        this.luxuriousName = luxuriousName;
        this.price = price;
    }
}

class VegetableFood extends Food {
    constructor(name, luxuriousName, price) {
        super(name, luxuriousName, price);
    }
}

class NonVegetableFood extends Food {
    constructor(name, luxuriousName, price) {
        super(name, luxuriousName, price);
    }
}

// create Food
let firstChoice = new NonVegetableFood('Thịt chó', 'Giả cầy', 100);
let secondChoice = new NonVegetableFood('Tiết canh', 'Máu nhuộm bến thượng hải', 150);
let thirdChoice = new VegetableFood('Rau muống xào tỏi', 'Rồng xanh vượt biển', 200);
let fourthChoice = new NonVegetableFood('Tép xào', 'Tôm hùm baby', 50);
let fithChoice = new VegetableFood('Đậu phộng', 'Vẩy cá mập', 100);

let menu = [firstChoice, secondChoice, thirdChoice, fourthChoice, fithChoice];

// create Meal
let vegetableMenu = new VegetableMeal('Dành cho những người thích ăn "chay"');
let nonVegetableMenu = new NonVegetableMeal('Dành cho những người thích ăn "tạp"');

// 'Dành cho những người thích ăn "chay"'
console.log(vegetableMenu.name);

vegetableMenu.addFood(thirdChoice);
vegetableMenu.addFood(fithChoice);

console.log(vegetableMenu.show());
console.log("Discount 15%: ", vegetableMenu.calculatePrice());

// 'Dành cho những người thích ăn "tạp"'
console.log(nonVegetableMenu.name);
nonVegetableMenu.addFood(firstChoice);
nonVegetableMenu.addFood(secondChoice);
nonVegetableMenu.addFood(fourthChoice);

console.log(nonVegetableMenu.show());
console.log("Discount 5%: ", nonVegetableMenu.calculatePrice());