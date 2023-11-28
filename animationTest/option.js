const template = document.createElement("template");
template.innerHTML = `<style>

div{
    position: relative;
    color: white;
    font-size: 25px;
    width: 282px;
    height: 150px;
}

div:hover{
    text-shadow: 2px 2px 4px #000000;
    cursor: pointer;
}

img{
    margin: 0px;
}

p{
    position: absolute;
    margin: 0px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
}

</style>

<div>
<p></p>
<img src="animationTest/choice.png" alt="choose" id="button">
</div>

`;

class ChoiceButton extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.p = this.shadowRoot.querySelector("p");
        // this.callbackFunction = null;
    }

    connectedCallback()
    {
        this.render();
        // this.shadowRoot.querySelector('div').addEventListener('click',this.handler);
    }

    handler() {
        console.log("this is the test");
        console.log('test action');
    }

    attributeChangedCallback(attributeName, oldVal, newVal){
        // console.log(attributeName, oldVal, newVal);
        this.render();
    }

    static get observedAttributes(){
        return ["text","callback"];
    }

    render(){
        const text = this.getAttribute('text') ? this.getAttribute('text') : "null";
        const callback = this.getAttribute('callback') ? this.getAttribute('callback') : null;
        
        this.p.innerHTML = text;
        // this.callbackFunction = callback;
        // addFunction(this, callback);
    }
}

customElements.define('option-button', ChoiceButton);

function addFunction(elem, callback)
{
    const shadow = elem.shadowRoot;
    const childNodes = Array.from(shadow.childNodes);
    // shadow.querySelector('div').addEventListener('click', callback);
    console.log(callback);
}