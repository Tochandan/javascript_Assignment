// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if (height===0 || mass===0){return "INVALID INPUT"}

    var BMI;
    BMI = mass / (height * height);
    return BMI
// end of code 
}

module.exports = BMICalculator;
