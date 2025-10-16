function media(){
 
    var nota1 = parseFloat(document.getElementById("m1").value)
    var nota2 = parseFloat(document.getElementById("m2").value)
    var nota3 = parseFloat(document.getElementById("m3").value)

    var media = document.getElementById("resp")
    var conta = (nota1 + nota2 + nota3) / 3

    if(conta <= 7){
        media.textContent = conta.toFixed(2) + "-" + "PASSOU DE ANO"

    }else{
        media.textContent = conta.toFixed(2) + "-" + "REPROVOU DE ANO"
    }







}