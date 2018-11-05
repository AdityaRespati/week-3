

function groupAnimals(animals) {
  //sortir input
  var unsorted=true

  while (unsorted) {
    unsorted= false
    var swap=0

    for (var j=0; j<animals.length-1; j++){
      if(animals[j+1][0]<animals[j][0]){
          swap=animals[j]
          animals[j]=animals[j+1]
          animals[j+1]=swap

          unsorted= true
      }
    }
  }

  console.log(animals, 'hasil sorting')

  var kelompok=[]
  var output=[]

  for (var i = 0; i < animals.length; i++) {

    //bila huruf depan sama dengan index sebelumnya, masukan ke array 'kelompok'
    if (i == 0 || i > 0 && animals[i][0] == animals[i - 1][0]) {
      kelompok[kelompok.length] = (animals[i])

    }

    //bila huruf depan beda push 'kelompok' ke array output dan reset 'kelompok'
    else {
      output[output.length] = kelompok
      kelompok = [animals[i]]
    }

  }
  output[output.length] = kelompok
  return output
}



// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));

