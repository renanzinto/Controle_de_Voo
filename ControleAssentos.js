const Passageiro = require("./Passageiro");

module.exports = class ControleAssentos {
    constructor() {
        this.Assentos = []
    }

    adicionarPassageiro(Num_Assento, Passageiro) {
        if (this.Assentos.length < 200) {
            if (this.Assentos[Num_Assento] == null) {
                this.Assentos[Num_Assento] = Passageiro;

                /*
                this.Assentos.splice(Num_Assento, 0, Passageiro)
                return this.Assentos;
                */

            }
            else {

                console.log("O assento está ocupado")
            }
        }
        else {
            console.log("O voo está lotado!")
        }
    }

    removerPassagero(Passageiro) {

        this.Assentos[this.Assentos.indexOf(Passageiro)] = null;
    }

    modificarAssento(destino, Passageiro) {
        if (this.Assentos[destino] == null) {
            /**this.Assentos.splice(this.Assentos.indexOf(Passageiro), 1) */
            this.Assentos[this.Assentos.indexOf(Passageiro)] = null;
            this.Assentos[destino] = Passageiro;
        }
        else {
            console.log("O assento está ocupado")
        }
    }
    toString(NmVoo) {
        for (let i = 0; i < this.Assentos.length; i++) {
            console.log("-------------------------------------------------\n")
            console.log("Nome: " + this.Assentos[i]._Nome + "\n")
            console.log("Sobrenome: " + this.Assentos[i]._SobreNome + "\n ")
            console.log("CPF: " + this.Assentos[i]._CPF + "\n")
            console.log("Data de Nascimento: " + this.Assentos.length[i]._Data_de_Nascimento)
            console.log("-------------------------------------------------\n")


        }
    }
}



/**
 * 
/**
 *modificarPosicao(Num_Assento, novo_assento) {
    if (this.Assentos[novo_assento] == null) {
        var X = 0;
        X = this.Assentos[Num_Assento];
        this.Assentos.splice(this.Assentos.indexOf( Num_Assento, 1))
        this.Assentos[novo_assento] = X;
    }
    else{
        console.log("O assento está ocupado")
    }
}
 */

/*
    Não deu tempo de fazer um "toString" descente


modificarAssento(destinho,Passageiro) [executar com vooo]{
   if (this.Assentos[destino] == null) {
            this.Assentos.splice(this.Assentos.indexOf(Passageiro), 1)
            this.Assentos[destino] = Passageiro;
        }
        else{
            console.log("O assento está ocupado")
        }


 */
