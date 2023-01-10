const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    if (req.url === '/produto') {
      res.end(
        JSON.stringify({
          message: "Rota de produto",
        })
      );
    }

    if (req.url === '/usuarios'){
      res.end(
        JSON.stringify({
          message: "Rota de usúario",
        })
      )
    }

    res.end(JSON.stringify({
      message: "Qualquer coisa"
    }))
  })
  .listen(3001, () => console.log("Servidor rodando"));