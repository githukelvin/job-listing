let parentDiv = document.querySelector(".cards");
function getAllData() {
  fetch("data.json")
    .then((e) => e.json())
    .then((e) =>
      e.map(
        ({
          company: e,
          logo: a,
          isNew: l,
          featured: s,
          position: t,
          role: i,
          level: n,
          postedAt: r,
          contract: c,
          location: d,
          languages: o,
          tools: p,
        }) => {
          let u, v;
          return (parentDiv.innerHTML += `
    ${
      s
        ? `
             <div class="card active">
          `
        : `
             <div class="card">
          `
    }
      <div class="img">
        <img src="${a}" alt="photosnanp">
      </div>
      <div class="features">
        <div class="feature1">
          <h3>${e}</h3>
          <div class="span">
          ${
            l && s
              ? `
      <span class="new">NEW!</span>
      <span class="featured">FEATURED</span>
    `
              : l
              ? `
      <span class="new">NEW!</span>
    `
              : s
              ? `
      <span class="featured">FEATURED</span>
    `
              : `
    <span></span>
  `
          }
          
          </div>
        </div>
          <p>${t}</p>
        <div class="feature2">
          <span class="time">${r}</span>
          <span class="type">${c}</span>
          <span class="location">${d} </span>
          </div>
      </div>
      <div class="filters">
        <ul>
       <li> ${i}</li>
       <li> ${n}</li>
          ${
            ((u = ""),
            0 === p.length ||
              p.forEach((e) => {
                u += `<li class="">${e}</li>`;
              }),
            u)
          }
          ${
            ((v = ""),
            0 === o.length ||
              o.forEach((e) => {
                v += `<li>${e}</li>`;
              }),
            v)
          }
        </ul>
      </div>
    </div>
            `);
        }
      )
    );
}
function time(e) {
  return new Promise((a, l) => {
    setTimeout(a, e);
  });
}
let searchs = document.querySelector(".searchs");
async function data() {
  try {
    getAllData(), await time(2e3);
    let e = await fetch("./data.json"),
      a = await e.json(),
      l = document.querySelectorAll(".filters ul li"),
      s = document.querySelector(".searchs"),
      t = document.querySelector(".bar"),
      i = [];
    clear.addEventListener("click", () => {
      (s.innerHTML = ""), (t.style.display = "none"), (i = []);
    }),
      l.forEach((e) => {
        e.addEventListener("click", () => {
          t.style.display = "flex";
          let l = e.innerHTML.trim();
          if (!i.includes(l)) {
            i.push(l),
              (s.innerHTML += `
          <div class="search">
            <li>${l}</li>
            <div onclick="xmark(this)" class="xmark"><i class="fa-solid fa-xmark"></i></div>
          </div>
        `);
            let n = filter(i, a);
            console.log(n);
          }
        });
      });
  } catch (n) {
    console.log(n);
  }
}
data();
let bar = document.querySelector(".bar"),
  clear = document.querySelector(".clear");
function xmark(e) {
  let a = e.parentElement.querySelector("li"),
    l = a.innerHTML,
    s = arr.indexOf(l);
  arr.splice(s, 1), e.parentElement.remove();
}
function filter(e, a) {
  let l = [];
  return (
    console.log(e),
    a.forEach((a) => {
      let { role: s, level: t, languages: i, tools: n } = a,
        r = [s, t, ...i, ...n].filter((a) => e.includes(a)).length;
      r > 0 && l.push({ item: a, matches: r });
    }),
    l.sort((e, a) => a.matches - e.matches),
    l.length > 0 ? l[0].item : []
  );
}
