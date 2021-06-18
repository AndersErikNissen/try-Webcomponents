//JS by Anders Erik Nissen
//UCN MMDA0920
const showMe_template = document.createElement("template");
showMe_template.innerHTML = `
        <style>
            * {margin: 0; padding: 0;}
            #container {
                padding-bottom: 25px
            }
            #main, #content  {
                background-color: grey;
                width: 50%;
                height: 300px;
            }
            #main {
                position: relative;
            }
            #showAndHide-btn {
                position: absolute;
                bottom: -25px;
                right: 50px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            #content {
                // display: none;
            }

            .show {
                height: 100%;
                transition: 1s;
            }

            .hide {
                height: 0;
                transition: 1s;
            }
        </style>
        <section id="container">
            <section id="main">
                <img src="" alt=""/>
                <p></p>
                <button type="button" id="showAndHide-btn"> + </button>
            </section>
            <section id="content" class="hide">
                <p></p>
            </section>
        </section>
`;
class showMe extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        //Template.content - gives back the content from a template. In this case it would be the template(showMe).
        this.shadowRoot.appendChild(showMe_template.content.cloneNode(true));
    }

    connectedCallback() {
        const   btn = this.shadowRoot.querySelector("#showAndHide-btn"),
                content = this.shadowRoot.querySelector("#content");
        btn.addEventListener("click", () => {
            let classList = content.classList,
                b = content.style.display = "block",
                n = content.style.display = "none";

            switch (true) {
                case classList.contains("hide"):
                    classList.remove("hide");
                    setTimeout(content.style.display = "block", 1000)
                    // content.style.display = "block";
                    classList.add("show");
                    break;
                case classList.contains("show"):
                    classList.remove("show");
                    // content.style.display = "none";
                    classList.add("hide");
                    break;
                
            }
        })
    }
}
window.customElements.define('show-me', showMe);













// Example from Video
// const template = document.createElement("template");
// template.innerHTML = '<style>h3 {color: red;}</style><section class="profil_info"><div><h3></h3><article id="info"><p><slot name="email" /></p><p>TLF</p></article><button id="toggle-info">HIDE INFO</button></div><article></article></section>';

// class ProfilInfo extends HTMLElement {
//     constructor() {
//         super();

//         this.showInfo = true;

//         this.attachShadow({ mode: "open" });
//         this.shadowRoot.appendChild(template.content.cloneNode(true));
//         this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
//         // this.shadowRoot.querySelector("img").src = this.getAttribute("name");
//     }

//     toggleInfo() {
//         //Pisse smart. Den skifter i mellem true/false. Første gang sættes den til false, fordi i constructor er den true, så den gemmer indholdet første gang man trykker.
//         this.showInfo = !this.showInfo;



//         const info = this.shadowRoot.querySelector("#info");
//         const toggleBtn = this.shadowRoot.querySelector("#toggle-info");
        
//         if(this.showInfo) {
//             info.style.display = "block";
//             toggleBtn.innerText = 'Hide Info'
//         } else {
//             info.style.display = "none";
//             toggleBtn.innerText = 'Show Info'

//         }
//     }

//     connectedCallback() {
//         this.shadowRoot.querySelector("#toggle-info").addEventListener("click", () => this.toggleInfo())
//     }
//     disconnectedCallback () {
//         this.shadowRoot.querySelector("#toggle-info").removeEventListener("click", () => this.toggleInfo())
//     }
// }

// window.customElements.define('profil-info', ProfilInfo);

































console.log("        /\\       _______   ___    __ ")
console.log("       /  \\     |   ____| |   \\  |  |")
console.log("      / /\\ \\    |  |____  |    \\ |  |")
console.log("     / /__\\ \\   |   ____| |  |\\ \\|  |")
console.log("    / /____\\ \\  |  |____  |  | \\    |")
console.log("   /_/      \\_\\ |_______| |__|  \\___|")

// console.log("               ____________                _____________________________    ________            _______")
// console.log("              /            \\              |                             |  |         \\         |       |")
// console.log("             /              \\             |                             |  |          \\        |       |");
// console.log("            /                \\            |         ____________________|  |           \\       |       |")
// console.log("           /        /\\        \\           |        |                       |            \\      |       |")
// console.log("          /        /  \\        \\          |        |                       |             \\     |       |")
// console.log("         /        /    \\        \\         |        |____________________   |              \\    |       |")
// console.log("        /        /      \\        \\        |                             |  |               \\   |       |")
// console.log("       /        /________\\        \\       |                             |  |       |\\       \\  |       |")
// console.log("      /                            \\      |         ____________________|  |       | \\       \\ |       |")
// console.log("     /        _____________         \\     |        |                       |       |  \\       \\|       |")
// console.log("    /        /             \\         \\    |        |                       |       |   \\               |")
// console.log("   /        /               \\         \\   |        |____________________   |       |    \\              |")
// console.log("  /        /                 \\         \\  |                             |  |       |     \\             |")
// console.log(" /        /                   \\         \\ |                             |  |       |      \\            |")
// console.log("/________/                     \\_________\\|_____________________________|  |_______|       \\___________|")



 