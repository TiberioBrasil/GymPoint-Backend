module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Aluno Exemplo',
          email: 'alunoexemplo@email.com',
          birth: new Date('1983-11-30 10:20:00'),
          weight: 100,
          height: 1.85,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
