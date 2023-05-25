# job-listing

async function filterData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
   
    data.map(({role,languages,tools})=>{
      let arry=[role,languages,tools]
      console.log(arry)
      function filterJobs(data, languages, tools) {
        return data.filter((job) => {
          const hasLanguage = languages.every((language) =>
            job.languages.includes(language)
          );
          const hasTool = tools.every((tool) => job.tools.includes(tool));
          return hasLanguage && hasTool;
        });
      }
      
      filterJobs(data, languages, tools)
    })
    

  } catch (error) {
    console.error("An error occurred:", error);
  }
}
/**
 * @author kelvin
 */
/* 

  const transformedData = data.map(({ role, languages, tools }) => [
       [role, ...languages, ...tools],
     ]);
     console.log(transformedData);
*/

 <div class="card">
      <div class="img">
        <img src="./images/photosnap.svg" alt="photosnan\p">
      </div>
      <div class="features">
        <div class="feature1">
          <h3>Photosnap</h3>
          <div class="span">
            <span class="new">NEW!</span>
            <span class="featured">FEATURED</span>
          </div>
        </div>
          <p>Senior Frontend Developer</p>
        <div class="feature2">
          <span class="time">1d ago</span>
          <span class="type">Full Time</span>
          <span class="location">USA <span>Only</span></span>
          </div>
      </div>
      <div class="filters">
        <ul>
          <li>Frontend</li>
          <li>Senior</li>
          <li class="htm">HTML</li>
          <li>CSS</li>
          <li class="js">JavaScript</li>
        </ul>
      </div>
    </div> 
