let oneLessonFT = 1500;
let oneLessonRT = 1000;

let chosenCourse = document.querySelector('.languages select');
let inputHome = document.querySelector('.home input');
let inputDistant = document.querySelector('.distant input')
let lessons = document.querySelector('.frequency select');
let button = document.querySelector('.calculate-button');
let totalPrice = document.querySelector('.total-price');


button.addEventListener('click', function(event){
    event.preventDefault();
    let course = chosenCourse.value;
    let lessonsWeekly = lessons.value;
    let checkedInput = inputHome.checked ? oneLessonFT: oneLessonRT;
    let wholePrice = lessonsWeekly * checkedInput;
    totalPrice.textContent = `${wholePrice}  рублей ${course}`

    // Lotery stuff

    let loteryButton = document.querySelector('.lotery-button');
    let loteryNumOne = document.querySelector('.lotery-number-one');
    let loteryNumTwo = document.querySelector('.lotery-number-two');

        loteryButton.addEventListener('click', function(event){
        event.preventDefault();
        let randomNumOne = Math.floor((Math.random() + 0.1) * 1000);
        let randomNumTwo = Math.floor((Math.random() + 0.1) * 1000);

        loteryNumOne.textContent = randomNumOne;
        loteryNumTwo.textContent = randomNumTwo;

        let sumFunction = function(num){
            return String(num).split('').reduce((accumilative, current) => {
                return accumilative + Number(current);
            }, 0)
        }

        let sumOfNumerOne = sumFunction(randomNumOne);
        let sumOfNumberTwo = sumFunction(randomNumTwo);

        if(sumOfNumerOne == sumOfNumberTwo){
            loteryNumOne.style.color = "green";
            loteryNumTwo.style.color = "green";
            totalPrice.textContent = `${wholePrice/2}  рублей ${course}`;

        }else{
            loteryNumOne.style.color = 'black';
            loteryNumTwo.style.color = 'black';
        }

        console.log(sumOfNumerOne, sumOfNumberTwo);
})

})


