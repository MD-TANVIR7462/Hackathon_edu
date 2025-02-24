import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { ScrollToTop } from "./Config";
import About from "./pages/About";

function App() {
  // useEffect(() => {
  //   const fethcData = async () => {
  //     try {
  //       const res = await fetch("");
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fethcData();
  // }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <ScrollToTop />
        <Routes>
        
           <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
