import express from "express";

const app = express();

app.use(express.json());

const produtos: any[] = [];

// CREATE
app.post("/produtos", (req, res) => {
    const produto = req.body;

    produtos.push(produto);

    res.status(201).json(produto);
});

// READ - todos
app.get("/produtos", (req, res) => {
    res.json(produtos);
});

// READ - um
app.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.json(produto);
});

// UPDATE
app.put("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.json(produto);
});

// DELETE
app.delete("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produtos.splice(index, 1);

    res.json({
        mensagem: "Produto removido"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});