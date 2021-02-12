function roundTo(n, digits) {
    if (digits === undefined) {
        digits = 0;
    }

    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    return Math.round(n) / multiplicator;
}

function projectProfit (name, price, deposit, growth, weeks) {
    var ownedCoins = 0

    for (let i = 0; i < weeks; i++) {
        ownedCoins += deposit / price
        price *= growth 
    }

    const value = roundTo(ownedCoins * price, 2)
    const invested = deposit * weeks
    const profit = value - invested
    const percent = Math.round(profit / invested * 100 + 100)


    // const resultString = `After ${weeks} weeks of depositing $${deposit}/week ($${invested} total) at an average coin growth rate of you ${growthPercentage}%/week will own ${ownedCoins} ${name}, worth $${value}, with a profit of $${profit} (${percent}%)`

    return {profit, percent, invested, ownedCoins, value}
}

function currentProfit (name) {

}

module.exports = {
    roundTo,
    projectProfit,
    currentProfit
}