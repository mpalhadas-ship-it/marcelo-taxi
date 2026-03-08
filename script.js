function calcular(){

let destino = document.getElementById("destino").value

if(destino == ""){
document.getElementById("resultado").innerText = "Escolha um destino"
return
}

let valor = parseInt(destino)

document.getElementById("resultado").innerText =
"Valor estimado: R$ " + valor

}
