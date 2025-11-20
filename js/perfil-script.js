function showNotification(message, type) {
    const bar = document.getElementById('notification-bar');
    if (!bar) return;

    bar.textContent = message;
    bar.className = 'show ' + type;

    setTimeout(() => {
        bar.className = bar.className.replace('show', '');
    }, 3000);
}

function loadProfilePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const profileId = parseInt(urlParams.get('id'));
    const profileContainer = document.getElementById('profile-container');

    const professional = professionalsData.find(p => p.id === profileId);

    if (!professional) {
        if (profileContainer) {
            profileContainer.innerHTML = '<h2>Profissional não encontrado.</h2>';
        }
        return;
    }

    if (profileContainer) {
        profileContainer.innerHTML = `
            <div class="profile-header">
                <img src="${professional.foto}" alt="Foto de ${professional.nome}">
                <h1>${professional.nome}</h1>
                <p class="cargo-title">${professional.cargo}</p>
                <div class="skills-list">
                    ${professional.skills.map(skill => `<span>${skill}</span>`).join('')}
                </div>
            </div>

            <div class="slideshow-sections">
                <div class="slide">
                    <h2>1. Informações Pessoais e Acadêmicas</h2>
                    <p>${professional.pessoalAcademico}</p>
                </div>
                
                <div class="slide">
                    <h2>2. Experiências e Habilidades Técnicas</h2>
                    <p>${professional.experienciaTecnica}</p>
                </div>
                
                <div class="slide">
                    <h2>3. Soft Skills e Hobbies</h2>
                    <p>${professional.softSkillsHobbies}</p>
                </div>
            </div>

            <div class="action-buttons">
                <button id="recommend-button">Recomendar profissional</button> 
                <button id="message-button">Enviar mensagem</button>
            </div>
        `;

        const recommendButton = document.getElementById('recommend-button');
        const messageButton = document.getElementById('message-button');

        recommendButton.addEventListener('click', () => {
            showNotification(`Recomendação para ${professional.nome} registrada com sucesso!`, 'success');
        });

        messageButton.addEventListener('click', () => {
            showNotification(`Você será redirecionado para a página de contato em breve.`, 'message');
            
            setTimeout(() => {
                window.location.href = 'contato.html'; 
            }, 2000); 
        });
    }
}

document.addEventListener('DOMContentLoaded', loadProfilePage);