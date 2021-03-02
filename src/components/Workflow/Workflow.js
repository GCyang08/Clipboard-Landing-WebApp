import React from "react";

import "./Workflow.css";

import blacklists from "../../assets/icon-blacklist.svg";
import text from "../../assets/icon-text.svg";
import preview from "../../assets/icon-preview.svg";

function Workflow() {
  const workflowDescription = {
    description: [
      {
        img: blacklists,
        alt: "ai icon",
        header: "Create blacklist",
        pg:
          "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
      },
      {
        img: text,
        alt: "letter Icon",
        header: "Plain text snippets",
        pg:
          "Remove unwanted formatting from copied text for a consistent look.",
      },
      {
        img: preview,
        alt: "eye icon",
        header: "Sneak preview",
        pg: "Quick preview of all snippets on your Clipboard for easy access.",
      },
    ],
  };
  return (
    <div className="Workflow">
      <h2>Supercharge your workflow</h2>
      <p>We’ve got the tools to boost your productivity.</p>
      <div className="WorkflowLayout">
        {workflowDescription.description.map((des, i) => {
          return (
            <div key={i} className="WorkflowDescription">
              <div>
                <img src={des.img} alt={des.alt} />
                <h3>{des.header}</h3>
                <p>{des.pg}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Workflow;
