import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./Icon.css";
import { IconSizeT } from "./types";

@customElement("dx-icon")
export class Icon extends LitElement {

    static get styles() {
        return styles;
    }

    @property()
    css = "";

    @property()
    classes = "";

    @property()
    src = "";

    @property()
    size: IconSizeT = "md";

    override render() {

        const css = `${this.css} --dx-icon-size:${this.size};`;
        return html`
            <img
                src=${this.src}
                style=${css}
            />
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "dx-icon": Icon;
    }
}