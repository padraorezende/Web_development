const API_KEY="3a4509bb16df4a5d9afefff054a57d3b";function exibeNoticias(){let e=document.getElementById("txtPesquisa").value,t=document.getElementById("title_men"),n=document.getElementById("tela"),s=`${e}`,a="",l=JSON.parse(this.responseText);for(i=l.articles.length-5;i<l.articles.length;i++){let e=l.articles[i];new Date(e.publishedAt);a+=`\n            \n            <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-5">\n                        <a href="${e.url}">\n                            <img src="${e.urlToImage}" class="card-img" alt="">\n                        </a>\n                    </div>\n                    <div class="col-md-7">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.title}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}n.innerHTML=a,t.innerHTML=s}function executaPesquisa(){let e=document.getElementById("txtPesquisa").value,t=new XMLHttpRequest;t.onload=exibeNoticias,t.open("GET",`https://newsapi.org/v2/everything?q=${e}&apiKey=${API_KEY}`),t.send()}var vetor=[];function exibeSave(){$("#title_men2").css("display","flex")}function NoexibeSave(){$("#title_men2").css("display","none")}function exibeNoticiass(){let e=document.getElementById("tela"),t="",n=JSON.parse(this.responseText);for(i=n.articles.length-5;i<n.articles.length;i++){let e=n.articles[i];new Date(e.publishedAt);t+=`\n            \n            <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-5">\n                        <a href="${e.url}">\n                            <img src="${e.urlToImage}" class="card-img" alt="">\n                        </a>\n                    </div>\n                    <div class="col-md-7">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.title}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}e.innerHTML=t}function executaPesquisas(){let e=new XMLHttpRequest;e.onload=exibeNoticiass,e.open("GET",`https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`),e.send()}function exibeNoticiasss(){let e=document.getElementById("tela2"),t="",n=JSON.parse(this.responseText);for(i=n.sources.length-4;i<n.sources.length;i++){let e=n.sources[i];new Date(e.publishedAt);t+=`\n\n            <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-12">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.name}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}e.innerHTML=t}function executaPesquisass(){let e=new XMLHttpRequest;e.onload=exibeNoticiasss,e.open("GET",`https://newsapi.org/v2/sources?language=pt&country=br&apiKey=${API_KEY}`),e.send()}function exibeNoticias4(){let e=document.getElementById("tela"),t='<h3 class="p-4 mb-2 bg-warning text-dark">Blasting News BR</h3>',n=JSON.parse(this.responseText);for(i=n.articles.length-4;i<n.articles.length;i++){let e=n.articles[i];new Date(e.publishedAt);t+=`\n\n                <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-5">\n                        <a href="${e.url}">\n                            <img src="${e.urlToImage}" class="card-img" alt="">\n                        </a>\n                    </div>\n                    <div class="col-md-7">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.title}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}e.innerHTML=t}function executaPesquisa4(){let e=new XMLHttpRequest;e.onload=exibeNoticias4,e.open("GET",`https://newsapi.org/v2/top-headlines?sources=blasting-news-br&apiKey=${API_KEY}`),e.send()}function exibeNoticias5(){let e=document.getElementById("tela"),t='<h3 class="p-4 mb-2 bg-warning text-dark">Globo</h3>',n=JSON.parse(this.responseText);for(i=n.articles.length-4;i<n.articles.length;i++){let e=n.articles[i];new Date(e.publishedAt);t+=`\n\n                <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-5">\n                        <a href="${e.url}">\n                            <img src="${e.urlToImage}" class="card-img" alt="">\n                        </a>\n                    </div>\n                    <div class="col-md-7">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.title}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}e.innerHTML=t}function executaPesquisa5(){let e=new XMLHttpRequest;e.onload=exibeNoticias5,e.open("GET",`https://newsapi.org/v2/top-headlines?sources=globo&apiKey=${API_KEY}`),e.send()}function exibeNoticias6(){let e=document.getElementById("tela"),t='<h3 class="p-4 mb-2 bg-warning text-dark">Google News BR</h3>',n=JSON.parse(this.responseText);for(i=n.articles.length-4;i<n.articles.length;i++){let e=n.articles[i];new Date(e.publishedAt);t+=`\n\n                <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-5">\n                        <a href="${e.url}">\n                            <img src="${e.urlToImage}" class="card-img" alt="">\n                        </a>\n                    </div>\n                    <div class="col-md-7">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.title}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}e.innerHTML=t}function executaPesquisa6(){let e=new XMLHttpRequest;e.onload=exibeNoticias6,e.open("GET",`https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${API_KEY}`),e.send()}function exibeNoticias7(){let e=document.getElementById("tela"),t='<h3 class="p-4 mb-2 bg-warning text-dark">Info Money</h3>',n=JSON.parse(this.responseText);for(i=n.articles.length-4;i<n.articles.length;i++){let e=n.articles[i];new Date(e.publishedAt);t+=`\n\n                <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-5">\n                        <a href="${e.url}">\n                            <img src="${e.urlToImage}" class="card-img" alt="">\n                        </a>\n                    </div>\n                    <div class="col-md-7">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.title}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}e.innerHTML=t}function executaPesquisa7(){let e=new XMLHttpRequest;e.onload=exibeNoticias7,e.open("GET",`https://newsapi.org/v2/top-headlines?sources=info-money&apiKey=${API_KEY}`),e.send()}function exibeNoticia8(){let e=document.getElementById("tela2"),t="",n=JSON.parse(this.responseText);for(i=n.sources.length-4;i<n.sources.length;i++){let e=n.sources[i];new Date(e.publishedAt);t+=`\n\n            <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-12">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.name}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}e.innerHTML=t}function executaPesquisa8(){let e=new XMLHttpRequest;e.onload=exibeNoticia8,e.open("GET",`https://newsapi.org/v2/sources?language=pt&country=br&apiKey=${API_KEY}`),e.send()}function exibeNoticias9(){let e=document.getElementById("tela"),t='<h3 class="p-4 mb-2 bg-warning text-dark">Blasting News BR</h3>',n=JSON.parse(this.responseText);for(i=n.articles.length-4;i<n.articles.length;i++){let e=n.articles[i];new Date(e.publishedAt);t+=`\n\n                <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-5">\n                        <a href="${e.url}">\n                            <img src="${e.urlToImage}" class="card-img" alt="">\n                        </a>\n                    </div>\n                    <div class="col-md-7">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.title}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}e.innerHTML=t}function executaPesquisa9(){let e=new XMLHttpRequest;e.onload=exibeNoticias9,e.open("GET",`https://newsapi.org/v2/top-headlines?sources=blasting-news-br&apiKey=${API_KEY}`),e.send()}function exibeNoticias10(){let e=document.getElementById("tela"),t='<h3 class="p-4 mb-2 bg-warning text-dark">Globo</h3>',n=JSON.parse(this.responseText);for(i=n.articles.length-4;i<n.articles.length;i++){let e=n.articles[i];new Date(e.publishedAt);t+=`\n\n                <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-5">\n                        <a href="${e.url}">\n                            <img src="${e.urlToImage}" class="card-img" alt="">\n                        </a>\n                    </div>\n                    <div class="col-md-7">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.title}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}e.innerHTML=t}function executaPesquisa10(){let e=new XMLHttpRequest;e.onload=exibeNoticias10,e.open("GET",`https://newsapi.org/v2/top-headlines?sources=globo&apiKey=${API_KEY}`),e.send()}function exibeNoticias11(){let e=document.getElementById("tela"),t='<h3 class="p-4 mb-2 bg-warning text-dark">Google News BR</h3>',n=JSON.parse(this.responseText);for(i=n.articles.length-4;i<n.articles.length;i++){let e=n.articles[i];new Date(e.publishedAt);t+=`\n\n                <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-5">\n                        <a href="${e.url}">\n                            <img src="${e.urlToImage}" class="card-img" alt="">\n                        </a>\n                    </div>\n                    <div class="col-md-7">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.title}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}e.innerHTML=t}function executaPesquisa11(){let e=new XMLHttpRequest;e.onload=exibeNoticias11,e.open("GET",`https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${API_KEY}`),e.send()}function exibeNoticias12(){let e=document.getElementById("tela"),t='<h3 class="p-4 mb-2 bg-warning text-dark">Info Money</h3>',n=JSON.parse(this.responseText);for(i=n.articles.length-4;i<n.articles.length;i++){let e=n.articles[i];new Date(e.publishedAt);t+=`\n\n                <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-5">\n                        <a href="${e.url}">\n                            <img src="${e.urlToImage}" class="card-img" alt="">\n                        </a>\n                    </div>\n                    <div class="col-md-7">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.title}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}e.innerHTML=t}function executaPesquisa12(){let e=new XMLHttpRequest;e.onload=exibeNoticias12,e.open("GET",`https://newsapi.org/v2/top-headlines?sources=info-money&apiKey=${API_KEY}`),e.send()}function exibeTitle(e){let t=`${e}`;document.getElementById("title_men").innerHTML=t,exibeSave()}function exibeNoticia19(e){let t=document.getElementById("tela"),n="",s=JSON.parse(this.responseText);for(i=s.articles.length-5;i<s.articles.length;i++){let e=s.articles[i];n+=`\n            \n            <div class="card mb-4" style="max-width: 100%;">\n                <div class="row no-gutters">\n                    <div class="col-md-5">\n                        <a href="${e.url}">\n                            <img src="${e.urlToImage}" class="card-img" alt="">\n                        </a>\n                    </div>\n                    <div class="col-md-7">\n                        <div class="card-body">\n                            <a href="${e.url}">\n                                <h5 class="card-title">${e.title}</h5>\n                                <p class="card-text">${e.description}</p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `}t.innerHTML=n}function executaPesquisa18(e){let t=new XMLHttpRequest;t.onload=exibeNoticia19,t.open("GET",`https://newsapi.org/v2/everything?q=${e}&apiKey=${API_KEY}`),t.send()}function exibeNoticias18(){let e=document.getElementById("save_search"),t=document.getElementById("save_search2"),n="";for(dados=JSON.parse(localStorage.getItem("query")),i=0;i<dados.length;i++)query=dados[i],n+=`\n            <li><button onclick="executaPesquisa18('${query}'), exibeTitle('${query}');">${query}</button></li>    \n        `;e.innerHTML=n,t.innerHTML=n}document.getElementById("btnPesquisa").addEventListener("click",executaPesquisa),document.getElementById("btnPesquisa").addEventListener("click",exibeSave),document.getElementById("btnPesquisas").addEventListener("click",executaPesquisas),document.getElementById("btnPesquisas").addEventListener("click",NoexibeSave),document.getElementById("x").addEventListener("click",executaPesquisass),document.getElementById("a").addEventListener("click",executaPesquisa4),document.getElementById("a").addEventListener("click",NoexibeSave),document.getElementById("b").addEventListener("click",executaPesquisa5),document.getElementById("b").addEventListener("click",NoexibeSave),document.getElementById("c").addEventListener("click",executaPesquisa6),document.getElementById("c").addEventListener("click",NoexibeSave),document.getElementById("d").addEventListener("click",executaPesquisa7),document.getElementById("d").addEventListener("click",NoexibeSave),document.getElementById("e").addEventListener("click",executaPesquisa8),document.getElementById("f").addEventListener("click",executaPesquisa9),document.getElementById("f").addEventListener("click",NoexibeSave),document.getElementById("g").addEventListener("click",executaPesquisa10),document.getElementById("g").addEventListener("click",NoexibeSave),document.getElementById("h").addEventListener("click",executaPesquisa11),document.getElementById("h").addEventListener("click",NoexibeSave),document.getElementById("i").addEventListener("click",executaPesquisa12),document.getElementById("i").addEventListener("click",NoexibeSave),window.onload=(()=>{if(dados=JSON.parse(localStorage.getItem("query")),null!=dados){for(i=0;i<dados.length;i++)vetor.push(dados[i]);exibeNoticias18()}executaPesquisas(),save.onclick=(()=>{let e=document.getElementById("title_men").innerHTML;vetor.push(e),localStorage.setItem("query",JSON.stringify(vetor)),exibeNoticias18()}),null!=dados&&exibeNoticias18()});