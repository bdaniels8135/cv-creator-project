import React, { useState } from "react";
import LabeledTextInput from "./LabeledTextInput";
import LabeledAutoResizingTextarea from "./LabeledAutoResizingTextarea";

function PersonalInfoSection() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [status, setStatus] = useState("editing");

  if (status === "saved")
    return (
      <section id="personal-info-container">
        <h2 className="section-heading"> Personal Info </h2>

        <p className="data-label">
          <b>Name:</b>
        </p>
        <p className="data-text">
          {`${personalInfo.firstName} ${personalInfo.lastName}`}
        </p>

        <p className="data-label">
          <b>Job Title:</b>
        </p>
        <p className="data-text">{personalInfo.jobTitle}</p>

        <p className="data-label">
          <b>Summary:</b>
        </p>
        <p className="data-text">{personalInfo.summary}</p>

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
        defaultValue={personalInfo.firstName}
        placeholder="John"
        autocomplete="given-name"
      />

      <LabeledTextInput
        labelText="Last Name"
        id="last-name-input"
        defaultValue={personalInfo.lastName}
        placeholder="Doe"
        autocomplete="family-name"
      />

      <LabeledTextInput
        labelText="Job Title"
        id="job-title-input"
        defaultValue={personalInfo.jobTitle}
        placeholder="Frontend Web Developer"
        autocomplete="organization-title"
      />

      <LabeledAutoResizingTextarea
        labelText="Summary"
        id="summary-input"
        defaultValue={personalInfo.summary}
        placeholder="Write a short summary of yourself."
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
