function menu() {
  
  // paovalues //
  let pao1 = document.getElementById("pao1").checked
  let pao2 = document.getElementById("pao2").checked 
  let pao3 = document.getElementById("pao3").checked
  let paoValue
  let paoLista

  if (pao1 == true){
    paoValue = 3.50
    paoLista = "Pão Frances"
  }
  else if (pao2 == true){
    paoValue = 8
    paoLista = "Pão Australiano"
  }
  else if (pao3 == true){
    paoValue = 6
    paoLista = "Pão de Brioche"
  } else{
    paoValue = 0
  }

  // burguer values // 
  let burguer1 = document.getElementById("burguer1").checked
  let burguer2 = document.getElementById("burguer2").checked
  let burguer3 = document.getElementById("burguer3").checked
  let burguerValue
  let burguerLista

  if (burguer1 == true){
      burguerValue = 13
      burguerLista = "Hambúrguer de Picanha"
  } else if (burguer2 == true){
      burguerValue = 10
      burguerLista = "Hambúrguer de Costela"
  } else if (burguer3 == true){
      burguerValue = 12
      burguerLista = "Hambúrguer Vegano"
  } else{
      burguerValue = 0
  }

  // salada values //
  let salad1 = document.getElementById("salad1").checked
  let salad2 = document.getElementById("salad2").checked
  let salad3 = document.getElementById("salad3").checked
  let saladValue
  let saladLista

  if (salad1 == true){
      saladValue = 1.5
      saladLista = "Alface"
  } else if (salad2 == true){
      saladValue = 1.5
      saladLista = "Tomate"
  } else if (salad3 == true){
      saladValue = 0
      saladLista = "Sem Salada"
  } else{
      saladValue = 0
  }

  // queijo values // 
  let x1 = document.getElementById("x1").checked
  let x2 = document.getElementById("x2").checked
  let x3 = document.getElementById("x3").checked
  let xValue
  let xLista

  if (x1 == true){
      xValue = 3
      xLista = "Mussarela"
  } else if (x2 == true){
      xValue = 3
      xLista = "Prato"
  } else if (x3== true){
      xValue = 5
      xLista = "Cheddar"
  } else{
      xValue = 0
  }

   document.getElementById("final").innerHTML = "R$ " + parseFloat(paoValue + burguerValue + saladValue + xValue);
   document.getElementById("listafinal1").innerHTML = paoLista + " R$" + parseFloat(paoValue);
   document.getElementById("listafinal2").innerHTML = burguerLista + " R$" + parseFloat(burguerValue);
   document.getElementById("listafinal3").innerHTML = saladLista + " R$" + parseFloat(saladValue);
   document.getElementById("listafinal4").innerHTML = xLista + " R$" + parseFloat(xValue);
}


