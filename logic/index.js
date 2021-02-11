function roundTo(n, digits) {
    if (digits === undefined) {
        digits = 0;
    }

    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    return Math.round(n) / multiplicator;
}

const prices = [0.101496, 2394.60, 0.707297, 1.66]
const values = [0, 0, 0, 0]
const converted = [0, 0, 0, 0]

const weeks = 26
const deposit = 50
const invested = weeks * deposit
const growth = 1.02
const growthPercentage = (growth * 100) - 100

const coinPrices = []
const coinsOwned = []
const money = []

for (let i = 0; i < weeks; i++) {
    for (let j = 0; j < prices.length; j++) {
        values[j] += (deposit / prices.length) / prices[j]
        prices[j] *= growth
        converted[j] = values[j] * prices[j]
    }

    // console.log(`week ${i + 1}`)
    // console.log([{ 'coinsOwned': values }, { 'prices': prices }, { 'converted': converted }])
}

coinPrices.push({ 'name': 'DOGE', 'price': prices[0] })
coinPrices.push({ 'name': 'ETH', 'price': prices[1] })
coinPrices.push({ 'name': 'XRP', 'price': prices[2] })
coinPrices.push({ 'name': 'ALGO', 'price': prices[3] })

coinsOwned.push({ 'name': 'DOGE', 'owned': values[0] })
coinsOwned.push({ 'name': 'ETH', 'owned': values[1] })
coinsOwned.push({ 'name': 'XRP', 'owned': values[2] })
coinsOwned.push({ 'name': 'ALGO', 'owned': values[3] })

money.push({ 'name': 'DOGE', 'NZD': converted[0] })
money.push({ 'name': 'ETH', 'NZD': converted[1] })
money.push({ 'name': 'XRP', 'NZD': converted[2] })
money.push({ 'name': 'ALGO', 'NZD': converted[3] })

const portfolio = roundTo(money.reduce(function(prev, cur) {
    return prev + cur.NZD;
  }, 0), 2);

const profit = roundTo(portfolio - invested, 2)
const profitPercentage = Math.round(profit / portfolio * 100 + 100)

const resultString = `After ${weeks} weeks of depositing ${deposit}/week, at an average growth rate of ${growthPercentage}%/week, this is the market and your portfolio:` 

console.log(resultString)
console.log(coinPrices)
console.log(coinsOwned)
console.log(money)
console.log(`This is a total of $${portfolio} NZD, from a total investment of $${invested}, leaving $${profit} (${profitPercentage}%) profit`)