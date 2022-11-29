import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from "../pages/index";

describe("example project - next / tailwind", () => {
    it("renders a header component", () => {
        render(<Home />);
        const header = screen.getByText(/Shipwright Tokens/);
        expect(header).toBeInTheDocument();
    });

    it("renders a typography component", () => {
        render(<Home />);
        const typography = screen.getByText(/Typography/);
        expect(typography).toBeInTheDocument();
    });

    it("renders a colors component", () => {
        render(<Home />);
        const colors = screen.getByText(/Colors/);
        expect(colors).toBeInTheDocument();
    });
});