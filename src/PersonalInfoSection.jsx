import React, { useState } from "react";
import LabeledTextInput from "./LabeledTextInput";
import AutoResizingTextarea from "./AutoResizingTextarea";

function PersonalInfoSection() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [status, setStatus] = useState("editing");

  if (status === "saved")
    return (
      <section id="personal-info-display">
        <h2 className="section-heading"> Personal Info </h2>
        <p className="data-display">
          Name: {`${personalInfo.firstName} ${personalInfo.lastName}`}
        </p>
        <p className="data-display">Job Title: {personalInfo.jobTitle}</p>
        <p className="data-display">Summary: {personalInfo.summary}</p>
        <button
          className="edit-btn"
          type="button"
          onClick={() => {
            setStatus("editing");
          }}
        >
          Edit
        </button>
      </section>
    );

  return (
    <form id="personal-info-form">
      <h2 className="section-heading">Personal Info</h2>
      <LabeledTextInput
        labelText="First Name"
        id="first-name-input"
        defaultValue={personalInfo.firstName || ""}
        placeholder="John"
      />

      <LabeledTextInput
        labelText="Last Name"
        id="last-name-input"
        defaultValue={personalInfo.lastName || ""}
        placeholder="Doe"
      />

      <LabeledTextInput
        labelText="Job Title"
        id="job-title-input"
        defaultValue={personalInfo.jobTitle || ""}
        placeholder="Frontend Web Developer"
      />

      <AutoResizingTextarea
        id="summary-input"
        placeholder="Write a short summary of yourself."
        defaultValue={personalInfo.summary}
      />

      <button
        className="save-btn"
        type="button"
        onClick={() => {
          setPersonalInfo({
            firstName: document.getElementById("first-name-input").value,
            lastName: document.getElementById("last-name-input").value,
            jobTitle: document.getElementById("job-title-input").value,
            summary: document.getElementById("summary-input").value,
          });
          setStatus("saved");
        }}
      >
        Save
      </button>
    </form>
  );
}

export default PersonalInfoSection;
