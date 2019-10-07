let w = Number(prompt('Your weight in kg?'))
let cm = Number(prompt('Your height in cm?'))
let h = cm / 100
let BMI = w / (h*h)
if (BMI < 16){
    alert('Your BMI is ' + Math.floor(BMI))
    alert('You are severely underweight')
} else if( BMI < 18.5){
    alert('Your BMI is ' + Math.floor(BMI))
    alert('You are underweight')
} else if( BMI < 25){
    alert('Your BMI is ' + Math.floor(BMI))
    alert('You are normal')
} else if( BMI < 30){
    alert('Your BMI is ' + Math.floor(BMI))
    alert('You are overweight')
}else{
    alert('Your BMI is ' + Math.floor(BMI))
    alert('You are obese')
}