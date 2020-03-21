function capturar(){
    document.getElementById("botaoEnviar").addEventListener("click", function(e) {
        e.preventDefault();
    });
    var id = document.getElementById("inputId").value;
    if(id==""){
        alert('Preencha o campo email.');
    }else {
        alert('O email ' +id+' foi enviado!');
        document.getElementById('inputId').value='';
    }
}