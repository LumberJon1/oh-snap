import React, {useState} from "react";

function ContactForm() {
    // state hook to control the form component
    const [formState, setFormState] = useState(
        // Set initial state to empty strings on page load (clears form)
        {name: "", email: "", message: ""}
    );

    // Event handler to handle form input changes, such as keystrokes
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
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
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={formState.email}
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        cols="45"
                        rows="10"
                        defaultValue={formState.message}
                        onChange={handleChange}>
                    </textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;