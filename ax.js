//https://sendvid.com/llfezj0pd

const axios = require('axios');
const fs = require('fs');

const letras = ["a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","x","z","0","1","2","3","4","5","6","7","8","9"];
const link = 'https://sendvid.com/';

for (let i = 0; i < 1000000; i++) {
  let combinação = "";
  
  // Gerar combinação de 8 letras aleatórias
  for (let j = 0; j < 8; j++) {
    const índiceAleatório = Math.floor(Math.random() * letras.length);
    combinação += letras[índiceAleatório];
  }

  const url = link + combinação;

  axios.get(url).then(resp => {
    if (resp.status === 200) {
      console.log("deu hit");
      fs.appendFileSync('sendhit.txt', url + '\n');
    }
  }).catch(err => {
    console.error("Erro ao fazer a requisição:"+url, err.message);
  });
}
