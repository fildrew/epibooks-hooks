import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

function App() {
    return (
      <>
        <MyNavbar />
        <Container fluid>
          <Welcome />
          {/* <AllTheBooks /> */}
          <BookList books={fantasy} />
        </Container>
        <MyFooter />
      </>
    );
}

export default App;