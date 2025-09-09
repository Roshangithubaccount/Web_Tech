class Animal {
    constructor(name, color, breed, price, location) {  // constructor method
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.price = price;
        this.location = location;
    }

    // method to display animal details
    displayDetails() {
        console.log("Animal Name : " + this.name);
        console.log("Breed       : " + this.breed);
        console.log("Color       : " + this.color);
        console.log("Price       : " + this.price);
        console.log("Location    : " + this.location);
    }
}


let dog = new Animal("German Shepherd", "Black & Brown", "Shepherd", 25000, "Delhi");
dog.displayDetails();
