import Contacts from "./Contacts";
import Experience from "./Experience";
import Education from './Education';
import Skills from './Skills'

function Info() {
  return (
    <main className="info">
      <Contacts />
      
      <Experience />
      <Education />
      <Skills />
    </main>
  );
}

export default Info;
