import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Heading from '../Heading';
import EditModal from './EditModal';
import { MdOutlineDangerous } from "react-icons/md";
import { Link } from 'react-router-dom';
import Button from '../Button';

const Wrapper = styled.section`
  .container {
    width: 95%;
    margin: 2% auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 5px #00000020;
  }

  .header {
    width: 100%;
    margin:0 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      width: 150px;
    }
  }

  .searchBox {
    width: 100%;
    margin: auto;
    text-align: end;

    input {
      max-width: 170px;
      height: 40px;
      padding: 0 10px;
      font-size: 16px;
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
    width: 100%;
    min-width: 900px;
    margin: 10px auto;
    overflow-x: scroll;
  }

  .odd {
    height: 45px;
    padding-left: 10px;
    display: grid;
    grid-template-columns: 50px 150px 200px 90px 225px 100px 135px!important;
    grid-template-rows: 45px;
    border: 1px solid #cbcbcb;
    border-top: none;
    align-items: center;
    font-size: 14px;

    td {
      color: #252E4A;
      padding: 10px;
      font-size: 14px;
      font-weight: 400;
       
      .thumb {
        width: 40px;
        height: auto;
        object-fit: cover;
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
    // border-top: 1px solid;

      td {
        color: #757f91;
      }
  }

  .odd2 {
    grid-template-columns: 1fr !important;
    place-items: center;

    td {
        font-size: 16px !important;
        color: #757f91;
      }
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

  @media (min-width: 1350px) { 
    .odd {
      font-size: 16px;
      grid-template-columns: 0.4fr 1fr 1.3fr 0.5fr 1.5fr 0.8fr 0.7fr !important;
      justify-content: center;

      td {
        font-size: 16px;
      }
    }
  }
`;

const ConfirmationModal = ({ onConfirm, onCancel }) => (
  <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
      <MdOutlineDangerous style={{ fontSize: '50px', margin: '5px 0', color: '#ea6262' }} />
      <p style={{ margin: '10px 0' }}>Are you sure you want to delete this tech stack?</p>
      <button onClick={onConfirm} style={{ margin: '10px', padding: '5px 15px', background: '#ea6262', color: '#fff', borderRadius: '5px', border: '2px solid #ea6262' }}>Yes</button>
      <button onClick={onCancel} style={{ margin: '10px', padding: '5px 15px', background: 'none', color: '#000', borderRadius: '5px', border: '2px solid #000' }}>No</button>
    </div>
  </div>
);

const MyLearnings = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [techStacks, setTechStacks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentTechStack, setCurrentTechStack] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [techStackToDelete, setTechStackToDelete] = useState(null);

  useEffect(() => {
    const storedTechStacks = JSON.parse(localStorage.getItem('techStacks') || '[]');
    setTechStacks(storedTechStacks);
  }, []);

  useEffect(() => {
    localStorage.setItem('techStacks', JSON.stringify(techStacks));
  }, [techStacks]);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSaveTechStack = (newTechStack) => {
    setTechStacks((prev) => {
      const exists = prev.some((stack) => stack.id === newTechStack.id);
      return exists
        ? prev.map((stack) => (stack.id === newTechStack.id ? newTechStack : stack))
        : [...prev, newTechStack];
    });
    setModalOpen(false);
    setCurrentTechStack('');
  };

  const handleDeleteTechStack = () => {
    setTechStacks((prev) => prev.filter((stack) => stack.id !== techStackToDelete.id));
    setDeleteModalOpen(false);
    setTechStackToDelete(null);
  };

  const filteredTechStacks = techStacks.filter(
    (stack) =>
      stack.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stack.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <Heading title="Tech Stack" />
          <Button className="addBtn" onClick={() => setModalOpen(true)}>
            + Add Tech Stack
          </Button>
        </div>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="tab">
          <table className="tab-cols">
            <thead>
              <tr className="odd odd1">
                <td>#</td>
                <td>Technology ID</td>
                <td>Technology Name</td>
                <td>Stages</td>
                <td>Description</td>
                <td>Thumbnail</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {filteredTechStacks.length > 0 ? (
                filteredTechStacks.map((techStack, index) => (
                  <tr className="odd" key={techStack.id}>
                    <td>{index + 1}</td>
                    <td>{techStack.id}</td>
                    <td>{techStack.name}</td>
                    <td>{techStack.stages}</td>
                    <td>{techStack.description || '-'}</td>
                    <td>
                      {techStack.thumbnail ? (
                        <img className='thumb' src={techStack.thumbnail} alt={techStack.name} width="50" height="50" />
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className="stack-output">
                      <NavLink
                        to={`/admin/my-learnings/detail/${techStack.id.slice(-2)}`}
                        state={{ techStackName: techStack.name, techStackId: techStack.id, techStackStages: techStack.stages}}
                      >
                        <button>
                          <img src="https://admin.aspiraskillhub.aspirasys.com/images/eye.png" />
                        </button>
                      </NavLink>
                      <button
                        onClick={() => {
                          setCurrentTechStack(techStack);
                          setModalOpen(true);
                        }}
                      >
                        <img src="https://admin.aspiraskillhub.aspirasys.com/images/edit-2.png" />
                      </button>
                      <button
                        onClick={() => {
                          setTechStackToDelete(techStack);
                          setDeleteModalOpen(true);
                        }}
                      >
                        <img src="https://admin.aspiraskillhub.aspirasys.com/images/trash.png" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="odd odd2">
                  <td colSpan="7" style={{ textAlign: 'center' }}>
                    No data available in the table
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
        {isModalOpen && (
          <EditModal
            isOpen={isModalOpen}
            onClose={() => {
              setModalOpen(false);
              setCurrentTechStack(null);
            }}
            techStack={currentTechStack}
            onSave={handleSaveTechStack}
            existingIds={techStacks.map((stack) => stack.id)}
          />
        )}
        {isDeleteModalOpen && (
          <ConfirmationModal
            onConfirm={handleDeleteTechStack}
            onCancel={() => setDeleteModalOpen(false)}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default MyLearnings;
