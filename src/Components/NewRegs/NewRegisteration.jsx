import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  /* General Reset */
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
  }

  /* Container */
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 20px auto;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  /* Heading */
  h4 {
    margin-bottom: 20px;
    color: #333;
  }

  /* Form */
  .search-form {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 10px;
  }

  .filter-group {
    width: fit-content;
    display: flex;
    flex-direction: column;
  
    padding: 0px;

    input,
    select {
    width: fit-content;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px 15px;
    }
    label {
      font-weight: bold;
    }
  }
  .filter-btn {
    width: 200px;
    display: flex;
    gap: 15px;
    padding: 10px;
    margin-top: 20px;

    .primary {
      background-color: #3282c4;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      border-radius: 4px;
      border: none;
      padding: 5px 10px;
    }

    .primary img {
      width: 30px;
      rotate: -5deg;
    }

    button.secondary {
      width: 120px;
      border: 2px solid #69a3d4;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      color: #69a3d4;
      border-radius: 4px;
    }

    .primary:hover {
      background-color: #0056b3;
    }

    .secondary img {
      rotate: 215deg;
      transform: rotateX(170deg);
    }

    button {
      cursor: pointer;
      background-color: transparent;
    }

    button:hover {
      background-color: transparent;
      opacity: 0.9;
    }
  }

  .form-group label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }

  .form-group input,
  .form-group select {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .new {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
  }

  .new h2 {
    font-family: sans-serif;
    font-size: 25px;
    color: #272f4b;
  }

  .new .add {
    width: 140px;
    padding: 10px 10px;
    background-color: #3282c4;
    border-radius: 4px;
    border: none;
    color: white;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }

  .new .add img {
    rotate: 0deg;
    height: 20px;
  }

  /* Table */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border: 1px solid #ddd;
  }

  table th,
  table td {
    padding: 10px 20px;
    border: none;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  table th {
    background-color: #ebf3fa;
    color: #333;
    font-weight: bold;
  }

  .action-button {
    color: #007bff;
    text-decoration: underline;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }

  .mail-popup {
    width: 70%;
    height: auto;
    background-color: white;
    margin: 20px auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 8px;
    z-index: 1;
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0 0 0 100rem #3b3a3957;

    .mail-image {
      width: 300px;
      height: 100%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .mail-box {
      width: 650px;
      height: 300px;
      padding: 20px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      text-align: start;

      .mail-head{
        display: flex;
            flex-direction: row-reverse;
            align-items: center;
            width: 100%;
            margin-bottom: 20px;
            margin-top: -15px;
      }
      h1 {
        width: 100%;
        text-align: end;
        cursor: pointer;
        font-weight: lighter;
        color: #333;
      }

      h2 {
        width: 100%;
        font-size: 20px;
        text-align: start;
        // margin-bottom: 10px;
        padding: 0;
      }

      p {
        font-size: 18px;
        color: #333;
        text-align: start;
        margin-bottom: 50px;
      }

      form {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: start;
        flex-wrap: wrap;
      }

      .mail-input {
        width: 60%;
        padding: 12px 15px;
        margin-right: 20px;
      }

      .mail-button {
        width: 25%;
        padding: 12px 15px;
        background-color: #3282c4;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 1429px) {
    .mail-popup{
    justify-content: center;
      align-items: center;
    }
    .mail-popup .mail-image img{
      display:none;
    }
  }
  @media (max-width: 1024px) {
  .aspirant-table {
    overflow-x: scroll;
}
}
  @media (max-width: 768px) {
    .form-group {
      flex: 1 1 100%;
    }
      .new h2 {
    font-family: sans-serif;
    font-size: 100%;
    color: #272f4b;
}
.mail-popup .mail-box p  {
  display:none;
}
.mail-popup .mail-box{
  height: auto;
}
 .filter-group {
  width: 100%;
  }
  .mail-popup .mail-box .mail-button,.mail-popup .mail-box .mail-input{
    width:100%;
    margin-right:0;
    margin-bottom:12px;
  }
}
`;
const NewRegisteration = () => {
  const [search, setSearch] = useState({
    date: "",
    name: "",
    mode: "",
    session: "",
    status: "",
  });
  const handleOpenMail =
    ("click",
    () => {
      document.querySelector(".mail-popup").style.display = "flex";
    });

  const handleCloseMail =
    ("click",
    () => {
      document.querySelector(".mail-popup").style.display = "none";
    });

  const [aspirants, setAspirants] = useState([
    {
      id: 1,
      date: "2024-10-17",
      name: "Subash Chandrabose",
      mode: "On-site",
      session: "Full-Time",
      status: "Access Granted",
    },
    {
      id: 2,
      date: "2024-04-17",
      name: "nihala tazeen",
      mode: "Remote",
      session: "Full-Time",
      status: "Access Granted",
    },
    {
      id: 3,
      date: "2024-10-08",
      name: "S.MOHAMMED UMAR",
      mode: "Remote",
      session: "Part-Time",
      status: "On Hold",
    },
    {
      id: 4,
      date: "2024-03-11",
      name: "noorunisha afrin",
      mode: "On-site",
      session: "-",
      status: "Access Granted",
    },
    {
      id: 5,
      date: "2024-03-11",
      name: "MUNAZA SADAF",
      mode: "On-site",
      session: "-",
      status: "Access Granted",
    },
    {
      id: 6,
      date: "2024-03-11",
      name: "Siqua Kulsum J",
      mode: "On-site",
      session: "-",
      status: "Access Granted",
    },
    {
      id: 7,
      date: "2024-08-10",
      name: "Asma Anjum",
      mode: "On-site",
      session: "-",
      status: "Access Granted",
    },
  ]);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const filteredAspirants = aspirants.filter((aspirant) => {
    return (
      (search.date ? aspirant.date.includes(search.date) : true) &&
      (search.name
        ? aspirant.name.toLowerCase().includes(search.name.toLowerCase())
        : true) &&
      (search.mode ? aspirant.mode === search.mode : true) &&
      (search.session ? aspirant.session === search.session : true) &&
      (search.status ? aspirant.status === search.status : true)
    );
  });

  return (
    <Wrapper>
      <div className="container">
        <form className="search-form">
          <div className="filter-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={search.date}
              onChange={handleSearchChange}
            />
          </div>
          <div className="filter-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={search.name}
              onChange={handleSearchChange}
            />
          </div>
          <div className="filter-group">
            <label>Mode</label>
            <select
              name="mode"
              value={search.mode}
              onChange={handleSearchChange}
            >
              <option value="">Select Mode</option>
              <option value="On-site">On-site</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Session</label>
            <select
              name="session"
              value={search.session}
              onChange={handleSearchChange}
            >
              <option value="">Select Session</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Status</label>
            <select
              name="status"
              value={search.status}
              onChange={handleSearchChange}
            >
              <option value="">Select Status</option>
              <option value="Access Granted">Access Granted</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>
          <div className="filter-btn">
            <button className="primary">
              <img src="\src\assets\search-icon.svg" alt="Error" />
            </button>
            <button
              className="secondary"
              onClick={() =>
                setSearch({
                  date: "",
                  name: "",
                  mode: "",
                  session: "",
                  status: "",
                })
              }
            >
              <img src="\src\assets\reset-icon.svg" alt="Error" />
              Reset
            </button>
          </div>
        </form>
        <div className="new">
          <h2>New Aspirant Access</h2>
          <button className="primary add" onClick={handleOpenMail}>
            <img src="\src\assets\add-icon.svg" alt="Error" />
            Add Aspirant
          </button>
        </div>
        <div className="mail-popup">
          <div className="mail-image">
            <img src="/src/assets/mailpost.jpg" alt="Mail Illustration" />
          </div>
          <div className="mail-box">
          <div className="mail-head">
          <h1 id="mail-close" onClick={handleCloseMail}>
            X
          </h1>
          <h2>Add New Aspirants</h2>
          </div>
            <p>
              Aspirasys Skill Hub is a platform where you can enhance your
              skills and knowledge in various areas of Information Technology.
              The platform provides a comprehensive and structured approach to
              learning, with a focus on practical skills development.
            </p>
            <form action="">
              <input
                type="email"
                placeholder="Enter email"
                className="mail-input"
                required
              />
              <button className="mail-button">Send</button>
            </form>
          </div>
        </div>
        <div className="aspirant-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Name</th>
              <th>Mode</th>
              <th>Session</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAspirants.map((aspirant, index) => (
              <tr key={aspirant.id}>
                <td>{index + 1}</td>
                <td>{aspirant.date}</td>
                <td>{aspirant.name}</td>
                <td>{aspirant.mode}</td>
                <td>{aspirant.session}</td>
                <td>{aspirant.status}</td>
                <td>
                  <button className="action-button">
                    <Link to="/newaspirant">
                      <img src="\src\assets\action.svg" alt="" />
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewRegisteration;
