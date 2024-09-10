document.getElementById('sip-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const monthlyInvestment = parseFloat(document.getElementById('monthly_investment').value);
  const yearlyIncreaseRate = parseFloat(document.getElementById('yearly_increase_rate').value) / 100;
  const expectedReturn = parseFloat(document.getElementById('expected_return').value) / 100;
  const investmentPeriod = parseInt(document.getElementById('investment_period').value);

  let totalInvestment = 0;
  let finalAmount = 0;

  for (let year = 1; year <= investmentPeriod; year++) {
      for (let month = 1; month <= 12; month++) {
          totalInvestment += monthlyInvestment;
          const monthsRemaining = (investmentPeriod - year) * 12 + (12 - month);
          finalAmount += monthlyInvestment * Math.pow(1 + expectedReturn / 12, monthsRemaining);
      }
      monthlyInvestment *= (1 + yearlyIncreaseRate);
  }

  localStorage.setItem('total_investment', totalInvestment.toFixed(2));
  localStorage.setItem('final_amount', finalAmount.toFixed(2));

  window.location.href = 'result.html';
});