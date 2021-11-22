exports.ids=[2],exports.modules={27:function(t,e,r){"use strict";r.d(e,"d",(function(){return o})),r.d(e,"f",(function(){return n})),r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return v})),r.d(e,"e",(function(){return _}));var l=r(6);const o=t=>Object(l.b)({method:"GET",url:"/api/articles",params:t}),n=t=>Object(l.b)({method:"GET",url:"/api/articles/feed",params:t}),d=t=>Object(l.b)({method:"POST",url:`/api/articles/${t}/favorite`}),c=t=>Object(l.b)({method:"DELETE",url:`/api/articles/${t}/favorite`}),v=t=>Object(l.b)({method:"GET",url:"/api/articles/"+t}),_=t=>Object(l.b)({method:"GET",url:`/api/articles/${t}/comments`})},29:function(t,e,r){"use strict";r.r(e);var l=r(27),o=r(6);var n=r(7),d={name:"HomeIndex",async asyncData({query:t}){const e=Number.parseInt(t.page||1),r=t.tab||"global_feed",n=t.tag,d="global_feed"===r?l.d:l.f,[c,v]=await Promise.all([d({limit:20,offset:20*(e-1),tag:n}),Object(o.b)({method:"GET",url:"/api/tags"})]),{articles:_,articlesCount:m}=c.data,{tags:f}=v.data;return _.forEach(article=>article.favoriteDisabled=!1),{articles:_,articlesCount:m,tags:f,limit:20,page:e,tab:r,tag:n}},watchQuery:["page","tag","tab"],computed:{...Object(n.mapState)(["user"]),totalPage(){return Math.ceil(this.articlesCount/this.limit)}},methods:{async onFavorite(article){article.favoriteDisabled=!0,article.favorited?(await Object(l.b)(article.slug),article.favorited=!1,article.favoritesCount+=-1):(await Object(l.a)(article.slug),article.favorited=!0,article.favoritesCount+=1),article.favoriteDisabled=!1}}},c=r(1);var component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._ssrNode('<div class="banner"><div class="container"><h1 class="logo-font">首页~</h1> <p>简介简介~.</p></div></div> '),t._ssrNode('<div class="container page">',"</div>",[t._ssrNode('<div class="row">',"</div>",[t._ssrNode('<div class="col-md-9">',"</div>",[t._ssrNode('<div class="feed-toggle">',"</div>",[t._ssrNode('<ul class="nav nav-pills outline-active">',"</ul>",[t.user?t._ssrNode('<li class="nav-item">',"</li>",[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"your_feed"}}}},[t._v("Your Feed")])],1):t._e(),t._ssrNode(" "),t._ssrNode('<li class="nav-item">',"</li>",[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"home"}}},[t._v("Global Feed")])],1),t._ssrNode(" "),t.tag?t._ssrNode('<li class="nav-item">',"</li>",[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"tag",tag:t.tag}}}},[t._v("# "+t._s(t.tag))])],1):t._e()],2)]),t._ssrNode(" "),t._l(t.articles,(function(article){return t._ssrNode('<div class="article-preview">',"</div>",[t._ssrNode('<div class="article-meta">',"</div>",[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._ssrNode(" "),t._ssrNode('<div class="info">',"</div>",[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v("\n                "+t._s(article.author.username)+"\n              ")]),t._ssrNode(' <span class="date">'+t._ssrEscape(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))+"</span>")],2),t._ssrNode(" <button"+t._ssrAttr("disabled",article.favoriteDisabled)+t._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active:article.favorited})+'><i class="ion-heart"></i>'+t._ssrEscape(" "+t._s(article.favoritesCount)+"\n            ")+"</button>")],2),t._ssrNode(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],2)})),t._ssrNode(" "),t._ssrNode("<nav>","</nav>",[t._ssrNode('<ul class="pagination">',"</ul>",t._l(t.totalPage,(function(e){return t._ssrNode("<li"+t._ssrClass("page-item",{active:e===t.page})+">","</li>",[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2),t._ssrNode(" "),t._ssrNode('<div class="col-md-3">',"</div>",[t._ssrNode('<div class="sidebar">',"</div>",[t._ssrNode("<p>Popular Tags</p> "),t._ssrNode('<div class="tag-list">',"</div>",t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tab:"tag",tag:e}}}},[t._v(t._s(e))])})),1)],2)])],2)])],2)}),[],!1,(function(t){}),null,"2411ba06");e.default=component.exports}};