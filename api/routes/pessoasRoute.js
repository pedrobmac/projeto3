const { Router } = require("express")
const { route } = require("..")
const PessoaController = require("../controllers/PessoaController")

const router = Router()

router
    .get("/pessoas", PessoaController.pegaPessoasAtivas)
    .get("/pessoas/todos", PessoaController.pegaTodasAsPessoas)
    .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
    .get("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.pegaUmaMatricula)
    .get("/pessoas/:estudanteId/matriculas", PessoaController.pegaMatriculas)
    .post("/pessoas", PessoaController.criaPessoa)
    .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
    .post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
    .post("/pessoas/:estudanteId/matricula/:matriculaId/restaura", PessoaController.restauraMatricula)
    .put("/pessoas/:id", PessoaController.atualizaPessoa)
    .put("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.atualizaMatricula)
    .delete("/pessoas/:id", PessoaController.apagaPessoa)
    .delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.apagaMatricula)

module.exports = router