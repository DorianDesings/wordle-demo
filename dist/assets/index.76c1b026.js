import{s as f,j as a,r as l,R as x}from"./vendor.062f80c8.js";const y=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};y();const b=f.div`
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
`,w=f.span`
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
`,i=a.exports.jsx,d=a.exports.jsxs,m=a.exports.Fragment,S=({secretWord:o,userWord:r})=>{const[n,c]=l.exports.useState(g),[e,t]=l.exports.useState(0);return l.exports.useEffect(()=>{r.length===5&&(j(r,e,n,c),t(e+1))},[r]),i(m,{children:i(b,{secretWord:o,userWord:r,children:n.map(s=>s.map((u,h)=>i(w,{className:v(u,o,h),children:u},Math.random()*10)))})})},g=Array(6).fill(null).map(()=>new Array(5).fill(null)),j=(o,r,n,c)=>{const e=g;for(let t=0;t<n.length;t++)for(let s=0;s<n[t].length;s++)n[t][s]!==null&&(e[t][s]=n[t][s]);o.split("").forEach((t,s)=>{e[r][s]=t}),c(e)},v=(o,r,n)=>o?o===r[n]?"correct":r.includes(o)?"exist":"incorrect":null,L=(o,r)=>Math.floor(Math.random()*(r-o+1)+o),p=["ovulo"],O=p[L(0,p.length-1)],R=()=>{const[o,r]=l.exports.useState("");return d(m,{children:[i(S,{secretWord:O,userWord:o}),d("form",{onSubmit:n=>{n.preventDefault(),r(n.target.word.value)},children:[i("input",{type:"text",name:"word"}),i("input",{type:"submit"})]})]})};x.render(i(R,{}),document.getElementById("root"));
