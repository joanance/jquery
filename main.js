$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit', function(e){
        e.preventDefault();
        const endereçoDaNovaImagem = $('#endereco-imagem-nova').val();
        const NovoItem = $('<li style="display:none"></li>');
        $(`<img src="${endereçoDaNovaImagem}"/>`).appendTo(NovoItem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${endereçoDaNovaImagem}" title="ver imagem em tamanho real target="_blank>
                ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(NovoItem);
        $(NovoItem).appendTo('ul');
        $(NovoItem).fadeIn(5000);
        $(`#endereco-imagem-nova`).val('');
    })
})
