const arrayFilmes = [];

function active_sidebar(style_display) {
    const navlist = document.getElementById("navlist");
    const icon = document.getElementById("sidebar-button-icon");

    if (navlist.classList.contains("show")) {
        navlist.classList.remove("show");
        icon.innerHTML = "▶";
        icon.style.paddingLeft = "5px";
        icon.style.paddingRight = "0";
    } else {
        navlist.classList.add("show");
        icon.innerHTML = "◀";
        icon.style.paddingLeft = "0";
        icon.style.paddingRight = "5px";
    }
}

function teste(stylevalue) {
    alert(stylevalue);
}

/* imagemCapa, linkTrailer,
this.imagemCapa = imagemCapa;
this.linkTrailer = linkTrailer;
 */
function filme(imagemCapa, titulo, descricao, duracao, anoLancamento, genero, diretor) {
    this.imagemCapa = imagemCapa;
    this.titulo = titulo;
    this.descricao = descricao;
    this.duracao = duracao;
    this.anoLancamento = anoLancamento;
    this.genero = genero;
    this.diretor = diretor;
} 

// Filmes de Fantasia
arrayFilmes[0] = new filme(
    "https://posters.movieposterdb.com/22_06/2001/120737/l_120737_0ff31144.jpg",
    "O Senhor dos Anéis: A Sociedade do Anel",
    "Um jovem hobbit chamado Frodo recebe a missão de destruir o Anel do Poder, que tem o potencial de corromper o mundo.",
    "178 minutos",
    2001,
    "Fantasia, Aventura",
    "Peter Jackson"
);

arrayFilmes[1] = new filme(
    "https://posters.movieposterdb.com/13_02/2001/241527/l_241527_da927a3d.jpg",
    "Harry Potter e a Pedra Filosofal",
    "Harry Potter, um garoto órfão, descobre que é um bruxo e embarca em uma jornada mágica em Hogwarts.",
    "152 minutos",
    2001,
    "Fantasia, Aventura",
    "Chris Columbus"
);

arrayFilmes[2] = new filme(
    "https://posters.movieposterdb.com/05_11/2005/0363771/s_69423_0363771_4c3f4823.jpg",
    "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
    "Quatro irmãos são transportados para o mundo mágico de Nárnia, onde devem lutar contra uma feiticeira para salvar o reino.",
    "143 minutos",
    2005,
    "Fantasia, Aventura",
    "Andrew Adamson"
);

arrayFilmes[3] = new filme(
    "https://posters.movieposterdb.com/07_10/2007/486655/l_486655_8f4242f5.jpg",
    "Stardust - O Mistério da Estrela",
    "Um jovem parte em uma aventura para encontrar uma estrela cadente e descobre um mundo de magia e mistério.",
    "127 minutos",
    2007,
    "Fantasia, Aventura",
    "Matthew Vaughn"
);

arrayFilmes[4] = new filme(
    "https://posters.movieposterdb.com/10_02/2010/1014759/l_1014759_2e9e14fc.jpg",
    "Alice no País das Maravilhas",
    "Alice segue um coelho branco e cai em um mundo fantástico onde encontra várias criaturas excêntricas.",
    "108 minutos",
    2010,
    "Fantasia, Aventura",
    "Tim Burton"
);

arrayFilmes[5] = new filme(
    "https://posters.movieposterdb.com/07_12/2007/385752/l_385752_53208494.jpg",
    "A Bússola de Ouro",
    "Lyra Belacqua embarca em uma jornada para resgatar seu amigo e descobrir segredos sobre um misterioso fenômeno.",
    "113 minutos",
    2007,
    "Fantasia, Aventura",
    "Chris Weitz"
);

arrayFilmes[6] = new filme(
    "https://posters.movieposterdb.com/12_11/2012/903624/l_903624_f5449541.jpg",
    "O Hobbit: Uma Jornada Inesperada",
    "Bilbo Bolseiro se junta a um grupo de anões para recuperar um tesouro roubado de um dragão.",
    "169 minutos",
    2012,
    "Fantasia, Aventura",
    "Peter Jackson"
);

arrayFilmes[7] = new filme(
    "https://posters.movieposterdb.com/10_05/1991/101414/l_101414_6b336879.jpg",
    "A Bela e a Fera",
    "A história de uma jovem que, após ser aprisionada por uma fera, descobre que o monstro esconde um grande segredo.",
    "84 minutos",
    1991,
    "Fantasia, Animação, Musical",
    "Gary Trousdale, Kirk Wise"
);

