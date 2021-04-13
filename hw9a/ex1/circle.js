/*Create a circle.js module exporting two functions circumference() and area(), each taking the circle radius as a parameter.*/

const circle = () => {
    return{
        circumference(radius){
            return `The circumference of the circle of radius ${radius} is ${2 * Math.PI * radius}`;
        },
        area(radius){
            return `Its area is ${Math.PI * radius**2}`;
        }
    }
}

// Export the factory function
module.exports = circle;