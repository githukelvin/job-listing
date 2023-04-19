
let  parentDiv = document.querySelector('.cards')

fetch("data.json")
  .then((response) => response.json())
  .then((data) =>
    data
      .map(
        ({
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
          // function arrays
// function displayArray() {
//   if (languages.length === 0) {
//     return "";
//   } else {
//     return languages.map((rol) => `<li>${rol}</li>`);
//   }
// }

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

// tool
// function tool() {
//   if (tools.length === 0) {
//     return "";
//   } else {
//     return tools.map((tool) => `<li class="">${tool}</li>`);
//   }
// }
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

          let new_Featured = display();
          let stack = tool()

        //   console.log(new_Featured)
          console.log(stack)

          return (parentDiv.innerHTML += `
               <div class="card">
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
          <span class="location">${location} <span>Only</span></span>
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
  );



    