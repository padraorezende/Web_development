const API_KEY = '3a4509bb16df4a5d9afefff054a57d3b';

function exibeNoticias () {
    let divTela = document.getElementById('telaBR');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=dados.articles.length-4; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];

        texto = texto + `
            
            <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia.url}">
                            <img src="${noticia.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia.url}">
                                <h5 class="card-title">${noticia.title}</h5>
                                <p class="card-text">${noticia.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}

document.getElementById ('btnPesquisa').addEventListener ('click', executaPesquisa);











function exibeNoticiass () {
    let divTelas = document.getElementById('telaBR');
    let textos = '';

    // Montar texto HTML das noticias
    let dadoss = JSON.parse (this.responseText);
    for (i=dadoss.articles.length-4; i< dadoss.articles.length; i++) {
        let noticias = dadoss.articles[i];
        let datas = new Date (noticias.publishedAt);

        textos = textos + `
            
            <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticias.url}">
                            <img src="${noticias.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticias.url}">
                                <h5 class="card-title">${noticias.title}</h5>
                                <p class="card-text">${noticias.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTelas.innerHTML = textos;
}

function executaPesquisas () {

    let xhrs = new XMLHttpRequest ();
    xhrs.onload = exibeNoticiass;
    xhrs.open ('GET', `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
    xhrs.send ();
}

document.getElementById ('btnPesquisas').addEventListener ('click', executaPesquisas);





function exibeNoticiasss () {
    let divTelass = document.getElementById('tela2');
    let textoss = '<h3 class="p-3 mb-2 bg-white text-secondary">About Collaborations</h3>';

    // Montar texto HTML das noticias
    let dadosss = JSON.parse (this.responseText);
    for (i=dadosss.sources.length-4; i< dadosss.sources.length; i++) {
        let noticiass = dadosss.sources[i];
        let datass = new Date (noticiass.publishedAt);

        textoss = textoss + `

            <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="card-body">
                            <a href="${noticiass.url}">
                                <h5 class="card-title">${noticiass.name}</h5>
                                <p class="card-text">${noticiass.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTelass.innerHTML = textoss;
}

function executaPesquisass () {

    let xhrss = new XMLHttpRequest ();
    xhrss.onload = exibeNoticiasss;
    xhrss.open ('GET', `https://newsapi.org/v2/sources?language=pt&country=br&apiKey=${API_KEY}`);
    xhrss.send ();
}

document.getElementById ('x').addEventListener('click', executaPesquisass);








function exibeNoticias4 () {
    let divTela4 = document.getElementById('tela');
    let texto4 = '';

    // Montar texto HTML das noticias
    let dados4 = JSON.parse (this.responseText);
    for (i=dados4.articles.length-5; i< dados4.articles.length; i++) {
        let noticia4 = dados4.articles[i];
        let data4 = new Date (noticia4.publishedAt);

        texto4 = texto4 + `

                <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia4.url}">
                            <img src="${noticia4.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia4.url}">
                                <h5 class="card-title">${noticia4.title}</h5>
                                <p class="card-text">${noticia4.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela4.innerHTML = texto4;
}

function executaPesquisa4 () {

    let xhr4 = new XMLHttpRequest ();
    xhr4.onload = exibeNoticias4;
    xhr4.open ('GET', `https://newsapi.org/v2/top-headlines?sources=blasting-news-br&apiKey=${API_KEY}`);
    xhr4.send ();
}

document.getElementById ('a').addEventListener ('click', executaPesquisa4);




function exibeNoticias5 () {
    let divTela5 = document.getElementById('tela');
    let texto5 = '';

    // Montar texto HTML das noticias
    let dados5 = JSON.parse (this.responseText);
    for (i=dados5.articles.length-5; i< dados5.articles.length; i++) {
        let noticia5 = dados5.articles[i];
        let data5 = new Date (noticia5.publishedAt);

        texto5 = texto5 + `

                <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia5.url}">
                            <img src="${noticia5.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia5.url}">
                                <h5 class="card-title">${noticia5.title}</h5>
                                <p class="card-text">${noticia5.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela5.innerHTML = texto5;
}

function executaPesquisa5 () {

    let xhr5 = new XMLHttpRequest ();
    xhr5.onload = exibeNoticias5;
    xhr5.open ('GET', `https://newsapi.org/v2/top-headlines?sources=globo&apiKey=${API_KEY}`);
    xhr5.send ();
}

document.getElementById ('b').addEventListener ('click', executaPesquisa5);





function exibeNoticias6 () {
    let divTela6 = document.getElementById('tela');
    let texto6 = '';

    // Montar texto HTML das noticias
    let dados6 = JSON.parse (this.responseText);
    for (i=dados6.articles.length-5; i< dados6.articles.length; i++) {
        let noticia6 = dados6.articles[i];
        let data6 = new Date (noticia6.publishedAt);

        texto6 = texto6 + `

                <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia6.url}">
                            <img src="${noticia6.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia6.url}">
                                <h5 class="card-title">${noticia6.title}</h5>
                                <p class="card-text">${noticia6.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela6.innerHTML = texto6;
}

function executaPesquisa6 () {

    let xhr6 = new XMLHttpRequest ();
    xhr6.onload = exibeNoticias6;
    xhr6.open ('GET', `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${API_KEY}`);
    xhr6.send ();
}

document.getElementById ('c').addEventListener ('click', executaPesquisa6);


function exibeNoticias7 () {
    let divTela7 = document.getElementById('tela');
    let texto7 = '';

    // Montar texto HTML das noticias
    let dados7 = JSON.parse (this.responseText);
    for (i=dados7.articles.length-5; i< dados7.articles.length; i++) {
        let noticia7 = dados7.articles[i];
        let data7 = new Date (noticia7.publishedAt);

        texto7 = texto7 + `

                <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia7.url}">
                            <img src="${noticia7.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia7.url}">
                                <h5 class="card-title">${noticia7.title}</h5>
                                <p class="card-text">${noticia7.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela7.innerHTML = texto7;
}

function executaPesquisa7 () {

    let xhr7 = new XMLHttpRequest ();
    xhr7.onload = exibeNoticias7;
    xhr7.open ('GET', `https://newsapi.org/v2/top-headlines?sources=info-money&apiKey=${API_KEY}`);
    xhr7.send ();
}

document.getElementById ('d').addEventListener ('click', executaPesquisa7);




window.onload = () => {
    source.onclick =() => $('#source_news').css('display','block');
}








///////////
///////////////////////
//////////






function exibeNoticia8 () {
    let divTela8 = document.getElementById('tela2');
    let texto8 = ' <h3 class="p-3 mb-2 bg-dark text-white">About Collaborations</h3> ';

    // Montar texto HTML das noticias
    let dados8 = JSON.parse (this.responseText);
    for (i=0; i< dados8.sources.length; i++) {
        let noticia8 = dados8.sources[i];


        texto8 = texto8 + `

            <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="card-body">
                            <a href="${noticia8.url}">
                                <h5 class="card-title">${noticia8.name}</h5>
                                <p class="card-text">${noticia8.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
    };

    // Preencher a DIV com o texto HTML
    divTela8.innerHTML = texto8;
}

function executaPesquisa8 () {

    let xhr8 = new XMLHttpRequest ();
    xhr8.onload = exibeNoticia8;
    xhr8.open ('GET', `https://newsapi.org/v2/sources?language=pt&country=br&apiKey=${API_KEY}`);
    xhr8.send ();
}

document.getElementById ('e').addEventListener('click', executaPesquisa8);








function exibeNoticias9 () {
    let divTela9 = document.getElementById('tela');
    let texto9 = '';

    // Montar texto HTML das noticias
    let dados9 = JSON.parse (this.responseText);
    for (i=dados9.articles.length-4; i< dados9.articles.length; i++) {
        let noticia9 = dados9.articles[i];
        let data9 = new Date (noticia9.publishedAt);

        texto9 = texto9 + `

                <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia9.url}">
                            <img src="${noticia9.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia9.url}">
                                <h5 class="card-title">${noticia9.title}</h5>
                                <p class="card-text">${noticia9.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela9.innerHTML = texto9;
}

function executaPesquisa9 () {

    let xhr9 = new XMLHttpRequest ();
    xhr9.onload = exibeNoticias9;
    xhr9.open ('GET', `https://newsapi.org/v2/top-headlines?sources=blasting-news-br&apiKey=${API_KEY}`);
    xhr9.send ();
}

document.getElementById ('f').addEventListener ('click', executaPesquisa9);




function exibeNoticias10 () {
    let divTela10 = document.getElementById('tela');
    let texto10 = '';

    // Montar texto HTML das noticias
    let dados10 = JSON.parse (this.responseText);
    for (i=dados10.articles.length-4; i< dados10.articles.length; i++) {
        let noticia10 = dados10.articles[i];
        let data5 = new Date (noticia10.publishedAt);

        texto10 = texto10 + `

                <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia10.url}">
                            <img src="${noticia10.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia10.url}">
                                <h5 class="card-title">${noticia10.title}</h5>
                                <p class="card-text">${noticia10.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela10.innerHTML = texto10;
}

function executaPesquisa10 () {

    let xhr10 = new XMLHttpRequest ();
    xhr10.onload = exibeNoticias10;
    xhr10.open ('GET', `https://newsapi.org/v2/top-headlines?sources=globo&apiKey=${API_KEY}`);
    xhr10.send ();
}

document.getElementById ('g').addEventListener ('click', executaPesquisa10);





function exibeNoticias11 () {
    let divTela11 = document.getElementById('tela');
    let texto11 = '';

    // Montar texto HTML das noticias
    let dados11 = JSON.parse (this.responseText);
    for (i=dados11.articles.length-4; i< dados11.articles.length; i++) {
        let noticia11 = dados11.articles[i];
        let data11 = new Date (noticia11.publishedAt);

        texto11 = texto11 + `

                <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia11.url}">
                            <img src="${noticia11.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia11.url}">
                                <h5 class="card-title">${noticia11.title}</h5>
                                <p class="card-text">${noticia11.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela11.innerHTML = texto11;
}

function executaPesquisa11 () {

    let xhr11 = new XMLHttpRequest ();
    xhr11.onload = exibeNoticias11;
    xhr11.open ('GET', `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${API_KEY}`);
    xhr11.send ();
}

document.getElementById ('h').addEventListener ('click', executaPesquisa11);


function exibeNoticias12 () {
    let divTela12 = document.getElementById('tela');
    let texto12 = '';

    // Montar texto HTML das noticias
    let dados12 = JSON.parse (this.responseText);
    for (i=dados12.articles.length-4; i< dados12.articles.length; i++) {
        let noticia12 = dados12.articles[i];
        let data12 = new Date (noticia12.publishedAt);

        texto12 = texto12 + `

                <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia12.url}">
                            <img src="${noticia12.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia12.url}">
                                <h5 class="card-title">${noticia12.title}</h5>
                                <p class="card-text">${noticia12.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela12.innerHTML = texto12;
}

function executaPesquisa12 () {

    let xhr12 = new XMLHttpRequest ();
    xhr12.onload = exibeNoticias12;
    xhr12.open ('GET', `https://newsapi.org/v2/top-headlines?sources=info-money&apiKey=${API_KEY}`);
    xhr12.send ();
}

document.getElementById ('i').addEventListener ('click', executaPesquisa12);



function exibeNoticia14 () {
    let divTela14 = document.getElementById('telaBR');
    let texto14= '';

    // Montar texto HTML das noticias
    let dados14 = JSON.parse (this.responseText);
    for (i=dados14.articles.length-4; i< dados14.articles.length; i++) {
        let noticia14 = dados14.articles[i];
        let datas = new Date (noticia14.publishedAt);

        texto14 = texto14 + `
            
            <div class="card mb-4" style="max-width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <a href="${noticia14.url}">
                            <img src="${noticia14.urlToImage}" class="card-img" alt="">
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <a href="${noticia14.url}">
                                <h5 class="card-title">${noticia14.title}</h5>
                                <p class="card-text">${noticia14.description}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela14.innerHTML = texto14;
}

function executaPesquisa14 () {

    let xhr14 = new XMLHttpRequest ();
    xhr14.onload = exibeNoticia14;
    xhr14.open ('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    xhr14.send ();
}

document.getElementById ('k').addEventListener ('click', executaPesquisa14);

function executaPesquisa15 () {

    let xhr15 = new XMLHttpRequest ();
    xhr15.onload = exibeNoticia14;
    xhr15.open ('GET', `https://newsapi.org/v2/top-headlines?country=ru&apiKey=${API_KEY}`);
    xhr15.send ();
}

document.getElementById ('l').addEventListener ('click', executaPesquisa15);

function executaPesquisa16 () {

    let xhr16 = new XMLHttpRequest ();
    xhr16.onload = exibeNoticia14;
    xhr16.open ('GET', `https://newsapi.org/v2/top-headlines?country=de&apiKey=${API_KEY}`);
    xhr16.send ();
}

document.getElementById ('m').addEventListener ('click', executaPesquisa16);

function executaPesquisa17 () {

    let xhr16 = new XMLHttpRequest ();
    xhr16.onload = exibeNoticia14;
    xhr16.open ('GET', `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${API_KEY}`);
    xhr16.send ();
}

document.getElementById ('n').addEventListener ('click', executaPesquisa17);