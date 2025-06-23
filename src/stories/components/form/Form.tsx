import React from "react";
import "./style.scss";
import Image from "next/image";
import { FormFields, FormProps } from "./Index";

export const Form = ({
  formData,
  onSubmit,
  onChange,
  formMessage,
  setFormMessage,
}: FormProps) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [services, setServices] = React.useState<string>("");
  const formFields = [
    { label: "Name", type: "text", maxlength: 50, name: "firstname" },
    { label: "Website", type: "text", maxlength: 100, name: "website" },
    { label: "Email", type: "email", maxlength: 100, name: "email" },
  ];

  const formSelectableFields = [
    { label: "Headless Migration", type: "text" },
    { label: "Microservices", type: "text" },
    { label: "AI Automation", type: "text" },
    { label: "Other", type: "text" },
  ];

  let visibleOrHiddden = "form-hidden";

  if (visible) {
    visibleOrHiddden = "form-visible";
  } else {
    visibleOrHiddden = "form-hidden";
  }

  const handleService = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    setServices(e.currentTarget.textContent || "");
    formData.services = e.currentTarget.textContent || "";
    console.log("formData.service updated", formData.services);
  };

  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    if (formMessage) {
      setShowModal(true);
      const timer = setTimeout(() => {setShowModal(false);  setFormMessage("");}, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [formMessage]);

  return (
    <>
      {showModal && <div className="form-modal">{formMessage}</div>}
      <form className={"form-container"} onSubmit={onSubmit}>
        <div className={"form-title-container"}>
          <span className={"form-title"}>Get Started with Accipter Tech</span>
          <span className={"form-subtitle"}>
            Tell us your vision or reach out for expert guidance
          </span>
        </div>

        {/* The Three Input Fields */}

        <div className={"form-content"}>
          {formFields.map((item, index) => (
            <div key={"field-" + index} className={"form-item"}>
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
              {formSelectableFields.map((item, index) => (
                <a
                  key={"select-" + index}
                  className={"form-select"}
                  onClick={handleService}
                >
                  {" "}
                  {item.label}
                </a>
              ))}
            </div>

            {/* Message Input */}
          </div>
        </div>
        <div className={"form-message-item"}>
          <label className="form-label gradient-text">Message</label>
          <textarea
            name="message"
            onChange={onChange}
            className="form-textarea form-input"
          />
        </div>
        <button className={"form-button-container"} type="submit">
          <div className={"form-button"}>Submit</div>
        </button>
      </form>
    </>
  );
};
