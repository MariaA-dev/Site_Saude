// Função para alternar o menu em dispositivos móveis
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-expansivel');

// Evento para abrir e fechar o menu
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
        menu.classList.remove('active');
    }
});

// Fecha o menu ao clicar em uma opção
const menuLinks = document.querySelectorAll('.menu-expansivel a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active'); // Fecha o menu
    });
});

// Função para calcular IMC
const calcularImcButton = document.getElementById('calcular-imc');
const resultadoImc = document.getElementById('resultado-imc');

calcularImcButton.addEventListener('click', () => {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        let categoria = '';

        if (imc < 18.5) {
            categoria = 'Baixo peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            categoria = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            categoria = 'Sobrepeso';
        } else {
            categoria = 'Obesidade';
        }

        resultadoImc.textContent = `Seu IMC é ${imc.toFixed(2)} (${categoria}).`;
    } else {
        resultadoImc.textContent = 'Por favor, insira valores válidos.';
    }
});
