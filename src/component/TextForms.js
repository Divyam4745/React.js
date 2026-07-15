// import React, { useState } from "react";

// export default function TextForms(props) {
//   const handleUpClick = () => {
//     let newText = text.toUpperCase();
//     setText(newText);
//   };
//   const handleLoClick = () => {
//     let newText = text.toLowerCase();
//     setText(newText);
//   };
//   const handleOnChange = (event) => {
//     setText(event.target.value);
//   };
//   const [text, setText] = useState("");
//   return (
//     <>
//       <div>
//         <h1>{props.heading}</h1>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             value={text}
//             onChange={handleOnChange}
//             id="myBox"
//             rows="8"
//           ></textarea>
//         </div>
//         <button className="btn btn-primary mx-1" onClick={handleUpClick}>
//           Convert to Uppercase
//         </button>
//         <button className="btn btn-primary mx-1" onClick={handleLoClick}>
//           Convert to Lowercase
//         </button>
//       </div>
//       <div className="container my-3">
//         <h2>Your text summary</h2>
//         <p>
//           {text.split(" ").length}words and{text.length}characters
//         </p>
//         <p>{0.008 * text.split(" ").length}Minutes read</p>
//         <h2>Preview</h2>
//         <p>{text}</p>
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");

  // Convert to Uppercase
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  // Convert to Lowercase
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  // Handle Text Change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Correct word count
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          className="btn btn-primary mx-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>

        <p>
          <b>{words}</b> words and <b>{text.length}</b> characters
        </p>

        <p>
          <b>{(0.008 * words).toFixed(2)}</b> Minutes read
        </p>

        <h2>Preview</h2>

        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}