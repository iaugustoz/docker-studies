const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, resp) => {
  resp.send('Aplicação inicializada com sucesso.');
  resp.send('Aplicação rodando em um container.')
});

app.listen(port, () => {
  console.log(`Executando na porta: ${port}`);
});
