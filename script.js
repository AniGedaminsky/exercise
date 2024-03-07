 // 1. გამოთვალეთ მართკუთხედის ფართობი და პერიმეტრი, ფუნქციას დაარქვით calculateArea, 
// calculatePerimeter და გამოიყენეთ width და lenght. width - 23 lenght = 20
document.addEventListener('DOMContentLoaded', function () {
    const rectangle = {
        width: 23,
        length: 20,
        calculateArea: function () {
            return this.width * this.length;
        },
        calculatePerimeter: function () {
            return 2 * (this.width + this.length);
        }
    };

 
    const areaResult = rectangle.calculateArea();
    const perimeterResult = rectangle.calculatePerimeter();

    console.log('Area:', areaResult);
    console.log('Perimeter:', perimeterResult);
});

// 2. დაწერეთ პროგრამა, რომელიც დაბეჭდავს თქვენს სახელსა და გვარს, ასაკს და საცხოვრებელს. 
// მაგალითად: My name is Keti, I am 22 y.o and I live in Tbilisi. 
let name= "ani";
let age='16';
let city='Rustavi';

console.log('my name is' + name + 'I am' + age + 'y.o and i live in' + city);

// 3. გამოთვალეთ წრეწირის ფართობი, გამოიყენეთ რადიუსი. radius - 18. 
const radius = 18;
const circleArea = Math.PI * Math.pow(radius, 2);

console.log('თუ წრეწირის რადიუსია', radius, 'მაშინ, მისი ფართობი რადიუსის გამოყენებით იქნება', circleArea.toFixed(2))

// 4. გამოთვალეთ თქვენი სხეულის მასის ინდექსი, Body Mass Index (BMI) 
// BMI = weight/(height*height), დაგჭირდებათ ორი პარამეტრი, სიმაღლე - height, წონა - weight

document.addEventListener('DOMContentLoaded', function () {
    const BMI = {
        weight: 64,
        height: 164,
        calculateBMI: function () {
            // Convert height from centimeters to meters
            const heightInMeters = this.height / 100;

            // Calculate BMI using the correct formula
            return this.weight / (heightInMeters * heightInMeters);
        }
    };

    // Example usage:
    const calculatedBMI = BMI.calculateBMI();

    console.log('Your BMI is:', calculatedBMI.toFixed(2));
});

//5. გამოთვალეთ ფაქტორიალი. 
// მაგალითად, 5! = 5 * 4 * 3 * 2 * 1 = 120, დაწერეთ პროგრამა, რომელიც გამოთვლის n - ის ფაქტორიალს. 
