// Responsabilidade Única (SRP): Este arquivo só lida com as regras de negócio.
class VotoService {
  
  // Inversão de Dependência (DIP): Depende da abstração do repositório, não do SQLite direto.
  constructor(votoRepository) {
    this.repository = votoRepository;
  }

  votar(idPergunta, tipo) {
    if (tipo !== 'upvote' && tipo !== 'downvote') {
      throw new Error('Tipo de voto inválido. Use upvote ou downvote.');
    }
    if (!idPergunta) {
      throw new Error('ID da pergunta é obrigatório.');
    }
    this.repository.registrarVoto(idPergunta, tipo);
    return { sucesso: true, mensagem: `Voto ${tipo} computado com sucesso.` };
  }
}

module.exports = VotoService;