import { useState } from "react";

function Survey() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="survey-page">
        <section className="survey-card success-panel">
          <div className="success-icon">✓</div>
          <h1>Thank you!</h1>
          <p>Your feedback helps TechNest improve the shopping experience.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="survey-page">
      <section className="survey-card">
        <p className="sale-badge">Help us improve</p>
        <h1>How was your TechNest experience?</h1>
        <p className="section-text">
          Your feedback helps us make product search, checkout, and support easier.
        </p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <label>
            Overall rating
            <select required>
              <option value="">Choose a rating</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Okay</option>
              <option>Needs improvement</option>
            </select>
          </label>

          <label>
            Was it easy to find the right product?
            <select required>
              <option value="">Choose an answer</option>
              <option>Very easy</option>
              <option>Easy</option>
              <option>Neutral</option>
              <option>Difficult</option>
            </select>
          </label>

          <label>
            What can we improve?
            <textarea
              required
              placeholder="Tell us what would make shopping easier..."
            />
          </label>

          <button type="submit" className="primary-action">
            Submit Feedback
          </button>
        </form>
      </section>
    </main>
  );
}

export default Survey;