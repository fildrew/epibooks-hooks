import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import HomeCarousel from './components/HomeCarousel'

function App() {
    return (
      <>
        <MyNavbar />
        <Container fluid>
          <Welcome />
          <HomeCarousel />
          {/* <AllTheBooks /> */}
          <BookList books={fantasy} />
        </Container>
        <MyFooter />
      </>
    );
}

export default App;