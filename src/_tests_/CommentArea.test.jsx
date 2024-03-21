import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";


describe ("Is CommentArea mounting correctly", () => {
    it ("correctly mount CommentArea",() => {
        render (<CommentArea/>);
        const commentArea = screen.getByTestId("comment-area");
        expect(commentArea).toBeInTheDocument();
    });
});