const express = require('express');
const router = express.Router();
const bd = require('../bd/bd_utils.js');
const VotoRepository = require('../repositories/VotoRepository.js');
const VotoService = require('../services/VotoService.js');

// Instanciando as dependências e injetando-as (DIP na prática)
const votoRepository = new VotoRepository(bd);
const votoService = new VotoService(votoRepository);

// Princípio OCP: Esta rota vive em seu próprio arquivo isolado.
router.post('/:id_pergunta', (req, res) => {
  try {
    const idPergunta = req.params.id_pergunta;
    const { tipo } = req.body; // Espera 'upvote' ou 'downvote'
    
    const resultado = votoService.votar(idPergunta, tipo);
    res.status(200).json(resultado);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
});

module.exports = router;