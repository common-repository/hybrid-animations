import{r as t,h as e,H as i}from"./p-4cc35d11.js";import{a}from"./p-e9a05b65.js";const n=class{constructor(e){t(this,e),this.letters=[]}componentWillLoad(){this.letters=this.text.split("").map((t=>" "===t?"&nbsp;":t))}componentDidRender(){a.timeline({loop:this.loop}).add({targets:".ml9 .letter",scale:[0,1],duration:1500,elasticity:600,delay:(t,e)=>45*(e+1)}).add({targets:".ml9",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3})}render(){return e(i,null,e("h1",{class:"ml9"},e("span",{class:"text-wrapper"},e("span",{class:"letters"}," ",this.letters.map((t=>e("span",{class:"letter",innerHTML:t})))))))}};n.style=".sc-text-animation-7-h{display:block}.ml9.sc-text-animation-7{position:relative;font-weight:200;font-size:4em}.ml9.sc-text-animation-7 .text-wrapper.sc-text-animation-7{position:relative;display:inline-block;padding-top:0.2em;padding-right:0.05em;padding-bottom:0.1em;overflow:hidden}.ml9.sc-text-animation-7 .letter.sc-text-animation-7{transform-origin:50% 100%;display:inline-block;line-height:1em}";export{n as text_animation_7}