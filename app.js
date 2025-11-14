
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();
app.use(cors({
  origin: "https://frontend-ten-dusky-31.vercel.app"
}));


app.get("/", (req, res) => {
  res.json({
    Testando: "Se isso aparecer é porque deu certo o deploy automatico",
    message: "API está rodando! Para utilizá-la, siga o passo a passo abaixo:",
    passo_a_passo: [
      "1. Use os endpoints /soma, /subtracao, /multiplicacao ou /divisao.",
      "2. Envie os parâmetros num1 e num2 via query string, exemplo: /soma?num1=10&num2=5.",
      "3. O resultado será retornado em formato JSON.",
      "4. Para divisão, se num2 for 0, será retornado erro de divisão por zero."
    ],
    exemplos: {
      soma: "/soma?num1=10&num2=5",
      subtracao: "/subtracao?num1=10&num2=5",
      multiplicacao: "/multiplicacao?num1=10&num2=5",
      divisao: "/divisao?num1=10&num2=5"
    }
  });
});


//Adicionar novas funcionalidades


app.get("/multiplicacao", (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) * parseFloat(num2);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});

app.get("/soma", (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) + parseFloat(num2);
  res.json({ result });
});