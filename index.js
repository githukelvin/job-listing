
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
      function actv(){
        if(featured){
          return `
             <div class="card active">
          `;
        }
        else{
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
  );




    