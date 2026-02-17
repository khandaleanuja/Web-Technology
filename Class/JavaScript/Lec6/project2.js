function calculateBMI(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(height === "" || weight === ""){
        alert("Please enter both height and weight");
        return
    }

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    document.getElementById("result").innerText = "Your BMI : " + bmi;

    let category = "";
    if(bmi < 18.5){
        category = "Underweight";
    }
    else if(bmi >= 18.5 && bmi < 24.9){
        category = "Normal weight";
    }
    else if(bmi >= 25 && bmi < 29.9){
        category = "Overweight";
    }
    else{
        category = "Obese";
    }

    document.getElementById("category").innerText = "Category : " + category;
}