import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  Wrapper {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .event-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;

    .event-content {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      
    }
    img.event-img {
      object-fit: contain;
      width: 80%;
      height: 80%;
  }

    button {
      background-color: #3282c4;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 5px;
      padding: 8px 15px;
      color: white;
      font-weight: 600;
      cursor: pointer;
    }

    button img {
      height: 20px;
    }

    .addPopup, .editPopup {
      width: 100%;
      max-width: 900px;
      height: auto;
      min-height: 500px;
      margin: 0 auto;
      text-align: center;
      display: none;
      justify-content: start;
      align-items: center;
      flex-direction: column;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 0 0 100rem #3b3a3957;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px 30px;
      

      h1 {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: start;
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }

      p {
        font-weight: lighter;
        cursor: pointer;
      }

      form {
        width: 100%;
        height: auto;
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
      }

      .forms-line {
        width: 100%;
        height: auto;
        /* max-height: 300px; */
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        flex-wrap: wrap;
        // /* min-width: 350px;
      }

      .form-line {
        width: 45%;
        max-width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
      }

      .innerForm-line {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      .innerForm-line input {
        width: 48%;
        height: 100%;
      }

      .form-btn {
        width: 100%;
        padding: 10px;
        color: white;
        border: none;
        border-radius: 5px;
        flex-direction: row;
        justify-content: end;
        align-items: center;
      }

      .form-btn button {
        width: 150px;
        height: 50px;
        padding: 10px 20px;
        margin-left: 20px;
        font-size: 18px;
        cursor: pointer;
      }

      label {
        text-align: start;
        width: 100%;
        font-size: 16px;
        margin-bottom: 10px;
        font-weight: 600;
      }

      input {
        width: 100%;
        height: 50px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }

      textarea {
        width: 100%;
        border: 1px solid #ddd;
        height: 100px;
        border-radius: 5px;
        padding: 10px;
      }

      .cancel-btn {
        background-color: transparent;
        border: 1px solid #3282c4;
        color: #3282c4;
      }

      .save-btn {
        background-color: #3282c4;
      }

      .link {
        position: relative;
        left: 155px;
        bottom: 35px;
      }
    }
  }
  .adding {
    width: 100%;
    height: auto;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: start;
    text-align: start;
  }
  .upcoming-events {
    width: 100%;
    max-width: 1000px; /* Restrict maximum width */
    height: 100%;
    overflow-x: auto;
    box-shadow: 0 0 5px black;
    border-radius: 5px;
    padding: 10px;
  }

  .events-table {
    width: 100%;
    min-width: 800px; /* Ensures the table doesn't get too small */
    border-collapse: collapse;
    margin: 20px auto;
    border: 1px solid #ddd;
  }
  .events-table th,
  .events-table td {
    padding: 10px;
    text-align: left;
    background: transparent;
    border: none;
    height: 50px;
    border-bottom: 1px solid #ddd;
    word-wrap: break-word; /* Ensure text wraps within cells */
  }

  .events-table th:nth-child(3),
  .events-table td:nth-child(3) {
    max-width: 150px; /* Set the width of the Event Link column to 150px */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .events-table th {
    background-color: #d4ebff;
  }

  .events-table a {
    color: #3282c4;
    text-decoration: none;
  }

  .events-table a:hover {
    text-decoration: underline;
  }

  .actions img {
    width: 20px;
    margin: 0 5px;
    cursor: pointer;
  }

  .sr {
    width: 10px;
    background-color: blue;
  }
  .eventHeader {
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
  .events-search {
    width: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    border-radius: 5px;
    margin-bottom: -15px;
  }
  .events-search button {
    width: auto;
    height: auto;
    padding: 10px 20px;
    margin-bottom: 25px;
  }
  .deletePopup {
    width: 400px;
    max-width:100%;
    height: 300px;
    border: 1px solid #ddd;
    box-shadow: 0 0 0px 100rem #00000047;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    background-color: white;
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .delete-close {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
      font-size: 20px;
      border-radius: 50%;
      border: 2px solid #ddd;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: lighter;
    }
  }
  .deletePopup .img {
    width: 70px;
    height: 70px;
    background: red;
    border-radius: 50%;
    box-shadow: 0 0 3px black;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .deletePopup h1 {
    text-align: center;
  }
  .delete-btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    .delete-no,
    .delete-yes {
      width: 40%;
      height: 40px;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      font-weight: lighter;
    }
    .delete-no {
      border: 1px solid #3282c4;
      background: transparent;
      color: #3282c4;
      font-weight: 600;
    }
  }
  .viewPopup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    max-width:100%;
    height: 500px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: start;
    box-shadow: 0 0 0px 100rem #00000047;
    border-radius: 10px;
  }

  .modal-content {
    padding: 40px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }

  .modal-content .close {
    width: 100%;
    font-size: 20px;
    cursor: pointer;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
      font-size:34px;
    }
  }

  .modal-content hr {
    margin-bottom: 40px;
    width: 100%;
  }

  .modal-content p {
  width: auto;
  overflow: hidden;
  max-width: 400px;
  height: auto;
    display: flex; 
    flex-direction: column;
    align-items: start;
    color: #2f2d2d;
    font-weight: 600;

    strong{
    color: gray;
    font-weight: lighter;
    margin-bottom: 15px;

    }
    a{
    color: #2f2d2d;
    text-decoration: none;
    font-weight: 600;
    }
  }
  .view-row {
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    align-items: start;
    width: 90%;
    height: auto;
  }
    .viewPopup-content{
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    }
  .viewEdit-btn {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
  }
  input.search{
    padding:5px;
  }
  .view-table{
    width:100%;
    overflow-x: auto;
  }
  .edit-btn {
    width: 120px;
    height: 50px;
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
  }
  @media (max-width:768px){
   
    .forms-line{
      flex-direction: column;
      padding: 10px;
    }
    .event-container .addPopup .form-line,.event-container .editPopup .form-line{
            width:100%;

    }
 img.link{
  display:none;
  }
  .upcoming-events .eventHeader h2{
    font-size:100%;
  }
}
`;

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventContent, setShowEventContent] = useState(true);
  const [deleteId, setDeleteId] = useState(null); // Store the id of the event to be deleted

  
  const closePopup = () => {
    document.querySelector(".addPopup").style.display = "none";
  };

  const openPopup = () => {
    document.querySelector(".addPopup").style.display = "flex";
  };

  const deleteOpenPopup = (id) => {
    setDeleteId(id); // Set the id of the event to be deleted
    document.querySelector(".deletePopup").style.display = "flex";
  };

  const deleteNo = () => {
    document.querySelector(".deletePopup").style.display = "none";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventName = e.target.eventName.value;
    const eventLink = e.target.eventLink.value;
    const eventDescription = e.target.eventDescription.value;
    const eventDate = e.target.eventDate.value;
    const eventTime = e.target.eventTime.value;

    setEvents((prevEvents) => [
      ...prevEvents,
      {
        id: prevEvents.length + 1,
        name: eventName,
        link: eventLink,
        description: eventDescription,
        dateTime: `${eventDate} ${eventTime}`,
      },
    ]);

    e.target.reset();
    closePopup();
    setShowEventContent(false); // Hide event content after adding an event
  };

  const handleDelete = () => {
    // Remove the event with the specified deleteId
    const updatedEvents = events.filter((event) => event.id !== deleteId);

    // Reassign serial numbers (S.No)
    const reorderedEvents = updatedEvents.map((event, index) => ({
      ...event,
      id: index + 1,
    }));

    setEvents(reorderedEvents); // Update the state
    setDeleteId(null); // Reset deleteId
    deleteNo(); // Close the delete popup
  };

  const handleEdit = (id) => {
    console.log(`Edit event with id: ${id}`);
  };

  const handleView = (event) => {
    setSelectedEvent(event); // Set the selected event data
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Hide the modal
    setSelectedEvent(null); // Clear the selected event data
  };
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Wrapper>
      <div className="event-container">
        {showEventContent ? (
          <div className="event-content">
            <img src="\src\assets\elements\events.png" alt="Events" className="event-img"/>
            <h2>
              {events.length === 0
                ? "No Events & Info Found"
                : "Upcoming Events"}
            </h2>
            <button onClick={openPopup}>
              <img src="\src\assets\add-icon.svg" alt="Add Event" />
              Add Event
            </button>
          </div>
        ) : (
          <div className="adding">
  <div className="upcoming-events">
    <div className="eventHeader">
      <h2>Upcoming Events</h2>
      <div className="events-search">
        <button onClick={openPopup}>
          <img src="\src\assets\add-icon.svg" alt="Add Event" />
          Add Event
        </button>
        <input
          type="search"
          placeholder="Search"
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
    <div className="view-table">
      <table className="events-table">
        <thead>
          <tr className="table-header">
            <th className="sr">S.No</th>
            <th>Event Name</th>
            <th>Event Link</th>
            <th>Description</th>
            <th>Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>
                  <a href="#" onClick={() => handleView(event)}>
                    {event.link}
                  </a>
                </td>
                <td>{event.description}</td>
                <td>{event.dateTime}</td>
                <td className="actions">
                  <img
                    src="\src\assets\view.svg"
                    alt="View"
                    onClick={() => handleView(event)}
                  />
                  <img
                    src="\src\assets\edit.svg"
                    alt="Edit"
                    onClick={() => openPopup(event.id)}
                  />
                  <img
                    src="\src\assets\delete.svg"
                    alt="Delete"
                    onClick={() => deleteOpenPopup(event.id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No match found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>

        )}
        <div className="deletePopup">
          <p className="delete-close" onClick={deleteNo}>
            x
          </p>
          <div className="img">
            <img src="\src\assets\delete-white.svg" alt="error" />
          </div>
          <h3>Are You Sure?</h3>
          <p>To delete the Weekly event</p>
          <div className="delete-btn">
            <button className="delete-no" onClick={deleteNo}>
              No
            </button>
            <button className="delete-yes" onClick={handleDelete}>
              Yes, delete
            </button>
          </div>
        </div>
        <div className="addPopup">
          <h1>
            Add Event <p onClick={closePopup}>X</p>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="forms-line">
              <div className="form-line">
                <label htmlFor="eventName">Event Name</label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  placeholder="Enter Event Name"
                  required
                />
              </div>
              <div className="form-line">
                <label htmlFor="eventLink">Event Link</label>
                <input
                  type="url"
                  id="eventLink"
                  name="eventLink"
                  placeholder="Enter Event Link"
                  required
                />
                <img src="\src\assets\link-icon.svg" alt="" className="link" />
              </div>
            </div>
            <div className="forms-line">
              <div className="form-line">
                <label htmlFor="eventDescription">Event Description</label>
                <textarea
                  id="eventDescription"
                  name="eventDescription"
                  required
                ></textarea>
              </div>
              <div className="form-line">
                <label htmlFor="eventDate">Event Date & Time</label>
                <div className="innerForm-line">
                  <input type="date" id="eventDate" name="eventDate" required />
                  <input type="time" id="eventTime" name="eventTime" required />
                </div>
              </div>
            </div>
            <div className="forms-line">
              <div className="form-line form-btn">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closePopup}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="editPopup">
          <h1>
            Add Event <p onClick={closePopup}>X</p>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="forms-line">
              <div className="form-line">
                <label htmlFor="eventName">Event Name</label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  placeholder="Enter Event Name"
                  required
                />
              </div>
              <div className="form-line">
                <label htmlFor="eventLink">Event Link</label>
                <input
                  type="url"
                  id="eventLink"
                  name="eventLink"
                  placeholder="Enter Event Link"
                  required
                />
                <img src="\src\assets\link-icon.svg" alt="" className="link" />
              </div>
            </div>
            <div className="forms-line">
              <div className="form-line">
                <label htmlFor="eventDescription">Event Description</label>
                <textarea
                  id="eventDescription"
                  name="eventDescription"
                  required
                ></textarea>
              </div>
              <div className="form-line">
                <label htmlFor="eventDate">Event Date & Time</label>
                <div className="innerForm-line">
                  <input type="date" id="eventDate" name="eventDate" required />
                  <input type="time" id="eventTime" name="eventTime" required />
                </div>
              </div>
            </div>
            <div className="forms-line">
              <div className="form-line form-btn">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closePopup}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Modal Popup for Viewing Event */}
        {showModal && selectedEvent && (
          <div className="viewPopup">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                <h2>Event Detail</h2>
                <p>&times;</p>
              </span>
              <hr />
              <div className="viewPopup-content">
                <p>
                  <strong>Event Name:</strong> {selectedEvent.name}
                </p>
                <p>
                  <strong>Project Description:</strong>{" "}
                  {selectedEvent.description}
                </p>
                <div className="view-row">
                  <p>
                    <strong>Event Date & Time:</strong> {selectedEvent.dateTime}
                  </p>
                  <p>
                    <strong>Event Link:</strong>{" "}
                    <a
                      href={selectedEvent.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {selectedEvent.link}
                    </a>
                  </p>
                </div>
                <div className="viewEdit-btn">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(selectedEvent.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Events;
