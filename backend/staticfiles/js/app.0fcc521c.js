(function(){"use strict";var e={3974:function(e,t,o){var a=o(5130),l=o(6768);const n={class:"container"};function i(e,t,o,a,i,r){const s=(0,l.g2)("filter-form"),p=(0,l.g2)("app-pagination"),u=(0,l.g2)("card-list");return(0,l.uX)(),(0,l.CE)("div",n,[(0,l.bF)(s,{filters:i.filters,onApplyFilters:r.applyFilters,onResetFilters:r.resetFilters},null,8,["filters","onApplyFilters","onResetFilters"]),!i.loading&&i.pagination.totalPages>1?((0,l.uX)(),(0,l.Wv)(p,{key:0,"current-page":i.pagination.currentPage,"total-pages":i.pagination.totalPages,"total-cards":i.pagination.totalCards,onChangePage:r.fetchCards},null,8,["current-page","total-pages","total-cards","onChangePage"])):(0,l.Q3)("",!0),(0,l.bF)(u,{cards:i.cards,loading:i.loading},null,8,["cards","loading"]),!i.loading&&i.pagination.totalPages>1?((0,l.uX)(),(0,l.Wv)(p,{key:1,"current-page":i.pagination.currentPage,"total-pages":i.pagination.totalPages,"total-cards":i.pagination.totalCards,onChangePage:r.fetchCards},null,8,["current-page","total-pages","total-cards","onChangePage"])):(0,l.Q3)("",!0)])}o(4603),o(7566),o(8721);var r=o(4232);const s={class:"pt-5"},p={class:"form-group d-flex align-items-center position relative"},u={class:"toggle-buttons d-flex justify-content-center py-5"},c={class:"form-group px-5"},d={class:"p-3 border rounded collapse",id:"toggleSearchFilters"},v={class:"d-flex justify-content-center flex-wrap"},f={class:"form-group py-3 px-4"},g={class:"form-group py-3 px-4"},m={class:"form-group py-3 px-4"},h={class:"form-group py-3 px-4"},k={class:"form-group py-3 px-4"},y={class:"form-group py-3 px-4"},b={class:"form-group py-3 px-4"},x={class:"form-group py-3 px-4"},L={class:"d-flex justify-content-center py-4"};function F(e,t,o,n,i,F){return(0,l.uX)(),(0,l.CE)("div",s,[t[31]||(t[31]=(0,l.Lk)("h1",{class:"my-5"},"Liste des cartes",-1)),(0,l.Lk)("form",{onChange:t[14]||(t[14]=(0,a.D$)(((...e)=>F.applyFilters&&F.applyFilters(...e)),["prevent"]))},[(0,l.Lk)("div",p,[(0,l.bo)((0,l.Lk)("input",{type:"search","onUpdate:modelValue":t[0]||(t[0]=e=>i.localFilters.name=e),placeholder:"Rechercher par nom",class:"form-control form-control-lg"},null,512),[[a.Jo,i.localFilters.name]])]),(0,l.Lk)("div",u,[t[17]||(t[17]=(0,l.Lk)("a",{class:"filter-button text-center","data-bs-toggle":"collapse","data-bs-target":"#toggleSearchFilters","aria-expanded":"false","aria-controls":"toggleSearchFilters"},[(0,l.Lk)("i",{class:"bi bi-filter"})],-1)),(0,l.Lk)("div",c,[t[16]||(t[16]=(0,l.Lk)("label",null,"Cartes par page:",-1)),(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.localFilters.limit=e),class:"form-select"},t[15]||(t[15]=[(0,l.Lk)("option",{value:20},"20",-1),(0,l.Lk)("option",{value:50},"50",-1),(0,l.Lk)("option",{value:75},"75",-1),(0,l.Lk)("option",{value:100},"100",-1)]),512),[[a.u1,i.localFilters.limit]])])]),(0,l.Lk)("div",d,[(0,l.Lk)("div",v,[(0,l.Lk)("div",f,[t[19]||(t[19]=(0,l.Lk)("label",null,"Type de carte :",-1)),(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>i.localFilters.frame_type=e),class:"form-select"},t[18]||(t[18]=[(0,l.Fv)('<option value="">Tous</option><option value="magie">Magie</option><option value="piège">Piège</option><option value="monstre">Monstre</option><option value="extra-deck">Extra-deck</option>',5)]),512),[[a.u1,i.localFilters.frame_type]])]),(0,l.Lk)("div",g,[t[21]||(t[21]=(0,l.Lk)("label",null,"Type de magie, piège :",-1)),(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.localFilters.spell_trap_race=e),class:"form-select"},t[20]||(t[20]=[(0,l.Fv)('<option value="" selected>Tous</option><option value="normal">Normal</option><option value="continue">Continue</option><option value="terrain">Terrain</option><option value="équipement">Équipement</option><option value="rituel">Rituel</option><option value="rapide">Rapide</option><option value="contre">Contre</option>',8)]),512),[[a.u1,i.localFilters.spell_trap_race]])]),(0,l.Lk)("div",m,[t[23]||(t[23]=(0,l.Lk)("label",null,"Autre :",-1)),(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>i.localFilters.type=e),class:"form-select"},t[22]||(t[22]=[(0,l.Fv)('<option value="">Tous</option><option value="normal">Normal</option><option value="effet">Effet</option><option value="rituel">Rituel</option><option value="fusion">Fusion</option><option value="synchro">Synchro</option><option value="xyz">Xyz</option><option value="toon">Toon</option><option value="spirit">Spirit</option><option value="union">Union</option><option value="gemini">Gemini</option><option value="syntoniseur">Syntoniseur</option><option value="flip">Flip</option><option value="pendule">Pendule</option><option value="lien">Lien</option>',15)]),512),[[a.u1,i.localFilters.type]])]),(0,l.Lk)("div",h,[t[25]||(t[25]=(0,l.Lk)("label",null,"Type de monstre :",-1)),(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[5]||(t[5]=e=>i.localFilters.monster_race=e),class:"form-select"},t[24]||(t[24]=[(0,l.Fv)('<option value="">Tous</option><option value="aqua">Aqua</option><option value="bête">Bête</option><option value="bête-guerrier">Bête-guerrier</option><option value="cyberse">Cyberse</option><option value="dieu créateur">Dieu créateur</option><option value="dino">Dino</option><option value="bête-divine">Bête-divine</option><option value="dragon">Dragon</option><option value="elfe">Elfe</option><option value="démon">Démon</option><option value="poisson">Poisson</option><option value="insecte">Insecte</option><option value="machine">Machine</option><option value="plante">Plante</option><option value="psychique">Psychique</option><option value="pyro">Pyro</option><option value="reptile">Reptile</option><option value="rocher">Rocher</option><option value="serpent de mer">Serpent de mer</option><option value="magicien">Magicien</option><option value="tonnerre">Tonnerre</option><option value="guerrier">Guerrier</option><option value="bête ailée">Bête ailée</option><option value="wyrm">Wyrm</option><option value="zombie">Zombie</option>',26)]),512),[[a.u1,i.localFilters.monster_race]])]),(0,l.Lk)("div",k,[t[27]||(t[27]=(0,l.Lk)("label",null,"Attribut :",-1)),(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[6]||(t[6]=e=>i.localFilters.attribute=e),class:"form-select"},t[26]||(t[26]=[(0,l.Fv)('<option value="">Tous</option><option value="lumière">Lumière</option><option value="ténèbres">Ténèbres</option><option value="feu">Feu</option><option value="eau">Eau</option><option value="terre">Terre</option><option value="vent">Vent</option><option value="divin">Divin</option>',8)]),512),[[a.u1,i.localFilters.attribute]])]),(0,l.Lk)("div",y,[t[28]||(t[28]=(0,l.Lk)("label",null,"Attaque :",-1)),(0,l.bo)((0,l.Lk)("input",{class:"range-slider",type:"range","onUpdate:modelValue":t[7]||(t[7]=e=>i.localFilters.attackMin=e),min:0,max:5e3,step:"50"},null,512),[[a.Jo,i.localFilters.attackMin]]),(0,l.Lk)("span",null,(0,r.v_)(i.localFilters.attackMin),1),(0,l.bo)((0,l.Lk)("input",{class:"range-slider",type:"range","onUpdate:modelValue":t[8]||(t[8]=e=>i.localFilters.attackMax=e),min:0,max:5e3,step:"50"},null,512),[[a.Jo,i.localFilters.attackMax]]),(0,l.Lk)("span",null,(0,r.v_)(i.localFilters.attackMax),1)]),(0,l.Lk)("div",b,[t[29]||(t[29]=(0,l.Lk)("label",null,"Défense :",-1)),(0,l.bo)((0,l.Lk)("input",{class:"range-slider",type:"range","onUpdate:modelValue":t[9]||(t[9]=e=>i.localFilters.defenseMin=e),min:0,max:5e3,step:"50"},null,512),[[a.Jo,i.localFilters.defenseMin]]),(0,l.Lk)("span",null,(0,r.v_)(i.localFilters.defenseMin),1),(0,l.bo)((0,l.Lk)("input",{class:"range-slider",type:"range","onUpdate:modelValue":t[10]||(t[10]=e=>i.localFilters.defenseMax=e),min:0,max:5e3,step:"50"},null,512),[[a.Jo,i.localFilters.defenseMax]]),(0,l.Lk)("span",null,(0,r.v_)(i.localFilters.defenseMax),1)]),(0,l.Lk)("div",x,[t[30]||(t[30]=(0,l.Lk)("label",null,"Niveau/Rang :",-1)),(0,l.bo)((0,l.Lk)("input",{class:"range-slider",type:"range","onUpdate:modelValue":t[11]||(t[11]=e=>i.localFilters.levelMin=e),min:1,max:13,step:"1"},null,512),[[a.Jo,i.localFilters.levelMin]]),(0,l.Lk)("span",null,(0,r.v_)(i.localFilters.levelMin),1),(0,l.bo)((0,l.Lk)("input",{class:"range-slider",type:"range","onUpdate:modelValue":t[12]||(t[12]=e=>i.localFilters.levelMax=e),min:1,max:13,step:"1"},null,512),[[a.Jo,i.localFilters.levelMax]]),(0,l.Lk)("span",null,(0,r.v_)(i.localFilters.levelMax),1)])]),(0,l.Lk)("div",L,[(0,l.Lk)("button",{type:"button",onClick:t[13]||(t[13]=(...e)=>F.resetFilters&&F.resetFilters(...e)),class:"btn btn-danger"},"Effacer tous les filtres")])])],32)])}var _={props:["filters"],data(){return{localFilters:{...this.filters,limit:20}}},watch:{filters(e){this.localFilters={...e,limit:this.localFilters.limit}}},methods:{applyFilters(){this.$emit("apply-filters",this.localFilters)},resetFilters(){this.localFilters={...this.filters,limit:this.localFilters.limit},this.$emit("reset-filters")}}},C=o(1241);const M=(0,C.A)(_,[["render",F]]);var P=M;const E={key:0,class:"loader"},X={key:1},w={key:0,class:"card-container border rounded"},T={class:"mx-3 my-3"},A=["src","alt"],U={class:"card-content d-flex px-3 py-3 flex-column"},V={class:"p-3 text-center",style:{height:"64px",width:"762px"}},j={class:"text-center",style:{height:"160px",width:"762px"}},R={class:"d-flex justify-content-between mx-5",style:{height:"50px",width:"600px"}},O={key:0},S={key:1},q={key:2},D={key:0},J={key:1},N={key:2},$={key:1};function Q(e,t,o,a,n,i){return o.loading?((0,l.uX)(),(0,l.CE)("div",E,"Chargement en cours...")):((0,l.uX)(),(0,l.CE)("div",X,[o.cards?((0,l.uX)(),(0,l.CE)("div",w,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.cards,(e=>((0,l.uX)(),(0,l.CE)("div",{key:e.id,class:"border d-flex px-2 py-2"},[(0,l.Lk)("div",T,[(0,l.Lk)("img",{src:e.image,alt:e.name,loading:"lazy",width:"270",height:"370"},null,8,A)]),(0,l.Lk)("div",U,[(0,l.Lk)("div",V,[(0,l.Lk)("h5",null,(0,r.v_)(e.name),1)]),(0,l.Lk)("div",j,[(0,l.Lk)("div",R,[(0,l.Lk)("span",null,(0,r.v_)(e.type),1),"Trap Card"===e.type||"Spell Card"===e.type?((0,l.uX)(),(0,l.CE)("span",O,(0,r.v_)(e.spell_trap_race),1)):((0,l.uX)(),(0,l.CE)("span",S,(0,r.v_)(e.monster_race),1)),e.attribute?((0,l.uX)(),(0,l.CE)("span",q,(0,r.v_)(e.attribute),1)):(0,l.Q3)("",!0)]),e.level_rank?((0,l.uX)(),(0,l.CE)("p",D,"LVL: "+(0,r.v_)(e.level_rank),1)):(0,l.Q3)("",!0),e.attack?((0,l.uX)(),(0,l.CE)("p",J,"ATK: "+(0,r.v_)(e.attack),1)):(0,l.Q3)("",!0),e.defense?((0,l.uX)(),(0,l.CE)("p",N,"DEF: "+(0,r.v_)(e.defense),1)):(0,l.Q3)("",!0)]),(0,l.Lk)("p",null,(0,r.v_)(e.effect),1)])])))),128))])):((0,l.uX)(),(0,l.CE)("p",$,"Aucune carte ne correspond à ce filtre."))]))}var B={props:["cards","loading"]};const z=(0,C.A)(B,[["render",Q]]);var G=z;const I={class:"pagination justify-content-center align-items-center py-3 mt-4"},W=["disabled"],K={class:"px-2"},H=["disabled"];function Z(e,t,o,a,n,i){return(0,l.uX)(),(0,l.CE)("div",I,[(0,l.Lk)("button",{disabled:!i.hasPrevious,onClick:t[0]||(t[0]=t=>e.$emit("change-page",o.currentPage-1)),class:"page-link rounded px-3"}," ‹ Précédent ",8,W),(0,l.Lk)("span",K,"Page "+(0,r.v_)(o.currentPage)+" / "+(0,r.v_)(o.totalPages)+" sur "+(0,r.v_)(o.totalCards)+" cartes",1),(0,l.Lk)("button",{disabled:!i.hasNext,onClick:t[1]||(t[1]=t=>e.$emit("change-page",o.currentPage+1)),class:"page-link rounded px-3"}," Suivant › ",8,H)])}var Y={props:["currentPage","totalPages","totalCards"],computed:{hasPrevious(){return this.currentPage>1},hasNext(){return this.currentPage<this.totalPages}}};const ee=(0,C.A)(Y,[["render",Z]]);var te=ee;const oe={NODE_ENV:"production",BASE_URL:"/"}.APP_API_URL;var ae={components:{FilterForm:P,CardList:G,AppPagination:te},data(){return{filters:{name:"",frame_type:"",spell_trap_race:"",type:"",monster_race:"",attribute:"",attackMin:"",attackMax:"",defenseMin:"",defenseMax:"",levelMin:"",levelMax:"",limit:20},cards:[],pagination:{currentPage:1,totalPages:0,totalCards:20},loading:!1}},methods:{fetchCards(e=1){this.loading=!0;const t=new URLSearchParams({name:this.filters.name,frame_type:this.filters.frame_type,spell_trap_race:this.filters.spell_trap_race,type:this.filters.type,monster_race:this.filters.monster_race,attribute:this.filters.attribute,attack_min:this.filters.attackMin,attack_max:this.filters.attackMax,defense_min:this.filters.defenseMin,defense_max:this.filters.defenseMax,level_rank_min:this.filters.levelMin,level_rank_max:this.filters.levelMax,limit:this.filters.limit,page:e,json:"true"}).toString();fetch(`${oe}/api/card/?${t}`,{method:"GET",headers:{Accept:"application/json","x-requested-with":"XMLHttpRequest"}}).then((e=>e.json())).then((e=>{console.log(e),this.cards=e.items,this.pagination={currentPage:e.pagination.current_page,totalPages:e.pagination.total_pages,totalCards:e.pagination.total_items},this.loading=!1})).catch((e=>{console.error("Erreur dans la récupération des données:",e),this.loading=!1}))},applyFilters(e){this.filters={...e},this.fetchCards(1)},resetFilters(){this.filters={name:"",frame_type:"",spell_trap_race:"",type:"",monster_race:"",attribute:"",attackMin:"",attackMax:"",defenseMin:"",defenseMax:"",levelMin:"",levelMax:"",limit:this.filters.limit},this.fetchCards(1)}},created(){this.fetchCards()}};const le=(0,C.A)(ae,[["render",i]]);var ne=le;const ie=(0,a.Ef)(ne);ie.mount("#app")}},t={};function o(a){var l=t[a];if(void 0!==l)return l.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,a,l,n){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],l=e[u][1],n=e[u][2];for(var r=!0,s=0;s<a.length;s++)(!1&n||i>=n)&&Object.keys(o.O).every((function(e){return o.O[e](a[s])}))?a.splice(s--,1):(r=!1,n<i&&(i=n));if(r){e.splice(u--,1);var p=l();void 0!==p&&(t=p)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,l,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,n,i=a[0],r=a[1],s=a[2],p=0;if(i.some((function(t){return 0!==e[t]}))){for(l in r)o.o(r,l)&&(o.m[l]=r[l]);if(s)var u=s(o)}for(t&&t(a);p<i.length;p++)n=i[p],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(3974)}));a=o.O(a)})();
//# sourceMappingURL=app.0fcc521c.js.map