
function balikString (input){
    var output=''
    for (i=input.length; i>=0; i--){
        output += input.charAt(i)
    }
    console.log(output)
}


balikString ('hello world')
