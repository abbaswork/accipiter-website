import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";
import { FormFields, FormProps } from "./Index";

export const Form = ({
  formData,
  onSubmit,
  onChange,
  formMessage,
}: FormProps) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [services, setServices] = React.useState<string>("");
  const formFields = [
    { label: "First Name", type: "text", maxlength: 10, name: "firstname" },
    { label: "Website", type: "text", maxlength: 10, name: "website" },
    { label: "Email", type: "email", maxlength: 100, name: "email" },
  ];
  const formSelectableFields = [
    { label: "Sample 1", type: "text" },
    { label: "Sample 2", type: "text" },
    { label: "Sample 3", type: "text" },
    { label: "Sample 4", type: "text" },
    { label: "Sample 5", type: "text" },
  ];
  let visibleOrHiddden = "form-hidden";

  if (visible) {
    visibleOrHiddden = "form-visible";
  } else {
    visibleOrHiddden = "form-hidden";
  }

  let service = "";

  const handleService = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    setServices(e.currentTarget.textContent || "");
    formData.services = e.currentTarget.textContent || "";
    console.log("formData.service updated", formData.services);
  };
  return (
    <form className={"form-container"} onSubmit={onSubmit}>
      <div className={"form-title-container"}>
        <span className={"form-title"}>Get Started with Accipter Tech</span>
        <span className={"form-subtitle"}>
          Tell us your vision or reach out for expert guidance
        </span>
      </div>

      {/* The Three Input Fields */}

      <div className={"form-content"}>
        {formFields.map((item) => (
          <div className={"form-item"}>
            <label className={`${"form-label"}  ${"gradient-text"}`}>
              {item.label}
            </label>
            <input
              name={item.name}
              value={formData[item.name as keyof FormFields]}
              onChange={onChange}
              type={item.type}
              maxLength={item.maxlength}
              className={"form-input"}
            />
          </div>
        ))}

        {/* Service Dropdown */}

        <div
          className={"form-item " + "pointer-cursor"}
          onClick={() => {
            setVisible(!visible);
            console.log("clicked");
          }}
        >
          <div className={"form-services-container"}>
            <label
              className={`${"form-label"}  ${"gradient-text"} ${"pointer-cursor"}`}
            >
              Service(s)
            </label>
            {/* <div className=''> */}
            <Image
              className={"form-pointer-button"}
              src="/down-arrow.svg"
              alt="down arrow"
              width={15}
              height={15}
            />
            {/* </div> */}
          </div>
          <div className={"form-services"}>
            <a>{services}</a>
          </div>
          <div className={"form-select-container " + visibleOrHiddden}>
            {formSelectableFields.map((item) => (
              <a className={"form-select"} onClick={handleService}>
                {" "}
                {item.label}
              </a>
            ))}

          </div>

          {/* Message Input */}
        </div>
      </div>
      <form className={"form-message-item"}>
        <label className={`$ {'form-label'}  ${"gradient-text"}`}>
          Message
        </label>
        <textarea
          name="message"
          onChange={onChange}
          className={`$'{form-textarea'} ${"form-input"}`}
        />
      </form>
      <div className={"form-button-container"}>
        <button className={"form-button"} type="submit">
          Submit
        </button>
      </div>
      <div className={"form-message"}>{formMessage}</div>
    </form>
  );
};
