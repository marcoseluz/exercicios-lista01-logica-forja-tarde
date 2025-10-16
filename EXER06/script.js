function media() {
    var nota1 = parseFloat(document.getElementById("n1").value)
    var nota2 = parseFloat(document.getElementById("n2").value)

    var conta = document.getElementById("resposta")
    var media = (nota1 + nota2) - 5

    conta.textContent = media

}