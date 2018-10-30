
function pasanganTerbesar(num) {
    //ubah angka jadi string
    var string= String(num)
    var array=[]

    //buat array berisi setiap pasang angka
    for(var i=0; i<string.length-1; i++){
        var pasangan= string[i]+string[i+1] 
        array.push(pasangan)       
    }
    
    //sortir angka terbesar
    array.sort(function (a,b){return b-a})
    return array[0]

  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99