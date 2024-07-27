// ========================= All Documentation
// --------- For Basic & Premium Slide
let basicBtn          = document.querySelector(".basic")
let premiumBtn        = document.querySelector(".premium")
let slideLine         = document.querySelector(".slideLine span")
let monthlyBasic      = document.querySelector(".monthlyBasic")
// --------- For Price Change
let starterPrice      = document.querySelector(".starterPrice")
let standardPrice     = document.querySelector(".standardPrice")
let supremPrice       = document.querySelector(".supremPrice")
// --------- For Name Change
let starterName       = document.querySelector(".starterName")
let standardName      = document.querySelector(".standardName")
let supremName        = document.querySelector(".supremName")
// --------- For Common Document
let selection         = document.querySelector(".selection")
let priceInfo         = document.querySelectorAll(".price")
// --------- For Premium Default Look
premiumBtn                      .disabled = true
premiumBtn                      .style = "opacity:0.1; cursor: not-allowed"

// ========================= For Working Slide Card
let slideBall         = document.createElement("button") // for slide button
selection                       .appendChild(slideBall)
slideBall                       .classList.add("slideBall")

// ========================= For Monthly Yearly Toggeling Events

let select = true // for toggling the slide ball

selection.addEventListener("click", () => {

    if (select) {
        slideBall           .style = "margin-left: 55px"

        // per year info
        priceInfo.forEach(Info => {
            Info            .innerHTML = "Per Year"
        })
        
        starterPrice        .innerHTML = "$ 10"
        standardPrice       .innerHTML = "$ 15"
        supremPrice         .innerHTML = "$ 19"
        premiumBtn          .disabled = false // premium button enable
        premiumBtn          .style = "opacity:1"
        
        basicBtn.addEventListener("click" , ()=>{

            starterPrice        .innerHTML = "$ 10"
            standardPrice       .innerHTML = "$ 15"
            supremPrice         .innerHTML = "$ 19"
            starterName         .innerHTML = "Starter"
            standardName        .innerHTML = "Standard"
            supremName          .innerHTML = "Suprem"
        })

        premiumBtn.addEventListener("click" , ()=>{
            
            starterPrice        .innerHTML = "$ 20"
            standardPrice       .innerHTML = "$ 25"
            supremPrice         .innerHTML = "$ 30"
            starterName         .innerHTML = "Bronze"
            standardName        .innerHTML = "Silver"
            supremName          .innerHTML = "Gold"
        })
    }
    else {
        slideBall            .style = "display:block"

        // per month info
        priceInfo.forEach(priceInfo => {
            priceInfo        .innerHTML = "Per Month"
        })

        starterPrice         .innerHTML = "$ 2.80"
        standardPrice        .innerHTML = "$ 4.20"
        supremPrice          .innerHTML = "$ 7.00"
        premiumBtn           .disabled = true // premium button disable
        premiumBtn           .style = "opacity:0.1; cursor: not-allowed"
    }
    select = !select
})

// ========================= For Basic Events
basicBtn.addEventListener("click" , ()=>{
    
    slideLine      .style = "display: block"
})

// ========================= For Premium Events
premiumBtn.addEventListener("click" , ()=>{
    
    slideLine      .style = "right: 0"

    selection.addEventListener("click" , ()=>{

        slideLine          .style = "display: block"
        starterName        .innerHTML = "Starter"
        standardName       .innerHTML = "Standard"
        supremName         .innerHTML = "Suprem"
    })
})

