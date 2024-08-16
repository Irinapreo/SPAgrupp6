// src/components/Privacy.jsx
import React from 'react';
import './privacy.css'; // Import privacy-specific styles

const Privacy = () => {
    return (
        <div className="privacy-container">
            <h1>Privacy</h1>
            <div className="privacy-content">
                <p><strong>Din integritet är viktig för oss.</strong></p>
                <p>Vi värnar om din trygghet och lovar att inte lämna ut dina personuppgifter till någon utomstående part. Dina uppgifter används endast för att förbättra din användarupplevelse och för att kunna kontakta dig vid behov.</p>
                <div className="title-container">
                    <h2>Kontaktformulär</h2>
                    <form method="post" action="/privacy/contact" className="privacy-form">
                        <div className="form-group">
                            <label htmlFor="name">Namn:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-post:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefonnummer:</label>
                            <input type="tel" id="phone" name="phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Meddelande:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Skicka</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
