import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value.trim() !== "") {
      setFormErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const errors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      subject: formData.subject.trim() === "",
      message: formData.message.trim() === "",
    };

    setFormErrors(errors);

    // If no errors, submit form
    if (!Object.values(errors).includes(true)) {
      // Here you would typically send the form data to your backend
      // For now, just show a success message
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset submitted status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="text-center mb-4">
                  <p className="lead">
                    Feel free to reach out to me for any inquiries or
                    opportunities.
                  </p>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size="2x"
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <h5 className="mb-0">Email</h5>
                        <p className="mb-0">
                          <a
                            href="mailto:hussainhtp@gmail.com"
                            className="text-decoration-none"
                          >
                            hussainhtp@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">
                        <FontAwesomeIcon
                          icon={faPhone}
                          size="2x"
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <h5 className="mb-0">Phone</h5>
                        <p className="mb-0">
                          <a
                            href="tel:+923074727093"
                            className="text-decoration-none"
                          >
                            (+92) 3074727093
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          size="2x"
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <h5 className="mb-0">Location</h5>
                        <p className="mb-0">Johr town, Lahore, Pakistan</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="2x"
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <h5 className="mb-0">LinkedIn</h5>
                        <p className="mb-0">
                          <a
                            href="https://www.linkedin.com/in/muzammal-hussain-836a96151/"
                            className="text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Muzammal Hussain
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  {submitted ? (
                    <div
                      className="alert alert-success text-center"
                      role="alert"
                    >
                      Thank you for your message! I will get back to you soon.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className={`form-control ${
                              formErrors.name ? "is-invalid" : ""
                            }`}
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {formErrors.name && (
                            <div className="invalid-feedback">
                              Please enter your name
                            </div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            className={`form-control ${
                              formErrors.email ? "is-invalid" : ""
                            }`}
                            placeholder="Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {formErrors.email && (
                            <div className="invalid-feedback">
                              Please enter a valid email
                            </div>
                          )}
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className={`form-control ${
                              formErrors.subject ? "is-invalid" : ""
                            }`}
                            placeholder="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                          {formErrors.subject && (
                            <div className="invalid-feedback">
                              Please enter a subject
                            </div>
                          )}
                        </div>
                        <div className="col-12">
                          <textarea
                            className={`form-control ${
                              formErrors.message ? "is-invalid" : ""
                            }`}
                            rows={5}
                            placeholder="Your Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                          />
                          {formErrors.message && (
                            <div className="invalid-feedback">
                              Please enter your message
                            </div>
                          )}
                        </div>
                        <div className="col-12 text-center">
                          <button type="submit" className="btn btn-primary">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
