import React, { useState } from "react";
import Button from "./Button";
import "./Shortener.css";

const Shortener = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [shortenedURLs, setShortenedURLs] = useState([]);
  const [error, setError] = useState("");
  const [copyText, setCopyText] = useState({});

  //Handles Buttons copy text and functionality
  const handleCopy = (id, urlText) => {
    navigator.clipboard.writeText(urlText);
    setCopyText((prevState) => ({
      ...prevState,
      [id]: true,
    }));

    const copyTimeout = setTimeout(() => {
      setCopyText((prevState) => ({
        ...prevState,
        [id]: false,
      }));
      delete copyTimeout.current[id];
    }, 3000);
  };

  //Handles user input change
  const handleInputChange = (e) => {
    setOriginalURL(e.target.value);
  };

  //form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

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
            body: `url=${encodedURL}`, // URL-encoded data
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
              <a href="#" className="shortener__label-link">
                <svg
                  className="close-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{
                    width: '2em',
                    height: '2em',
                    stroke: 'hsl(180, 66%, 49%)', 
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
              text="Shorten It!"
              variant="secondary"
              onClick={handleSubmit}
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
                  {shortenedURLs.map((url, index) => (
                    <div key={index}>
                      {copyText[url.shortened] ? (
                        <Button text="Copied!" variant="secondary" />
                      ) : (
                        <Button
                          text="Copy"
                          variant="secondary"
                          onClick={() =>
                            handleCopy(url.shortened, url.shortened)
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Shortener;

// Set Up State Variables DONE
// Create a state variable to hold the user's input (original URL). DONE
// Create a state variable to store the shortened link. DONE
// Optionally, add a state variable for loading and error messages. DONE
// Handle Input Change DONE
// Define a function to update the input state as the user types in the URL input field. DONE

// Handle Form Submission
// Create a function that gets triggered when the user submits the form. DONE
// Validate the input URL (e.g., check if it’s not empty or malformed). DONE
// Make an API call to a link-shortening service (e.g., Bitly, TinyURL) with the original URL. DONE

// Process the API Response DONE
// If the API call is successful, update the shortened link state with the API response. DONE
// Handle errors by updating the error state and displaying a message to the user. DONE

// Render the Component
// Include:
// An input field for the user to enter the URL. DONE
// A button for submission. DONE
// A display section to show the shortened link (if available). DONE
// Optionally, show loading or error messages. DONE

// Add Copy-to-Clipboard Functionality (Optional)
// Include a button or icon next to the shortened link.
// Implement a function that copies the shortened link to the clipboard when clicked.
