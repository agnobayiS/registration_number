const regNumberEnterd = document.querySelector(".regNumberEnterd")
const regNumber = document.querySelector(".regNumber")
const regNumbes = document.querySelector(".regNumbers")
const addRegNumberbtn = document.querySelector(".addRegNumber")
const massage = document.querySelector(".massage")

const regNumbersList =[]

addRegNumberbtn.addEventListener("click", function () {

    if (regNumberEnterd.value == "") {
        massage.innerHTML = "Please enter a registration Number";
        setTimeout(() => {
            massage.innerHTML = "";
        }, 3000);
        return;
    }
    if(regNumbersList.includes(regNumberEnterd.value)){
        massage.innerHTML = "Reg number already entered";
        setTimeout(() => {
            massage.innerHTML = "";
        }, 3000);
        return;
    }

    const newDive = document.createElement('div');
    newDive.innerHTML= regNumberEnterd.value
    newDive.classList.add('regNumber')
    regNumbersList.push(regNumberEnterd.value)
    regNumbes.appendChild(newDive)
    regNumberEnterd.value = "";


    // regNumber.innerHTML = regNumberEnterd.value

})