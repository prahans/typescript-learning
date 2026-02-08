"use strict";
// data:
// initial amount
// annual contribution
// expected return
// duration
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return "Initial investment amount must be at least zero.";
    }
    if (duration <= 0) {
        return "No valid amount of years provided.";
    }
    if (expectedReturn < 0) {
        return "expected result must be at least zero.";
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestedEarned = 0;
    const anualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestedEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        anualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestedEarned,
            totalContributions
        });
    }
    return anualResults;
}
function printResults(result) {
    if (typeof result === 'string') {
        console.log(result);
        return;
    }
    for (const yearEndResult of result) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestedEarned.toFixed(0)}`);
        console.log("---------------------------------");
    }
}
const investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
};
const results = calculateInvestment(investmentData);
printResults(results);
