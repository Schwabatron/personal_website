function Header() {
  return <h1>Jack Schwabe</h1>;
}

function App() {
  return (
    <layout className="sidebar">
      <Header />
    </layout>
  );
}

export default App;
