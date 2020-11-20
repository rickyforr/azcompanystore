import { shallow } from "enzyme";
import React from "react";
import App from "./app";
import Products from "./products/products.component";

describe("App", () => {
  it("should render the Products Component correctly", () => {
    const component = shallow(<App />);
    const products = component.find(Products);
    expect(products.length).toBe(1);
  });
});
