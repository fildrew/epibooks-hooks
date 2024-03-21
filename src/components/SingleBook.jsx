import { useState,useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selectedBook === book.asin);
  }, [selectedBook, book]);

  return (
    <>
      <Card
        className="h-100"
        style={{ cursor: "pointer",textOverflow:"ellipsis"}}
      >
        <Card.Img 
            className="object-fit-contain img-fluid h-90"
            variant="top" 
            src={book.img} 
            onClick={() => changeSelectedBook(book.asin)}
            style={{
              border: isSelected ? "3px solid red" : "none",
            }}
            data-testid="book-card"
        />
        <Card.Body>
          <Card.Title style={{ color: "black"}}>{book.title}</Card.Title>
          <Button variant="dark" size="sm" className="p-1">
              Buy Now
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;