import React from "react";
import "./../../styles.scss";
import { InstrumentsItem } from "./instruments-item";

export default { title: "InstrumentsItem" };

const showMessage = () => alert("Hello, friend.");

export const Default = () => (
  <InstrumentsItem
    color="red"
    title="Stiri oficiale si informații la zi"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
    ctaText="Cele mai noi informații oficiale"
    onClick={showMessage}
  />
);

export const withHeaderOnly = () => (
  <InstrumentsItem color="red" title="Stiri oficiale si informații la zi" />
);

export const withoutButton = () => (
  <InstrumentsItem
    color="red"
    title="Stiri oficiale si informații la zi"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
  />
);

export const withoutContent = () => (
  <InstrumentsItem
    color="pink"
    title="Stiri oficiale si informații la zi"
    ctaText="Cele mai noi informații oficiale"
    onClick={showMessage}
  />
);
