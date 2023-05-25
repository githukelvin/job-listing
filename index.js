
let  parentDiv = document.querySelector('.cards')
function getAllData(){
  fetch("data.json")
    .then((response) => response.json())
    .then((data) =>render(data));
}
function render(data){
  data.map(({
          company,
          logo,
          isNew,
          featured,
          position,
          role,
          level,
          postedAt,
          contract,
          location,
          languages,
          tools,
        }) => {
          function display() {
            if (isNew && featured) {
              return `
      <span class="new">NEW!</span>
      <span class="featured">FEATURED</span>
    `;
            }
            if (isNew) {
              return `
      <span class="new">NEW!</span>
    `;
            }
            if (featured) {
              return `
      <span class="featured">FEATURED</span>
    `;
            }
            return `
    <span></span>
  `;
          }
          function actv() {
            if (featured) {
              return `
             <div class="card active">
          `;
            } else {
              return `
             <div class="card">
          `;
            }
          }

          function displayArray() {
            let result = "";
            if (languages.length === 0) {
              return result;
            } else {
              languages.forEach((rol) => {
                result += `<li>${rol}</li>`;
              });
              return result;
            }
          }
          function tool() {
            let result = "";
            if (tools.length === 0) {
              return result;
            } else {
              tools.forEach((tool) => {
                result += `<li class="">${tool}</li>`;
              });
              return result;
            }
          }

          return (parentDiv.innerHTML += `
    ${actv()}
      <div class="img">
        <img src="${logo}" alt="photosnanp">
      </div>
      <div class="features">
        <div class="feature1">
          <h3>${company}</h3>
          <div class="span">
          ${display()}
          
          </div>
        </div>
          <p>${position}</p>
        <div class="feature2">
          <span class="time">${postedAt}</span>
          <span class="type">${contract}</span>
          <span class="location">${location} </span>
          </div>
      </div>
      <div class="filters">
        <ul>
       <li> ${role}</li>
       <li> ${level}</li>
          ${tool()}
          ${displayArray()}
        </ul>
      </div>
    </div>
            `);
        }
      )
}
function time(ms) {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}


let searchs = document.querySelector(".searchs");
async function data() {
  try {
    getAllData();
    await time(2000);
    const response = await fetch("./data.json");
    const data = await response.json();
    const lists = document.querySelectorAll(".filters ul li");
    const searchs = document.querySelector(".searchs");
    const bar = document.querySelector(".bar");
    // make arr global scope
    let arr = [];
    
    


    clear.addEventListener("click", () => {
      searchs.innerHTML = "";
      bar.style.display = "none";
      arr = [];
      parentDiv.innerHTML ="";
      location.reload();
      getAllData(data)
    });


    lists.forEach((list) => {
      list.addEventListener("click", () => {
        bar.style.display = "flex";
        const ind = list.innerHTML.trim();

        // 
       if (!arr.includes(ind)) {
         // If the filter is not already in the array, add it
         arr.push(ind);

         // Re-render the filtered array with the new filter
         let newArr = filter(arr, data);
         parentDiv.innerHTML= "";
         render(newArr);
         filter(arr, data);
          let arrs = JSON.stringify(arr);
          

          searchs.innerHTML += `
            <div class="search">
              <li>${ind}</li>
              <div onclick="xmark()" class="xmark"></div>
            </div>
          `;
       }
       
      });
    });
  } catch (error) {
    console.log(error);
  }
}
data();



let bar = document.querySelector(".bar");
let clear = document.querySelector(".clear");

function xmark() {
  let item = event.target.parentNode;
  const listItem = item.querySelector("li");
  const listItemValue = listItem.innerHTML;
  // const index = arr.indexOf(listItemValue);
  // arr.splice(index, 1);
  item.remove();
}
// filtering function
function filter(arr, data) {
  let result = [];
  let EndResult = []
  data.forEach((item) => {
    let { role, level, languages, tools } = item;
    let all = [role, level, ...languages, ...tools];
    let matches = all.filter((item) => arr.includes(item)).length;
    if (matches > 0) {
      result.push({ item, matches });
    }
  });
  //  loop and console.log matches
  result.forEach((item)=>{
      if(item.matches >= arr.length){
        EndResult.push(item.item)
      }
      else{
        return ;
      }
    })
  // result.sort((a, b) => b.matches - a.matches);
  // return result.length > 0 ? result[0].item : [];
  return EndResult;         
}

// function filter(arr, data) {
//   let result = [];
//   console.log(arr);
//   data.forEach((item) => {
//     let { role, level, languages, tools } = item;
//     let all = [role, level, ...languages, ...tools];
//     let isSome = all.some(item => arr.includes(item));
//     if (isSome) {
//       result.push(item);
//     }
//   });
//   return result;
// }






    