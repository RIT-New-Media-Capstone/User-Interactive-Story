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
<img src="animationTest/choice.png" alt="choose">
</div>

`;

class ChoiceButton extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.p = this.shadowRoot.querySelector("p");
    }

    connectedCallback()
    {
        this.render();
    }

    attributeChangedCallback(attributeName, oldVal, newVal){
        console.log(attributeName, oldVal, newVal);
        this.render();
    }

    static get observedAttributes(){
        return ["text"];
    }

    render(){
        const text = this.getAttribute('text') ? this.getAttribute('text') : "null";

        this.p.innerHTML = text;
    }
}

customElements.define('option-button', ChoiceButton);