import express from 'express';
import { readProduct, readProductById, addProduct, updateProduct, deleteProduct } from './businessrules.js';
import Joi from 'joi';


const app = express();

app.use(express.json());

const port = 1234;

const productSchema = Joi.object({
    name: Joi.string().min(1).required().messages({
        'string.empty' : 'Nome é obrigatório',
    }),
    price: Joi.number().greater(0.99).required().messages({
        'number.base' : 'Preço deve ser um número',
        'number.greater' : 'Preço deve ser maior que 0'
    })
})


//consulta
app.get("/products", (req, res) => {
    res.json(readProduct())
})


//consulta por id
app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = readProductById(id);
    
    if(product) {
        res.json(product);
    } else {
        res.json(({ message: "Produto não encontrado" }));
    }
})

// criação de um novo produto
app.post("/products", (req, res) => {
    
    const { error } = productSchema.validate(req.body);
    
    if (error) {
        return res.status(404).json({ message: error.details[0].message })
    }
    
    const { name, price } = req.body;
    
    addProduct(name, price);
    res.json("Produto adicionado"); 
})

// atualizar um produto
app.put("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedProduct = req.body;
   
    const { error } = productSchema.validate(req.body);

    if (error) {
        return res.status(404).json({ message: error.details[0].message })
    }
    
    const product = readProductById(id);

    if (!product) {
        return res.status(404).json({ message: "Insira um ID válido" })
    }

    const updated = updateProduct(id, updatedProduct);
    res.json(updated) 
})

// excluir um produto
app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const deleted = deleteProduct(id);

    if (deleted) {
        res.json(deleted);
    } else {
        res.json({message: "Erro ao deletar o produto"})
    }
 
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})