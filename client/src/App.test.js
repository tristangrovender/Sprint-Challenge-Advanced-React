import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

// test("renders first name", () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/world cup/i);
//     expect(linkElement).toBeInTheDocument();
// });

// test("renders last name", () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/country/i);
//     expect(linkElement).toBeInTheDocument();
// });

// test("renders email", () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/searched/i);
//     expect(linkElement).toBeInTheDocument();
// });

// test("renders message", () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/name/i);
//     expect(linkElement).toBeInTheDocument();
// });
