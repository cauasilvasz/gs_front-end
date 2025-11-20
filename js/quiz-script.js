const quizQuestions = [{
        question: "Qual tecnologia é essencial para a automação de infraestrutura, um tema quente no mercado de DevOps?",
        options: ["React", "Kubernetes", "SQL", "Photoshop"],
        answer: "Kubernetes",
        area: "Tecnologia"
    },
    {
        question: "Qual das seguintes soft skills é mais valorizada para um Gerente de Projetos Ágeis?",
        options: ["Fluência em C++", "Liderança e Comunicação", "Conhecimento em Hardware", "Design Gráfico"],
        answer: "Liderança e Comunicação",
        area: "Área/Soft Skill"
    },
    {
        question: "O conceito de 'Trabalho Remoto' global e distribuído impacta diretamente qual fator do mercado de trabalho?",
        options: ["Preço do café", "Localização geográfica (Cidade)", "Densidade do solo", "Velocidade do vento"],
        answer: "Localização geográfica (Cidade)",
        area: "Futuro do Trabalho"
    },
    {
        question: "Qual linguagem de programação é a mais utilizada para Ciência de Dados e Machine Learning?",
        options: ["HTML", "Python", "Swift", "CSS"],
        answer: "Python",
        area: "Tecnologia"
    },
    {
        question: "Qual tendência do mercado de trabalho foca na colaboração entre humanos e robôs/IA?",
        options: ["Revolução Industrial 2.0", "Hibridismo de Competências", "Jornada 40 horas", "Trabalho Autônomo"],
        answer: "Hibridismo de Competências",
        area: "Futuro do Trabalho"
    },
    {
        question: "Qual ferramenta de design é amplamente usada para criar protótipos e Design Systems no mercado de UX/UI?",
        options: ["GIMP", "Figma", "Excel", "AutoCAD"],
        answer: "Figma",
        area: "Tecnologia"
    },
    {
        question: "Qual é o principal objetivo da metodologia DevOps?",
        options: ["Diminuir a velocidade de entrega", "Integrar e automatizar o desenvolvimento e operações", "Aumentar custos de infraestrutura", "Focar apenas em testes manuais"],
        answer: "Integrar e automatizar o desenvolvimento e operações",
        area: "Área/Metodologia"
    },
    {
        question: "O que significa 'Upskilling' no contexto de desenvolvimento de carreira?",
        options: ["Mudar de cidade", "Aprender novas habilidades para seu cargo atual", "Apenas tirar férias", "Fazer um empréstimo"],
        answer: "Aprender novas habilidades para seu cargo atual",
        area: "Futuro do Trabalho"
    },
    {
        question: "Qual é a principal responsabilidade de um Engenheiro de QA (Quality Assurance) em um projeto de software?",
        options: ["Escrever código de front-end", "Garantir a qualidade e a detecção de bugs", "Gerenciar as finanças do projeto", "Criar logotipos"],
        answer: "Garantir a qualidade e a detecção de bugs",
        area: "Área/Profissão"
    },
    {
        question: "Qual framework JavaScript é conhecido por ser mantido pela Meta (Facebook) e muito usado no Front-End?",
        options: ["Vue.js", "Angular", "React", "Django"],
        answer: "React",
        area: "Tecnologia"
    },
    {
        question: "Qual é a certificação mais comum para quem trabalha com projetos ágeis, como Gerente de Projetos?",
        options: ["Master Chef", "PMP ou CSM", "CBO", "Certificado de Ensino Médio"],
        answer: "PMP ou CSM",
        area: "Área/Certificação"
    },
    {
        question: "A popularização do 5G e da Internet das Coisas (IoT) está impulsionando qual área da computação?",
        options: ["Desenvolvimento de jogos de tabuleiro", "Edge Computing", "Arquitetura de Edifícios", "Jardinagem"],
        answer: "Edge Computing",
        area: "Tecnologia"
    },
    {
        question: "Qual das seguintes atitudes é um exemplo de 'Growth Mindset' (Mentalidade de Crescimento)?",
        options: ["Evitar desafios", "Acreditar que a inteligência é fixa", "Ver falhas como oportunidades de aprendizado", "Desistir após o primeiro erro"],
        answer: "Ver falhas como oportunidades de aprendizado",
        area: "Soft Skill"
    },
    {
        question: "Qual é a função do SQL (Structured Query Language) na maioria dos sistemas de software?",
        options: ["Estilizar páginas web", "Gerenciar e manipular bancos de dados relacionais", "Desenhar interfaces de usuário", "Criar animações 3D"],
        answer: "Gerenciar e manipular bancos de dados relacionais",
        area: "Tecnologia"
    }

]

const quizForm = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-quiz');
const resultsDiv = document.getElementById('quiz-results');

function renderQuiz() {
    if (!quizForm) return;

    quizQuestions.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('quiz-question');

                questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            ${q.options.map(option => `
                <label>
                    <input type="radio" name="question-${index}" value="${option}">
                    ${option}
                </label><br>
            `).join('')}
        `;
        quizForm.appendChild(questionDiv);
    });
}

function checkQuiz(event) {
    event.preventDefault();
    let score = 0;
    const totalQuestions = quizQuestions.length;

    quizQuestions.forEach((q, index) => {
        const selector = `input[name="question-${index}"]:checked`;
        const selectedOption = quizForm.querySelector(selector);

        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    resultsDiv.innerHTML = `Você acertou ${score} de ${totalQuestions} perguntas!`;
}

document.addEventListener('DOMContentLoaded', renderQuiz);

if (submitButton) {
    submitButton.addEventListener('click', checkQuiz);
}