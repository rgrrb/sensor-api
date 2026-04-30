const express = require('express');
const app = express();

let dados = [];

const port = process.env.PORT || 8080;

app.get("/sensor", (require, response) => {
    const { temp , hum } = require.query;

    if (!temp || !hum){
        return response.status(400).send(
            "Dados inválidos"
        );
    }

    const leitura = {
        temperatura: temp,
        umidade: hum,
        data: new Date()
    };

    dados.push(leitura);

    console.log(leitura);

    response.send("OK");

});

app.get("/dados", (require, response) =>{
    response.json(dados);
});

app.listen(port => {
    console.log(`Servidor rodando na porta ${port}`);
});
