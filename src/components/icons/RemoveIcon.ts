import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { SvgIcon } from "../Icon/SvgIcon";

@customElement("dx-remove-icon")
export class RemoveIcon extends SvgIcon {
    override render() {
        return html`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewbox="0 0 24 24"
                style=${this.getCss()}
                class=${this.getClasses()}
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
            </svg>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "dx-remove-icon": RemoveIcon;
    }
}        