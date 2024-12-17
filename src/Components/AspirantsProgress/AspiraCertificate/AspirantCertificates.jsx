import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../../Heading';
import { NavLink, Link } from 'react-router-dom';
import Button from '../../Button';

const Wrapper = styled.section`
  .dateSec {
    width: 96%;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 12px 1px rgba(6, 40, 61, 0.06);
  }

  .user-timesheet {
    padding: 10px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ad-sck {
    margin: 25px 0;
    display: flex;
    list-style: none;

    li {
        font-size: 18px;
        font-weight: 500;
        color: #252e4a;
        a{
            color: #787E91;
            font-size: 18px;
            text-decoration: none;
            padding-right: 5px;
        }
    }
  }

    .usertime-name {
        position: relative;
        color: #252E4A;
        font-size: 18px;
        font-weight: 600;

        &:before {
            position: absolute;
            content: '';
            width: 0px;
            height: 24px;
            border: 4px solid #6AAA43;
            left: -18px;
            top: -4px;
        }
    }

    .heading {
        height: 25px;
    }

     .container-2 {
    width: 100%;
    min-height: 100vh;
  }

  .header {
    width: 100% !important;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1vw;

    &.btm-header {
        margin: 20px 0 0 0;
        justify-content: flex-end;
    }
  }

  .searchBox {
    width: 17%;
    text-align: end;

    input {
      width: 150px;
      height: 45px;
      padding: 0 10px;
      font-size: 18px;
      border: 2px solid #00000080;
      border-radius: 5px;
    }
  }

  .tab-cols-head {
    width: 95%;
    margin: auto;
  }

  .tab-cols {
    width: 100% !important;
    margin: 10px auto;
    overflow-x: scroll;
  }

  .odd {
    min-width: 770px;
    height: 45px;
    padding-left: 10px;
    display: grid;
    border: 1px solid #cbcbcb;
    border-top: none;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    font-size: 14px;

    td {
      color: #505050;
      padding: 10px;
    }

    .num {
        padding: 10px 0 10px 25px;
    }
  }

  .odd1 {
    position: relative;
    top: 4px;
    color: #000000b0;
    background: #ebf3fa;
    font-size: 13px;
    border: 1px solid #cbcbcb;
  }

  .stack-output {
    display: flex;
    align-items: center;

    p {
      padding-left: 10px;
    }

    button {
      margin-right: 15px;
      background: none;
      border: none;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
        font-size: 24px;
      }
    }
  }

  .breadcrumb {
    margin: 10px 0;
    font-size: 16px;
    color: #666;
  }

  .breadcrumb a {
    color: #0078d7;
    text-decoration: none;
  }

  .container-2 {
    width: 100%;
    min-height: 50vh;
  }

  .searchBox {
    width: 17%;
    text-align: end;

    input {
      width: 120px;
      height: 40px;
      padding: 0 10px;
      font-size: 18px;
      border: 1px solid #00000080;
      border-radius: 3px;
    }
  }

  .tab {
    overflow-x: auto;
  }  

  .tab-cols-head {
    width: 95%;
    margin: auto;
  }

  .tab-cols {
    width: 95%;
    min-width: 900px;
    margin: 10px auto;
    overflow-x: scroll;
  }

  .odd {
    min-width: 770px;
    height: 45px;
    display: grid;
    grid-template-columns: 0.3fr 1fr 1fr 1fr 0.7fr 0.5fr!important;
    border: 1px solid #cbcbcb;
    border-top: none;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    font-size: 14px;

    td {
      color: #252E4A99;
      font-size: 14px;
      font-weight: 500;
      padding: 10px;
    }

    &.noData {
        grid-template-columns:1fr!important;
        text-align: center;
        
        p {
            color: #5F5F5F;
        }
    }
  }

  .odd1 {
    position: relative;
    top: 4px;
    color: #000000b0;
    background: #ebf3fa;
    font-size: 13px;
    border: 1px solid #cbcbcb;
  }

  .stack-output {
    display: flex;
    align-items: center;

    p {
      padding-left: 10px;
    }

    button {
      margin-right: 15px;
      background: none;
      border: none;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
        font-size: 24px;
      }
    }
  }

  .breadcrumb {
    margin: 10px 0;
    font-size: 16px;
    color: #666;
  }

  .breadcrumb a {
    color: #0078d7;
    text-decoration: none;
  }

  /* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal Content */
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Modal Header */
.modal-content h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
}

/* Modal Input Fields */
.modal-content input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}

.modal-content input:focus {
  outline: none;
  border-color: #007bff;
}

/* Modal Actions (Buttons) */
.modal-actions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.modal-actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.modal-actions button:hover {
  opacity: 0.8;
}

.modal-actions button:first-child {
  background-color: #f0f0f0;
  color: #333;
  }
  
  .modal-actions button:last-child {
  background-color: #007bff;
  color: white;
  }

  `;


