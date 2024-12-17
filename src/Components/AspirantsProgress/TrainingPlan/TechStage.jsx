import React from 'react'
import styled from 'styled-components'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../../Button'
import { MdKeyboardArrowRight } from "react-icons/md";

const Wrapper = styled.section`

.container {
    padding: 20px;
}

.breadcrumb {
    margin: 0;
    padding: 0 12px 35px;
    font-size: 16px;
    color: #000 !important;
}

.breadcrumb a {
    color: #0078d7;
    text-decoration: none;
}
.ad-sck {
    margin: 0px;
    margin-bottom: 10px;
    display: flex;
    list-style: none;
    align-items: center;

    li {
        font-size: 18px;
        font-weight: 500;
        color: #252e4a;
        a{
            color: #787E91;
            font-size: 18px;
            text-decoration: none;
        }

        &.arrow {
            color: #252E4A99;
            font-size: 30px;
            height: 35px;
        }
    }
  }

  .card-sec { 
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
    padding: 20px 20px 0 12px;

    .card {
        border-radius: 6px;
        background: #fff;
        box-shadow: 0px 3px 3px 2px rgba(6, 40, 61, 0.05);
        padding: 12px;

        .card-body {
            display: flex;
            justify-content: center;
            flex-direction: column;

            .card-img {
                width: 200px;
                height: 120px;
                background: #f0f0f0;
            }

            h3 {
                padding: 10px 0 5px 0; 
                font-size: 16px;
                font-weight: 500;
                line-height: 1.2;
                letter-spacing: 1px;
            }

            p {
                margin-bottom: 5px;
                font-size: 14px;
                font-weight: 500;
                color: #6D7785;
            }

            .range {
                display: block;
                padding-bottom: 5px;
            }

           .range-input {
              -webkit-appearance: none;
              appearance: none; 
              width: 100%;
              cursor: pointer;
              outline: none;
              border-radius: 15px;
              height: 6px;
              background: #ccc;
              overflow: hidden;
            }

            .range-input::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none; 
              height: 0;
              width: 0px;
              background-color: #3282c4;
              border: none;
              transition: .2s ease-in-out;
            }

            .range-input::-moz-range-thumb {
              height: 0px;
              width: 10px;
              background-color: #f50;
              border-radius: 50%;
              border: none;
              transition: .2s ease-in-out;
            }

        }

            button {
                width: 100%;
                font-size: 16px;
                font-weight: 500;
            }
        }
    }
  }
`

const TechStage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const techId = location.state?.techId;
    const studentId = location.state?.studentId;
    const techName = location.state?.techName;

    const stages = [
        { id: 1, title: "Beginner", progress: 100, image: "beginner-image-url" },
        { id: 2, title: "Intermediate", progress: 50, image: "intermediate-image-url" },
        { id: 3, title: "Advanced", progress: 0, image: "advanced-image-url" },
    ];

    const getRangeStyle = (value) => ({
        background: `linear-gradient(to right, #3282c4 ${value}%, #ddd ${value}%)`,
    });

    return (
        <Wrapper>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb ad-sck">
                        <li className="breadcrumb-item">
                            <Link to="/admin/aspirants-progress">Training Plan</Link>
                        </li>
                        <li className="arrow"><MdKeyboardArrowRight/></li>
                        <li className="breadcrumb-item">
                            <Link onClick={() => navigate(-1)}>{techName}</Link>
                        </li>
                        <li className="arrow"><MdKeyboardArrowRight/></li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {techId}
                        </li>
                    </ol>
                </nav>
                <div className="card-sec">
                    {stages.map((stage) => (
                        <div key={stage.id} className="card">
                            <div className="card-body">
                                <img src={stage.image} alt={`${stage.title} Image`} className="card-img" />
                                <h3 className="card-title">{stage.title}</h3>
                                <p className="card-text">Course Progress</p>
                                <div className="range">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={stage.progress}
                                        className="range-input"
                                        style={getRangeStyle(stage.progress)}
                                        readOnly
                                    />
                                </div>
                                <Link 
                                to="/admin/aspirants-progress/material-detail"
                                state={{stageTitle: stage.title, techName: techName, studentId: studentId}}
                                >
                                    <Button>View stage</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default TechStage;
