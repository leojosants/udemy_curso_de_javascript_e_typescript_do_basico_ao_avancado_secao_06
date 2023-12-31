/****************************************************************************************************************************************/
function ValidadeCPF(cpf_sent) {
    Object.defineProperty(this, 'clean_cpf', {
        enumerable: true,
        get: function () {
            return cpf_sent.replace(/\D+/g, '');
        },
    });
}

ValidadeCPF.prototype.valid = function () {
    if (typeof this.clean_cpf === 'undefined') return false;
    if (this.clean_cpf.length !== 11) return false;
    if (this.isSequence()) return false;

    const partial_cpf = this.clean_cpf.slice(0, -2);
    const digit_1 = this.createDigit(partial_cpf);
    const digit_2 = this.createDigit(partial_cpf + digit_1);
    const new_cpf = partial_cpf + digit_1 + digit_2;

    return new_cpf === this.clean_cpf;
};

ValidadeCPF.prototype.createDigit = function (partial_cpf) {
    const cpf_array = Array.from(partial_cpf);
    let regressive = cpf_array.length + 1;

    const total = cpf_array.reduce((accumulator, value) => {
        accumulator += (regressive * Number(value));
        regressive--;
        return accumulator;
    }, 0);

    const digite = 11 - (total % 11);
    return digite > 9 ? '0' : String(digite);
}

ValidadeCPF.prototype.isSequence = function () {
    const sequence = this.clean_cpf[0].repeat(this.clean_cpf.length);
    return sequence === this.clean_cpf;
};

/****************************************************************************************************************************************/
const instanceateValidadeCPF = (value) => {
    return new ValidadeCPF(value);
};

const dsplayInfo = (validade_cpf, cpf) => {
    let message = 'invalido';
    if (validade_cpf.valid()) { message = 'valido'; }
    console.log(`\nCPF ${cpf} é ${message}`);
};

/****************************************************************************************************************************************/
const cpf = '705.484.450-51';
const validade_cpf = instanceateValidadeCPF(cpf);
dsplayInfo(validade_cpf, cpf);