import React, { useState } from "react";
import Button from "./Button";
import "./Shortener.css";

const Shortener = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [shortenedURLs, setshortenedURLs] = useState([]);
  const [error, setError] = useState("");

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
        let parsedURL;
        let encodedURL;

        try {
          parsedURL = new URL(originalURL.trim());
          encodedURL = encodeURIComponent(parsedURL.href); 
        } catch (error) {
          throw new Error("Invalid URL format");
        }

        console.log(
          "Sending request with URL:",
          `url=${encodedURL}`,
          encodedURL
        );

        // Send to API
        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent('https://cleanuri.com/api/v1/shorten')}`,
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
          throw new Error("Error: " + errorDetails.error);
        }

        // Log the successful response
        const data = await response.json();
        console.log("API Response: ", data, data.result_url);
        setshortenedURLs((currentURL) => [
          ...currentURL,
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
            <input
              type="url"
              id="link"
              name="link"
              placeholder="Shorten your link here..."
              required
              value={originalURL}
              onChange={handleInputChange}
              className={error ? "shortener__input-error" : "shortener__input"}
            />
            <Button
              text="Shorten It!"
              variant="secondary"
              onClick={handleSubmit}
            />
          </div>
          {error && <p className="shortener__text-error">{error}</p>}
        </div>
      </div>

      <div>
        {shortenedURLs.length > 0 && (
          <ul>
            {shortenedURLs.map((url, index) => (
              <li key={index}>
                <div>
                  <p>{url.original}</p>
                  {/* {console.log(JSON.stringify(url))} */}
                </div>

                <div>
                  <p>
                    <a
                      href={url.shortened}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {url.shortened}
                    </a>
                  </p>
                  {shortenedURLs.length > 0 && originalURL && (
                    <Button text="Copy" variant="secondary" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
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
// Optionally, show loading or error messages. 1/2 DONE

// Add Copy-to-Clipboard Functionality (Optional)
// Include a button or icon next to the shortened link.
// Implement a function that copies the shortened link to the clipboard when clicked.

// Return the JSX
// Structure the component layout based on your HTML and CSS.
// Bind the input, button, and displayed data to the corresponding state variables and functions.
