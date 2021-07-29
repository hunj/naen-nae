import{p as e,a as t,r as a,o as s,c as n,w as o,b as l,u as c,t as i,d as r,e as d,f as u,g as p,F as m,h as v,i as f,j as _,W as h,k as b,l as y,m as x,n as g,q as S,s as k,v as C,T as I,x as F,y as w,z as E,A as L,B as z,C as N,D as T,J as O,E as $,G as M,H as q,I as V,K as W,L as j,M as A}from"./vendor.a3df2765.js";const Y={},Z=o();e("data-v-1aa8501c");const B=l("낸내");t();const D=Z(((e,t)=>{const o=a("router-link");return s(),n(o,{class:"title typo-headline",to:"/"},{default:Z((()=>[B])),_:1})}));Y.render=D,Y.__scopeId="data-v-1aa8501c";const P={expose:[],setup(e){const t=c(),{isLight:a}=i(t.state),o=()=>{const e=document.querySelector("html");e.classList.toggle("theme-light"),e.classList.toggle("theme-dark"),t.commit("toggleTheme")};return(e,t)=>(s(),n("span",{class:["icon material-icons-outlined",{turn:d(a)}],onClick:o},r(d(a)?"brightness_high":"brightness_low"),3))},__scopeId:"data-v-986989cc"};const H={expose:[],setup:e=>(e,t)=>(s(),n("header",null,[u(Y),u(P)])),__scopeId:"data-v-ef182192"};const U=o();e("data-v-4e1bcf68");const R={class:"footer__leftside"},X=u("p",{class:"footer__leftside--contents typo-text"},[l(" 낸내는 한글 폰트를 웹에서 바로 사용할 수 있도록 소개하며, 모든 폰트의 저작권은 각 폰트의 제작자/제작사에 있습니다."),u("br"),l("폰트 사용 시 라이센스 문의는 제작자/제작사에 문의해주세요. ")],-1),J={class:"footer__rightside"},K=l("모든 폰트"),G=l("소개"),Q=u("a",{class:"typo-link",target:"_blank",href:"https://forms.gle/cmbzX8JmazrkDUex7"}," 폰트 제보하기 ",-1),ee=u("a",{class:"typo-link",target:"_blank",href:"https://github.com/naen-nae/naen-nae/"}," GitHub ",-1);t();const te={expose:[],setup:e=>(e,t)=>{const o=a("router-link");return s(),n("footer",null,[u("div",R,[u(Y),X]),u("div",J,[u(o,{class:"typo-link",to:"/"},{default:U((()=>[K])),_:1}),u(o,{class:"typo-link",to:"/about"},{default:U((()=>[G])),_:1}),Q,ee])])},__scopeId:"data-v-4e1bcf68"};const ae={},se=o();e("data-v-5e88a8e5");const ne={class:"snackbar-item"},oe={class:"snackbar-item__content typo-subtitle"};t();const le=se(((e,t)=>(s(),n("div",ne,[u("p",oe,[p(e.$slots,"default",{},void 0,!0)]),u("span",{class:"snackbar-item__icon icon material-icons-outlined",onClick:t[1]||(t[1]=t=>e.$emit("close",t.target.parentElement.dataset.key))}," close ")]))));ae.render=le,ae.__scopeId="data-v-5e88a8e5";const ce=o();e("data-v-58d7b718");const ie={class:"snackbar"};t();const re={expose:[],setup(e){const t=c(),{snackbarMsgs:a}=i(t.state),o=e=>t.commit("removeSnackbar",e);return(e,t)=>(s(),n("div",ie,[(s(!0),n(m,null,v(d(a),(({msg:e,key:t})=>(s(),n("div",{class:"snackbar__item",key:t},[u(ae,{"data-key":t,onClose:o},{default:ce((()=>[l(r(e),1)])),_:2},1032,["data-key"])])))),128))]))},__scopeId:"data-v-58d7b718"};e("data-v-0ee96d03");const de=u("span",{class:"top-button__icon icon material-icons-outlined"},"arrow_upward",-1);t();const ue={expose:[],setup(e){const t=c(),a=f(!0),o=()=>t.dispatch("updateScrollY",0);return window.addEventListener("scroll",(()=>{window.scrollY>0?a.value=!1:a.value=!0}),{passive:!0}),(e,t)=>(s(),n("div",{class:["top-button",{hide:a.value}],onClick:o},[de],2))},__scopeId:"data-v-0ee96d03"};e("data-v-5bc2c306");const pe={class:"app"};t();const me={expose:[],setup(e){const t=f();return _((()=>new IntersectionObserver((([{isIntersecting:e}])=>t.value.classList[e?"add":"remove"]("absolute-bottom"))).observe(t.value))),(e,o)=>{const l=a("router-view");return s(),n(m,null,[u("div",pe,[u(H),u("main",null,[u(l)]),u("div",{class:"app__top-button",ref:t},[u(ue)],512),u(te)]),u(re)],64)}},__scopeId:"data-v-5bc2c306"};var ve={DEFAILT_FONT_SIZE:"33",MAX_FONT_SIZE:80,MIN_FONT_SIZE:10,MOBILE_WDTIH_BRACK_POINT:960,FONTS_JSON_URL:"https://cdn.jsdelivr.net/gh/naen-nae/fonts/build/fonts.json",FONT_FILE_BASE:"https://cdn.jsdelivr.net/gh/naen-nae/fonts/build/"},fe=(e,t)=>new Promise((a=>h.load({fontactive:a,fontinactive:a,custom:{families:[e],urls:[t]}}))),_e=b({state:()=>({isLight:void 0===window.matchMedia||!window.matchMedia("(prefers-color-scheme: dark)").matches,fontSize:ve.DEFAILT_FONT_SIZE,textContent:"",searchContent:"",snackbarMsgs:[],fonts:[],scrollY:0,screenWidth:0}),mutations:{toggleTheme(e){e.isLight=!e.isLight},setFontSize(e,t){ve.MIN_FONT_SIZE<=t&&t<=ve.MAX_FONT_SIZE&&(e.fontSize=t)},setTextContent(e,t){e.textContent=t},setSearchContent(e,t){e.searchContent=t},createSnackbar(e,t){e.snackbarMsgs.push({msg:t,key:Math.random().toString()})},removeSnackbar(e,t){e.snackbarMsgs.splice(e.snackbarMsgs.findIndex((({key:e})=>e===t)),1)},addFonts(e,t){e.fonts.push(...t)},enableFont(e,{name:t}){e.fonts.find((({name:e})=>e===t)).enable=!0},enableSubsetFont(e,{name:t}){e.fonts.find((({name:e})=>e===t)).subsetEnable=!0},setScrollY(e,t){e.scrollY=t},setScreenWidth(e,t){e.screenWidth=t}},actions:{resetFontSize(e){e.commit("setFontSize",ve.DEFAILT_FONT_SIZE)},reqFontFace(e,t){t.filter((e=>void 0===e.enable||!1===e.enable)).forEach((async({fontFamily:t,name:a})=>{await fe(t,`${ve.FONT_FILE_BASE}/css/${t}.css`),e.commit("enableFont",{name:a})}))},reqSubsetFontFace(e,t){t.filter((e=>void 0===e.subsetEnable||!1===e.subsetEnable)).forEach((async({fontFamily:t,name:a})=>{await fe(t,`${ve.FONT_FILE_BASE}/subset-css/${t}.css`),e.commit("enableSubsetFont",{name:a})}))},updateScrollY(e,t){window.scrollTo(0,t),e.commit("setScrollY",t)}},plugins:[y({reducer:e=>x(e,["isLight","fontSize","textContent","searchContent"])})]});const he={},be=o();e("data-v-40258298");const ye={class:"about"},xe=g('<section class="about__title" data-v-40258298><p class="typo-headline" data-v-40258298>낸내</p><p class="about__title--contents typo-subtitle" data-v-40258298> 낸내는 상업적으로 이용할 수 있는 재배포 가능한 무료 한글 폰트를 모아 많은 사람들에게, 그리고 광고 없이 소개하기 위해 시작했습니다. <br data-v-40258298><br data-v-40258298> 오픈 소스로 관리되며, 광고 및 후원은 받지 않고 운영됩니다. <br data-v-40258298><br data-v-40258298> 낸내에서 소개되는 모든 폰트의 지적재산권은 각 폰트 제작자/제작사에 있으며, 낸내는 오로지 한글 폰트를 소개하고 이를 웹에서 바로 사용할 수 있도록 제공합니다. <br data-v-40258298><br data-v-40258298> 낸내는 폰트 제작자/제작사와 관련이 없는 단체입니다. 따라서 낸내는 폰트 소프트웨어 사용과 취급으로 발생하는 일에 대해 책임 및 의무를 가지지 않습니다. </p></section><section class="about__contact" data-v-40258298><p class="typo-title" data-v-40258298>문의</p><a class="typo-link" href="mailto:to@shj.rip" data-v-40258298>to@shj.rip</a></section><section class="about__github" data-v-40258298><p class="typo-title" data-v-40258298>깃허브</p><a class="typo-link" target="_blank" href="https://github.com/naen-nae/naen-nae" data-v-40258298> https://github.com/naen-nae/naen-nae </a></section>',3);t();const ge=be(((e,t)=>(s(),n("article",ye,[xe]))));he.render=ge,he.__scopeId="data-v-40258298";e("data-v-f61eff1e");const Se={class:"input-field"};t();const ke={expose:[],props:{modelValue:{type:String,required:!0},placeholder:{type:String,default:"무엇이든 입력해보세요"},mask:{type:String,default:".*"},maxLength:{type:String,default:""},clear:{type:Boolean,default:!0}},setup(e){const t=e,{mask:a}=t,o=e=>{const{key:t}=e;new RegExp(a).test(t)||e.preventDefault()},l=defineEmits(["update","update:modelValue"]),c=({target:e})=>{e.value="",l("update",""),l("update:modelValue","")},i=({target:{value:e}})=>{l("update",e),l("update:modelValue",e)};return(t,a)=>(s(),n("div",Se,[u("input",{class:"input-field__input typo-text",placeholder:e.placeholder,onInput:i,onKeypress:o,maxlength:e.maxLength,value:e.modelValue},null,40,["placeholder","maxlength","value"]),e.clear?(s(),n("span",{key:0,class:["input-field__icon icon material-icons-outlined",{hide:""===e.modelValue}],onClick:c}," close ",2)):S("",!0)]))},__scopeId:"data-v-f61eff1e"};e("data-v-0e8fa288");const Ce={class:"search-box"},Ie=u("span",{class:"search-box__icon icon material-icons-outlined"},"search",-1);t();const Fe={expose:[],setup(e){const t=c(),a=f(t.state.searchContent);return k(a,(()=>t.commit("setSearchContent",a.value))),(e,t)=>(s(),n("div",Ce,[Ie,u(ke,{placeholder:"이름으로 폰트 검색하기",modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e)},null,8,["modelValue"])]))},__scopeId:"data-v-0e8fa288"};const we={expose:[],props:{min:{type:Number,default:1},max:{type:Number,default:100},modelValue:{type:String,required:!0}},setup(e){const t=e,{min:a,max:o}=t,l=e=>{const t=(e-a)/(o-a)*100;return`linear-gradient(to right, var(--slider-color) 0%, var(--slider-color) ${t}%, var(--slider-background-color) ${t}%, var(--slider-background-color) 100%)`},c=({target:e})=>e.style.setProperty("background",l(parseInt(e.value))),i=defineEmits(["change","update:modelValue"]),r=({target:{value:e}})=>{i("change",e),i("update:modelValue",e)};return(t,i)=>{return s(),n("input",{class:"slide-bar",type:"range",min:d(a),max:d(o),value:e.modelValue,style:(u=e.modelValue,{background:l(parseInt(u))}),onInput:c,onChange:r},null,44,["min","max","value"]);var u}},__scopeId:"data-v-b81ce252"};e("data-v-06c45782");const Ee={class:"font-size-modifier"},Le={class:"font-size-modifier__input"},ze=u("span",{class:"typo-text"},"px",-1);t();const Ne={expose:[],setup(e){const t=c(),{fontSize:a}=i(t.state),o=f(t.state.fontSize),l=f(t.state.fontSize);return k(o,(()=>t.commit("setFontSize",o.value))),k(l,(()=>t.commit("setFontSize",l.value))),k(a,(()=>{o.value=a.value,l.value=a.value})),(e,t)=>(s(),n("div",Ee,[u("div",Le,[u(ke,{class:"typo-text","max-length":"2",modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),clear:!1},null,8,["modelValue"]),ze]),u(we,{class:"font-size-modifier__slide-bar",min:d(ve).MIN_FONT_SIZE,max:d(ve).MAX_FONT_SIZE,modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=e=>o.value=e)},null,8,["min","max","modelValue"])]))},__scopeId:"data-v-06c45782"};e("data-v-076fdce6");const Te={class:"reset-button"};t();const Oe={expose:[],setup(e){const t=c(),{fontSize:a}=i(t.state),o=C((()=>a.value===ve.DEFAILT_FONT_SIZE)),l=()=>t.dispatch("resetFontSize");return(e,t)=>(s(),n("div",Te,[u("span",{class:["reset-button__icon icon material-icons-outlined",{disabled:d(o)}],onClick:l},"replay",2)]))},__scopeId:"data-v-076fdce6"};e("data-v-f31d1454");const $e={class:"modifier-bar"};t();const Me={expose:[],setup:e=>(e,t)=>(s(),n("div",$e,[u(Fe,{class:"modifier-bar__search"}),u(Ne,{class:"modifier-bar__font-size"}),u(Oe,{class:"modifier-bar__reset"})])),__scopeId:"data-v-f31d1454"};e("data-v-1b21b896");const qe={class:"card-box-header"},Ve={class:"card-box-header__subtitle"},We={class:"typo-subtitle"};t();const je={expose:[],props:{name:{type:String,required:!0},author:{type:String,required:!0},stylesLen:{type:Number,required:!0}},setup:e=>(t,a)=>(s(),n("div",qe,[u("p",{class:"card-box-header__title typo-title",textContent:r(e.name)},null,8,["textContent"]),u("div",Ve,[u("p",{class:"card-box-header__subtitle--author typo-subtitle",textContent:r(e.author)},null,8,["textContent"]),u("p",We,r(e.stylesLen)+" Styles",1)])])),__scopeId:"data-v-1b21b896"};const Ae=o();e("data-v-4466d9de");const Ye={class:"card-box__header"},Ze=u("hr",null,null,-1),Be={class:"card-box__contents"},De={key:0,class:"typo-subtitle"};t();const Pe={expose:[],props:{font:{type:Object,required:!0}},setup(e){const t=c(),{fontSize:a}=i(t.state),o=C((()=>141+(a.value>33?a.value-39.6:0)+"px"));return(t,l)=>(s(),n("div",{class:"card-box",style:{height:d(o)}},[u("div",Ye,[u(je,{author:e.font.author,stylesLen:e.font.files.length,name:e.font.name},null,8,["author","stylesLen","name"]),Ze,u("div",Be,[u(I,{name:"fade-up"},{default:Ae((()=>[F(u("p",{style:{fontSize:`${d(a)}px`,fontFamily:e.font.fontFamily}}," 다람쥐 헌 쳇바퀴에 타고파 ",4),[[w,e.font.subsetEnable]])])),_:1}),e.font.subsetEnable?S("",!0):(s(),n("p",De," 폰트를 불러오고 있어요... "))])])],4))},__scopeId:"data-v-4466d9de"},{availHeight:He}=window.screen;const Ue={expose:[],setup(e){const t=L(),a=z("filteredFonts"),o=f(),{vScrollHeight:l,displayFonts:r,updateScrollY:p,updateScreenWidth:h}=function({fonts:e,vScrollContents:t}){const a=c(),{scrollY:s,screenWidth:n,fontSize:o}=i(a.state),l=C((()=>n.value>ve.MOBILE_WDTIH_BRACK_POINT?3:1)),r=C((()=>141+(o.value>33?o.value-39.6:0))),d=C((()=>Math.max(Math.floor((s.value-177.6666717529297)/(r.value+12))*l.value,0))),u=C((()=>Math.floor(He/(r.value+12))*l.value+d.value),e.value.length),p=C((()=>Math.max((r.value+12)*((d.value-18)/l.value)-12,0)));k(p,(a=>{0!==e.value.length&&void 0!==t.value&&t.value.style.setProperty("transform",`translateY(${a}px)`)}));const m=E.exports.throttle((t=>{const s=u.value;a.dispatch("reqSubsetFontFace",e.value.slice(Math.max(t-18,0),Math.min(s+1+18,e.value.length)))}),300);return k(d,m),_(m.bind(m,d.value)),{updateScrollY:()=>a.commit("setScrollY",window.scrollY),updateScreenWidth:()=>a.commit("setScreenWidth",window.innerWidth),displayFonts:C((()=>e.value.slice(Math.max(d.value-18,0),Math.min(u.value+1+18,e.value.length)))),vScrollHeight:C((()=>(r.value+12)*Math.ceil(e.value.length/l.value)-12))}}({fonts:a,vScrollContents:o});return h(),_((()=>{window.addEventListener("resize",h,{passive:!0}),window.addEventListener("scroll",p,{passive:!0})})),N((()=>{window.removeEventListener("resize",h),window.removeEventListener("scroll",p)})),(e,a)=>(s(),n("div",{class:"v-scroll",style:{height:`${d(l)}px`}},[u("section",{class:"cards-panel",ref:o},[(s(!0),n(m,null,v(d(r),((e,a)=>(s(),n(Pe,{key:`${e.fontFamily}-${a}`,font:e,onClick:a=>d(t).push({name:"detail",params:{fontName:e.fontFamily}})},null,8,["font","onClick"])))),128))],512)],4))},__scopeId:"data-v-11f4a66b"};e("data-v-f5e19a00");const Re={class:"home"},Xe={key:0,class:"typo-text"},Je={key:1,class:"typo-text"};t();const Ke={expose:[],setup(e){const t=c(),{fonts:a,searchContent:o}=i(t.state),l=C((()=>a.value.filter((({fontFamily:e,author:t,name:a})=>{const s=RegExp(o.value.toLowerCase());return s.test(e.toLowerCase())||s.test(t.toLowerCase())||s.test(a.toLowerCase())}))));return T("filteredFonts",l),(e,t)=>(s(),n("div",Re,[u(Me,{class:"home__modifier"}),""===d(o)?(s(),n("p",Xe,r(d(a).length)+" 종류의 폰트가 있어요. ",1)):(s(),n("p",Je,r(d(l).length)+" 종류의 폰트를 불러왔어요. ",1)),u(Ue,{class:"home__cards"})]))},__scopeId:"data-v-f5e19a00"};e("data-v-7fa863dc");const Ge={class:"button-box"},Qe={class:"button-box__text typo-text"};t();const et={expose:[],props:{icon:{type:String}},setup:e=>(t,a)=>(s(),n("div",Ge,[""!==e.icon&&void 0!==e.icon?(s(),n("span",{key:0,class:"icon material-icons-outlined",textContent:r(e.icon)},null,8,["textContent"])):S("",!0),u("span",Qe,[p(t.$slots,"default",{},void 0,!0)])])),__scopeId:"data-v-7fa863dc"};var tt=async e=>{try{const t=await fetch(e);if(t.ok)return t;throw new Error}catch{_e.commit("createSnackbar","인터넷 연결을 확인해주세요")}};const at=o();e("data-v-01f8728a");const st={class:"detail-title-panel"},nt={class:"detail-title-panel__left-side"},ot={class:"detail-title-panel__left-side--info"},lt={class:"detail-title-panel__right-side"},ct={key:0,class:"typo-subtitle"},it={key:1,class:"typo-subtitle"};t();const rt={expose:[],props:{font:{type:Object,required:!0}},setup(e){const{font:{files:t,name:a,author:o}}=e,l=L(),{isDownload:c,isZip:p,downloadProgress:m,zipProgress:v}=i(q({isDownload:!1,isZip:!1,downloadProgress:0,zipProgress:0})),f=async()=>{c.value=!0;const e=await Promise.all(V(t,(async e=>await tt(e).then((e=>(m.value++,e))))));c.value=!1,p.value=!0,await(async({blobs:e,names:t,zipName:a,progressCb:s}={})=>{if(void 0===e||0===e.length)throw new Error("Cannot find blob datas");const n=new O;for(const[o,l]of $(e,null!=t?t:Array(e.length).fill(0).map(((e,t)=>t))))n.file(l,o);return M.exports.saveAs(await n.generateAsync({type:"blob",streamFiles:!0},null!=s?s:()=>{}),null!=a?a:"file.zip")})({blobs:V(e,(async e=>e.blob())),names:t.map((e=>e.match(/.*\/(.*)$/)[1])),zipName:`${a}.zip`,progressCb:({percent:e})=>v.value=parseInt(e)}),p.value=!1};return(e,i)=>(s(),n("section",st,[u("div",nt,[u("span",{class:"icon material-icons-outlined",onClick:i[1]||(i[1]=e=>d(l).go(-1))}," chevron_left "),u("div",ot,[u("p",{class:"typo-title",textContent:r(d(a))},null,8,["textContent"]),u("p",{class:"typo-subtitle",textContent:r(d(o))},null,8,["textContent"])])]),u("div",lt,[u(et,{icon:d(c)?"download_done":"file_download"},{default:at((()=>[d(c)?(s(),n("span",ct," 폰트 파일 다운로드 중... ("+r(d(m))+" / "+r(d(t).length)+") ",1)):d(p)?(s(),n("span",it," 파일 압축중... ("+r(d(v))+" %) ",1)):(s(),n("span",{key:2,class:"typo-subtitle",onClick:f},"폰트 다운로드"))])),_:1},8,["icon"])])]))},__scopeId:"data-v-01f8728a"};e("data-v-6ed22b0c");const dt={class:"style-bar"};t();const ut={expose:[],setup(e){const t=c(),a=f(t.state.textContent);return k(a,(()=>t.commit("setTextContent",a.value))),(e,t)=>(s(),n("div",dt,[u(ke,{class:"style-bar__input",modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e)},null,8,["modelValue"]),u(Ne,{class:"style-bar__font-size"}),u(Oe,{class:"style-bar__reset"})]))},__scopeId:"data-v-6ed22b0c"};e("data-v-924a1d66");const pt={class:"font-box"},mt={class:"font-box__contents"};t();const vt={expose:[],props:{fontWeight:{type:Number,required:!0},fontFamily:{type:String,required:!0}},setup(e){const t=c(),{textContent:a,fontSize:o}=i(t.state);return(t,l)=>(s(),n("div",pt,[u("p",{class:"font-box__style typo-text",textContent:r(e.fontWeight)},null,8,["textContent"]),u("div",mt,[u("p",{style:{fontSize:`${d(o)}px`,fontFamily:e.fontFamily,fontWeight:e.fontWeight},textContent:r(""!==d(a)?d(a):e.fontWeight)},null,12,["textContent"])])]))},__scopeId:"data-v-924a1d66"};e("data-v-11c47cc4");const ft={class:"detail-style"},_t=u("p",{class:"typo-title"},"스타일",-1);t();const ht={expose:[],props:{font:{type:Object,required:!0}},setup(e){const{font:{fontFamily:t,fontWeights:a}}=e;return(e,o)=>(s(),n("div",ft,[_t,u(ut),(s(!0),n(m,null,v(d(a),((e,a)=>(s(),n(vt,{key:`${e}-${a}`,"font-weight":e,"font-family":d(t)},null,8,["font-weight","font-family"])))),128))]))},__scopeId:"data-v-11c47cc4"};e("data-v-514af790");const bt={class:"code-box"},yt={class:"code-box__code"},xt={key:0,class:"icon material-icons-outlined"};t();const gt={expose:[],props:{name:{type:String,required:!0},content:{type:String,required:!0}},setup(e){const{content:t}=e,a=f(!1),o=async()=>{a.value=!0,await(async e=>"clipboard"in navigator?await navigator.clipboard.writeText(e):_e.commit("createSnackbar","복사 기능을 지원하지 않는 브라우저에요. 최신 크롬 브라우저를 사용해주세요."))(t),setTimeout((()=>a.value=!1),500)};return(l,c)=>(s(),n("div",bt,[u("p",{class:"code-box__name typo-text",textContent:r(e.name)},null,8,["textContent"]),u("div",yt,[u("p",{class:"typo-text code-box__code--code",textContent:r(t)},null,8,["textContent"]),a.value?(s(),n("span",xt," done ")):(s(),n("span",{key:1,class:"icon material-icons-outlined",onClick:o}," content_copy "))])]))},__scopeId:"data-v-514af790"};e("data-v-fed8aab0");const St={class:"detail-code"},kt=u("p",{class:"typo-title"},"웹폰트",-1);t();const Ct={expose:[],props:{fontFamily:{type:String,required:!0}},setup(e){const{fontFamily:t}=e,a=[["<link>",`<link href="https://cdn.jsdelivr.net/gh/naen-nae/naen-nae@gh-pages/css/${t}.css" rel="stylesheet">`],["@import",`@import url('https://cdn.jsdelivr.net/gh/naen-nae/naen-nae@gh-pages/css/${t}.css');`],["CSS font-family",`font-family: '${t}', sans-serif;`]];return(e,t)=>(s(),n("div",St,[kt,(s(),n(m,null,v(a,(([e,t],a)=>u(gt,{key:a,name:e,content:t},null,8,["name","content"]))),64))]))},__scopeId:"data-v-fed8aab0"};const It={expose:[],props:{summary:{type:Object,required:!0}},setup(e){const{summary:t}=e,a=["카테고리","사용 범위","허용 여부"],o=$(["인쇄","웹사이트","영상","포장지","임베딩","BI/CI","OFL"],["브로슈어, 포스터, 책, 잡지 및 출판용 인쇄물 등","웹페이지, 광고 배너, 메일, E-브로슈어 등","영상물 자막, 영화 오프닝/엔딩 크레딧, UCC 등","판매용 상품의 패키지","웹사이트 및 프로그램 서버 내 폰트 탑재, E-book 제작","회사명, 브랜드명, 상품명, 로고, 마크, 슬로건, 캐치프레이즈","폰트 파일의 수정/ 복제/ 배포 가능. 단, 폰트 파일의 유료 판매는 금지"],Object.values(t));return(e,t)=>(s(),n("table",null,[u("thead",null,[u("tr",null,[(s(),n(m,null,v(a,((e,t)=>u("th",{key:`${e}-${t}`,class:"typo-text",textContent:r(e)},null,8,["textContent"]))),64))])]),u("tbody",null,[(s(!0),n(m,null,v(d(o),(([e,t,a],o)=>(s(),n("tr",{key:`${e}-${o}`},[u("td",{class:"typo-text",textContent:r(e)},null,8,["textContent"]),u("td",{class:"typo-text",textContent:r(t)},null,8,["textContent"]),u("td",{class:"typo-text",textContent:r(a?"O":"X")},null,8,["textContent"])])))),128))])]))},__scopeId:"data-v-4d72890e"};e("data-v-1f7c3eda");const Ft=l("\n  "),wt={class:"detail-license"},Et=l("\n    "),Lt=u("p",{class:"typo-title"},"라이선스",-1),zt=l("\n\n    "),Nt={class:"detail-license__full"},Tt=l("\n      "),Ot=u("p",{class:"typo-subtitle"},"라이선스 전문",-1),$t=l("\n      "),Mt=l("\n    "),qt=l("\n\n    "),Vt={class:"detail-license__summary"},Wt=l("\n      "),jt=u("p",{class:"typo-subtitle"},"라이선스 요약",-1),At=l("\n      "),Yt=l("\n      "),Zt=u("p",{class:"typo-text"},[l("\n        * 위 내용은 참고용으로, 정확한 사용 범위는 폰트 제작자/제작사에 확인\n        바랍니다.\n        "),u("br"),l("\n        사용 범위는 폰트 제작사의 세부 규정에 따라 달라질 수 있으며, 낸내는 폰트\n        소프트웨어 사용과 취급으로 발생하는 일에 대해 책임 및 의무를 가지지\n        않습니다.\n      ")],-1),Bt=l("\n    "),Dt=l("\n  "),Pt=l("\n");t();const Ht={expose:[],props:{license:{type:String,required:!0},licenseSummary:{type:Object,required:!0}},setup(e){const{license:t,licenseSummary:a}=e,o=t.replace(/(https?:.*?)(\s|$)/g,'<a style="color: var(--text-color); text-decoration: underline;" href="$1" target="_blank">$1</a>$2');return(e,t)=>(s(),n(m,null,[Ft,u("div",wt,[Et,Lt,zt,u("div",Nt,[Tt,Ot,$t,u("pre",{class:"typo-text",innerHTML:d(o)},null,8,["innerHTML"]),Mt]),qt,u("div",Vt,[Wt,jt,At,u(It,{summary:a}),Yt,Zt,Bt]),Dt]),Pt],64))},__scopeId:"data-v-1f7c3eda"};e("data-v-6279404a");const Ut={class:"detail"},Rt=u("hr",null,null,-1),Xt=u("hr",null,null,-1),Jt=u("hr",null,null,-1);t();const Kt={expose:[],props:{fontName:{type:String}},setup(e){const{fontName:t}=e,a=c(),{fonts:o}=i(a.state),l=o.value.find((({fontFamily:e})=>e===t));return void 0!==l.enable&&l.enable||a.dispatch("reqFontFace",[l]),(e,t)=>(s(),n("div",Ut,[u(rt,{font:d(l)},null,8,["font"]),Rt,u(ht,{font:d(l)},null,8,["font"]),Xt,u(Ct,{"font-family":d(l).fontFamily},null,8,["font-family"]),Jt,u(Ht,{"license-summary":d(l).licenseSummary,license:d(l).license},null,8,["license-summary","license"])]))},__scopeId:"data-v-6279404a"},Gt=W({history:j(),routes:[{path:"/about",component:he},{name:"detail",path:"/detail/:fontName",props:!0,component:Kt},{path:"/",component:Ke},{path:"/:pathMatch(.*)*",component:Ke}],scrollBehavior(e,t,a){a?_e.dispatch("updateScrollY",a.top):_e.dispatch("updateScrollY",0)}});Gt.beforeEach((({name:e,params:{fontName:t}})=>{if("detail"!==e)return!0;return void 0!==_e.state.fonts.find((({fontFamily:e})=>e===t))||Gt.push("/")})),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js"),(async()=>{document.querySelector("html").classList.add(_e.state.isLight?"theme-light":"theme-dark"),_e.commit("addFonts",await(await tt(ve.FONTS_JSON_URL)).json()),A(me).use(_e).use(Gt).mount("#app")})();
