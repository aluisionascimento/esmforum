## Instalação do Backend
## Configuração do Ambiente

Primeiro, clone o repositório:
### 1. Fork dos Repositórios

``` git clone https://github.com/mtov/esmforum.git```
Para iniciar, faça um "fork" dos repositórios oficiais para a sua conta GitHub. Isso permite que você tenha sua própria cópia dos projetos para trabalhar.

Em seguida, instale a versão mais recente do Node.js. Mais informações [aqui](https://nodejs.org/en/download).
*   **Backend (ESM Forum):** [Link para o repositório original do backend](https://github.com/mtov/esmforum.git)
    *   Acesse o link, clique no botão "Fork" no canto superior direito e siga as instruções.
*   **Frontend (ESM Forum React):** [Link para o repositório original do frontend](https://github.com/mtov/esmforum-react)
    *   Acesse o link, clique no botão "Fork" no canto superior direito e siga as instruções.

Após o fork, você terá seus próprios repositórios, por exemplo:
*   `https://github.com/SEU_USUARIO/esmforum.git`
*   `https://github.com/SEU_USUARIO/esmforum-react.git`

### 2. Instalação e Execução do Backend

Primeiro, clone o seu repositório forked do backend:

```console
git clone https://github.com/SEU_USUARIO/esmforum.git
cd esmforum
```
*(Substitua `SEU_USUARIO` pelo seu nome de usuário no GitHub.)*

Em seguida, instale a versão mais recente do Node.js. Mais informações aqui.

Instale também as dependências do projeto:

```console
npm install 
npm install
```

Você também vai precisar do `sqlite`. Para testar se ele já está instalado, use: `sqlite3 --version`. 
**Observações sobre `npm install`:**
Durante a instalação, você pode notar mensagens de `npm warn deprecated` e `vulnerabilities`. Embora o projeto possa funcionar, é uma boa prática tentar resolver essas questões:
*   Para as vulnerabilidades, execute: `npm audit fix --force`
*   Para os warnings de `deprecated`, a solução geralmente envolve a atualização das dependências do projeto para versões mais recentes que não utilizem pacotes obsoletos. Isso pode exigir modificações no `package.json` e `package-lock.json`.

Se o sqlite não estiver instalado,  verifique no site da sua distribuição como fazer essa instalação. Por exemplo, para distribuições Debian, basta usar:
Você também vai precisar do `sqlite`. Para testar se ele já está instalado, use: `sqlite3 --version`.

Se o sqlite não estiver instalado, verifique no site da sua distribuição como fazer essa instalação. Por exemplo, para distribuições Debian, basta usar:

```console
sudo apt install sqlite3
```

## Execução do Backend

Para executar o servidor, digite no diretório raiz:

``` node server.js```

Se em algum momento você quiser "zerar" o banco de dados do sistema, você pode usar:

```
cd bd
./criar_bd.sh
```

## Instalação e Execução do Frontend

Veja informações neste [repositório](https://github.com/mtov/esmforum-react).
