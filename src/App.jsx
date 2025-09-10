import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from './app/routes';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { UserProvider } from "./UserContext";

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
