
function isPalindrome(str){
    
    if (!str || typeof str !== 'string') return false;

    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return cleanStr === cleanStr.split('').reverse().join('');
}


module.exports = isPalindrome;