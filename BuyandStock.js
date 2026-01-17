// 📌 Problem statement (simplified)

// Find the maximum profit you can make from buying one day and selling on a later day.

// 🧪 Example
// Input:  prices = [7,1,5,3,6,4]
// Output: 5


// Explanation:

// Buy at price 1

// Sell at price 6

// Profit = 6 - 1 = 5


function buyAndStock(prices) {
    let left=0;
    let right=1;
    let maxProfit=0;
    while(right <prices.length){
        if(prices[left] < prices[right]){
            let profit=prices[right] - prices[left]
            maxProfit=Math.max(maxProfit,profit)
        }
        else {
            left=right
        }
        right++
    }
    return maxProfit



}


console.log(buyAndStock([7,1,6,3,6,4]))