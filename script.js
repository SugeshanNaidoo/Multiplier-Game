let depositedAmount = 0;

function handleAction(action) {
    switch (action) {
        case 'deposit':
            performDeposit();
            break;
        case 'playGame':
            playGame();
            break;
        case 'closeModal':
            closeModal();
            break;
        default:
            break;
    }
}

function performDeposit() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        depositedAmount += depositAmount;
        updateDepositedAmount();
    } else {
        showMessage('Invalid deposit amount. Please enter a valid amount.');
    }
}

function playGame() {
    const wagerAmount = parseFloat(document.getElementById('wagerAmount').value);
    const multiplier = parseInt(document.getElementById('multiplier').value);

    if (!isNaN(wagerAmount) && wagerAmount > 0 && multiplier >= 1 && multiplier <= 5) {
        const result = Math.random() < (multiplier / 5);
        const winnings = result ? wagerAmount * multiplier : -wagerAmount;
        depositedAmount += winnings;

        updateWinnings(winnings);
        updateDepositedAmount();
    } else {
        showMessage('Invalid wager or multiplier. Please enter valid values.');
    }
}

function updateDepositedAmount() {
    document.getElementById('depositedAmount').innerText = depositedAmount.toFixed(2);
    document.getElementById('depositedSection').style.display = 'block';
    checkDepositedAmount();
}

function updateWinnings(winnings) {
    document.getElementById('winnings').innerText = winnings.toFixed(2);
    document.getElementById('resultSection').style.display = 'block';
    checkDepositedAmount();
}

function checkDepositedAmount() {
    if (depositedAmount <= 0) {
        showMessage('Your Deposited Amount has reached 0.00. Please deposit more to continue playing.');
    }
}

function showMessage(message) {
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.innerText = message;
    openModal();
}

function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
