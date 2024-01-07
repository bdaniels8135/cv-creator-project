import React from "react";
import PageHeader from "./PageHeader";
import PersonalInfoSection from "./PersonalInfoSection";

function App() {
  return (
    <>
      <PageHeader />
      <main>
        <PersonalInfoSection />

        <section>
          <form action="">
            <legend>Contact Info</legend>
          </form>
        </section>
        <section>
          <form action="">
            <legend>Education</legend>
          </form>
        </section>
        <section>
          <form action="">
            <legend>Experience</legend>
          </form>
        </section>
        <section>
          <form action="">
            <legend>Skill Lists</legend>
          </form>
        </section>
      </main>
      <aside>Preview of CV</aside>
    </>
  );
}

export default App;
