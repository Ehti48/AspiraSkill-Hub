import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../../Heading';
import { NavLink, Link } from 'react-router-dom';
import Button from '../../Button';

const Wrapper = styled.section`
  .dateSec {
    width: 96%;
    height: 220px;
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
        margin: 0;
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
        margin: 10px 0 0 0;
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
      border: 1px solid #00000080;
      border-radius: 3px;
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
    grid-template-columns: 0.3fr 1fr 0.5fr 1fr 0.5fr 1fr 0.5fr!important;
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
`;

const InterviewDetail = () => {

  const [students, setStudents] = useState([
    { intrName: '-', topic: '-', meetLink: '-', mode: '-', eventDT: '-', },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const filteredStudents = students.filter(
    (student) =>
      student.intrName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>

      <div className="user-timesheet">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ad-sck">
            <li className="breadcrumb-item">
              <Link to='/admin/aspirants-progress'>
                Certificates
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              / ASP0450
            </li>
          </ol>
        </nav>
        <div className="usertime-id">
          <p className="usertime-name">
            Aspirant : ASP0244 - Ibrahim.K
          </p>
        </div>
      </div>
      <div className="dateSec">
        <div className="header">
          <Heading title="Upcoming Interviews" />
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
                  <td className='num'>#</td>
                  <td>Interviewer Name</td>
                  <td>Topic </td>
                  <td>Meeting Link</td>
                  <td>Mode</td>
                  <td>Event Date/Time</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {/* {filteredStudents.map((student, index) => (
                  <tr className="odd" key={index}>
                    <td className='num'>{index + 1}</td>
                    <td>{student.intrName}</td>
                    <td>{student.topic}</td>
                    <td>{student.meetLink}</td>
                    <td>{student.mode}</td>
                    <td>{student.eventDT}</td>
                    <td className="stack-output">
                      <NavLink to='/admin/aspirants-progress/stages'>
                        <button>
                          <img src="https://admin.aspiraskillhub.aspirasys.com/images/eye.png" />
                        </button>
                      </NavLink>
                      <NavLink to='/admin/aspirants-progress/'>
                        <button className="btn re-submit">
                          <span>
                            <img src="https://admin.aspiraskillhub.aspirasys.com/images/trash.png" />
                          </span>
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                ))} */}
                <tr className='odd noData'>
                    <p>No data available in table</p>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
      <div className="dateSec">
        <div className="header">
          <Heading title="Completed Interviews" />
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
                  <td className='num'>#</td>
                  <td>Interviewer Name</td>
                  <td>Topic </td>
                  <td>Meeting Link</td>
                  <td>Mode</td>
                  <td>Event Date/Time</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {/* {filteredStudents.map((student, index) => (
                  <tr className="odd" key={index}>
                    <td className='num'>{index + 1}</td>
                    <td>{student.intrName}</td>
                    <td>{student.topic}</td>
                    <td>{student.meetLink}</td>
                    <td>{student.mode}</td>
                    <td>{student.eventDT}</td>
                    <td className="stack-output">
                      <NavLink to='/admin/aspirants-progress/stages'>
                        <button>
                          <img src="https://admin.aspiraskillhub.aspirasys.com/images/eye.png" />
                        </button>
                      </NavLink>
                      <NavLink to='/admin/aspirants-progress/'>
                        <button className="btn re-submit">
                          <span>
                            <img src="https://admin.aspiraskillhub.aspirasys.com/images/trash.png" />
                          </span>
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                ))} */}
                <tr className='odd noData'>
                    <p>No data available in table</p>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
      <div className="dateSec">
        <div className="header">
          <Heading title="Interview request" />
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
                  <td className='num'>#</td>
                  <td>Interviewer Name</td>
                  <td>Topic </td>
                  <td>Meeting Link</td>
                  <td>Mode</td>
                  <td>Event Date/Time</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {/* {filteredStudents.map((student, index) => (
                  <tr className="odd" key={index}>
                    <td className='num'>{index + 1}</td>
                    <td>{student.intrName}</td>
                    <td>{student.topic}</td>
                    <td>{student.meetLink}</td>
                    <td>{student.mode}</td>
                    <td>{student.eventDT}</td>
                    <td className="stack-output">
                      <NavLink to='/admin/aspirants-progress/stages'>
                        <button>
                          <img src="https://admin.aspiraskillhub.aspirasys.com/images/eye.png" />
                        </button>
                      </NavLink>
                      <NavLink to='/admin/aspirants-progress/'>
                        <button className="btn re-submit">
                          <span>
                            <img src="https://admin.aspiraskillhub.aspirasys.com/images/trash.png" />
                          </span>
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                ))} */}
                <tr className='odd noData'>
                    <p>No data available in table</p>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>

    </Wrapper>
  );
};

export default InterviewDetail;
