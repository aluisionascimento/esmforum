// Responsabilidade Única (SRP): Este arquivo só lida com o banco de dados.
class VotoRepository {
  
  // Inversão de Dependência (DIP): Recebe a conexão com o banco de fora (injeção).
  constructor(conexaoBd) {
    this.bd = conexaoBd;
    
    // Garante que a tabela exista para a funcionalidade rodar sem erros
    this.bd.exec(`
      CREATE TABLE IF NOT EXISTS votos (
        id_voto INTEGER PRIMARY KEY AUTOINCREMENT,
        id_pergunta INTEGER,
        valor INTEGER
      )
    `, []);
  }

  registrarVoto(idPergunta, tipo) {
    const valor = tipo === 'upvote' ? 1 : -1;
    this.bd.exec('INSERT INTO votos (id_pergunta, valor) VALUES(?, ?)', [idPergunta, valor]);
  }
}

module.exports = VotoRepository;