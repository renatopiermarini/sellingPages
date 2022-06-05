import './App.css';
import { Navbar } from 'containers/navbar/Navbar';
import { SectionOne } from 'containers/sectionOne/SectionOne';
import { SectionTwo } from 'containers/sectionTwo/SectionTwo';
import { SectionThree } from 'containers/sectionThree/SectionThree';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    </div>
  );
}

export default App;
