// Transport Fee Function
function showTransportFee(shift) {
    const fees = {
        'morning': 10,
        'afternoon': 15,
        'night': 20
    };
    document.getElementById('feeDisplay').innerText = 'Transport Fee: R' + fees[shift];
}