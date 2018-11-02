
function perkalianUnik(arr) {
    var arr2=[]
    var multiply=1

    //cari hasil perkalian semua komponen 
    for (var i=0; i<arr.length; i++){
        multiply= multiply* arr[i]
    }

    //cari hasil perkalian selain komponen yang index
    for (var j=0; j<arr.length; j++){
        arr2[j]=multiply/arr[j]
    }
    
    return arr2
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
