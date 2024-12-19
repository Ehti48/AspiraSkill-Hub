import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  /* General styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f7fc;
  }

  .profile-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 10px;
  }

  /* Profile Layout */
  .profile-content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  /* Left Section */
  .profile-left {
    flex: 1;
    max-width: 300px;
  }

  .profile-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .avatar-placeholder {
    width: 100px;
    height: 100px;
    border-radius: 1%;
    background: #ccc;
    margin: 0 auto 20px;
  }

  .profile-info {
    background: white;
    padding: 20px;
    margin-top: 20px;
    border: none;
    border-top: 2px solid #ddd;
    display: flex;
    flex-direction: column;
    height: auto;
    max-height: 600px;
  }
.profile-social{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    text-align: start;
    width: 100%;
    .social-icons {
    display: flex;
    justify-content: space-around;
    width: 100%;
}
    strong{
    width: 100%;
    text-align: start;
    }
 
    img {
        width: 40px;
    height: 40px;
    background: #3282c4;
    padding: 10px 0;
    border-radius: 50%;
    cursor: pointer;
}
}
  .profile-info p {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .profile-info strong {
    margin: 15px 0;
    
  }
  /* Right Section */
  .profile-right {
    flex: 2;
  }
  .profile-date {
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    flex-wrap: wrap;
    gap: 10px;
  }
  .profile-data{
     display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .profile-data p{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-size: 14px;
  }
 
  .profile-data strong{
        width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;

    img{
        object-fit: contain;
    width: 15px;
    height: 15px;
    }
  }
    .about-header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .about-section{
    width: 100%;
    min-height: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    }
  .about-section,
  .documents-section {
    background: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .resume-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: white;
    background: #28a745;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .resume-btn:hover {
    background: #218838;
  }

  a {
    color: black;
    text-decoration: none;
    margin: 0 10px;
  }

  a:hover {
    text-decoration: underline;
  }
    .documents-list {
    width: 100%;
    display: flex;
    padding: 20px;
    justify-content: start;
    margin: 10px 0;
    gap: 10px;
    flex-wrap: wrap;
    

     p{
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #007bff;
    }
    .job-status {
      color: #fff;
      border-radius: 5px;
      display: flex;
      justify-content: start;
      align-items: center;

      label{
      margin: 0 10px;
      min-width: 120px;
      color: black;
      }
      input{
      width: 20px;
      height: 20px;
}
    }
.job-edit {
    min-width: 60px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: #3282c4;
    color: white;
    cursor: pointer;
}
}
    
  /* Responsive */
  @media (max-width: 1119px) {
   .profile-left {
    max-width: 100% !important;
    }
    .profile-social .social-icons {
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: start;
    align-items: center;
}
    
  }
  @media (max-width: 768px) {
    .profile-content {
      flex-direction: column;
    }

    .profile-left,
    .profile-right {
      max-width: 100%;
    }
  }
`;
const MasterDataView = () => {
  const profileData = {
    id: "AS0101",
    name: "Himad Ameen T I",
    role: "UX/UI Designer",
    employment: "Full time (On-site)",
    gender: "Male",
    dob: "1999-12-25",
    fatherName: "Irshad Ahmed V T",
    education: "BE - Mechanical",
    experience: "24 months",
    joiningDate: "02-01-2022",
    endDate: "02-01-2222",
    contact: "9952674539",
    contacts: "8623489789",
    email: "ameenhimmad@gmail.com",
    address: "13/6 karumbur patel street Ambur",
    documents: {
      aadhar: "Aadhar.pdf",
      pan: "Pan.pdf",
    },
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Scelerisque fermentum dui faucibus 
            in ornare quam viverra orci. Nulla facilisi morbi tempus iaculis urna.`,
  };

  return (
    <Wrapper>
      <div className="profile-container">
        <h1>Master Data &gt; {profileData.id}</h1>
        <div className="profile-content">
          {/* Left Section */}
          <div className="profile-left">
            <div className="profile-card">
              <div className="avatar-placeholder">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Placeholder Avatar"
                />
              </div>
              <h2>{profileData.name}</h2>
              <p>{profileData.role}</p>
              <p>{profileData.employment}</p>
              <div className="profile-info">
                <h3>Profile Information</h3>
                <p>
                  <strong>Gender:</strong> {profileData.gender}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {profileData.dob}
                </p>
                <p>
                  <strong>Father's Name:</strong> {profileData.fatherName}
                </p>
                <p>
                  <strong>Education:</strong> {profileData.education}
                </p>
                <p>
                  <strong>Experience (in month):</strong>{" "}
                  {profileData.experience}
                </p>
                <p className="profile-social">
                  <strong>Social:</strong>
                  <div className="social-icons">
                    <img src="\src\assets\linkedin.svg" alt="" />
                    <img src="\src\assets\instagram.svg" alt="" />
                    <img src="\src\assets\github.svg" alt="" />
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="profile-right">
            <div className="about-section">
              <div className="about-header">
                <h3>About</h3>
                <button className="resume-btn">
                  <img src="src\assets\resumedownload.svg" alt="" />
                  Resume
                </button>
              </div>
              <p>{profileData.about}</p>
              <div className="profile-date">
                <p>
                  <strong>Date of Joining:</strong> {profileData.joiningDate}
                </p>
                <p>
                  <strong>Date of End:</strong> {profileData.endDate}
                </p>
              </div>
              <div className="profile-data">
                <p>
                  <strong>
                    <img src="src\assets\phone.svg" alt="" />
                  </strong>{" "}
                  {profileData.contact}
                </p>
                <p>
                  <strong>
                    <img src="\src\assets\email.svg" alt="" />
                  </strong>{" "}
                  {profileData.email}
                </p>
                <p>
                  <strong>
                    <img src="src\assets\location.svg" alt="" />
                  </strong>{" "}
                  {profileData.address}
                </p>
                <p>
                  <strong>
                    <img src="src\assets\phone-1.svg" alt="" />
                  </strong>{" "}
                  {profileData.contacts}
                </p>
              </div>
            </div>
            <div className="documents-section">
              <h3>Documents</h3>
              <hr />
              <div className="documents-list">
                <p>
                  <strong>
                    <img src="\src\assets\pdf.svg" alt="" />
                  </strong>{" "}
                  <a href={`/${profileData.documents.aadhar}`} download>
                    {profileData.documents.aadhar}
                  </a>
                  <img src="\src\assets\action.svg" alt="" />
                </p>
                <p>
                  <strong>
                    <img src="\src\assets\pdf.svg" alt="" />
                  </strong>{" "}
                  <a href={`/${profileData.documents.pan}`} download>
                    {profileData.documents.pan}
                  </a>
                  <img src="\src\assets\action.svg" alt="" />
                </p>
              </div>
            </div>
            <div className="documents-section">
              <h3>Job Status</h3>
              <div className="documents-list">
                <p className="job-status">
                  <input type="radio" disabled />
                  <label>In-Progress</label>
                </p>
                <p className="job-status">
                  <input type="radio" checked />
                  <label>Hired</label>
                </p>
                <p className="job-status">
                  <input type="radio" disabled />
                  <label>Terminated</label>
                </p>
                <p className="job-status">
                  <input type="radio" disabled />
                  <label>Job Ready</label>
                </p>
                <button className="job-edit">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MasterDataView;
