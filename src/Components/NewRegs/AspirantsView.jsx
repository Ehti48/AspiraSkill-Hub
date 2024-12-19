import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../Heading";

const Wrapper = styled.section`
  .registration-container {
    max-width: 1100px;
    margin: 20px auto;
  }

  .registration-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    border-bottom: 1px solid #252e4a33;
    padding-bottom: 10px;
  }

  .registration-header h2 {
    font-size: 18px;
  }

  .resume-btn {
    padding: 8px 20px;
    background: #6AAA43;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .resume {
    margin-right: 10px;
  }

  form {
  min-height: 90vh;
    height: auto;
    margin: 20px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .form-row {
    display: flex;
    gap: 20px;
  }

  .form-group {
    flex: 1;
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    font-weight: 400;
    color: #252e4a99;
    margin-bottom: 10px;
    font-size: 14px;
  }

  input,
  select {
    width: 100%;
    padding: 13px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }

  .radio-group {
    display: flex;
    gap: 10px;
    align-items: center;

    input {
      width: auto;
    }
    }
    .form-btns{
    width: 200px;
    display: flex;
    justify-content: space-between
    }

  .accept-btn, .reject-btn {
  width: 90px;
    display: inline-block;
    padding: 10px 20px;
    background: #3282c4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
    .reject-btn{
      background: transparent;
      border: 1px solid #3282c4;
      color: #3282c4;
      font-weight: bold;
    }
  .accept-btn:hover {
    background: #296ba1;
  }

  @media (max-width: 768px) {
    .form-row {
      flex-direction: column;
    }
  }
`;

function AspirantsView() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    mobile: "",
    gender: "",
    techStack: "",
    degree: "",
    linkedin: "",
    mode: "",
    session: "",
    systemFacility: "",
    currentlyStudying: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <Wrapper>
      <div className="registration-container">
        <form onSubmit={handleSubmit}>
          <div className="registration-header">
            <Heading title={`#ASP0470 - Subash Chandrabose`} />
            <button className="resume-btn">
              <div class="resume">
                <img src="https://admin.aspiraskillhub.aspirasys.com/images/frame.svg" alt="" />
              </div>
              Resume</button>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  checked={formData.gender === "Male"}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  checked={formData.gender === "Female"}
                />
                Female
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Tech Stack</label>
              <select
                name="techStack"
                value={formData.techStack}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="JavaScript">JavaScript</option>
              </select>
            </div>
            <div className="form-group">
              <label>Degree</label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="Degree"
                required
              />
            </div>
            <div className="form-group">
              <label>LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn Profile URL"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Mode</label>
              <div className="radio-group">
                <input
                  type="radio"
                  name="mode"
                  value="On-site"
                  onChange={handleChange}
                  checked={formData.mode === "On-site"}
                />
                On-site
                <input
                  type="radio"
                  name="mode"
                  value="Remote"
                  onChange={handleChange}
                  checked={formData.mode === "Remote"}
                />
                Remote
              </div>
            </div>
            <div className="form-group">
              <label>Session</label>
              <div className="radio-group">
                <input
                  type="radio"
                  name="session"
                  value="Full time"
                  onChange={handleChange}
                  checked={formData.session === "Full time"}
                />
                Full time
                <input
                  type="radio"
                  name="session"
                  value="Part time"
                  onChange={handleChange}
                  checked={formData.session === "Part time"}
                />
                Part time
              </div>
            </div>
            <div className="form-group">
              <label>System Facility</label>
              <div className="radio-group">
                <input
                  type="radio"
                  name="systemFacility"
                  value="Yes"
                  onChange={handleChange}
                  checked={formData.systemFacility === "Yes"}
                />
                Yes
                <input
                  type="radio"
                  name="systemFacility"
                  value="No"
                  onChange={handleChange}
                  checked={formData.systemFacility === "No"}
                />
                No
              </div>
            </div>
            <div className="form-group">
              <label>Currently Studying</label>
              <div className="radio-group">
                <input
                  type="radio"
                  name="currentlyStudying"
                  value="Yes"
                  onChange={handleChange}
                  checked={formData.currentlyStudying === "Yes"}
                />
                Yes
                <input
                  type="radio"
                  name="currentlyStudying"
                  value="No"
                  onChange={handleChange}
                  checked={formData.currentlyStudying === "No"}
                />
                No
              </div>
            </div>
          </div>

          <div className="form-btns">
            <button type="reset" className="reject-btn">
              Reject
            </button>
            <button type="submit" className="accept-btn">
              Accept
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default AspirantsView;
