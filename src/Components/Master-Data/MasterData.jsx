import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
Wrapper{
  border: none;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

.dashboard {
width: 100%;
// max-width: 1100px;
// margin: 0 auto;
  padding: 20px;
}

.stats {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.stat-card {
  flex: 1;
  min-width: 180px;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
  
.status-img{
width: 40px;
min-width: 40px;
height: 40px;
margin-right: 10px;
background-color: #bb64c2;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
}
.status-img.hired-img{
background-color: #6aaa43;
}
.status-img.progress-img{
background-color: #e46a11;
}
.status-img.terminated-img{
background-color: #e84138;
}
.status-img.job-ready-img{
background-color: #32bbc4;
}
.status-img img{
width: 100%;
height: 100%;
padding: 8px;
object-fit: contain;
}
.status-content{
  display: flex;
  flex-direction: column;
  text-align: left;

  h3{
  font-size: 16px;
  }
  p{
  font-size: 20px;
  font-weight: 800;
  }
} 
.stat-card.total {
  background-color: #fff;
}

.stat-card.hired {
  background-color: #fff;
}

.stat-card.progress {
  background-color: #fff;
}

.stat-card.terminated {
  background-color: #fff;
}

.stat-card.job-ready {
  background-color: #fff;
}

.success-rate {
  text-align: right;
  font-weight: bold;
  margin-bottom: 20px;
      display: flex;
    justify-content: space-between;
    align-items: center;
}

.success-rate span {
  color: green;
}

.aspirant-data {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-top: 20px;
    border: 1px solid #ddd;
    padding: 25px;
}

.filters-input input,
.filters-input select,
{
  padding: 10px;
  border-radius: 5px;
  border: none;
  flex: 1;
  margin-left:5px;
  height: 40px;  
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.8);
  min-width:220px;
}

.masterdata-table{
width: 100%;
overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid #ddd;
}

table thead {
  background-color: #f0f0f0;
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
.status.hired {
  color: green;
}
.status.terminated {
  color: red;
}
.action-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
  .filter-btn {
    width: 200px;
    display: flex;
    gap: 15px;
    padding: 10px;
    // margin-top: 20px;

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


@media (max-width:960px) {

  .filters {
    flex-direction: column;
    padding: 10px 15px;

    .filters-input{
      width: 100%;
      
      input,select{
        width: 100%;
      }
    }
  }
  .success-rate {
    h2{
      font-size: 19px;
    }
    p{
      font-size: 13px;
    }  
  }
  
}

`;

const aspirants = [
  {
    id: "AS0101",
    name: "Himad Ameen T I",
    gender: "Male",
    technology: "-",
    status: "Hired",
  },
  {
    id: "AS0102",
    name: "Raiyan Azami K",
    gender: "Male",
    technology: "-",
    status: "Hired",
  },
  {
    id: "AS0103",
    name: "Mohammed Zaib N",
    gender: "Male",
    technology: "-",
    status: "Hired",
  },
  {
    id: "AS0104",
    name: "Asim Jamal V M",
    gender: "Male",
    technology: "-",
    status: "Hired",
  },
  // Add more data here as needed
];

function MasterData() {
  const [filters, setFilters] = useState({
    name: "",
    gender: "",
    technology: "",
    status: "",
  });
  const [filteredAspirants, setFilteredAspirants] = useState(aspirants);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filtered = aspirants;

    if (filters.name) {
      filtered = filtered.filter((aspirant) =>
        aspirant.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.gender) {
      filtered = filtered.filter(
        (aspirant) => aspirant.gender === filters.gender
      );
    }

    if (filters.technology) {
      filtered = filtered.filter(
        (aspirant) => aspirant.technology === filters.technology
      );
    }

    if (filters.status) {
      filtered = filtered.filter(
        (aspirant) => aspirant.status === filters.status
      );
    }

    setFilteredAspirants(filtered);
  };

  const resetFilters = () => {
    setFilters({ name: "", gender: "", technology: "", status: "" });
    setFilteredAspirants(aspirants);
  };

  return (
    <Wrapper>
      <div className="dashboard">
        <header className="stats">
          <div className="stat-card total">
            <div className="status-img">
              <img src="\src\assets\people.svg" alt="error" />
            </div>
            <div className="status-content">
            <h3>
              Total Aspirants</h3>
            <p>{aspirants.length}</p>
            </div>
          </div>
          <div className="stat-card hired">
            <div className="status-img hired-img">
              <img src="\src\assets\hire.svg" alt="error" />
            </div>
            <div className="status-content">
            <h3>Hired</h3>
            <p>{aspirants.filter((a) => a.status === "Hired").length}</p>
            </div>
          </div>
          <div className="stat-card progress">
          <div className="status-img progress-img">
            <img src="\src\assets\progress.svg" alt="error" />
          </div>
          <div className="status-content">
            <h3>In Progress</h3>
            <p>{aspirants.filter((a) => a.status === "In Progress").length}</p>
          </div>
          </div>
          <div className="stat-card terminated">
          <div className="status-img terminated-img">
            <img src="\src\assets\terminated.svg" alt="error" />
          </div>
          <div className="status-content">
            <h3>Terminated</h3>
            <p>{aspirants.filter((a) => a.status === "Terminated").length}</p>

          </div>
          </div>
          <div className="stat-card job-ready">
          <div className="status-img job-ready-img">
            <img src="\src\assets\job.svg" alt="error" />
          </div>
          <div className="status-content">
            <h3>Job Ready</h3>
            <p>{aspirants.filter((a) => a.status === "Job Ready").length}</p>

          </div>
          </div>
        </header>
        <div className="success-rate">
          <h2>Aspirant Data</h2>
          <p>
            Successful Rate <span>80%</span>
          </p>
        </div>
        <section className="aspirant-data">
          <div className="filters">
            <div className="filters-input">
              <label htmlFor="name"> Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={filters.name}
              onChange={handleFilterChange}
            />
            </div>
            <div className="filters-input">
              <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              value={filters.gender}
              onChange={handleFilterChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other"> Other</option>
            </select>
              
            </div>
            <div className="filters-input">
              <label htmlFor="technology">Technology:</label>
            <select
              name="technology"
              value={filters.technology}
              onChange={handleFilterChange}
            >
              <option value="">Select Technology</option>
              <option value="React">React</option>
              <option value="Node">Node</option>
            </select>
            </div>
            <div className="filters-input">
              <label htmlFor="status">Status:</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
            >
              <option value="">Select Status</option>
              <option value="Hired">Hired</option>
              <option value="In Progress">In Progress</option>
              <option value="Terminated">Terminated</option>
            </select>
            </div>
            <div className="filter-btn">
              <button className="primary" onClick={applyFilters}>
                <img src="\src\assets\search-icon.svg" alt="Error" />
              </button>

              <button className="secondary" onClick={resetFilters}>
                <img src="\src\assets\reset-icon.svg" alt="Error" />
                Reset
              </button>
            </div>
          </div>
          <div className="masterdata-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Aspira ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Technology</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAspirants.map((aspirant, index) => (
                <tr key={aspirant.id}>
                  <td>{index + 1}</td>
                  <td>{aspirant.id}</td>
                  <td>{aspirant.name}</td>
                  <td>{aspirant.gender}</td>
                  <td>{aspirant.technology}</td>
                  <td
                    className={`status ${aspirant.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {aspirant.status}
                  </td>
                  <td>
                    <button className="action-btn">
                      <Link to="/admin/master-data/view">
                      <img src="https://admin.aspiraskillhub.aspirasys.com/images/export-pro.png"/>
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

export default MasterData;