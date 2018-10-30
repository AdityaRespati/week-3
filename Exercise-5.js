//Palindrome

function palindrome(kata) {
    var reverse='' 
    for(i=kata.length-1;i>=0;i--){
        reverse += kata.charAt(i)
    }
    if (reverse===kata){
        return 'palindrome'
    }
    else{
        return 'not palindrome'
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false