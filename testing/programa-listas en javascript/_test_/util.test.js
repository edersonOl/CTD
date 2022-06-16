const { generateText, createElement, validateInput } = require('../util')

describe('Testes da função de geração de texto', () => {
    it ('Gerador de nome e idade - Teste Positivo', () => {
        let text = generateText('Rafael Brito', 30);
        expect(text).toBe('Rafael Brito (30 years old)');
    });
    
    it ('Sáida de dados vazios - Teste Negativo', () => {
        let text = generateText('', null);
        expect(text).toBe(' (null years old)');
    });

    it ('Saída sem dados - Teste Negativo', () => {
        let text = generateText();
        expect(text).toBe('undefined (undefined years old)');
    });

    it ('A idade aceita somente números positivos - Teste positivo', () => {
        let name = 'Ederson';
        let age = 20;
        let text = generateText(name, age);
        expect(age).toBeGreaterThanOrEqual(0);
    });

    it ('A idade não aceita números negativos - Teste Negativo', () => {
        let name = 'Ederson';
        let age = -20;
        let text = generateText(name, age);
        expect(age).toBeGreaterThanOrEqual(0);
    });

});

describe('Testes da função de criação de elemento com o DOM - Teste Positivo', () => {
        it('Gerando elementos', () => {
            let tipo = "li"; 
            let texto = "Digital House";
            let classe = "teste_1";
            let elemento1 = createElement(tipo,texto,classe);
            expect(elemento1).toBe('<li class= "teste_1"> Digital House </li>');
        });

});

describe('Testes da função de validação dos dados de entrada', () => {
        it('Validando texto', () =>{
            let texto = 'Teste mesa de trabalho';
            let validacao = validateInput(texto);
            expect(validacao).toBeTruthy();
        });

        it('Validando entrada vazia', () =>{
            let validacao = validateInput();
            expect(validacao).toBeFalsy();
        });

        it('Validando se o texto está vazio', () =>{
            let eNumero = false;
            let naoVazio = true;
            let texto = " "
            let validacao = validateInput(texto, naoVazio, eNumero);
            expect(validacao).toBeFalsy();
        })

        it('Validando se é número', () =>{
            let eNumero = true;
            let texto = "Verifica se texto não é um número"
            let validacao = validateInput(texto, false, eNumero);
            expect(validacao).toBeFalsy();
        })

});