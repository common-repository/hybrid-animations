import{r as e,h as t,H as s,g as a}from"./p-4cc35d11.js";import{a as r}from"./p-e9a05b65.js";const l=class{constructor(t){e(this,t)}componentDidRender(){var e=this.el.querySelector(".ml16");e.innerHTML=e.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),r.timeline({loop:this.loop}).add({targets:".ml16 .letter",translateY:[-100,0],easing:"easeOutExpo",duration:1400,delay:(e,t)=>30*t}).add({targets:".ml16",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3})}render(){return t(s,null,t("h1",{class:"ml16"},this.text))}get el(){return a(this)}};l.style=":host{display:block}.ml16{color:#402d2d;padding:40px 0;font-weight:800;font-size:2em;text-transform:uppercase;letter-spacing:0.5em;overflow:hidden}.ml16 .letter{display:inline-block;line-height:1em}";export{l as text_animation_1}