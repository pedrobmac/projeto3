const { Router } = require("express")
const { route } = require("..")
const PessoaController = require("../controllers/PessoaController")

const router = Router()

router.get("/pessoas", PessoaController.pegaTodasAsPessoas)

module.exports = router