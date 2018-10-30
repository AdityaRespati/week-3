
//finding next palindrome number

function angkaPalindrome(num) {
    for(i=num+1; i<num+1000; i++){
        //ubah angka jadi string
        var string=String(i)
        var reverse=''

        //balik string
        for(var j=string.length-1; j>=0;j--){
             reverse+=string[j]
        }

        //periksa
        if(reverse===string){
            return i
        }
    }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001