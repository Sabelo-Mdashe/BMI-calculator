function calculateBMI(height, weight) {
  height = document.querySelector(".height_input").value;
  weight = document.querySelector(".weight_input").value;
  let totalBMI = weight / (height * height);

  document.getElementById("output").innerHTML =
    "Your BMI is " + totalBMI.toFixed(2) + " kg/m<sup>2</sup>";

  if (totalBMI < 18.5) {
    document.getElementById("BMI_class").innerHTML =
      "Your BMI classification is Underweight";
  } else if (totalBMI >= 18.5 && totalBMI < 24.9) {
    document.getElementById("BMI_class").innerHTML =
      "Your BMI classification is Normal";
  } else if (totalBMI >= 25 && totalBMI < 29.9) {
    document.getElementById("BMI_class").innerHTML =
      "Your BMI classification is Overweight";
  } else if (totalBMI >= 30 && totalBMI < 34.9) {
    document.getElementById("BMI_class").innerHTML =
      "Your BMI classification is Obese";
  } else {
    document.getElementById("BMI_class").innerHTML =
      "Your BMI classification is Extremely Obese";
  }
}
