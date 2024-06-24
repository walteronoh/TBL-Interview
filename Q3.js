function findLongestPalindrome(s) {
    let longest = "";

    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j < s.length; j++) {
            const substr = s.slice(i, j + 1);
            if(isPalindrome(substr) && substr.length > longest.length) {
                longest = substr;
            }
        }
    }
    return longest;
}

function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}
// I cant see any bug because it returns the longest palindromic string
// Example 
// babadomomo outputs omomo which is correct.

let s = "babadomomo";

console.log(findLongestPalindrome(s));

// Maybe some optimization