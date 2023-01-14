import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { SvgIcon } from "../Icon/SvgIcon";

@customElement("dx-close-icon")
export class CloseIcon extends SvgIcon {
    override render() {
        return html`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewbox="0 0 24 24"
                style=${this.getCss()}
                class=${this.getClasses()}
            >
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>    
            </svg>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "dx-error-icon": CloseIcon;
    }
}
