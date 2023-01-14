import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./Icon.css";
import { IconSizeT } from "./types";

@customElement("dx-svgicon")
export class SvgIcon extends LitElement {

    static get styles() {
        return styles;
    }

    @property()
    css = "";

    @property()
    classes = "";

    @property()
    size: IconSizeT = "md";

    @property()
    color = "#707070";

    getCss(){
        const css = `
            ${this.css};
            width:var(--dx-icon-size-${this.size});
            height:var(--dx-icon-size-${this.size});
            --dx-icon-color:${this.color}
        `;
        return css;
    }

    getClasses() {
        return `dx-svgicon ${this.classes}`;
    }

    override render() {
        return html`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewbox=${`0 0 24 24`}
                style=${this.getCss()}
                class=${this.getClasses()}
            >
                <circle cx="12" cy="12" r="12" fill="#707070" ></circle>
            </svg>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "dx-svgicon": SvgIcon;
    }
}