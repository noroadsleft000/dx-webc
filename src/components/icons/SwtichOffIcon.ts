import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { SvgIcon } from "../Icon/SvgIcon";

@customElement("dx-switchoff-icon")
export class SwtichOffIcon extends SvgIcon {
    override render() {
        return html`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewbox="0 0 24 24"
                style=${this.getCss()}
                class=${this.getClasses()}
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />    
            </svg>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "dx-switchoff-icon": SwtichOffIcon;
    }
}