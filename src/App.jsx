import "./App.css";
import { Navbar } from "./containers/navbar/Navbar";
import { SectionOne } from "./containers/navbar/section_one/SectionOne";
import { SectionTwo } from "./containers/navbar/section-two/SectionTwo";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <SectionOne />
        <SectionTwo />
      </main>
    </div>
  );
}

export default App;
