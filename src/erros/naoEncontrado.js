import ErroBase from "./ErroBase.js";

class naoEncontrado extends ErroBase {
    constructor(mensagem = "página não encontrada") {
        super(mensagem, 404);
    }
}

export default naoEncontrado;