arrayFilmes[8] = new filme(
    "https://posters.movieposterdb.com/09_12/2010/814255/l_814255_4267c646.jpg",
    "Percy Jackson e o Ladrão de Raios",
    "Percy Jackson descobre que é um semideus e parte em uma missão para evitar uma guerra entre os deuses.",
    "118 minutos",
    2010,
    "Fantasia, Aventura",
    "Chris Columbus"
);

arrayFilmes[9] = new filme(
    "https://posters.movieposterdb.com/08_03/2006/457430/l_457430_25fc0ba0.jpg",
    "O Labirinto do Fauno",
    "Em um cenário sombrio da Espanha pós-guerra, uma jovem encontra um misterioso fauno e embarca em uma missão para salvar sua mãe.",
    "118 minutos",
    2006,
    "Fantasia, Drama, Guerra",
    "Guillermo del Toro"
);

// Filmes de Romance
arrayFilmes[10] = new filme(
    "https://posters.movieposterdb.com/12_06/1997/120338/l_120338_80e415d1.jpg",
    "Titanic",
    "A história de amor entre Jack e Rose, dois passageiros de classes sociais diferentes, a bordo do infame navio Titanic.",
    "195 minutos",
    1997,
    "Romance, Drama",
    "James Cameron"
);

arrayFilmes[11] = new filme(
    "https://posters.movieposterdb.com/11_10/2009/1259571/l_1259571_2c6e71f0.jpg",
    "A Saga Crepúsculo: Lua Nova",
    "Bella Swan lida com a separação de Edward Cullen e descobre novos mistérios em torno dos vampiros.",
    "130 minutos",
    2009,
    "Romance, Drama, Fantasia",
    "Chris Weitz"
);

arrayFilmes[12] = new filme(
    "https://posters.movieposterdb.com/06_02/2004/0332280/l_93540_0332280_822548cb.jpg",
    "O Diário de uma Paixão",
    "A história de um amor eterno entre Noah e Allie, superando obstáculos ao longo de muitos anos.",
    "123 minutos",
    2004,
    "Romance, Drama",
    "Nick Cassavetes"
);

arrayFilmes[13] = new filme(
    "https://posters.movieposterdb.com/08_05/2008/795421/l_795421_41b5b342.jpg",
    "Mamma Mia!",
    "Donna e sua filha Sophie se preparam para o casamento, enquanto relembram o passado com músicas do ABBA.",
    "108 minutos",
    2008,
    "Romance, Musical, Comédia",
    "Phyllida Lloyd"
);

arrayFilmes[14] = new filme(
    "https://posters.movieposterdb.com/21_03/2016/3783958/l_3783958_5b4e61b6.jpg",
    "La La Land",
    "A história de um romance entre uma atriz e um músico enquanto buscam seus sonhos em Los Angeles.",
    "128 minutos",
    2016,
    "Romance, Musical, Drama",
    "Damien Chazelle"
);

arrayFilmes[15] = new filme(
    "https://posters.movieposterdb.com/14_01/2007/431308/l_431308_9427f00f.jpg",
    "P.S. Eu Te Amo",
    "Após a morte de seu marido, Holly recebe cartas dele, guiando-a em sua jornada de luto e autodescoberta.",
    "126 minutos",
    2007,
    "Romance, Drama",
    "Richard LaGravenese"
);

arrayFilmes[16] = new filme(
    "https://xl.movieposterdb.com/10_07/2010/1322312/xl_1322312_8fb57fa2.jpg",
    "Amor à Distância",
    "Erin e Garrett, que vivem em cidades diferentes, tentam manter o relacionamento à distância enquanto enfrentam desafios.",
    "108 minutos",
    2010,
    "Romance, Comédia",
    "Nanette Burstein"
);

arrayFilmes[17] = new filme(
    "https://xl.movieposterdb.com/09_02/1997/119738/xl_119738_1bf374f1.jpg",
    "O Casamento do Meu Melhor Amigo",
    "Julianne percebe que está apaixonada por seu melhor amigo, mas ele está prestes a se casar com outra mulher.",
    "105 minutos",
    1997,
    "Romance, Comédia",
    "P.J. Hogan"
);

arrayFilmes[18] = new filme(
    "https://xl.movieposterdb.com/21_07/1995/112471/xl_112471_2ea0fa18.jpg?v=2024-12-06%2019:40:51",
    "Antes do Amanhecer",
    "Dois estranhos se encontram em um trem e decidem passar uma noite juntos explorando Viena.",
    "101 minutos",
    1995,
    "Romance, Drama",
    "Richard Linklater"
);

