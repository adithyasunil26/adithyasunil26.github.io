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
            vancouver: 'A. S. Edakkadan, K. Desai and A. Srivastava, "A 2.75-2.94 GHz Voltage Controlled Oscillator with Low Gain Variation for Quantum Sensing Applications," 2022 35th International Conference on VLSI Design and 2022 21st International Conference on Embedded Systems (VLSID), 2022, pp. 186-191, doi: 10.1109/VLSID2022.2022.00045.',
        },
        abstract: "Quantum sensing applications such as nitrogen vacancy based magnetometry require phase locked loops (PLL), which can synthesize microwave frequencies in a narrow band near 2.87 GHz. Moreover, it is also required that the PLLs should have low noise and low jitter for high stability and fast settling time. These requirements seek low phase noise voltage controlled oscillator (VCO) with small variation in its gain (K VCO ) within the desired tuning range. In this paper, we present a technique for designing a low phase noise VCO with low K VCO and small K VCO variation. To validate the proposed technique, an LC VCO has been designed and implemented in 0.18 $\mu \mathrm{m}$ CMOS process and post layout simulation results are presented. The simulation results show that the proposed LC VCO achieves K VCO variation of ±3.82% in the frequency range of 2.75 - 2.94 GHz and exhibits a phase noise of −118.64 dBc/Hz at an offset of 1 MHz, while consuming 9 mW of power from a 1.8 V supply.",
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
            vancouver: 'A. S. Edakkadan, K. Saha, M. S. Baghini and A. Srivastava, "Design of 2.87 GHz Frequency Synthesizer with Programmable Sweep for Diamond Color Defect based CMOS Quantum Sensing Applications," 2022 IEEE International Symposium on Circuits and Systems (ISCAS), 2022, pp. 3092-3096, doi: 10.1109/ISCAS48785.2022.9937824.',
        },
        abstract: "Recently, diamond color defect based quantum sensing applications such as nitrogen-vacancy (NV) center magnetometry have emerged in CMOS technology, which use optically detected magnetic resonance (ODMR) for sensing magnetic field strengths (|B~|) from different environmental physical quantities. For ODMR based sensing, CMOS quantum sensors seek an onchip 2.87 GHz microwave (MW) signal generator. Moreover, in order to sense smaller |B~|, these CMOS quantum sensors also require that MW signal should be swept with sufficiently small step-size near 2.87 GHz. In this work, we present a fractional-N synthesizer based 2.87 GHz MW-generator (MWG) with an extremely small programmable sweep step-size for improved sensitivity of |B~| measurements in CMOS NV magnetometry. The proposed MWG is implemented in 180 nm CMOS technology and simulations were done to validate the proposed design. Post-layout simulation results show that the proposed MWG achieves a minimum sweep-step size of 50 kHz, which can be used to sense |B~|<0.9μT and exhibits a phase noise of −114.5 dBc/Hz at an offset of 1 MHz near 2.87 GHz center frequency",
        absbox: "absPopup2"
    },
    {
        title : "Analysis and Design of Low Phase Noise 20 GHz VCO for Frequency Modulated Continuous Wave Chirp Synthesizers in mmWave Radars",
        authors : "Harikrishna Kambham, Srayan Sankar Chatterjee, Adithya Sunil Edakkadan and Abhishek Srivastava",
        conferences : "IEEE 36th International Conference on VLSI Design (VLSID) 2023",
        researchYr : 2023,
        citebox : "popup1",
        image : "assets/images/research-page/vlsid23.png",
        citation: {
            vancouver: "Paper yet to be published.",
        },
        abstract: "Paper yet to be published.",
        absbox: "absPopup1"
    },
    {
        title : "An mmWave Frequency Range Multi-Modulus Programmable Divider for FMCW Radar Applications",
        authors : "Mantha Venkata Surya Sresthavadhani, Adithya Sunil Edakkadan, Arpit Sahni and Abhishek Srivastava",
        conferences : "IEEE 36th International Conference on VLSI Design (VLSID) 2023",
        researchYr : 2023,
        citebox : "popup1",
        image : "assets/images/research-page/vlsid23.png",
        citation: {
            vancouver: "Paper yet to be published.",
        },
        abstract: "Paper yet to be published.",
        absbox: "absPopup1"
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

