import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <div className="d-flex flex-column min-vh-100">
        <Header />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