arrayFilmes[19] = new filme(
    "https://xl.movieposterdb.com/20_07/2013/2194499/xl_2194499_e504b853.jpg",
    "Questão de Tempo",
    "Tim descobre que pode viajar no tempo e usa esse poder para melhorar sua vida e seu relacionamento.",
    "123 minutos",
    2013,
    "Romance, Comédia, Drama",
    "Richard Curtis"
);

// Filmes de Terror
arrayFilmes[20] = new filme(
    "https://xl.movieposterdb.com/13_03/1973/70047/xl_70047_b645070a.jpg?v=2024-09-27%2003:22:21",
    "The Exorcist",
    "Uma jovem garota é possuída por uma entidade demoníaca, e um sacerdote tenta exorcizá-la.",
    "122 minutos",
    1973,
    "Terror, Drama",
    "William Friedkin"
);

arrayFilmes[21] = new filme(
    "https://posters.movieposterdb.com/15_04/1960/54215/l_54215_77e77075.jpg",
    "Psycho",
    "A história de Norman Bates e os terríveis segredos escondidos em seu motel.",
    "109 minutos",
    1960,
    "Terror, Mistério",
    "Alfred Hitchcock"
);

arrayFilmes[22] = new filme(
    "https://xl.movieposterdb.com/07_10/1980/81505/xl_81505_05adf1a6.jpg?v=2024-08-22%2023:46:26",
    "The Shining",
    "Jack Torrance, um escritor, aceita um trabalho como zelador de um hotel isolado e se vê possuído por forças sobrenaturais.",
    "146 minutos",
    1980,
    "Terror, Mistério",
    "Stanley Kubrick"
);

arrayFilmes[23] = new filme(
    "https://posters.movieposterdb.com/09_11/2007/1179904/l_1179904_fd57cd33.jpg",
    "Atividade Paranormal",
    "Um casal se depara com eventos sobrenaturais em sua casa e tenta descobrir a origem das ocorrências.",
    "86 minutos",
    2007,
    "Terror, Sobrenatural",
    "Oren Peli"
);

arrayFilmes[24] = new filme(
    "https://posters.movieposterdb.com/13_02/2013/1457767/s_1457767_cd897023.jpg",
    "Invocação do Mal",
    "Baseado em eventos reais, um casal de investigadores paranormais enfrenta uma entidade demoníaca em uma casa assombrada.",
    "112 minutos",
    2013,
    "Terror, Mistério",
    "James Wan"
);

arrayFilmes[25] = new filme(
    "https://posters.movieposterdb.com/20_06/2021/10922778/xl_10922778_292260c3.jpg?v=2020-06-08%2023:05:47",
    "The Blair Witch Project",
    "Três cineastas se perdem enquanto filmam um documentário sobre uma lenda urbana na floresta de Maryland.",
    "81 minutos",
    1999,
    "Terror, Mistério",
    "Daniel Myrick, Eduardo Sánchez"
);

arrayFilmes[26] = new filme(
    "https://xl.movieposterdb.com/22_11/1972/68132/xl_the-sixth-sense-movie-poster_9adf47ff.jpg?v=2022-11-01%2006:42:37",
    "The Sixth Sense",
    "Cole Sear é uma criança que vê espíritos, e um psicólogo tenta ajudá-lo a entender seus poderes.",
    "107 minutos",
    1999,
    "Terror, Mistério",
    "M. Night Shyamalan"
);

arrayFilmes[27] = new filme(
    "https://posters.movieposterdb.com/20_05/2018/7784604/l_7784604_e1544885.jpg",
    "Hereditary",
    "Após a morte de sua mãe, uma família começa a descobrir segredos assustadores sobre sua linhagem.",
    "127 minutos",
    2018,
    "Terror, Drama",
    "Ari Aster"
);

arrayFilmes[28] = new filme(
    "https://posters.movieposterdb.com/14_12/2013/2321549/l_2321549_d49fee3d.jpg",
    "The Babadook",
    "Uma mãe e seu filho são assombrados por uma entidade maligna que se materializa de um livro infantil.",
    "93 minutos",
    2014,
    "Terror, Suspense",
    "Jennifer Kent"
);

arrayFilmes[29] = new filme(
    "https://posters.movieposterdb.com/08_02/1993/107688/l_107688_588d0b6b.jpg",
    "The Nightmare Before Christmas",
    "Jack Skellington, o rei da Cidade do Halloween, descobre o Natal e tenta recriar a festividade.",
    "76 minutos",
    1993,
    "Terror, Animação, Musical",
    "Henry Selick"
);
