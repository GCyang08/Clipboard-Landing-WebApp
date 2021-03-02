import React from "react";
import Computer from "../../assets/image-computer.png";
import "./Desktop.css";

function Desktop() {
  const desktopDescription = {
    description: [
      {
        header: "Quick Search",
        pg:
          "Easily search your snippets by content, category, web address, application, and more.",
      },
      {
        header: "iCloud Sync",
        pg: "Instantly saves and syncs snippets across all your devices.",
      },
      {
        header: "Complete History",
        pg:
          " Retrieve any snippets from the first moment you started using the app.",
      },
    ],
  };
  return (
    <div className="Desktop">
      <div className="HeaderLayout">
        <h2>Keep track of your snippets</h2>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <div className="DesktopLayout">
        <img src={Computer} alt="computer" />
        <div>
          {desktopDescription.description.map((des, i) => {
            return (
              <div key={i}>
                <h3>{des.header}</h3>
                <p>{des.pg}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Desktop;
