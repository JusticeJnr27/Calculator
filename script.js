document.querySelector('#tip-form').onchange = function() {
    var bill = Number(document.getElementById('billTotal').value);
    var tip = document.getElementById('tipInput').value;
    var numOfPeople = Number(document.getElementById('no-of-people').value);

    document.getElementById('tipOutput').innerHTML = `${tip}%`;
    document.getElementById('split-num').innerHTML = `${numOfPeople}`;

    var tipValue = (bill * tip) / 100;
    var finalBill = bill + tipValue;
    var totalBillWithTipPerPerson = finalBill / numOfPeople;

    console.log(finalBill);
    console.log(totalBillWithTipPerPerson);

    var tipAmount = document.querySelector('#tipAmount');
    var totalBillWithTip = document.querySelector('#totalBillWithTip');

    tipAmount.value = tipValue.toFixed(2);
    totalBillWithTip.value = totalBillWithTipPerPerson.toFixed(2);

    // Show Results
    document.getElementById('results').style.display = 'block';
};

