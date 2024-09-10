document.addEventListener('DOMContentLoaded', function() {
  const totalInvestment = localStorage.getItem('total_investment');
  const finalAmount = localStorage.getItem('final_amount');

  document.getElementById('total_investment').textContent = `Total Investment: $${totalInvestment}`;
  document.getElementById('final_amount').textContent = `Final Amount: $${finalAmount}`;
 
  localStorage.removeItem('total_investment');
  localStorage.removeItem('final_amount');
});