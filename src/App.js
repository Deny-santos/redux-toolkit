import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Loguin"
import User from "./components/User"
import Logout from "./components/Logout"
import { Container } from "react-bootstrap"

function App() {
  return (
    <Container>
        <Login />
        <User />
        <Logout />
    </Container>
  );
}

export default App;
