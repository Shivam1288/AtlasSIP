document.getElementById('sipForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const annualRate = parseFloat(document.getElementById('annualRate').value);
    const years = parseFloat(document.getElementById('years').value);

    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    const totalValue = (monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)).toFixed(2);

    document.getElementById('totalValue').textContent = totalValue;
});
