import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./contact.css";

export function ContactUs() {
  let phoneNumber = "0766060527";
  const contacts = [
    {
      icon: faPhone,
      title: "Phone",
      content: phoneNumber,
    },
    {
      icon: faMailBulk,
      title: "Email",
      content: "marginalcharter@gmail.com",
    },
    {
      icon: "fab fa-instagram",
      title: "Instagram",
      content: "resilient_voices_foundation",
    },
    // {
    //   icon: "fab fa-twitter",
    //   title: "Twitter",
    //   content: "marginalcharter@gmail.com",
    // },
    // {
    //   icon: "fab fa-facebook",
    //   title: "Facebook",
    //   content: "marginalcharter@gmail.com",
    // },
  ];
  return (
    <ul style={{ color: "black" }}>
      {contacts.map((value) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <li className={`container`}>
            <div
              style={{
                display: "flex",
                columnGap: "10px",
              }}
            >
              {typeof value.icon !== "string" ? (
                <div className={`icon`}>
                  <FontAwesomeIcon icon={value.icon} />
                </div>
              ) : (
                <div>
                  <i className={`icon ` + value.icon}> </i>
                </div>
              )}
              <div>{value.title}</div>
            </div>
            <div>{value.content}</div>
          </li>
        );
      })}
    </ul>
  );
}
