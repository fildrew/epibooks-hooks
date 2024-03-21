import AllTheBooks from '../components/AllTheBooks';    
import { render, screen } from "@testing-library/react";
import fantasy from "../data/fantasy.json";

describe("AllTheBooks component", () => {
    it("renders cards for all books", () => {
        render(<AllTheBooks />);
    
        const cards = screen.getAllByTestId("book");
        expect(cards).toHaveLength(fantasy.length);
    });
});