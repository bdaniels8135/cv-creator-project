import React, { useState } from "react";
import LabeledTextInput from "./LabeledTextInput";

function ContactInfoSection() {
  const [contactInfo, setContactInfo] = useState({});
  const [status, setStatus] = useState("editing");

  if (status === "saved")
    return (
      <section id="contact-info-container">
        <h2 className="section-heading">Contact Info</h2>

        <p className="data-label">
          <b>Location:</b>
        </p>
        <p className="data-text">{contactInfo.location}</p>

        <p className="data-label">
          <b>Phone:</b>
        </p>
        <p className="data-text">{contactInfo.phone}</p>

        <p className="data-label">
          <b>Email:</b>
        </p>
        <p className="data-text">
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </p>

        <p className="data-label">
          <b>Website:</b>
        </p>
        <p className="data-text">
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
        autocomplete="tel"
      />

      <LabeledTextInput
        labelText="Email"
        id="email-input"
        defaultValue={contactInfo.email}
        placeholder="awesomedeveloper@domain.com"
        autocomplete="email"
      />

      <LabeledTextInput
        labelText="Website"
        id="website-input"
        defaultValue={contactInfo.website}
        placeholder="www.myportfolio.com"
        autocomplete="url"
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
