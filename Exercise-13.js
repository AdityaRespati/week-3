
function targetTerdekat(arr) {
    var character=[]
    var count=[]
    var count2=[]

//array 'character' untuk menyimpan karakter 'x' dan 'o' tanpa spasi
//array 'count' untuk menyimpan semua index 'x' dan 'o' 
    for(var i=0; i<arr.length; i++){
        if(arr[i]!==' '){
            character.push(arr[i])
            count.push(i)
        }
    }

//array 'count2' untuk menyimpan semua jarak antar x & o 
    for(var j=0; j<count.length-1; j++){
        if (character[j+1]!==character[j]){
            count2.push(count[j+1]-count[j])
        }
    }
    
//sortir untuk cari jarak terkecil 
    count2.sort()
    var output=count2[0]

    if(output==undefined){
        return 0
    }
    else{
        console.log(character, count, count2)
         return output
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat(['x', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2