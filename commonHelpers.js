import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as c}from"./assets/vendor-870f0eb5.js";const n=[{preview:"<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg>",description:"Hokkaido Flower"},{preview:"<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg>",description:"Container Haulage Freight"},{preview:"<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg>",description:"Aerial Beach View"},{preview:"<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg>",original:"<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg>",description:"Flower Blooms"},{preview:"<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg>",original:"<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg>",description:"Alpine Mountains"},{preview:"<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg>",description:"Mountain Lake Sailing"},{preview:"<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg>",description:"Alpine Spring Meadows"},{preview:"<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg>",description:"Nature Landscape"},{preview:"<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg>",description:"Lighthouse Coast Sea"}],l=document.body.querySelector("ul.gallery");l.append(...n.map(({preview:e,original:o,description:i})=>{e=e.slice(1,-1),o=o.slice(1,-1);const a=document.createElement("li"),t=document.createElement("a"),p=document.createElement("img");return a.className="gallery-item",a.appendChild(t),t.className="gallery-link",t.href=o,t.appendChild(p),p.className="gallery-image",p.src=e,p.alt=i,a}));let s=new c(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250});s.on("shown.simplelightbox",function(){const e=document.body.querySelector(".sl-overlay"),o=document.querySelector(".sl-counter"),i=document.querySelector(".sl-close"),a=document.querySelectorAll(".sl-navigation button");e.style.backgroundColor="#242424",o.style.color="#fff",o.style.top="16px",o.style.fontFamily="Montserrat",i.style.color="#fff",a.forEach(t=>t.style.color="#fff")});
//# sourceMappingURL=commonHelpers.js.map
