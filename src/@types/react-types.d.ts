import React from "react";

export type CustomEvents<K extends string> = { [key in K] : (event: CustomEvent) => void };
export type CustomElement<T, K extends string = ""> = Partial<T & React.DOMAttributes<T> & { children: any } & CustomEvents<`on${K}`>>;