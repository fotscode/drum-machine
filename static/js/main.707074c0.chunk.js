(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(3),i=n(4),o=n(6),r=n(5),c=n(2),l=n.n(c),d=n(8),u=n.n(d),p=n(1),h=["https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/20[kb]ETOM_H.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/31[kb]ETOM_L.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/22[kb]ETOM_M.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/20[kb]BASSELEC.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/35[kb]BASSFNK1.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/22[kb]BASSFNK2.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/14[kb]BD1_ELEC.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/29[kb]BD2_REV.wav.mp3","https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/15[kb]BD3_ACOU.wav.mp3"],m=["Q","W","E","A","S","D","Z","X","C"];function v(e){return Object(s.jsxs)("button",{className:"drum-pad",onClick:e.onClick,id:e.description,children:[m[e.value],Object(s.jsx)("audio",{className:"clip",src:h[e.value],id:m[e.value]})]})}var b=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={power:!0,volume:.3,displayText:"@fotsme"},s.handleClick=s.handleClick.bind(Object(p.a)(s)),s.getDescription=s.getDescription.bind(Object(p.a)(s)),s.handleVolume=s.handleVolume.bind(Object(p.a)(s)),s.handlePower=s.handlePower.bind(Object(p.a)(s)),s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",(function(t){return e.handleClick(m.indexOf(t.key.toUpperCase()))})),m.map((function(e){return document.getElementById(e).load()}))}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("keydown",(function(t){return e.handleClick(m.indexOf(t.key.toUpperCase()))}))}},{key:"getDescription",value:function(e){var t=h[e].split("/");return t[t.length-1].match(/\w\w\w\w+/)[0]}},{key:"renderSoundButton",value:function(e){var t=this;return Object(s.jsx)(v,{onClick:function(){return t.handleClick(e)},value:e,description:this.getDescription(e)})}},{key:"handleClick",value:function(e){if(this.state.power){var t=document.getElementById(m[e]);t.volume=this.state.volume,t.currentTime=0,t.play();var n=document.getElementById(this.getDescription(e));n.style.transform="translateY(4px)",n.style.backgroundColor="#f5c444",setTimeout((function(){n.style.transform="translateY(0px)",n.style.backgroundColor="#f7e018"}),40),this.setState({displayText:this.getDescription(e)})}}},{key:"handleVolume",value:function(e){this.setState({volume:e.target.value/100,displayText:"Volume: "+e.target.value})}},{key:"handlePower",value:function(e){this.setState({power:e.target.checked})}},{key:"render",value:function(){return Object(s.jsxs)("div",{id:"drum-machine",children:[Object(s.jsxs)("div",{id:"pads-container",children:[this.renderSoundButton(0),this.renderSoundButton(1),this.renderSoundButton(2),this.renderSoundButton(3),this.renderSoundButton(4),this.renderSoundButton(5),this.renderSoundButton(6),this.renderSoundButton(7),this.renderSoundButton(8)]}),Object(s.jsxs)("section",{id:"configuration",children:[Object(s.jsxs)("div",{id:"power",children:[Object(s.jsx)("p",{children:"Power"}),Object(s.jsxs)("label",{class:"switch",children:[Object(s.jsx)("input",{type:"checkbox",checked:this.state.power,onClick:this.handlePower}),Object(s.jsx)("span",{class:"slider"})]})]}),Object(s.jsx)("div",{id:"display-container",children:Object(s.jsx)("p",{id:"display",children:this.state.displayText})}),Object(s.jsxs)("div",{id:"volume-container",children:[Object(s.jsx)("p",{children:"Volume"}),Object(s.jsx)("input",{className:"volume-slider",value:100*this.state.volume,type:"range",min:"0",max:"100",onChange:this.handleVolume})]}),Object(s.jsx)("div",{id:"set"})]})]})}}]),n}(l.a.Component),j=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{id:"myApp",children:Object(s.jsx)(b,{})})}}]),n}(l.a.Component);u.a.render(Object(s.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.707074c0.chunk.js.map