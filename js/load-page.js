//Leitura completa do nosso documento HTML
$(document).ready(function(){

    //Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML

    $('a').click(function(e){
        e.preventDefault()

        //Criar uma variável local que receba o atributo href do link
        let page = $(this).attr('href')

        //Verificar qual conteúdo eu devo carregar
        switch(page){
            //Se for para abria a página sobre mim...
            case 'About': alert('Sobre mim'); 
            break
            //Se for para abria a página sobre mim...
            case 'Works': alert('Meus trabalhos'); 
            break
            //Se for para abria a página sobre mim...
            case 'Client': alert('Meus clientes'); 
            break
            //Se for para abria a página sobre mim...
            case 'Contact': alert('Meus contatos'); 
            break
            default: alert('link não encontrado')
        }

    })
})