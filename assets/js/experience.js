AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Student Developer @ FOSSi",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Google Summer Of Code",
    time: "(May, 2021 - Present)",
    desp: "<ul><li>Worked with FOSSi as a part of Google Summer Of Code.</li><li>Worked on porting BaseJumpSTL to FuseSoC.</li><li>Createdd core files for all BaseJumpSTL modules</li><li>Added Verilator lint targets for all core</li><li>Ported existing testbenches to work with Verilator</li><li>Created FuseSoC generators for bsg_fakeram and bsg_round_robin_arb</li></ul>",
  },
  {
    title: "Undergraduate Researcher",
    cardImage: "assets/images/experience-page/IIIT.png",
    place: "IIIT, Hyderabad",
    time: "(May, 2021 - Present)",
    desp:"<ul><li>Designing low K ring VCOs</li><li>Designing low K variation LC VCOs</li><li>Designing frequency synthesizers for low resolution low phase noise applications</li></ul>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

