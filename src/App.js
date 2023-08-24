import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1> Dictionary </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Advocate" />
        </main>
        <footer className="text-center">
          Coded by Lola O.
          <br />
          logo credit:
          <a
            href="https://www.outsourcedpharma.com/doc/navigating-regulatory-guidelines-for-effective-tech-transfer-0001"
            target="blank"
          >
            picture
          </a>
        </footer>
      </div>
    </div>
  );
}
