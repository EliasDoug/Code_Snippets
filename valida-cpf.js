  const constCPF= document.getElementById('cpf');
  const form = document.getElementById('checkout_form');

  constCPF.addEventListener("focus", function(event){
    event.target.style.background = "white"
  }, true);

  constCPF.addEventListener("blur", function(event){
    var string = document.getElementById('cpf').value;
    var strCPF =  string.replace('.','').replace('-','').replace('.','') ;
    
    if (TestaCPF(strCPF)!=true){
      alert("CPF inválido")
      event.target.style.background = "#ff00007a"
    }else{
      event.target.style.background = "#00b6ff29"
    }
  }, true);

  function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  
    if (strCPF == "00000000000") return false;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
  }