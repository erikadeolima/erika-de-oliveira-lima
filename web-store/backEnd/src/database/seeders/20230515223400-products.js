module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        id: 1,
        name: "Agenda com caneta Pollen",
        url_image: "http://localhost:3001/Produtos/agenda.png",
        value: 70,
      },
      {
        id: 2,
        name: "Caneca 400ml Pollen",
        url_image: "http://localhost:3001/Produtos/Caneca_de_porcelana.png",
        value: 50,
      },
      {
        id: 3,
        name: "Copo térmico de inox 500ml",
        url_image: "http://localhost:3001/Produtos/Copo_Termico_Inox.png",
        value: 70,
      },
      {
        id: 4,
        name: "Garrafa de Inox 500ml",
        url_image: "http://localhost:3001/Produtos/garrafa.jpg",
        value: 50,
      },
      {
        id: 5,
        name: "Abelhinha BEES de pelúcia",
        url_image: "http://localhost:3001/Produtos/pelucia.webp",
        value: 60,
      },
      {
        id: 6,
        name: "Power Bank 10000mAh Pollen",
        url_image: "http://localhost:3001/Produtos/power.jpeg",
        value: 70,
      },
      {
        id: 7,
        name: "Mochila Antifurto Pollen",
        url_image: "http://localhost:3001/Produtos/mochila.jpg",
        value: 100,
      },
      {
        id: 8,
        name: "Kit dia-a-dia Pollen (Moleskine, Garrafa Térmica e Mochila Eco)",
        url_image: "http://localhost:3001/Produtos/kit.jpg",
        value: 150,
      },
      {
        id: 9,
        name: "Kit Executivo Pollen (Moleskine, Caneta e Porta-Cartão Anti RFID)",
        url_image: "http://localhost:3001/Produtos/kit2.jpg",
        value: 150,
      },
      {
        id: 10,
        name: "Geladeira Portátil Capacidade 6 Latas",
        url_image: "http://localhost:3001/Produtos/geladeira.jpg",
        value: 2000,
      },
    ], { timestamps: false });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};