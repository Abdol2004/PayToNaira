const buy = document.querySelector(".payo-buy")
const sell = document.querySelector(".payo-sell")
const submitBuy = document.getElementById("buy-ref")
const submitSell = document.getElementById("sell-ref")

submitSell.addEventListener("click", () => {
    buy.style.display = "none";
    sell.style.display = "flex";
})

submitBuy.addEventListener("click", () => {
    sell.style.display = "none";
    buy.style.display = "flex";
})