import GeneralInfoForm from "./GeneralInfoForm";
import EducationExperienceForm from "./EducationExperienceForm";
import PracticalExperienceForm from "./PracticalExperienceForm";

export default function Container() {
  return (
    <div className="container">
      <header>
        <h1>CV Builder</h1>
      </header>
      <div className="main-container">
        <aside>
          <h2>Your Info</h2>
            <GeneralInfoForm />
            <EducationExperienceForm />
            <PracticalExperienceForm />
        </aside>
        <main>
          <h2>Preview CV</h2>
        </main>
      </div>
            <footer>Bill Tas 2025</footer>
    </div>
    );
}