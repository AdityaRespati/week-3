

function groupAnimals(animals) {
  //sortir input
  animals.sort()
  var output = []
  var kelompok = []

  for (var i = 0; i < animals.length; i++) {

    //bila huruf depan sama dengan index sebelumnya, masukan ke array 'kelompok'
    if (i == 0 || i > 0 && animals[i][0] == animals[i - 1][0]) {
      kelompok[kelompok.length] = (animals[i])

    }

    //bila huruf depan beda push 'kelompok' ke array output dan buat 'kelompok' baru
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

