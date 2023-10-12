import { useEffect, useState } from "react";

function Mention() {
  const [mentions, setMentions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/mentions")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur est inervenue pendant le chargement des données",
          );
        }
        return response.json();
      })
      .then((data) => {
        setMentions(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  return (
    <div className="pt-4 text-center">
      {mentions.map((mention) => (
        <ul>
          <li className="mb-4 font-nunito-light">
            <a href={mention.lien}>
              <h3>{mention.titre}</h3>
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Mention;
