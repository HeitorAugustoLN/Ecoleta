const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('./src/database/database.db');

database.serialize(() => {
  // database.run(`
  //   CREATE TABLE IF NOT EXISTS places (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     image TEXT,
  //     name TEXT,
  //     address TEXT,
  //     address2 TEXT,
  //     state TEXT,
  //     city TEXT,
  //     items TEXT
  //   );
  // `);
  // const query = `
  //   INSERT INTO places (
  //     image,
  //     name,
  //     address,
  //     address2,
  //     state,
  //     city,
  //     items
  //   ) VALUES (?,?,?,?,?,?,?)
  // `;
  // const values = [
  //   "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  //   "Papersider",
  //   "Guilherme Gemballa, Jardmin América",
  //   "Número 260",
  //   "Santa Catarina",
  //   "Rio do Sul",
  //   "Resíduos Eletrônicos, Lâmpadas",
  // ];
  // function afterInsertData(error) {
  //   if (error) {
  //     console.log(error);
  //   }
  //   console.log("Cadastrado com sucesso!");
  //   console.log(this);
  // }
  // database.run(query, values, afterInsertData);
  // database.all(`SELECT * FROM places`, function (err, rows) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Aqui estão seus registros: ");
  //   console.log(rows);
  // });
  // database.run(`DELETE FROM places WHERE id = ?`, [2], function (err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Registro deletado com sucesso!");
  // });
  // database.run(`DELETE FROM places`, function (err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Registro deletado com sucesso!");
  // });
});

module.exports = database;
