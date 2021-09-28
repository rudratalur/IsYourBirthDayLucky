const dateOfBirth = document.querySelector("#birthDate");
const luckyNumber = document.querySelector("#lucky-Number")
const checkLuckyNumber = document.querySelector("#checkNumber");
const outBox = document.querySelector("#out-box");

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outBox.innerHTML = "YAY! Your birthday is lucky!!😍"
    }
    else {
        outBox.innerHTML = "Oops!! Your b'day is not lucky!!😌"
    }
}

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob)
    compareValues(sum, luckyNumber.value)
    else
    outBox.innerHTML = "Please enter the Both the fields"
}

function calculateSum(dob) {
    dob= dob.replaceAll("-", "")
    let sum = 0;
    for(let index=0; index<dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkLuckyNumber.addEventListener('click' , checkBirthDateIsLucky)