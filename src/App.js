import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Section from "./Components/Sections";

function App() {
  return (
    <div>
      <div className="d-flex flex-column min-vh-100">
        <Header />
      </div>
      <Section name={"About me"} content={""} />
      <Section name={"Projects"} content={"test test"} />
      <Section name={"Contact Me"} content={"test test"} />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
