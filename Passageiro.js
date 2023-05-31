module.exports = class Passageiro {
    constructor(Nome, Sobrenome, CPF, DT_Nascimento) {
        this._Nome = Nome;
        this._Sobrenome = Sobrenome;
        this._CPF = CPF;
        this._Data_de_Nascimento = DT_Nascimento;
    }

    getNome() {
        return this._Nome;
    }

    getSobrenome() {
        return this._Sobrenome;
    }

    getCPF() {
        return this._CPF;
    }

    getDataDeNascimento() {
        return this._Data_de_Nascimento;
    }

    setNome(N) {
        this._Nome = N;
        return this._Nome;
    }

    setSobrenome(N) {
        this._Sobrenome = N;
        return this._Sobrenome;
    }

    setCPF(N) {
        this._CPF = N;
        return this._CPF;
    }

    setDataDeNascimento(N) {
        this._Data_de_Nascimento = N;
        return this._Data_de_Nascimento;
    }

}