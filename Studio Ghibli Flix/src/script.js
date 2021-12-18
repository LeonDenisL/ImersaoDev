var coletanea = document.querySelector("#coletanea");
var arrayAnimes = [];
var listaFilmes = ["Nausicaä do Vale do Vento (1984)", "O Castelo no Céu (1986)", "Meu Amigo Totoro (1988)", "Túmulo dos Vagalumes (1988)", "O Serviço de Entregas da Kiki (1989)", "Memórias de Ontem (1991)", "Porco Rosso: O Último Herói Romântico (1992)", "Sussurros do Coração (1995)", "PomPoko: A Grande Batalha dos Guaxinins (1994)", "Sussurros do Coração (1995)", "Princesa Mononoke (1997)", "Meus Vizinhos os Yamadas (1999)", "A Viagem de Chihiro (2001)", "O Reino dos Gatos (2002)", "O Castelo Animado (2004)", "Contos de Terramar (2006)", "Ponyo: Uma Amizade Que Veio do Mar (2008)", "O Mundo dos Pequeninos (2010)", "Da Colina Kokuriko (2011)", "Vidas ao Vento (2013)", "O Conto da Princesa Kaguya (2013)", "As Memórias de Marnie (2014)", "Aya e a Bruxa (2020)"]

var imagemFilmes = ["https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1984-Nausica%C3%A4-do-Vale-do-Vento.jpg?w=279&ssl=1", "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1986-O-Castelo-no-C%C3%A9u.jpg?w=279&ssl=1", "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1988-Meu-Amigo-Totoro.jpg?w=279&ssl=1", "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/T%C3%BAmulo-dos-Vagalumes.jpg?w=279&ssl=1", "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1989-O-Servi%C3%A7o-de-Entregas-da-Kiki.jpg?w=279&ssl=1", "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Mem%C3%B3rias-de-Ontem.jpg?w=279&ssl=1", "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1992-Porco-Rosso.jpg?w=279&ssl=1", "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Eu-Posso-Ouvir-o-Oceano.jpg?w=279&ssl=1", "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Pom-Poko.jpg?w=279&ssl=1", "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Sussurros-do-Cora%C3%A7%C3%A3o.jpg?w=279&ssl=1", "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/1997-Princesa-Mononoke.jpg?w=279&ssl=1", "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Meus-Vizinhos-os-Yamadas-1.jpg?w=279&ssl=1", "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2001-A-Viagem-de-Chihiro.jpg?w=279&ssl=1", "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/O-Reino-dos-Gatos.jpg?w=279&ssl=1", "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2004-O-Castelo-Animado.jpg?w=279&ssl=1", "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Contos-de-Terramar.jpg?w=279&ssl=1", "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2008-Ponyo.jpg?w=279&ssl=1", "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/O-Mundo-dos-Pequeninos.jpg?w=279&ssl=1", "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/Da-Colina-Kokuriko.jpg?w=279&ssl=1", "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/2013-Vidas-ao-Vento.jpg?w=279&ssl=1", "https://i1.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/O-Conto-da-Princesa-kaguya.jpg?w=279&ssl=1", "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/06/As-Mem%C3%B3rias-de-Marnie.jpg?w=279&ssl=1", "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/08/Aya-e-a-Bruxa-Ghibli-filme.jpg?w=279&ssl=1"]


for (i = 0; i < listaFilmes.length; i ++){
arrayAnimes.push(
    "<div class='coletanea_anime'>"+
      "<img src=" + imagemFilmes[i] + ">" +
      "<h2 class='coletanea_anime_text'>"+ listaFilmes[i]+"</h2>"+
    "</div>"   
  );
}

coletanea.innerHTML = arrayAnimes.join('');

//Leon Denis Silvestre de Lucena
//Aula 4 - Alura




