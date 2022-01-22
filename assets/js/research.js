/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "A 2.75‐2.94 GHz Voltage Controlled Oscillator with Low Gain Variation",
        authors : "Adithya Sunil Edakkadan, Kuntal Desai and Abhishek Srivastava",
        conferences : "IEEE 35th International Conference on VLSI Design (VLSID) 2022",
        researchYr : 2022,
        citebox : "popup1",
        image : "assets/images/research-page/vlsid.png",
        citation: {
            vancouver: "Paper yet to be published.",
        },
        abstract: "Paper yet to be published.",
        absbox: "absPopup1"
    },

    {
        title : "Design of 2.87 GHz Frequency Synthesizer with Programmable Sweep for Diamond Color Defect based CMOS Quantum Sensing Applications",
        authors : "Adithya Sunil Edakkadan, Kasturi Saha, Maryam Shojaei Baghini and Abhishek Srivastava",
        conferences : "2022 IEEE International Symposium on Circuits & Systems (ISCAS)",
        researchYr : 2022,
        citebox : "popup1",
        image : "assets/images/research-page/iscas.png",
        citation: {
            vancouver: "Paper yet to be published.",
        },
        abstract: "Paper yet to be published.",
        absbox: "absPopup2"
    }
];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> <b>${title}</b> </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

