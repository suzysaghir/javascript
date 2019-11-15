// recursive solution 
function fibonacci(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

//memoization
function fibonacci(n,memo) {
    memo = memo || {}  // check if cache variable is available, else set to empty object 
    if (memo[n]) {   
        return memo[n]
    }
    if (n <= 1) {
        return 1
    }
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)  // if not exist, set it 
}
