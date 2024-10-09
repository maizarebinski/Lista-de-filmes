// A barraca do beijo, 12, comédia/romance,
// Pânico 5, 16, terror/ mistério 
// Através da minha janela, 16, romance/ comédia,
// Continência ao amor, 14, romance/musical,
// Fuja, 16, terror,
// Para todos os garotos que já amei, 12, comédia/ romance,
// A fuga das galinhas, LIVRE, infantil/ comédia,
// Depois do universo, 16, romance/ comédia,
// A cinco passos de você, 12, romance/ drama,
// Cinquenta tons de cinza, 16, erótica/ romance,



let campoIdade
let campoRomance
let campoTerror;
function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput ("15");
  campoRomance = createCheckbox("gostaDeRomance ?");
  campoterror = createCheckbox("gostaDeTerror ?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeRomance = campoRomance. checked();
  let gostaDeTerror = campoterror. checked();
  let recomendacao = geraRecomendacao (idade, gostaDeRomance, gostaDeTerror);
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text (recomendacao, width/2, height/2);

}

function geraRecomendacao(idade, gostaDeRomance, gostaDeTerror) {
  if (idade >=10) {;
    if (idade >= 16){
   return "A fuga das galinhas" ; 
   } else { 
     if (idade >= 12);
  if(gostaDeRomance || gostaDeTerror) {
    return "Para todos os garotos que já amei";
  } else {
    return "A cinco possos de você"
  }
}
  } else {
    if (gostaDeRomance) {
    return "Continência ao amor" ; 
    } else {
      return "Depois do universo" ; 
    }
  }
}