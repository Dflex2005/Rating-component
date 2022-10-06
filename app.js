// btn func
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn =>{
    const selectBtn = btn.querySelector(".select")

    selectBtn.addEventListener("click", ()=>{
        buttons.forEach(btnC =>{
            if(btnC !== btn){
                btnC.classList.remove("selectstyle")
                
            }
            console.log(btn);
        });

        btn.classList.add("selectstyle")
       
    });
})

const select = document.querySelectorAll(".rating-btns .select")
const tRate = document.querySelector(".total-rating .digit")

select.forEach(sel =>{
    sel.addEventListener("click", (e)=>{
        const selectedNub = e.currentTarget.dataset.nub;
        tRate.textContent = selectedNub;

    })
})


// submit func
const submitRating = document.querySelector(".first-card .sub");
const container = document.querySelector(".container")

submitRating.addEventListener("click", ()=>{
    container.classList.add("show-card")
    
})