// Total Phone Bill Function
function totalPhoneBill(callCount, smsCount) {
    const totalCost = (callCount * 2.75) + (smsCount * 0.65);
    return totalCost.toFixed(2);
}

function displayTotalPhoneBill() {
    const callCount = parseInt(document.getElementById('callCount').value) || 0;
    const smsCount = parseInt(document.getElementById('smsCount').value) || 0;
    const bill = totalPhoneBill(callCount, smsCount);
    document.getElementById('totalBill').innerText = 'Total Phone Bill: R' + bill;
}