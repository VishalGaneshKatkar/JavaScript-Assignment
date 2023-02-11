function calculateBMI(weight, height) {
        const bmi = weight / (height * height);
    
        if (bmi < 18.5) {
            console.log('Underweight');
        } else if (bmi >= 18.5 && bmi < 24.9) {
            console.log('Normal weight');
        } else if (bmi >= 25 && bmi < 29.9) {
            console.log('Overweight');
        } else {
            console.log('Obese');
        }
    }
    
    calculateBMI(75, 1.75);  // Output: Normal weight