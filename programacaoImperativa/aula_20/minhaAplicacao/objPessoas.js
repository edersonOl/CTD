function Pessoa(sexo, altura)
{
    this.sexo = sexo;
    this.altura = altura;
}

let pessoas = {
    lista : [new Pessoa("F",145),
             new Pessoa("M",150),
             new Pessoa("F",151),
             new Pessoa("F",152),
             new Pessoa("M",155),
             new Pessoa("M",160),
             new Pessoa("F",190),
             new Pessoa("F",195),
             new Pessoa("F",170),
             new Pessoa("F",171),
             new Pessoa("M",166),
             new Pessoa("F",182),
             new Pessoa("F",154),
             new Pessoa("F",177),
             new Pessoa("M",185)],

    extremos : function()
    {
        let maior = 0;
        let menor = 500;
        for(let i = 0; i < this.lista.length; i++)
        {
            if(this.lista[i].altura < menor)
            {
                menor = this.lista[i].altura;
            }

            if(this.lista[i].altura > maior)
            {
                maior = this.lista[i].altura;
            }
        }
        return "A maior altura e " + maior + " e a menor altura e " + menor;
    },

    medias : function()
    {
        let count = 0;
        let acc = 0;
        for(let i = 0; i < this.lista.length; i++)
        {
            if(this.lista[i].sexo.toUpperCase() == "F")
            {
                acc += this.lista[i].altura;
                count++;
            }
        }
        let media = acc / count;
        return "A media de altura das mulheres foi " + media;
    },

    countH : function()
    {
        let count = 0;
        for(let i = 0; i < this.lista.length; i++)
        {
            if(this.lista[i].sexo.toUpperCase() == "M")
            {
                count++;
            }
        }
        return "A quantidade de homens foi " + count;
    }
}

module.exports = pessoas;