const btnFranklim = document.querySelector('.falas-frango');
const btnTarcisio = document.querySelector('.falas-ciso');
const divFrango = document.querySelector('#falaFrango');
const divCiso = document.querySelector('#falaCiso');
const fotoFrango = document.querySelector('#fotoFrango'); // Seleciona a imagem

const falasFranklim = [
    'Ciso',
    'Bao?', 
    'Vou ver seu tobao mais tarde',
    'kkkkkkkkkk',
    'trabalhar dia e noite e madrugada',
    'parabens',
    'quer ver minha rola?',
    'vou te mandar a foto'
];


const falasTarcisio = [
    'Frango', 
    'Bao e oc?',
    'Parece que a carine tá grávida',
    'Kkkk',
    'Arrumar um dps das 8 agora',
    'Valeu',
    'quero uai'
];

let indexFranklim = 0; // Índice para acompanhar a fala atual de Franklim
let indexTarcisio = 0; // Índice para acompanhar a fala atual de Tarcisio

// Inicializa escondendo o botão de Tarcisio
btnTarcisio.classList.add('escondeBotao');

btnFranklim.addEventListener('click', () => {
    if (indexFranklim < falasFranklim.length) {
        // Mostra a fala de Franklim
        divFrango.textContent = falasFranklim[indexFranklim];

        // Verifica se a fala atual é a última e exibe a imagem
        if (falasFranklim[indexFranklim] === 'vou te mandar a foto') {
            fotoFrango.style.display = 'block'; // Mostra a imagem
        }

        // Esconde o botão de Franklim
        btnFranklim.classList.add('escondeBotao');

        // Espera 3 segundos antes de esconder a fala e mostrar o botão de Tarcisio
        setTimeout(() => {
            divFrango.style.fontWeight = 'bold'
            divFrango.textContent = ''; // Limpa a fala de Franklim
            fotoFrango.style.display = 'none'; // Esconde a imagem
            indexFranklim++; // Move para a próxima fala

            // Mostra o botão de Tarcisio se houver falas restantes
            if (indexTarcisio < falasTarcisio.length) {
                btnTarcisio.classList.remove('escondeBotao');
            }
        }, 2000); // Tempo de exibição de 3 segundos
    }
});

btnTarcisio.addEventListener('click', () => {
    if (indexTarcisio < falasTarcisio.length) {
        // Mostra a fala de Tarcisio
        divCiso.textContent = falasTarcisio[indexTarcisio];

        // Esconde o botão de Tarcisio
        btnTarcisio.classList.add('escondeBotao');

        // Espera 3 segundos antes de esconder a fala e mostrar o botão de Franklim
        setTimeout(() => {
            divCiso.style.fontWeight = 'bold'
            divCiso.textContent = ''; // Limpa a fala de Tarcisio
            indexTarcisio++; // Move para a próxima fala

            // Mostra o botão de Franklim se houver falas restantes
            if (indexFranklim < falasFranklim.length) {
                btnFranklim.classList.remove('escondeBotao');
            }
        }, 2000); // Tempo de exibição de 3 segundos
    }
});
