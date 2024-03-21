import Welcome from "../components/Welcome";
import { render, screen } from "@testing-library/react";


describe ("Is Welcome mounting correctly", () => {
    it ("correctly mount Welcome",() => {
        render(<Welcome />);
        const welcomeElement = screen.getByRole("alert");
        expect(welcomeElement).toBeInTheDocument();
        const AlertText = screen.getByText(/Welcome to Copperfield & Twist!/i);
        expect(AlertText).toBeInTheDocument();
    });
});

