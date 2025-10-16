function verificar(){
    var idade = parseFloat(document.getElementById("idade").value)
    var resp = document.getElementById("resp")

    if(idade <= 18){
        resp.textContent = "menor de idade" + " , " + idade
    }else {
        resp.textContent = "maior de iddae" + idade
    }
}
