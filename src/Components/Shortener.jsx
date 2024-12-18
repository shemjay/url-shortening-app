import React, { useState } from 'react'
import Button from './Button'
import './Shortener.css'

const Shortener = () => {

  const[originalURL, setOriginalURL] = useState("")
  const[shortenedURL, setshortenedURL] = useState("")
  const[error, setError] = useState("")

  //Handles user input change
  const handleInputChange = (e) => {
    setOriginalURL(e.target.value)
  }
  
  //form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (originalURL.trim() !== "") {
      try{
        const encodedURL = encodeURIComponent(originalURL.trim());
        
        //Send to API
        const response = await fetch('https://proxy.cors.sh/https://cleanuri.com/api/v1/shorten', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `url=${encodedURL}`, // URL-encoded data
        });

        if (!response.ok) {
          const errorDetails = await response.json();
          throw new Error('API Error: ' + errorDetails.error);
        }
  
        // Log the successful response
        const data = await response.json();
        console.log('API Response:', data);

      } catch (error){
        console.log(error)
      }
    } else {
      console.log("Please enter a URL before submitting!")
    }
  }

  return (
    <div className='shortener__container'>
        <div className='shortener__content'>
            <input 
              type="url" 
              id="link" 
              name="link" 
              placeholder="Shorten your link here..." 
              required
              value={originalURL} 
              onChange={handleInputChange}
            />
            <Button text="Shorten It!" variant="secondary" onClick={handleSubmit}/>
        </div>
    </div>
  )
}

export default Shortener


// Set Up State Variables DONE
// Create a state variable to hold the user's input (original URL). DONE
// Create a state variable to store the shortened link. DONE
// Optionally, add a state variable for loading and error messages. DONE
// Handle Input Change DONE
// Define a function to update the input state as the user types in the URL input field. DONE

// Handle Form Submission
// Create a function that gets triggered when the user submits the form. DONE
// Validate the input URL (e.g., check if it’s not empty or malformed).
// Make an API call to a link-shortening service (e.g., Bitly, TinyURL) with the original URL.

// Process the API Response
// If the API call is successful, update the shortened link state with the API response.
// Handle errors by updating the error state and displaying a message to the user.

// Render the Component
// Include:
// An input field for the user to enter the URL.
// A button for submission.
// A display section to show the shortened link (if available).
// Optionally, show loading or error messages.

// Add Copy-to-Clipboard Functionality (Optional)
// Include a button or icon next to the shortened link.
// Implement a function that copies the shortened link to the clipboard when clicked.

// Return the JSX
// Structure the component layout based on your HTML and CSS.
// Bind the input, button, and displayed data to the corresponding state variables and functions.
