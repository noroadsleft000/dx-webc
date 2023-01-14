import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { SvgIcon } from "../Icon/SvgIcon";

@customElement("dx-error-icon")
export class ErrorIcon extends SvgIcon {
    override render() {
        return html`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewbox="0 0 24 24"
                style=${this.getCss()}
                class=${this.getClasses()}
            >
                <path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>    
            </svg>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "dx-error-icon": ErrorIcon;
    }
}