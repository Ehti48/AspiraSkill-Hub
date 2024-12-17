import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'
import Heading from '../Heading'
import Button from '../Button'

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
    min-width: 1200PX;
    height: 45px;
    padding-left: 10px;
    display: grid;
    grid-template-columns: 0.4fr 0.5fr 1.5fr 1.5fr 1.8fr 1fr 0.8fr;
    border: 1px solid #cbcbcb;
    border-top: none;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    font-size: 14px;

    td {
      color: #505050;
      padding: 10px;
      font-size: 14px;

      #action-icons {
        width: auto;
        height: auto;
      }

      img {
        width: 35px;
        height: 35px;
        margin-top: 7px;
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

  .odd2 {
    grid-template-columns: 1fr;
    place-items: center;
    td {
      font-size: 16px !important;
      font-weight: 400;
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
      margin-right: 12px;
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
    color: #252E4A;
    margin: 2% 0;
    padding: 0 30px;
    font-size: 18px !important;
    display: flex;
    align-items: center;

    svg {
      font-size: 30px;
      color: #252E4A99;
    }

    a {
      text-decoration: none;
      color: #252E4A99;
    }

    span {
      color: #252E4A99;
      cursor: pointer;
    }
  }

  .modal {
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    max-width: 500px;
    width: 90%;
    height: auto;
    background: #fff;
    padding: 14px 24px;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center  !important;

    .del-icon {
      width: 70px;
      height: 70px;
      background: #ff6b63;
      border-radius: 50%;
      padding: 17px;
      margin: 10px auto;
  
    }
      
      p {
        text-align: center;
        font-size: 26px !important;
        margin-bottom: -5px;
      }
        span {
          font-size: 14px !important;
        }

        .btn-group {
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 20px;
          padding: 0;

          button {
            width: 100px;
            padding: 7px 10px;
        }
  }

  @media (min-width: 1350px) { 
    .odd {
      font-size: 16px;

      td {
        font-size: 16px;
      }
    }

    .breadcrumb {
      font-size: 20px !important;
    }
  }
`;

const ModalWrapper = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 5px;
  width: 90%;
  max-width: 800px;
  text-align: center;
  position: relative;

  .heading {
    width: 100%;
    text-align: start;
    margin-bottom: 25px;
    border-bottom: 1px solid #252E4A40;

    h1 {
          padding: 10px 0;
    }
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 35px;
    height: 25px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAbFBMVEX///8AAAD8/PwEBAS+vr7j4+PExMSoqKjW1tbBwcGRkZGNjY29vb2kpKTIyMjS0tLf39+urq7MzMyQkJCbm5vs7Ow9PT329vYsLCxWVlba2tq2trbu7u5ISEgnJyceHh5/f39gYGB3d3doaGhU8uNEAAAFMUlEQVR4nO2dbWPaOBCEJTkBkhRICIQ0tL3e5f//x8MmDtjRjvyybiUxz9drVXmYnZWE0RlDCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQEjm7zWzzY7LR9+vZajfZ6Cq45asteXmaZPjDz2r0X9u9cZP8A6NxZvGPtUVRlPN8vVUff1cpcBp+pj66Eit7yUJ1bGduG6MfjIvRCs1JaotwW1vgg3WE5eDMTzuZCG0XlMWmNrgi6/Ysy89Kiy8SWPtNbXA9fn+dppoIHgnsv0pja/LimafdqAztk8BalaF18c5TRQS/BDa+TBQ0GC2CJw7j1eB1IhHKpphKLfwnaDBKBNkF9rvazPVYCR/XOBFEF9hptiSjcP7GMFKE0gV+DYoI48CYhajBQBFAIRT2Rnn2SjzJIgxbLLX3CBfcK89dDSBCfyfILjjqEq0ExsxlEVa9BwOF8BzhpvET6IR+85bjsJQgYg2QCP3Ofh5lF9zH7IISIEKfcgAuiF4CFRFgHD5MOnslQDB2LQd5dZiCC8oPEXaH8BMAF0S8Lmgz0gmgKSbhghNQhNBTiBIkUgg12AngQeAeIZlCMNUzDi4H6IKkcKhF3olOgHGYRFNsApxwJ1YDaIoPKWXBiZATvIBCeIAxEi1ABP8JCNgjJFgIJhSMPifk54ISIMJN66lcfi4oOT7jUhah/Z3poxyHz+m6ILB3uOwOoaaYrgQBES6dIBZCYgtkDzgYz90BS5C2BgEn1MEI9gjpxmGDYDkAF0R+fNqV0glS4pfvlyEJMnFB+UHCFgmXRjmYoAKKsBQ9knpTbAJFEChycsEJORjBZjkzDXo6IZumeAHeO1yHC1zPTMjPBRVwxfilEHIzQUX5UJ1EKLIshJpu5ZCtCyo6BmPGLigJOiGVL9dHgPcOtQv+9iynB4uQ1R5BArXIpL5cHwE6Lyii/KmWOg6902uHvMeYIG84EvMXwQUluAIRFvJ5wSfR/pBXh7ALTk7IOBhxHF6FE7pKkG0mhJriVYjQJQ6zLod+Ljg5IbtgfOvlgiyd0NcF2YkACqGw71ciAojDZ3OQRcgmE2QXfBycARGycYLogtMJsrsCEUQX1C/dOfMNiZBBOXjuiqk1OB+cASdI7zYnBGiKn2+cuZwzAcbhtvEHYTkkzVpuittGocNgTLgc4B6h/cOcQHdINhhBU9x6ngqUQ7JOkDpCURVCWwMcjPLPfyLGoaboc0EgGJN0gihBOw7P5CWC7IJWU2yTkwgDXGCqr+aBCJFehSMxTAITLIeEghHE4TLwV6EIMd4bKQBWh8vQu0bH/3qDnJAEoClaGIdn0hdhjAsqUg9G6IJQFpwHuUNOiD4YoQTdZw/KIfpg3EAJumqAg/EmbifApthn5rAconaCjgsqXJLlAPYI3ePwElgOkQLicN6/hF165eDMTnbBfOCQQIQ35flr4Mx3cb5PA4McifCiPH8VFuLqcPAtwEflZqIIMUaC7979imGFUCM64V1p3ppI1ys/jXoZH5SD3tTV8E2zGH8dthPLIcLFouiCcThxsRShBr/0C6HGXw7jx1XHd+++zr3w/nKI8d59zzyVrsb3rxjHtZtJcOa1sUBQiMNLWgoXUd67775sGg9623zPYumgNbYu2/NBYqE9yVMmnIeP9IegzRsT9Y/91hel1u18+s9zjK5d3Rx+/9CW4Djc/uFj9PfHqE/T9rPl/Xy1n2h0t5lvl3fT/S8ydZj086kHz/pn8YQQQgghhBBCCCGEEEIIIYQQQgghhBBCSPr8D3PyK3fZiMoVAAAAAElFTkSuQmCC) no-repeat;
    background-size: contain;
    background-position: center;
    border: none;
    opacity: 50%;
    cursor: pointer;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  .flex-sec {
    display: flex;
  }

  .modal-section {
    text-align: left;
    width: 50%;
    padding: 15px;
  }

  .form-group {
    padding: 10px 0;
    margin-bottom: 10px;
    position: relative;

    .paste {
      width: 20px;
      height: 20px;
      right: 18px;
      position: absolute;
      top: 44px;
      cursor: pointer;
    }

    .upload-img {
    position: relative;
    width: 240px;
    border-radius: 5px;

    .updated-addImage, .updated-addImageMaterial {
      width: 91%;
      height: 85%;
      object-fit: contain;
      position: absolute;
      background: white;
      margin: 10px;
    }

    .upload-content {
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 30px;
      border-radius: 5px;
      border: 2px dotted #3986c6;

      p {
        color: #3986c6;
      }
    }

    .edit-photo {
      width: 40px;
      height: 40px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    

    .editImage {
      position: absolute;
      top: 25px;
      height: 83%;
      opacity: 0;
    }
  }
  }

  .type-cont {
    display: flex;

    .type {
      padding: 10px 0;
      margin-right: 10px;
      label {
          color: #252E4A99;
      }
      input {
        margin-right: 10px;
      }
    }
  }
`;

const Label = styled.label`
  text-align: left;
  font-size: 14px;
  margin-bottom: 8px;
  color: #252E4A99;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #252E4A;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 1px solid #2f87ff;
    background-color: #2f87ff10;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #252E4A;
  font-size: 14px;

    &:focus {
    outline: none;
    border: 1px solid #2f87ff;
    background-color: #2f87ff10;
  }

  option {
    color: #252E4A;
    background: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      // background-color: #0078d7;
    }
  }
`;

const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 15px;
`;

const ModalButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #2f87ff;
  color: white;

  &.btn-2 {
    background: Transparent;
    color: #2f87ff;
    border: 1px solid #2f87ff;
  }
`;

const SaveButton = styled(ModalButton)`
  background-color: #0078d7;
  color: white;
`;

const CancelButton = styled(ModalButton)`
  background-color: #f0f0f000;
  border: 1px solid #0078d7;
  color: #0078d7;
`;

const Material = () => {
  const [materials, setMaterials] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [materialToDelete, setMaterialToDelete] = useState(null);
  const [currentMaterial, setCurrentMaterial] = useState(null);  // Current material for editing

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedMaterials = localStorage.getItem('materials');
    if (storedMaterials) {
      setMaterials(JSON.parse(storedMaterials));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('materials', JSON.stringify(materials));
  }, [materials]);

  // Handle saving or updating material
  const handleSaveMaterial = (formData) => {
    if (currentMaterial) {
      // Update existing material
      const updatedMaterials = materials.map(material =>
        material.id === currentMaterial.id ? { ...material, ...formData } : material
      );
      setMaterials(updatedMaterials);
      localStorage.setItem('materials', JSON.stringify(updatedMaterials)); // Save to local storage
      setCurrentMaterial(null); // Reset after saving
    } else {
      // Add new material
      const newMaterials = [...materials, { ...formData, id: Date.now() }];
      setMaterials(newMaterials);
      localStorage.setItem('materials', JSON.stringify(newMaterials)); // Save to local storage
    }
    setModalOpen(false); // Close modal after saving
  };


  // Handle editing material
  const handleEditMaterial = (material) => {
    setCurrentMaterial(material);
    setModalOpen(true);  // Open modal for editing
  };

  // Handle deletion
  const handleDeleteMaterial = () => {
    const updatedMaterials = materials.filter(material => material.id !== materialToDelete.id);
    setMaterials(updatedMaterials);
    setDeleteModalOpen(false);
  };

  const openDeleteModal = (material) => {
    setMaterialToDelete(material);
    setDeleteModalOpen(true);
  };

  const renderBreadcrumb = () => {
    return location.pathname.includes('/detail') && location.state ? (
      <div className="breadcrumb">
        <Link to="/admin/my-learnings">My Learnings</Link>
        <MdKeyboardArrowRight />
        <span onClick={() => navigate(-1)}>{location.state.techStackName || 'Unknown'}</span>
        <MdKeyboardArrowRight />
        <p>{location.state.stageTitle || 'Unknown'}</p>
      </div>
    ) : null;
  };

  return (
    <Wrapper>
      {/* Add or Edit Material Modal */}
      {modalOpen && (
        <ModalForm
          material={currentMaterial}  // Pass the current material for editing
          onSave={handleSaveMaterial}  // Save handler
          onClose={() => setModalOpen(false)}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <div className="del-icon">
              <img src="https://admin.aspiraskillhub.aspirasys.com/images/mdi_trash.png" alt="delete" />
            </div>
            <p>Are you sure?</p>
            <span>To delete {materialToDelete.name}</span>
            <div className='btn-group'>
              <ModalButton className='btn-2' onClick={() => setDeleteModalOpen(false)}>No</ModalButton>
              <ModalButton onClick={handleDeleteMaterial}>Yes, delete</ModalButton>
            </div>
          </div>
        </div>

      )}


      {renderBreadcrumb()}
      <div className="container">
        <div className="header">
          <Heading title={location.state.stageTitle || 'Unknown'} />
          <Button className="addBtn" onClick={() => {
            setCurrentMaterial(null);  // Ensure we're in "add" mode
            setModalOpen(true);
          }}>
            + Add Material
          </Button>
        </div>
        <div className="tab">
          <table className="tab-cols">
            <thead>
              <tr className="odd odd1">
                <td>#</td>
                <td>Type</td>
                <td>Technology Name</td>
                <td>Video Link</td>
                <td>Learning Link</td>
                <td>Thumbnail</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {materials.length > 0 ? (
                materials.map((material, index) => (
                  <tr className="odd" key={material.id}>
                    <td>{index + 1}</td>
                    <td>{material.type || '-'}</td>
                    <td>{material.name}</td>
                    <td>{material.videoLink || '-'}</td>
                    <td>{material.learningLink || '-'}</td>
                    <td>
                      {material.thumbnail ? (
                        <img src={material.thumbnail} alt={material.name} width="50" height="50" />
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className="stack-output">
                      <Link to={`/admin/my-learnings/detail/${material.id}`}>
                        <button>
                          <img id='action-icons' src="https://admin.aspiraskillhub.aspirasys.com/images/eye.png" alt="View" />
                        </button>
                      </Link>
                      <button onClick={() => handleEditMaterial(material)}> {/* Set current material for editing */}
                        <img id='action-icons' src="https://admin.aspiraskillhub.aspirasys.com/images/edit-2.png" alt="Edit" />
                      </button>
                      <button onClick={() => openDeleteModal(material)}>
                        <img id='action-icons' src="https://admin.aspiraskillhub.aspirasys.com/images/trash.png" alt="Delete" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className='odd odd2'>
                  <td colSpan="7">No data available in the table.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

const ModalForm = ({ material, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    videoLink: '',
    learningLink: '',
    thumbnail: '',  // Do not bind file input to state
    language: '',
    concept: ''  // Ensure the concept is part of formData
  });

  useEffect(() => {
    if (material) {
      setFormData({
        type: material.type || '',
        name: material.name || '',
        videoLink: material.videoLink || '',
        learningLink: material.learningLink || '',
        thumbnail: material.thumbnail || '',
        language: material.language || '',
        concept: material.concept || ''  // Set concept field on material load
      });
    } else {
      setFormData({
        type: '',
        name: '',
        videoLink: '',
        learningLink: '',
        thumbnail: '',
        language: '',
        concept: ''  // Clear concept when no material
      });
    }
  }, [material]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value || '' }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, type: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, thumbnail: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // onSave should either add or update based on material presence
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <button onClick={onClose} className="close-btn"></button>
        <Heading title={material ? 'Edit' : 'Add'} />
        <Form onSubmit={handleSubmit}>
          <div className="flex-sec">
            <div className="modal-section">
              {/* Type Radio Buttons */}
              <div className="form-group">
                <Label htmlFor="type">Type</Label>
                <div className="type-cont">
                  <div className="type">
                    <input
                      type="radio"
                      name="type"
                      value="Material"
                      checked={formData.type === 'Material'}
                      onChange={handleRadioChange}
                      id='material'
                    />
                    <label htmlFor="material">Material</label>
                  </div>
                  <div className="type">
                    <input
                      type="radio"
                      name="type"
                      value="Project"
                      checked={formData.type === 'Project'}
                      onChange={handleRadioChange}
                      id='project'
                    />
                    <label htmlFor="project">Project</label>
                  </div>
                </div>
              </div>

              {/* Video Link */}
              <div className="form-group">
                <Label htmlFor="videoLink">Video Link</Label>
                <Input
                  type="url"
                  name="videoLink"
                  value={formData.videoLink}
                  onChange={handleChange}
                />
                <div className="paste">
                  <img src="https://admin.aspiraskillhub.aspirasys.com/images/paste.png" />
                </div>
              </div>

              {/* Thumbnail URL */}
              <div className="form-group">
                <Label htmlFor="thumbnail">Thumbnail URL</Label>
                <div className="upload-img">
                  <label htmlFor="editImage_0"></label>
                  <img src={formData.thumbnail || "https://admin.aspiraskillhub.aspirasys.com/images/no-image-found.jpg"} alt="" className="edit-updated-image updated-addImage" />
                  <div className="upload-content edit-tech-old">
                    <div className="edit-photo">
                      <img src="https://admin.aspiraskillhub.aspirasys.com/images/no-image-found.jpg" alt="profile" />
                    </div>
                    <p className="font-16 fw_500"> Upload image</p>
                  </div>
                  <input
                    type="file"
                    name="thumbnail"
                    onChange={handleFileChange}
                    className="input editImage"
                    id="editImage_0"
                  // required
                  />
                </div>
              </div>
            </div>

            {/* Second Section */}
            <div className="modal-section">
              {/* Topic Name */}
              <div className="form-group">
                <Label htmlFor="name">Topic Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Learning Link */}
              <div className="form-group">
                <Label htmlFor="learningLink">Learning Link</Label>
                <Input
                  type="url"
                  name="learningLink"
                  value={formData.learningLink}
                  onChange={handleChange}
                  required
                />
                <div className="paste">
                  <img src="https://admin.aspiraskillhub.aspirasys.com/images/paste.png" />
                </div>
              </div>

              {/* Language Selection */}
              <div className="form-group">
                <Label htmlFor="language">Select Language</Label>
                <Select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  required
                >
                  <option value="Select Language">Select Language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Tamil">Tamil</option>
                </Select>
              </div>

              {/* Concept (Where to Place This) */}
              <div className="form-group">
                <Label htmlFor="concept">Where to place this</Label>
                <Select
                  name="concept"
                  value={formData.concept}
                  onChange={handleChange}
                  required
                >
                  <option value="Select After">Select After</option>
                  <option value="Concept-1">Concept-1</option>
                  <option value="Concept-2">Concept-2</option>
                  <option value="Concept-3">Concept-3</option>
                </Select>
              </div>
            </div>
          </div>

          <ButtonGroup>
            <CancelButton type="button" onClick={onClose}>Cancel</CancelButton>
            <SaveButton type="submit">Save</SaveButton>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalWrapper>
  );
};
export default Material;
