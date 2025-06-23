"use client";
import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import { Form } from "./Form";

export type FormFields = {
  firstname: string;
  website: string;
  email: string;
  message: string;
  services: string;
};

export interface FormProps {
  formData: FormFields;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  formMessage?: string;
  setFormMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const HubSpotForm = ({ style }: { style?: React.CSSProperties }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    website: "",
    email: "",
    message: "",
    services: "",
  });
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    console.log("handleChange called", e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHubspotForm = async (fields: Record<string, string>) => {
    console.log("submitHubspotForm called", fields);

    if (
      fields.firstname === "" ||
      fields.website === "" ||
      fields.email === "" ||
      fields.message === "" ||
      fields.services === ""
    ) {
      console.log("Please fill all fields");
      setFormMessage("Please ensure all fields are filled out.");
      throw Error("Please fill all fields");
    }

    const portalId = "341872712";
    const formGuid = "2f3b6f76-8ee6-4461-bedd-5c1e31380ca1";
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;
    const bearerToken = process.env.HUBSPOT_PASS;

    const payload = {
      fields: [
        //Data to track what's being submitted. We set the names, and their values to be from this.
        //We're creating fields here, from the payload.
        { name: "firstname", value: fields.firstname },
        { name: "website", value: fields.website },
        { name: "email", value: fields.email },
        { name: "message", value: fields.message },
        { name: "services", value: fields.services },
      ],
    };

    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      console.log("Response: ", response);
      return response.data;
    } catch (err: unknown) {
      //Potentially causing errors, as there's no error handling. It'd kinda just loop itself constantly/crash.
      if (axios.isAxiosError(err)) {
        if (err.status === 404) {
          console.error("Error 404: Not Found");
          setFormMessage("Error 404: Not Found");
        } else if (err.status === 400) {
          console.error("Error 400: Bad Request");
          setFormMessage("Error 400: Bad Request");
        }
      } else {
        console.error("An unexpected error. Please try again later", err);
      }
    }
  };

  //end of the function that submits the form to HubSpot

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormMessage("Submitting...");

    //If the formSubmit dosen't throw an error, then we can proceed to submit the form.
    try {
      const result = await submitHubspotForm(formData);
      setFormMessage("Form submitted successfully!");
      console.log("HubSpot response:", result);
      setFormData({
        firstname: "",
        website: "",
        email: "",
        message: "",
        services: "",
      });
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };
  return (
    <div className="section" style={{ paddingTop: "0rem", ...style }}>
      {/* {sectionTitle && <h2 className="section-header">{sectionTitle}</h2>} */}
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        formData={formData}
        formMessage={formMessage}
        setFormMessage={setFormMessage}
      />
    </div>
  );
};
