// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Animação de aparição suave das 3 seções ao rolar a página
    const secoes = document.querySelectorAll(".reveal");

    function revelarSecoes() {
        const alturaTela = window.innerHeight;

        secoes.forEach((secao) => {
            const distanciaTopo = secao.getBoundingClientRect().top;
            const pontoVisivel = 100;

            if (distanciaTopo < alturaTela - pontoVisivel) {
                secao.classList.add("ativo");
            }
        });
    }

    // Executa ao rolar e também logo que a página abre
    window.addEventListener("scroll", revelarSecoes);
    revelarSecoes();

    // 2. Gerador de frases de mentalidade empresarial no rodapé
    const frases = [
        '"O futuro pertence àqueles que se preparam para ele hoje."',
        '"Grandes impérios começam com uma visão clara e disciplina diária."',
        '"Empreender é transformar visão em realidade através do trabalho duro."',
        '"A excelência jurídica e a visão de negócios constroem legados duradouros."',
        '"O sucesso de 2036 está sendo construído nas decisões de hoje."'
    ];

    const botaoMotivacao = document.getElementById("btn-motivacao");
    const textoFrase = document.getElementById("frase-motivacional");
    let indiceAtual = 0;

    botaoMotivacao.addEventListener("click", () => {
        indiceAtual = (indiceAtual + 1) % frases.length;
        textoFrase.textContent = frases[indiceAtual];
    });
});