function cadastrar(){
    var nome = window.document.getElementById('nome')
    var sobrenome = window.document.getElementById('sob')
    var CelEmail = window.document.getElementById('celemail')
    var senha = window.document.getElementById('senha')
    var nasci = window.document.getElementsByName('num')
    var mes = window.document.getElementsByName('mes')
    var ano = window.document.getElementsByName('ano')
    if(nome == 0 ){
        window.alert('Preencha todos os quesitos!')
    }
}