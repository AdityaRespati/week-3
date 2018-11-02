

function hitungJumlahKata(input) {
  var jumlahKata=0
  var kata=''

  for (var i=0; i<input.length; i++){
    if (input[i]==' ' && kata!==''){
      jumlahKata+= 1
      kata=''

    } else if(input[i]==' ' ){
      kata=''}

      else{
      kata+= input[i]
      }
  }

    if(kata!==''){
      jumlahKata += 1
      return jumlahKata
    }
    
  return jumlahKata
}

  

  // TEST CASES
  console.log(hitungJumlahKata('          I have a           dream              ')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5