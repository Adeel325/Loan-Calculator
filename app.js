document.querySelector('#loan-form').addEventListener('submit', calculateResults);
//calculate results
function calculateResults(e){
    //UI vars
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#years');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    }else{
        showErrors('Please Check Your Numbers');
    }
    e.preventDefault();
}

//show errors
function showErrors(error){
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';

    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);
}