import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Timesheet from './Timesheet/Timesheet';
import TrainingPlan from './TrainingPlan/TrainingPlan';
import Certificates from './AspiraCertificate/Certificates';
import Interviews from './Interview/Interviews';

const Wrapper = styled.section`
  .sub-navbar {
    padding: 0 20px;
    background: #fff;
    ul {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      li {
        height: 100%;
        padding: 15px 25px;
        font-size: 16px;
        font-weight: 500;
        list-style: none;
        cursor: pointer;
        border-bottom: 2px solid transparent;

        &:hover {
          color: #0078d7;
          border-bottom: 2px solid #0078d7;
        }
        &.active {
          color: #0078d7;
          border-bottom: 2px solid #0078d7;
        }

        a {
          color: #000;
          text-decoration: none;
        }
      }
    }
  }

  .container {
    width: 96%;
    height: auto;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 12px 1px rgba(6, 40, 61, 0.06);
    opacity: 0; /* Initial state for animation */
  }
`;

const AspirantsProg = () => {
  const [activeSection, setActiveSection] = useState('timesheet');
  const containerRef = useRef(null); // Ref for the container

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    // Animate the container when the active section changes
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeSection]);

  return (
    <Wrapper>
      <nav className="sub-navbar">
        <ul>
          <li
            className={activeSection === 'timesheet' ? 'active' : ''}
            onClick={() => handleNavClick('timesheet')}
          >
            Timesheet
          </li>
          <li
            className={activeSection === 'trainingPlan' ? 'active' : ''}
            onClick={() => handleNavClick('trainingPlan')}
          >
            Training Plan
          </li>
          <li
            className={activeSection === 'certificates' ? 'active' : ''}
            onClick={() => handleNavClick('certificates')}
          >
            Certificates
          </li>
          <li
            className={activeSection === 'interviews' ? 'active' : ''}
            onClick={() => handleNavClick('interviews')}
          >
            Interviews
          </li>
        </ul>
      </nav>

      <div className="container" ref={containerRef}>
        {activeSection === 'timesheet' && <Timesheet />}
        {activeSection === 'trainingPlan' && <TrainingPlan />}
        {activeSection === 'certificates' && <Certificates />}
        {activeSection === 'interviews' && <Interviews />}
      </div>
    </Wrapper>
  );
};

export default AspirantsProg;