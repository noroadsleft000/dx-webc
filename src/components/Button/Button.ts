import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { CustomElement } from "../../@types/react-types";
import styles from "./Button.css";

type VariantT = "" | "primary" | "warning" | "error" | "icon" | "link";
type SilentT = boolean;

@customElement("dx-button")
export class Button extends LitElement {

    constructor() {
        super();
        console.log("dx-button constructor");
    }

    static get styles() {
        return styles;
    }

    @property()
    css = "";

    @property()
    classes = "";

    @property()
    variant: VariantT = "";

    @property()
    silent: SilentT = false;

    @property()
    icon?: LitElement | HTMLElement;

    override connectedCallback () {
        super.connectedCallback();
        console.log("dx-button connected");
    }

    override disconnectedCallback () {
        super.disconnectedCallback();
        console.log("dx-button disconnected");
    }

    override render() {
        console.log("render dx-button");
        const classes = `
            dx-btn
            ${this.variant? `dx-btn-${this.variant}`:""}
            ${this.silent? "silent":""}
            ${this.classes}
        `;

        return html`
            <button class=${classes} @click=${this._onClick} style=${this.css} >
                <div class="dx-btn-content" >
                    <style>
                    ::slotted(#icon) {
                        display: inline-flex;
                    }
                    </style>
                    <slot></slot>
                    <slot id="icon" ></slot>
                </div>
            </button>
        `;
    }

    private _onClick() {
        this.dispatchEvent(new CustomEvent("button-clicked"));
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "dx-button": Button;
    }

    namespace JSX {
        interface IntrinsicElements {
            "dx-button": CustomElement<Button>;
        }
    }
}
