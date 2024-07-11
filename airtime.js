// Function to calculate remaining airtime
function enoughAirtime(callMinutes, smsCount, dataAmount, availableAirtime) {
    // Define costs per unit
    const callCostPerMinute = 1.88;   
    const smsCost = 0.75;             
    const dataCostPerGB = 12;         

    // Calculate total cost based on inputs
    let totalCost = (callMinutes * callCostPerMinute) +
                    (smsCount * smsCost) +
                    (dataAmount * dataCostPerGB);

    // Calculate remaining airtime
    let remainingAirtime = availableAirtime - totalCost;

    // Return remaining airtime or 0 if insufficient funds
    return remainingAirtime >= 0 ? remainingAirtime.toFixed(2) : 0;
}

// Event listener for the form submission
document.getElementById('airtimeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const callMinutes = parseFloat(document.getElementById('callMinutes').value);
    const smsCount = parseInt(document.getElementById('smsCount').value);
    const dataAmount = parseFloat(document.getElementById('dataAmount').value);
    const availableAirtime = parseFloat(document.getElementById('availableAirtime').value);

    // Call the enoughAirtime function and display the result
    const remainingAirtime = enoughAirtime(callMinutes, smsCount, dataAmount, availableAirtime);
    document.getElementById('result').textContent = `Remaining Airtime: R ${remainingAirtime}`;
});

