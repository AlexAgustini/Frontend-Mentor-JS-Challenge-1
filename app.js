const optionsBtns = document.querySelectorAll(".option-btn");
const textContainer = document.querySelector(".text-container")
const container = document.querySelector(".container");
const submitBtn = document.querySelector(".submit-btn");
const formEl = document.querySelector(".form");
const clickedBtns = [];
let warningMsg = document.createElement("p");

optionsBtns.forEach((btn)=> {
    btn.addEventListener('click', ()=> {
        btn.classList.add('clicked');
        clickedBtns.pop()
        clickedBtns.push(btn);
    })
})

formEl.addEventListener("submit", (e)=> {
        if (clickedBtns.length === 0) {
            e.preventDefault();
            warningMsg.innerText = 'You should give a feedback!';
            warningMsg.style.color = 'white'
            textContainer.append(warningMsg);
            optionsBtns.forEach((btn)=> {
            btn.style.border = '1px solid white'
            })
        } else {
            container.innerHTML = '';
            container.style.alignItems = 'center'
            let thankYouImg =  document.createElement('img');
            thankYouImg.setAttribute('src', 'images/illustration-thank-you.svg');
            thankYouImg.classList.add("thankyou-img")

            let thankYouTextTitle = document.createElement('p');
            thankYouTextTitle.textContent = 'Thank you!'
            thankYouTextTitle.classList.add("thankyou-text-title")

            let thankYouText = document.createElement('p');
            thankYouText.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
            thankYouText.classList.add("thankyou-text")

            let thankYouReview = document.createElement("p");
            thankYouReview.textContent = `You selected ${clickedBtns[0].textContent} out of 5`
            thankYouReview.classList.add("thankyou-review")

            let thankYouTab = [thankYouImg, thankYouReview, thankYouTextTitle, thankYouText];
            
            thankYouTab.forEach((item)=> {
                container.append(item);
            })
        }
    }
)