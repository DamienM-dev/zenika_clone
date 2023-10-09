import { useState, useEffect } from "react";

import DOMPurify from "dompurify";

function Reference() {
  const [references, setReferences] = useState([]);
  const [error, setError] = useState(null);

  const TITRE = "Nos références";

  useEffect(() => {
    fetch("/api/references")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Un problème est intervenu pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setReferences(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);
  return (
    <div>
      <h2>{TITRE}</h2>
      {references.map((reference) => (
        <div key={reference.id}>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(reference.paragraphe),
            }}
          ></p>
        </div>
      ))}
    </div>
  );
}

export default Reference;
