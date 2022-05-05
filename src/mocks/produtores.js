import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jennyjack from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';
import salad from '../assets/produtores/salad.png';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min +1) + min);
}

const produtores = {
  titulo: "Produtores",
  lista: [
    { 
      name: "Green",
      imagem: green,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5)
    },
    { 
      name: "Grow",
      imagem: grow,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5)
    },
    { 
      name: "Jenny jack",
      imagem: jennyjack,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5)
    },
    { 
      name: "Potager",
      imagem: potager,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5)
    },
    { 
      name: "Salad",
      imagem: salad,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5)
    },
  ]
}

export default produtores