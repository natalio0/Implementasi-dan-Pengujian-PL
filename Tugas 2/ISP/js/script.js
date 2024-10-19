function showTransfer() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('transferSection').classList.remove('hidden');
}

function executeTransfer() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const result = document.getElementById('transferResult');
    
    if (phoneNumber) {
        result.textContent = `Transfer pulsa ke ${phoneNumber} berhasil!`;
        result.classList.remove('hidden');
    } else {
        alert('Silakan masukkan nomor tujuan!');
    }
}
