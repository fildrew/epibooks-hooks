
/* import SingleBook from "../components/SingleBook"; */
import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";
describe("SingleBook testing border colour", () => {
    it("makes book card border change clicking on it", () => {
        render(<App />);
        const allTheBookCards = screen.getAllByTestId("book-card");
        const firstBookCard = allTheBookCards[0];

        fireEvent.click(firstBookCard);
        expect(firstBookCard).toHaveStyle("border: 3px solid red");
    });

    it("restores normal border after clicking on a second book", () => {
        render(<App />);
        const allTheBookCards = screen.getAllByTestId("book-card");
        const firstBookCard = allTheBookCards[0];

        fireEvent.click(firstBookCard);
        expect(firstBookCard).toHaveStyle("border: 3px solid red");
        const secondBookCard = allTheBookCards[1]
        fireEvent.click(secondBookCard)
        expect(firstBookCard).not.toHaveStyle("border: 3px solid red");
    });
});

