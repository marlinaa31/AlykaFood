/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('menu').del();

  await knex('menu').insert([
    {
      id: 3,
      nama: 'Bolen Coklat Keju',
      kategori: 'Snack',
      harga: 30000,
      gambar: '1794965115593.png'
    },
    {
      id: 4,
      nama: 'Risol Mayo Smoke Beef',
      kategori: 'Snack',
      harga: 15000,
      gambar: '1794965149378.jpg'
    },
    {
      id: 5,
      nama: 'Rice Bowl Ayam Sambal Matah',
      kategori: 'Main Course',
      harga: 25000,
      gambar: '1794965179969.jpg'
    },
    {
      id: 6,
      nama: 'Risol Coklat',
      kategori: 'Snack',
      harga: 12000,
      gambar: '1794965202346.jpg'
    }
  ]);
};
