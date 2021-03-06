//JS by Anders Erik Nissen
//UCN MMDA0920


const aen_btn = document.createElement("template");
aen_btn.innerHTML = '<button type="button" id="aen_btn"><slot name="innerText">BUTTON</slot></button>'      

class aenBtn extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({mode: "open"});
      this.shadowRoot.appendChild(aen_btn.content.cloneNode(true));
    }
    
  static get observedAttributes() {
    return ['btntxt'];
  };

  get btntxt() {
    return this.getAttribute("btntxt");
  }

  set btntxt(btn) {
    if (btn) {
      this.setAttribute("btntxt", btn);
    } else {
      this.removeAttribute("btntxt");
    }
  }

    connectedCallback() {
      const aenBtn = this.shadowRoot.querySelector("#aen_btn");
    }
}
window.customElements.define('aen-btn', aenBtn);

const showMe_template = document.createElement("template");
showMe_template.innerHTML = `
        <style>
            * {margin: 0; padding: 0;}
            #container {
                padding-bottom: 25px;
            }
            #main, #content {
                background-color: white;
                width: 50%;
            }
            #main {
                background-color: var(--color-primary);
                height: 300px;
                position: relative;
                z-index: 2;
            }
            #showAndHide-btn {
                position: absolute;
                bottom: -25px;
                right: 50px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: none;
                font-size: 40px;
                color: var(--color-primary);
                background-color: white;
                background-image: radial-gradient(circle, var(--color-primary), var(--color-primary));
                background-size: 0%;
                background-repeat: no-repeat;
                background-position: 50% 50%;
            }
           
            .changeBtn_To {
              animation: changeBtnTo .5s forwards ease-in-out;
            }
            @keyframes changeBtnTo {
              from {
                background-size: 100% 0%; 
                color: var(--color-primary); 
                transform: rotate(0deg);
              }
              to {
                background-size: 100% 100%; 
                color: white;
                transform: rotate(45deg);
              }
            }
            .changeBtn_From {
              animation: changeBtnFrom .5s forwards ease-in-out;
            }
            @keyframes changeBtnFrom {
              from {
                background-size: 100% 100%; 
                color: white;transform: 
                rotate(45deg);
              }
              to {
                background-size: 100% 0%; 
                color: var(--color-primary);
                transform: rotate(0deg);
              }
            }

            .show {
                animation: letShow .5s forwards ease-in-out;
            }
            @keyframes letShow {
                0% {
                    display: none;
                    opacity: 0;
                  }
                  1% {
                    display: block;
                    opacity: 0;
                    height: 0;
                  }
                  100% {
                    opacity: 1;
                    height: 100px;
                  }
            }
            .hide {
                animation: letHide .5s forwards ease-in-out;
            }
            @keyframes letHide {
              0% {
                opacity: 1;
                height: 100px;
              }
              100% {
                opacity: 0;
                height: 0;
                display: none;
                opacity: 0;
              }
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

// For filling from the middle: https://stackoverflow.com/questions/23934749/fill-element-from-center-on-hover

//Pr??v, den bruger :after https://stackoverflow.com/questions/40163007/fill-circle-shaped-div-from-center-with-color-on-click

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
            let list = content.classList;
            switch (true) {
                case list.contains("hide"):
                  list.remove("hide");
                  btn.classList.remove("changeBtn_From");
                  btn.classList.add("changeBtn_To", "activeBtn");
                  list.add("show");
                break;

                case list.contains("show"):
                  list.remove("show");
                  btn.classList.remove("changeBtn_To");
                  btn.classList.add("changeBtn_From");
                  list.add("hide");
                break;
            }
        })
    }

    static get observedAttributes() {};
}
window.customElements.define('show-me', showMe);








// define the component's HTML template - Example from: https://ultimatecourses.com/blog/lifecycle-hooks-in-web-components
const template = document.createElement('template');
template.innerHTML = `
  <style>
    button {
      width: 50px;
      height: 50px;

      border: 1px solid red;
      border-radius: 50%;

      background: tomato;

      color: white;
      font-weight: bold;

      cursor: pointer;
    }

    button:active {
      background-color: #D9391C;
    }

    span {
      display: inline-block;
      margin: 0 5px;
      min-width: 25px;

      text-align: center;
    }
  </style>

  <button id="increaseBtn">+</button>
  <span id="label"></span>
  <button id="decreaseBtn">-</button>
`;

class CounterComponent extends HTMLElement {
  // define the observedAttributes array 
  static get observedAttributes() {
    return ['value', 'step'];
  }

  // define getters and setters for attributes
  get value() {
    return this.getAttribute('value');
  }

  set value(val) {

    if (val) {
      this.setAttribute("value", val);
    } else {
      this.removeAttribute('value');
    }
  }


  get step() {
    return this.getAttribute('step');
  }

  set step(val) {
    if (val) {
      this.setAttribute('step', val);
    } else {
      this.removeAttribute('step');
    }
  }

  // define properties to store references to DOM elements in the component's template
  //Properties are the "object names" inside objects
  $increaseButton;
  $decreaseButton;
  $label;

  constructor() {
    // always do a super() call first to ensure that the component inherits the correct prototype chain and all properties and methods of the class it extends. 
    super();

    // optional: Attach Shadow DOM to the component
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // set references to the DOM elements from the component's template
    this.$increaseButton = this.shadowRoot.querySelector('#increaseBtn');
    this.$decreaseButton = this.shadowRoot.querySelector('#decreaseBtn');
    this.$label = this.shadowRoot.querySelector('#label');
  }
  connectedCallback() {
    // add event listeners on both buttons
    // we bind "this" to the callback of the listener to attach the component's scope.
    this.$increaseButton.addEventListener('click', this._increase.bind(this));
    this.$decreaseButton.addEventListener('click', this._decrease.bind(this));
  }
  disconnectedCallback() {
    // remove event listeners on both buttons
    this.$increaseButton.removeEventListener('click', this._increase.bind(this));
    this.$decreaseButton.removeEventListener('click', this._decrease.bind(this));
  }

  attributeChangedCallback(name, oldValue, newValue) {
      //When there is a change in either Value or Step, it will change $label's value. At the moment only value changes, so the label is always the value. But if step changed, label would be the first that changed. 
      //Name is the name on the attribute that changed. So in this example it would be value.
    this.$label.innerHTML = newValue;

    console.log(newValue)

    console.log("Old =",oldValue)
    console.log("Name =", name)
    console.log("This Value =",this.value)
  }

  adoptedCallback() {
    console.log('I am adopted!');
  }

  _increase() {
    const step = +this.step;
    const value = +this.value;
    this.value = String(value + step);
  }

  _decrease() {
    const step = +this.step;
    const value = +this.value;
    this.value = String(value - step);
  }
}

customElements.define('my-counter', CounterComponent);



















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
//         //Pisse smart. Den skifter i mellem true/false. F??rste gang s??ttes den til false, fordi i constructor er den true, s?? den gemmer indholdet f??rste gang man trykker.
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



 