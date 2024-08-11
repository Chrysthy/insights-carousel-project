/*
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado

*/

const carouselButton = document.querySelectorAll('.btn');
const images = document.querySelectorAll('.img');
const allInformation = document.querySelectorAll('.information')

carouselButton.forEach((button, index) => {

    button.addEventListener('click', () => {

        const btnSelected = document.querySelector('.selected');

        btnSelected.classList.remove('selected');
        button.classList.add('selected');


        const imageActive = document.querySelector(".active");

        imageActive.classList.remove('active');
        images[index].classList.add('active');


        const activeInformation = document.querySelector('.information.active')

        activeInformation.classList.remove('active');
        allInformation[index].classList.add('active')

    })
})
