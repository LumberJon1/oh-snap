import React, {useState} from "react";
import {validateEmail} from "../../utils/helpers";

function ContactForm() {
    // state hook to control the form component
    const [formState, setFormState] = useState(
        // Set initial state to empty strings on page load (clears form)
        {name: "", email: "", message: ""}
    );

    // error message hook
    const [errorMessage, setErrorMessage] = useState("");

    // Event handler to handle form input changes, such as keystrokes
    function handleChange(e) {
        // Validate email input as user is typing
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            
            if (!isValid) {
                setErrorMessage("Please enter a valid email address")
            }
            else {
                setErrorMessage("");
            }
        }
        // Validate other inputs on the basis of length (required)
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            }
            else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // Return the HTML
    return(
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name" 
                        defaultValue={formState.name}
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={formState.email}
                        onBlur={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        cols="45"
                        rows="10"
                        defaultValue={formState.message}
                        onBlur={handleChange}>
                    </textarea>
                </div>
                {/* Conditionally render the error message div if an error exists in form validation */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;