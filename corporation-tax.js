<script>
document.addEventListener("DOMContentLoaded", function() {
    // Getting all input elements by their IDs
    const grossProfitInput = document.getElementById("gross-profit");
    const smallProfitsRateInput = document.getElementById("small-profits-rate");
    const marginalReliefRateInput = document.getElementById("marginal-relief-rate");
    const mainRateInput = document.getElementById("main-rate");
    const smallProfitsTaxValueInput = document.getElementById("small-profits-tax-value");
    const marginalTaxValueInput = document.getElementById("marginal-tax-value");
    const mainRateTaxValueInput = document.getElementById("main-rate-tax-value");
    const taxDueValueInput = document.getElementById("tax-due-value");
    const effectiveTaxRatePercentInput = document.getElementById("effective-tax-rate-percent");
    const netProfitValueInput = document.getElementById("net-profit-value");

    // Event listener for changes in the gross profit input
    grossProfitInput.addEventListener("input", function() {
        const grossProfit = parseFloat(grossProfitInput.value) || 0;

        // Calculate Small Profits Rate
        const smallProfitsRate = grossProfit < 50000 ? grossProfit : 0;
        smallProfitsRateInput.value = smallProfitsRate.toFixed(2);

        // Calculate Marginal Relief Rate
        let marginalReliefRate = 0;
        if (grossProfit > 50000 && grossProfit <= 250000) {
            marginalReliefRate = grossProfit;
        }
        marginalReliefRateInput.value = marginalReliefRate.toFixed(2);

        // Calculate Main Rate
        const mainRate = grossProfit > 50000 ? grossProfit : 0;
        mainRateInput.value = mainRate.toFixed(2);

        // Calculate Small Profits Tax Value
        const smallProfitsTaxValue = smallProfitsRate * 0.19;
        smallProfitsTaxValueInput.value = smallProfitsTaxValue.toFixed(2);

        // Calculate Marginal Tax Value
        const marginalTaxValue = marginalReliefRate > 0 ? (250000 - marginalReliefRate) * 0.015 * -1 : 0;
        marginalTaxValueInput.value = marginalTaxValue.toFixed(2);

        // Calculate Main Rate Tax Value
        const mainRateTaxValue = mainRate * 0.25;
        mainRateTaxValueInput.value = mainRateTaxValue.toFixed(2);

        // Calculate Total Tax Due
        const taxDueValue = smallProfitsTaxValue + marginalTaxValue + mainRateTaxValue;
        taxDueValueInput.value = taxDueValue.toFixed(2);

        // Calculate Effective Tax Rate
        const effectiveTaxRatePercent = grossProfit > 0 ? (taxDueValue / grossProfit) * 100 : 0;
        effectiveTaxRatePercentInput.value = effectiveTaxRatePercent.toFixed(2);

        // Calculate Net Profit Value
        const netProfitValue = grossProfit - taxDueValue;
        netProfitValueInput.value = netProfitValue.toFixed(2);
    });
});
</script>
