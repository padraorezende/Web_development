const API_KEY = '3a4509bb16df4a5d9afefff054a57d3b';

function exibeNoticias () {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=dados.articles.length-4; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

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
    let divTelas = document.getElementById('tela');
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
    let textoss = '';

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

document.getElementById ('x').addEventListener ('click', executaPesquisass);








function exibeNoticias4 () {
    let divTela4 = document.getElementById('tela');
    let texto4 = '';

    // Montar texto HTML das noticias
    let dados4 = JSON.parse (this.responseText);
    for (i=dados4.articles.length-4; i< dados4.articles.length; i++) {
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
    for (i=dados5.articles.length-4; i< dados5.articles.length; i++) {
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
    xhr5.onload = exibeNoticias4;
    xhr5.open ('GET', `https://newsapi.org/v2/top-headlines?sources=globo&apiKey=${API_KEY}`);
    xhr5.send ();
}

document.getElementById ('b').addEventListener ('click', executaPesquisa5);





function exibeNoticias6 () {
    let divTela6 = document.getElementById('tela');
    let texto6 = '';

    // Montar texto HTML das noticias
    let dados6 = JSON.parse (this.responseText);
    for (i=dados6.articles.length-4; i< dados6.articles.length; i++) {
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
    xhr6.onload = exibeNoticias4;
    xhr6.open ('GET', `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${API_KEY}`);
    xhr6.send ();
}

document.getElementById ('c').addEventListener ('click', executaPesquisa6);


function exibeNoticias7 () {
    let divTela7 = document.getElementById('tela');
    let texto7 = '';

    // Montar texto HTML das noticias
    let dados7 = JSON.parse (this.responseText);
    for (i=dados7.articles.length-4; i< dados7.articles.length; i++) {
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
    xhr7.onload = exibeNoticias4;
    xhr7.open ('GET', `https://newsapi.org/v2/top-headlines?sources=info-money&apiKey=${API_KEY}`);
    xhr7.send ();
}

document.getElementById ('d').addEventListener ('click', executaPesquisa7);