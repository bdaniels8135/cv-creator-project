import React from "react";
import AppHeader from "./AppHeader";
import PersonalInfoSection from "./PersonalInfoSection";
import ContactInfoSection from "./ContactInfoSection";
import "./App.css";

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <PersonalInfoSection />

        <ContactInfoSection />

        <section>Education</section>
        <section>Experience</section>
        <section>Skill Lists</section>
      </main>
      <aside>Preview of CV</aside>
    </>
  );
}

export default App;
