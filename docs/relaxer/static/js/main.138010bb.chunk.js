(this.webpackJsonprelaxer=this.webpackJsonprelaxer||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/bg.c59a2f31.jpg"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABUUlEQVRoge2ZMU7DQBAAB0SBhNJFQqagpaakpInyGHrKhI4P8B4+AVLyAp6QDijIKuG09i1x0N2tdsrzOr65teP1HgRBEAS/mZeewDGYAZvSkxiLSHyVnsgY9iWaFUklmhTRJJoT6ZNoSmRIohmRnEQTIhaJ6kWsElWLzLFL5EQegC4T023jejlTxu6Ai4FzroEX4DxzcQtLYMHPJO+BDyWmA16BG2C6PcfEG/aVHpORZRKzBq6SmEvgPYl7rklkAqyUuBW726wbiJnUIgL6aktmbgeOpVkrLgL9q/6pjO1nqzoR6M/MwZkoJZKTMUmcGuWaJG6tA0RcPOwu/n5dvRAfkxhribLQfuxEGfuPolG7DuyKxjW2ovGJPxSNFqor48fg4sNKcPGpK7hoPggu2kGCiwad4KJlKrhoYgsuthUEFxs9goutN8HFZmgQBMFx+QYXE+mSxVmvsAAAAABJRU5ErkJggg=="},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADf0lEQVRoge3aS6xdUxgH8N91qo22Iy3SYqBVNOItdSOuXCVeqUmDAXMiSEPEY2AiJkI8QmpqRAykGjOJiRYpUo+IR1UMSLTa2wqlbW71Gqy7OWedtXbPOXvf7p3oPznJ+fb+r299/73XXmt9396cwP8DN2A7fsRNDccyMm7FNGZmf980G85ouBIH/CdiBkcajWgErMAuvSKK3zDo4PR6QxscS/GdtIhhhCzD97NttuDyesMsxyn4UF7EMEIe0T8sN2JRjfEm0cEm5SKGEXJHpv0XWFlb1Am8kum4yjPyMH5P+JjC1bVEHeGxRGd1CIHleD3h5zdcUTXwbtyNo4mO6hJS4B4cinztxaoKPv/FWhw2uIgqQmASf0b+PsX8Kk4vEm7vMCLKhEziNTyKBSW8G/XfmedGFXE2fh5BRE7IMhzs4nyJC0r6fyDyOY3VxckxnIENWHIMIZM47xicHMYSx9ZgW3RsH9bho4yPzbit69gmrC+MLUa7ylXvSAfvJrj7cWGmzTn6n89LipN/NyQE5gljPZ4Bd8iv5i9F3BeLE3MtYpBZ6y79F/T5DPfcSPivOLktQuDJqM0hYYJJYWvEnThpwE6OB57Ge132Atyb4W6O7HHac0fgqqjdzgzv2oj3VtuEwLdR2+UJzuKI83mbhlaBrZGdmooPCNuWAkvaKOSnyF6a4U11/W+lkHgXkBua3byZNgo5K7KnkixO7fq/r41CronsrxKcxXpX/qm2CRnH+V32D/glwYurKzvbJuSpyH4jwxuP7G20Zx25P2pzUH6L8kHEnWiLkDv11otn8GyGu0rvpnG32U1jk9v4Dp7Rv43/Wij8pfByxH2hOPF+Q0Lm450Ed498JrpCb2J11GxiNQ+3C6lubgUtMFnSwSiYENLabuwWXkvsSPDHhKSqu3rytlCFHAp1Fx9W6x1SHwupbA4bIp/TyosVpbhYveWg9XgTD5p9YDO4WX+unpsMBsb1CadVZ60yrMVfkb9PVCzQFTheJdP79F+0PWquzD9u7oScKQy52M9+c/TyZ2OisypCOngCfyR87NW/NakNHaEQUJeQhzLtP1M+o9WChUKJsw4hr0btjggvkxbWGG8pThMWsapCLhUSqRkhd7+s3jAHw0phZa76sC8StiKNYo3+DwYONxpRBawTxnYhZHuz4VTDLcI3KLtwXcOxnEAj+AdTcriHB8OZOAAAAABJRU5ErkJggg=="},function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),i=n.n(r),o=(n(12),n(1));var s=n(4),u=n.n(s),A=n(5),l=n.n(A),h=n(6),m=n.n(h);var p=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),A=s[0],h=s[1],p=Object(a.useState)(!1),g=Object(o.a)(p,2),E=g[0],f=g[1],d=Object(a.useRef)(null),w=function(e){d&&!E&&(d.current.text=e,window.speechSynthesis.speak(d.current))};E&&window.speechSynthesis.cancel();var y=function(){(window.speechSynthesis.paused||window.speechSynthesis.speaking)&&window.speechSynthesis.resume(),h("grow"),w("Breathe In!"),r("Breathe In!"),setTimeout((function(){r("Hold"),w("Hold"),setTimeout((function(){w("Breathe Out!"),r("Breathe Out!"),h("shrink")}),1500)}),3e3)};return Object(a.useEffect)((function(){return window.speechSynthesis&&(d.current=new SpeechSynthesisUtterance,d.current.rate=1,d.current.pitch=.5,f(!0)),y(),function(){d&&window.speechSynthesis.cancel()}}),[]),function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){return y()}),7500),c.a.createElement("div",{className:"App",style:{backgroundImage:"url(".concat(u.a,")")}},c.a.createElement("h1",null,"Relaxer"),c.a.createElement("img",{src:E?l.a:m.a,alt:"icon",className:"speak",onClick:function(e){return f(!E)}}),c.a.createElement("div",{className:"container ".concat(A),id:"container"},c.a.createElement("div",{className:"circle"}),c.a.createElement("p",{id:"text"},n),c.a.createElement("div",{className:"pointer-container"},c.a.createElement("span",{className:"pointer"})),c.a.createElement("div",{className:"gradient-circle"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.138010bb.chunk.js.map