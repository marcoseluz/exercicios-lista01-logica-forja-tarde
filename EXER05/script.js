function mostre(){
    var nome = document.getElementById("nome"). value
    var descricao = document.getElementById("descricao"). value
    var idade = parseFloat(document.getElementById("idade").value) 
    var genero = document.getElementById("genero"). value
    var hobby = document.getElementById("hobby"). value

    var pnome = document.getElementById("pnome")
    var pdescricao = document.getElementById("pdescricao")
    var pidade = document.getElementById("pidade")
    var pgenero = document.getElementById("pgenero")
    var phobby = document.getElementById("phobby")

    pnome.textContent = nome
    pdescricao.textContent = descricao
    pidade.textContent = idade
    pgenero.textContent = genero
    phobby.textContent = hobby
    

}