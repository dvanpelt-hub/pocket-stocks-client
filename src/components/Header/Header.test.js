import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

test("renders Header component successfully", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});
