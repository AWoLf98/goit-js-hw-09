import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const n=[{preview:"<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg>",description:"Hokkaido Flower"},{preview:"<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg>",description:"Container Haulage Freight"},{preview:"<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg>",description:"Aerial Beach View"},{preview:"<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg>",original:"<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg>",description:"Flower Blooms"},{preview:"<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg>",original:"<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg>",description:"Alpine Mountains"},{preview:"<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg>",description:"Mountain Lake Sailing"},{preview:"<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg>",description:"Alpine Spring Meadows"},{preview:"<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg>",description:"Nature Landscape"},{preview:"<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg>",original:"<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg>",description:"Lighthouse Coast Sea"}],c=document.body.querySelector("ul.gallery");c.append(...n.map(({preview:t,original:e,description:o})=>{t=t.slice(1,-1),e=e.slice(1,-1);const i=document.createElement("li"),p=document.createElement("a"),a=document.createElement("img");return i.className="gallery-item",i.appendChild(p),p.className="gallery-link",p.href=e,p.appendChild(a),a.className="gallery-image",a.src=t,a.setAttribute("data-source",e),a.alt=o,i}));c.addEventListener("click",t=>{if(t.preventDefault(),t.target.nodeName!=="IMG")return;const e=basicLightbox.create(`<img src="${t.target.dataset.source}" alt='${t.target.alt}' width="1112" height="640">`);e.show(),document.addEventListener("keyup",({code:o})=>{console.log(o),o==="Escape"&&e.close()})});
//# sourceMappingURL=commonHelpers.js.map