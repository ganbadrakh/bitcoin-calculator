const calcGrowth = (pastVal, currentVal) => Math.round(((currentVal - pastVal) / pastVal) * 100);

document.querySelector('.investment__btn').addEventListener('click', () => {
  const btcUSDBought = document.querySelector('.price__input--bought').value;
  const btcUSDNow = document.querySelector('.price__input--now').value;
  const btc = document.querySelector('.investment__btc').value;

  const invested = btc * btcUSDBought;
  const current = btc * btcUSDNow;

  const profit = current - invested;
  const growth = calcGrowth(invested, current);

  let message = '';
  const resultField = document.querySelector('.result');

  if (profit > 0) {
    message = `Great! You made a profit of $${profit} (${growth}%).`;
    resultField.style.color = 'green';
  } else if (profit < 0) {
    message = `Oh no! You're at loss of $${profit} (${growth}%).`;
    resultField.style.color = 'red';
  } else {
    message = `You're breaking even!`;
  }

  resultField.textContent = message;
});
