(window["webpackJsonpyoutube-clone"]=window["webpackJsonpyoutube-clone"]||[]).push([[0],{44:function(e,t,a){e.exports=a(72)},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),l=a(24),o=a.n(l),u=a(37),s=a(7),m=a(103),p=a(40),d=a.n(p).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),E=a(100),f=a(104),v=function(e){var t=e.onFormSubmit,a=Object(n.createRef)();return r.a.createElement(E.a,{elevation:6,style:{padding:"25px"}},r.a.createElement("form",{onSubmit:function(e){t(a.current.value),e.preventDefault(),a.current.value=""}},r.a.createElement(f.a,{fullWidth:!0,label:"Search...",inputRef:a})))},b=a(102),h=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{elevation:6,style:{height:"70%"}},r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:a})),r.a.createElement(E.a,{elevation:6,style:{padding:"15px"}},r.a.createElement(b.a,{variant:"h4"},t.snippet.title),r.a.createElement(b.a,{variant:"subtitle1"},t.snippet.channelTitle),r.a.createElement(b.a,{variant:"subtitle2"},t.snippet.description)))},y=function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(E.a,{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("img",{style:{marginRight:"20px",width:"60%"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),r.a.createElement(b.a,{variant:"subtitle2"},r.a.createElement("b",null,t.snippet.title))))},g=function(e){var t=e.videos,a=e.onVideoSelect;return r.a.createElement(m.a,{container:!0,spacing:5},t.map(function(e,t){return r.a.createElement(y,{key:t,video:e,onVideoSelect:a})}))},w=(a(71),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(),l=Object(s.a)(c,2),p=l[0],E=l[1],f=function(){var e=Object(u.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("search",{params:{part:"snippet",maxResults:5,key:"AIzaSyCneTCHQQi2IBxFlIzNeCy3WesdEZWsLEQ",q:t}});case 2:a=e.sent,i(a.data.items),E(a.data.items[0]);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){f("javascript")},[]),r.a.createElement(m.a,{style:{justifyContent:"center"},container:!0,spacing:10},r.a.createElement(m.a,{item:!0,xs:11},r.a.createElement(m.a,{container:!0,spacing:10},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(v,{onFormSubmit:f})),r.a.createElement(m.a,{item:!0,xs:8},r.a.createElement(h,{video:p})),r.a.createElement(m.a,{item:!0,xs:4},r.a.createElement(g,{videos:a,onVideoSelect:function(e){return E(e)}})))))});c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.86c637c0.chunk.js.map