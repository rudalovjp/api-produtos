import Produto from "../models/produto.js"

class ProdutoController{
    static async novoProduto(req, res){
        const { nome, preco, imagem, link_produto, categoria, frete_gratis } = req.body;

        //Validando dados
        if(!nome || !preco || !categoria || !frete_gratis){
            return res.status(400).json({message: 'Nome ... são obrigatórios'})
        }
        try{
            //Ve la no models
            //chama o metodo na classe usuario para criar um novo Usuario
            const produto = await Produto.novoProduto(nome, preco, imagem, link_produto, categoria, frete_gratis)
            res.status(201).json(produto)//retorna o usuario criado com status
        }catch(error){
            console.error('Erro ao criar o produto', error);
            res.status(500).json({message: 'Erro ao criar produto', error: error.message})
        }
    }
}

export default ProdutoController;