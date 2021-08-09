$(document).ready(function(){

    $('.btn-light').click(function(light){
        light.preventDefault()

        //Remover o CSS existente do nosso tema (jumbotron)
        //Selecionar o jumbotron e excluir o CSS existente
        $('.jumbotron').removeClass('bg-natan-souza')
        $('.jumbotron').removeClass('bg-dark')
        //Aplicar a classe Css que eu desejo
        $('.jumbotron').addClass('bg-light')
    })

    $('.btn-dark').click(function(light){
        light.preventDefault()

        //Remover o CSS existente do nosso tema (jumbotron)
        //Selecionar o jumbotron e excluir o CSS existente
        $('.jumbotron').removeClass('bg-natan-souza')
        $('.jumbotron').removeClass('bg-light')
        //Aplicar a classe Css que eu desejo
        $('.jumbotron').addClass('bg-dark')
    })

    $('.btn-danger').click(function(light){
        light.preventDefault()

        //Remover o CSS existente do nosso tema (jumbotron)
        //Selecionar o jumbotron e excluir o CSS existente
        $('.jumbotron').removeClass('bg-light')
        $('.jumbotron').removeClass('bg-dark')
        //Aplicar a classe Css que eu desejo
        $('.jumbotron').addClass('bg-natan-souza')
    })
})