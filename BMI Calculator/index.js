const form = document.querySelector('form');

form.addEventListener('submit', function (e) {

    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if (height === ' ' || height < 0 || isNaN(height)) {
        results.innerHTML = `Enter a valid height ${height}`
    }
    else if (weight === ' ' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Enter a valid weight ${weight}`
    }
    else if (weight <= 35) {
        results.innerHTML = `You are Under Weight, Better luck next time`
    }
    else if (weight >= 75) {
        results.innerHTML = `You are Over Weight, Better luck next time`
    }

    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = ` BMI = ${BMI}`
    }
})



