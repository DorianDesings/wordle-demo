import{s as m,j as d,r as l,R as x}from"./vendor.062f80c8.js";const b=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};b();const w=m.div`
	display: grid;
	grid-template-columns: repeat(5, 60px);
	gap: 0.4rem;
	padding: 5rem 0;
	justify-content: center;

	span {
		height: 60px;
		width: 60px;
		border: 2px solid rgb(255 255 255 / 0.2);
	}
`,S=m.span`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	border: 1px solid aliceblue;
	text-transform: uppercase;

	&.correct {
		background-color: rgb(106, 170, 100);
	}

	&.incorrect {
		background-color: #3a3a3c;
	}

	&.exist {
		background-color: rgb(201, 180, 88);
	}
`,c=d.exports.jsx,f=d.exports.jsxs,g=d.exports.Fragment,j=({secretWord:n,userWord:r})=>{const[o,i]=l.exports.useState(h),[e,t]=l.exports.useState(0);return l.exports.useEffect(()=>{r.length===5&&(v(r,e,o,i),t(e+1))},[r]),c(g,{children:c(w,{secretWord:n,userWord:r,children:o.map(s=>s.map((u,y)=>c(S,{className:L(u,n,y),children:u},Math.random()*10)))})})},h=Array(6).fill(null).map(()=>new Array(5).fill(null)),v=(n,r,o,i)=>{const e=h;for(let t=0;t<o.length;t++)for(let s=0;s<o[t].length;s++)o[t][s]!==null&&(e[t][s]=o[t][s]);n.split("").forEach((t,s)=>{e[r][s]=t}),i(e)},L=(n,r,o)=>n?n===r[o]?"correct":r.includes(n)?"exist":"incorrect":null,M=(n,r)=>Math.floor(Math.random()*(r-n+1)+n),a=()=>Math.floor(Math.random()*255),k=()=>document.body.style.backgroundColor=`rgb(${a()}, ${a()}, ${a()})`;console.log(k());const p=["ovulo"],O=p[M(0,p.length-1)],R=()=>{const[n,r]=l.exports.useState("");return f(g,{children:[c(j,{secretWord:O,userWord:n}),f("form",{onSubmit:o=>{o.preventDefault(),r(o.target.word.value)},children:[c("input",{type:"text",name:"word"}),c("input",{type:"submit"})]})]})};x.render(c(R,{}),document.getElementById("root"));
