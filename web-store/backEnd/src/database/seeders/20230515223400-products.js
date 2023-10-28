module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        id: 1,
        name: "Agenda com caneta",
        url_image: "http://localhost:3001/Produtos/agenda.jpg",
        value: 40,
        description: "Uma agenda elegante com uma caneta sofisticada, perfeita para organizar seu dia com estilo."
      },
      {
        id: 2,
        name: "Caneca 400ml de porcelana",
        url_image: "http://localhost:3001/Produtos/Caneca_de_porcelana.png",
        value: 50,
        description: "Caneca de porcelana com 400ml, ideal para desfrutar suas bebidas favoritas com conforto e elegância."
      },
      {
        id: 3,
        name: "Copo térmico de inox 500ml Coleman",
        url_image: "http://localhost:3001/Produtos/Copo_Termico_Inox.png",
        value: 100,
        description: "Copo térmico de inox Coleman, mantendo suas bebidas quentes ou frias por mais tempo, perfeito para aventuras."
      },
      {
        id: 4,
        name: "Garrafa de Inox 500ml",
        url_image: "http://localhost:3001/Produtos/garrafa.jpg",
        value: 70,
        description: "Garrafa de inox 500ml, durável e estilosa, mantendo suas bebidas na temperatura ideal onde quer que você vá."
      },
      {
        id: 5,
        name: "Mouse ergonômico",
        url_image: "http://localhost:3001/Produtos/mouse.jpg",
        value: 150,
        description: "Mouse ergonômico, proporcionando conforto e precisão para suas horas de trabalho ou diversão no computador."
      },
      {
        id: 6,
        name: "Teclado com trackpad dobrável",
        url_image: "http://localhost:3001/Produtos/teclado.jpg",
        value: 100,
        description: "Teclado dobrável com trackpad, uma solução compacta e prática para suas necessidades de digitação em movimento."
      },
      {
        id: 7,
        name: "Mochila Notebook",
        url_image: "http://localhost:3001/Produtos/mochila.jpg",
        value: 100,
        description: "Mochila para notebook, com design moderno e compartimentos inteligentes para manter seus dispositivos organizados."
      },
      {
        id: 8,
        name: "Kit dia-a-dia Personalizável(Agenda permanente e Garrafa Térmica)",
        url_image: "http://localhost:3001/Produtos/kit.jpg",
        value: 70,
        description: "Kit dia-a-dia personalizável com agenda permanente e garrafa térmica, ideal para encarar o cotidiano com praticidade."
      },
      {
        id: 9,
        name: "Kit Executivo Pollen (Moleskine, Caneta e Chaveiro rastreável)",
        url_image: "http://localhost:3001/Produtos/kit2.jpg",
        value: 250,
        description: "Kit Executivo Pollen com Moleskine, caneta e chaveiro rastreável, um conjunto elegante para profissionais exigentes."
      },
      {
        id: 10,
        name: "Geladeira Portátil Capacidade 6 Latas",
        url_image: "http://localhost:3001/Produtos/geladeira.jpg",
        value: 2000,
        description: "Geladeira portátil com capacidade para 6 latas, perfeita para manter suas bebidas geladas em qualquer lugar."
      }
    ]
      , { timestamps: false });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};