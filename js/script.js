const professionalsData = [
    { id: 1, nome: "Ana Silva", cargo: "Desenvolvedora Front-End Júnior", foto: "/src/assets/imgs/ana.jpg", skills: ["HTML5", "CSS3", "JavaScript", "React"], pessoalAcademico: "22 anos, Formada em Sistemas de Informação (2025).", experienciaTecnica: "Estágio de 1 ano em Web Design. Foco em aplicações SPA com React.", softSkillsHobbies: "Comunicação, Proatividade, Resolução de Problemas. Hobbies: Fotografia e Leitura." },
    { id: 2, nome: "Bruno Costa", cargo: "Especialista em Cloud Computing", foto: "/src/assets/imgs/bruno.jpg", skills: ["AWS", "Azure", "Docker", "Python"], pessoalAcademico: "30 anos, Pós-graduado em Arquitetura de Software.", experienciaTecnica: "7 anos de experiência. Foco em migração e segurança em ambientes multi-cloud.", softSkillsHobbies: "Liderança, Visão Estratégica, Mentoria. Hobbies: Ciclismo e jogos de tabuleiro." },
    { id: 3, nome: "Carla Souza", cargo: "UI/UX Designer", foto: "/src/assets/imgs/carla.jpg", skills: ["Figma", "Design System", "Prototipagem"], pessoalAcademico: "25 anos, Bacharelado em Design Gráfico.", experienciaTecnica: "Criação de interfaces responsivas e testes de usabilidade para 3 projetos de grande porte.", softSkillsHobbies: "Empatia, Criatividade, Atenção ao detalhe. Hobbies: Pintura digital e Yoga." },
    { id: 4, nome: "David Mendes", cargo: "Cientista de Dados", foto: "/src/assets/imgs/david.webp", skills: ["Python", "Machine Learning", "SQL", "Tableau"], pessoalAcademico: "35 anos, Mestrado em Estatística Aplicada.", experienciaTecnica: "5 anos em análise preditiva para o mercado financeiro. Especialista em modelos de risco.", softSkillsHobbies: "Pensamento Crítico, Organização, Aprendizado Contínuo. Hobbies: Xadrez e música clássica." },
    { id: 5, nome: "Eduarda Lima", cargo: "Gerente de Projetos (Scrum)", foto: "/src/assets/imgs/eduarda.jpg", skills: ["Scrum", "Kanban", "JIRA", "Liderança"], pessoalAcademico: "40 anos, Certificação PMP e CSM.", experienciaTecnica: "10 anos liderando equipes ágeis em projetos de transformação digital.", softSkillsHobbies: "Negociação, Gestão de Conflitos, Comunicação. Hobbies: Viagens e jardinagem." },
    { id: 6, nome: "Felipe Góes", cargo: "Engenheiro de DevOps", foto: "/src/assets/imgs/felipe.jpg", skills: ["Kubernetes", "Terraform", "Gitlab CI", "Linux"], pessoalAcademico: "28 anos, Engenheiro de Computação.", experienciaTecnica: "3 anos focados em automação de infraestrutura e pipelines de entrega contínua.", softSkillsHobbies: "Metodologia, Foco em Resultados, Adaptação. Hobbies: Montanhismo e videogames." },
    { id: 7, nome: "Giovana Rios", cargo: "Especialista em Cibersegurança", foto: "/src/assets/imgs/giovana.webp", skills: ["PenTest", "ISO 27001", "Análise de Malware"], pessoalAcademico: "29 anos, Certificação CISSP.", experienciaTecnica: "4 anos em consultoria de segurança, com foco em proteção de dados empresariais.", softSkillsHobbies: "Ética, Raciocínio Lógico, Calma. Hobbies: Artes marciais e culinária." },
    { id: 8, nome: "Henrique Porto", cargo: "Arquiteto de Software", foto: "/src/assets/imgs/henrique.jpg", skills: ["Java", "Microservices", "Design Patterns", "Kafka"], pessoalAcademico: "45 anos, Doutorado em Ciência da Computação.", experienciaTecnica: "20 anos. Desenho de arquiteturas escaláveis para bancos de varejo e fintechs.", softSkillsHobbies: "Visão Sistêmica, Inovação, Decisão. Hobbies: Leitura técnica e corrida." },
    { id: 9, nome: "Isabela Nunes", cargo: "Especialista em Conteúdo e SEO", foto: "/src/assets/imgs/isabela.jpg", skills: ["SEO", "Copywriting", "Wordpress", "Analytics"], pessoalAcademico: "26 anos, Jornalismo e Marketing Digital.", experienciaTecnica: "Criação de estratégias de conteúdo que aumentaram o tráfego orgânico em 150% em 1 ano.", softSkillsHobbies: "Escrita, Pesquisa, Organização. Hobbies: Escrita criativa e podcasts." },
    { id: 10, nome: "João Victor", cargo: "Engenheiro de Testes (QA)", foto: "/src/assets/imgs/joao.jpg", skills: ["Selenium", "JMeter", "TestLink", "Automação"], pessoalAcademico: "27 anos, Tecnólogo em Análise e Desenvolvimento de Sistemas.", experienciaTecnica: "4 anos em testes automatizados e gestão de qualidade em projetos de e-commerce.", softSkillsHobbies: "Detalhista, Paciência, Foco. Hobbies: Jogos e viagens." },
];

const listContainer = document.getElementById('professionals-list');

function renderProfessionals() {
    if (!listContainer) return;

    professionalsData.forEach(prof => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.dataset.id = prof.id;

                card.innerHTML = `
            <img src="${prof.foto}" alt="Foto de ${prof.nome}">
            <h3>${prof.nome}</h3>
            <p><strong>Cargo:</strong> ${prof.cargo}</p>
            <div class="skills">
                ${prof.skills.map(skill => `<span>${skill}</span>`).join('')}
            </div>
        `;

        card.addEventListener('click', () => {
        window.location.href = `src/pages/perfil.html?id=${prof.id}`;
        });

        listContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('professionals-list')) {
        renderProfessionals();
    }
});