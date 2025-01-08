import React, { useState } from "react";
import Button from "./Button";
import Spinner from "./Spinner";
import "./Shortener.css";

const Shortener = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [shortenedURLs, setShortenedURLs] = useState([]);
  const [error, setError] = useState("");
  const [copyText, setCopyText] = useState({});
  const [loading, setLoading] = useState(null);

  const handleCopy = (id, urlText) => {
    navigator.clipboard.writeText(urlText);
    console.log("Copied to clipboard:", urlText);
    setCopyText((prevState) => ({
      ...prevState,
      [id]: true,
    }));

    setTimeout(() => {
      setCopyText((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    }, 3000);
  };

  //Handles user input change
  const handleInputChange = (e) => {
    setOriginalURL(e.target.value);
  };

  //Clear Input Field
  const clearInput = (e) => {
    e.preventDefault();
    setOriginalURL("");
  };

  //form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (originalURL.trim() !== "") {
      setError("");
      try {
        const encodedURL = encodeURIComponent(originalURL.trim());

        //Send to API
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `url=${encodedURL}`,
          }
        );
        if (!response.ok) {
          const errorDetails = await response.json();
          throw new Error(errorDetails.error);
        }

        // Log the successful response
        const data = await response.json();
        setShortenedURLs((currentURLs) => [
          ...currentURLs,
          { original: originalURL, shortened: data.result_url },
        ]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please add a link");
    }
  };

  return (
    <>
      <div className="shortener__container">
        <div className="shortener__content">
          <div className="shortener__input">
            <label htmlFor="link" className="shortener__label">
              <input
                type="url"
                id="link"
                name="link"
                placeholder="Shorten your link here..."
                required
                value={originalURL}
                onChange={handleInputChange}
                className={
                  error ? "shortener__input-error" : "shortener__input"
                }
              />
              <a
                href="#"
                className="shortener__label-link"
                onClick={(e) => clearInput(e)}
              >
                <svg
                  className="close-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{
                    width: "2em",
                    height: "2em",
                    stroke: "hsl(180, 66%, 49%)",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </a>
            </label>

            <Button
              text={
                loading && error === "" ? (
                  <Spinner variant="button" />
                ) : (
                  "Shorten It!"
                )
              }
              variant="secondary"
              onClick={handleSubmit}
              disabled={loading}
            />
          </div>
          {error && <p className="shortener__text-error">{error}</p>}
        </div>
      </div>

      {shortenedURLs.length > 0 && (
        <ul className="shortener__container-link">
          {shortenedURLs
            .filter((url) => url && url.original && url.shortened)
            .map((url, index) => (
              <li key={index} className="container-link-content">
                <div className="container__link-original">
                  <p>{index + 1}. </p>
                  <a
                    href={url.original}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {url.original.length > 30 ? (
                      <span>{url.original.slice(0, 30)}...</span>
                    ) : (
                      <span>{url.original}</span>
                    )}
                  </a>
                </div>

                <div className="container__link-shortened">
                  <a
                    href={url.shortened}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {url.shortened}
                  </a>
                  {copyText[url.shortened] ? (
                    <Button
                      text="Copied!"
                      variant="confirmed"
                      className="button__signin.confirmed"
                    />
                  ) : (
                    <Button
                      text="Copy"
                      variant="secondary"
                      onClick={() => handleCopy(url.shortened, url.shortened)}
                    />
                  )}
                </div>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Shortener;
