
function tentukanDeretAritmatika(arr) {
    var selisih=[]

    //buat array selisih antar komponen
    var i=0
    while(i<arr.length-1){
        selisih[i]= arr[i+1]-arr[i]
        
        //periksa apakah semua selisih sama
        if(i>0 && selisih[i]!== selisih[i-1]){
            return false
        }

        i++
    }
    return true
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false