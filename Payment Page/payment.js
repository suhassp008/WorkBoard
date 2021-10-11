const stripe = document.querySelector('.stripe');
const creditCard = document.querySelector('.credit-card');
const stripeDetails = document.querySelector('.stripe-details');
const cardDetails = document.querySelector('.card-details');


stripe.onclick = ()=>{
    stripe.classList.add('active');
    creditCard.classList.remove('active');

    document.getElementById("stripe").src = "Resources/checked.svg";
    document.getElementById("credit").src = "Resources/check.svg";

    stripeDetails.style.display = "flex";
    cardDetails.style.display = "none";

}
creditCard.onclick = ()=>{
    creditCard.classList.add('active');
    stripe.classList.remove('active');

    document.getElementById("credit").src = "Resources/checked.svg";
    document.getElementById("stripe").src = "Resources/check.svg";

    stripeDetails.style.display = "none";
    cardDetails.style.display = "flex";
}
