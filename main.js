const caixaPrincial = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('texto-resultado');

const perguntas = [
    {
        enunciado: "texto01",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    },
    {
        enunciado: "texto02",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    },
    {
        enunciado: "texto03",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    },
    {
        enunciado: "texto04",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    },
    {
        enunciado: "texto05",
        alternativas: [
            "alternativa01",
            "alternativa02"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraPergunta();
}

function mostrAltenativas(){
    for( const alternativa of perguntaAtual.alternativa){
        const BotaoAltenativas = document.createElement("button");
        BotaoAltenativas.textContent =alternativa;
        caixaAlternativas.appendChild(BotaoAltenativas)
    }
}
 mostraPergunta();


