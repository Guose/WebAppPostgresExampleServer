/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Users').del()
  await knex('Users').insert([
    { username: 'Justin Elder', email: 'justin@showcasemi.com', age: 44 },
    { username: 'Kathleen Lordan-Morris', email: 'cuggle1008@gmail.com', age: 53 },
    { username: 'Pete Carroll', email: 'pete.carroll@theseahawks.com', age:99 }
  ]);
};
