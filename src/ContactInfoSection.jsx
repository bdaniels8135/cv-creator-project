import React, { useState } from "react";
import LabeledTextInput from "./LabeledTextInput";

function ContactInfoSection() {
  const [contactInfo, setContactInfo] = useState({});
  const [status, setStatus] = useState("editing");

  if (status === "saved")
    return (
      <section id="contact-info-container">
        <h2 className="section-heading">Contact Info</h2>
        <p className="data-display">
          <b>Location:</b> {contactInfo.location}
        </p>
        <p className="data-display">
          <b>Phone:</b> {contactInfo.phone}
        </p>
        <p className="data-display">
          <b>Email:</b>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </p>
        <p className="data-display">
          <b>Website:</b>
          <a href={contactInfo.website}>{contactInfo.website}</a>
        </p>
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
    <form id="contact-info-form">
      <h2 className="section-heading">Contact Info</h2>
      <LabeledTextInput
        labelText="Location"
        id="location-input"
        defaultValue={contactInfo.location}
        placeholder="Region, Country"
      />

      <LabeledTextInput
        labelText="Phone"
        id="phone-input"
        defaultValue={contactInfo.phone}
        placeholder="(555) 555-5555"
      />

      <LabeledTextInput
        labelText="Email"
        id="email-input"
        defaultValue={contactInfo.email}
        placeholder="awesomedeveloper@domain.com"
      />

      <LabeledTextInput
        labelText="Website"
        id="website-input"
        defaultValue={contactInfo.website}
        placeholder="www.myportfolio.com"
      />

      <button
        className="save-btn"
        type="button"
        onClick={() => {
          setContactInfo({
            location: document.getElementById("location-input").value,
            phone: document.getElementById("phone-input").value,
            email: document.getElementById("email-input").value,
            website: document.getElementById("website-input").value,
          });
          setStatus("saved");
        }}
      >
        Save
      </button>
    </form>
  );
}

export default ContactInfoSection;