const AspirantCertificates = () => {
  const [students, setStudents] = useState([
    // { cName: "-", cId: "-", cLink: "-", issues: "-" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({
    cName: "",
    cId: "",
    cLink: "",
    issues: "",
  });

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const filteredStudents = students.filter(
    (student) =>
      student.cName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.issues.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (student = null) => {
    if (student) {
      setEditMode(true);
      setSelectedStudent(student);
      setFormData({
        cName: student.cName,
        cId: student.cId,
        cLink: student.cLink,
        issues: student.issues,
      });
    } else {
      setEditMode(false);
      setFormData({ cName: "", cId: "", cLink: "", issues: "" });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const closeDeleteConfirmation = () => setIsDeleteConfirmationOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (editMode && selectedStudent) {
      setStudents(
        students.map((student) =>
          student.cId === selectedStudent.cId ? { ...formData } : student
        )
      );
    } else {
      setStudents([...students, formData]);
    }
    closeModal();
  };

  const handleDelete = (studentId) => {
    setIsDeleteConfirmationOpen(true);
    setSelectedStudent(students.find((student) => student.cId === studentId));
  };

  const confirmDelete = () => {
    setStudents(students.filter((student) => student.cId !== selectedStudent.cId));
    closeDeleteConfirmation();
  };

  return (
    <Wrapper>
      <div className="user-timesheet">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ad-sck">
            <li className="breadcrumb-item">
              <Link to="/admin/aspirants-progress">Certificates</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              / ASP0450
            </li>
          </ol>
        </nav>
        <div className="usertime-id">
          <p className="usertime-name">Aspirant : ASP0244 - Ibrahim.K</p>
        </div>
      </div>
      <div className="dateSec">
        <div className="header">
          <Heading title="Certificates" />
          <Button onClick={() => openModal()}>+ Add Certificates</Button>
        </div>
        <div className="list-cont">
          <div className="container-2">
            <div className="header btm-header">
              <div className="searchBox">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="tab">
              <table className="tab-cols">
                <thead>
                  <tr className="odd odd1">
                    <td className="num">#</td>
                    <td>Certificate Name</td>
                    <td>Credential ID</td>
                    <td>Certificate Link</td>
                    <td>Issues on</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student, index) => (
                      <tr className="odd" key={index}>
                        <td className="num">{index + 1}</td>
                        <td>{student.cName}</td>
                        <td>{student.cId}</td>
                        <td>{student.cLink}</td>
                        <td>{student.issues}</td>
                        <td className="stack-output">
                          <button onClick={() => openModal(student)}>
                            <img src="https://admin.aspiraskillhub.aspirasys.com/images/edit-2.png" />
                          </button>
                          <button onClick={() => handleDelete(student.cId)}>
                            <img src="https://admin.aspiraskillhub.aspirasys.com/images/trash.png" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="odd noData">
                      <td colSpan="6">No data available in table</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{editMode ? "Edit Certificate" : "Add Certificate"}</h3>
            <input
              type="text"
              name="cName"
              value={formData.cName}
              onChange={handleChange}
              placeholder="Certificate Name"
            />
            <input
              type="text"
              name="cId"
              value={formData.cId}
              onChange={handleChange}
              placeholder="Credential ID"
            />
            <input
              type="text"
              name="cLink"
              value={formData.cLink}
              onChange={handleChange}
              placeholder="Certificate Link"
            />
            <input
              type="text"
              name="issues"
              value={formData.issues}
              onChange={handleChange}
              placeholder="Issues on"
            />
            <div className="modal-actions">
              <button onClick={closeModal}>Cancel</button>
              <button onClick={handleSubmit}>
                {editMode ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteConfirmationOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Are you sure you want to delete this certificate?</h3>
            <div className="modal-actions">
              <button onClick={closeDeleteConfirmation}>Cancel</button>
              <button onClick={confirmDelete}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default AspirantCertificates;
