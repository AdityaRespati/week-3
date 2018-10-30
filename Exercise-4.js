
var input= ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
  
function dataHandling2 (input){
    input.splice(4, 1, "Pria", "SMA Internasional Metro")
    input.splice(2, 1, "Provinsi Bandar Lampung")
    input.splice(1, 1, "Roman Alamsyah Elsharawy")

    //output = ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
    console.log(input)

    //output = Mei
    var bulan=(input[3][3]+input[3][4])
    switch(bulan){
        case '01': {console.log('Januari');break;}
        case '02': {console.log('Februari');break;}
        case '03': {console.log('Maret');break;}
        case '04': {console.log('April');break;}
        case '05': {console.log('Mei');break;}
        case '06': {console.log('Juni');break;}
        case '07': {console.log('Juli');break;}
        case '08': {console.log('Agustus');break;}
        case '09': {console.log('September');break;}
        case '10': {console.log('Oktober');break;}
        case '11': {console.log('November');break;}
        case '12': {console.log('Desember');break;}
        default:{console.log('bulan invalid')}
    }

    //output= ["1989", "21", "05"]
    var tanggal=input[3].split("/")
    tanggal.sort(function(a,b){return b-a})

    console.log(tanggal)

    //output= 21-05-1989
    var tanggal2=input[3].split("/")
    var join= tanggal2.join('-')

    console.log(join)

    //output = Roman Alamsyah
    var slice= input[1].slice(0,15)

    console.log(slice)
}


dataHandling2 (input)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */