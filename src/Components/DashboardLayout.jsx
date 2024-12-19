import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Use useLocation
import styled from 'styled-components';  
import { MdDashboard, MdNotes, MdEvent } from "react-icons/md";  
import { FaUserEdit } from "react-icons/fa";  
import { RiAdminFill } from "react-icons/ri";  
import { SiDatabricks } from "react-icons/si";  
import { FaBarsProgress } from "react-icons/fa6";  
import { VscGraph } from "react-icons/vsc";  
import Main from './Main';  

const Wrapper = styled.section`

::-webkit-scrollbar {
    display: none;
}
    .layout {
        display: flex;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
    .sideBar {
        width: 23%;
        min-width: 240px;
        max-width: 240px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #192030;

        .logo {
            font-size: 25px;
            color: #fff;
        }

        .list-cont {
            width: 100%;
            height: 80%;
            padding: 10px;
            padding-top: 50px;
            display: flex;
            flex-direction: column;
            color: #fff;

            a {
                text-decoration: none;
            }

            .list-item {
                height: 40px;
                margin: 5px 0;
                padding: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1vw;
                font-size: 16px !important;
                // font-weight: 600;
                color: #a5bacd;
                border-radius: 5px;
                cursor: pointer;
                transition: background 0.3s, color 0.3s;

                span {
                    min-width: 150px;
                }

                .icon {
                    width: 25px;
                    height: 35px;

                    svg {
                        width: 100%;
                        height: 100%;
                    }
                }

                &:hover {
                    background: #02335f;
                }

                &.active {
                    background: #0078d7;
                    color: #fff;
                }
            }
        }
    }

    @media (max-width: 1050px) {
        .sideBar {
            min-width: 83px;
            max-width: 70px;

        .logo {
            display: none;
        }

        .list-cont{

            .list-item {
                height: 45px;
                padding: 0;
                justify-content: center;
                span {
                    display: none;
                    }
                }
            }
        }
    }

    @media (max-width: 769px) {
        .sideBar {
            min-width: 0;
            max-width: 0;
        }
    }

    .main {
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .navbar {
        width: 100%;
        height: 82px;
        padding: 18px 18px 18px 20px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: end;
        background: #fff;
        box-shadow: 0px 1px 4px 2px rgba(6, 40, 61, 0.03);

        span {
            color: #252e4a;
            font-size: 21px;
            font-weight: 600;
        }
    }

    footer {
        height: 45px;
        padding-top: 10px;
        background: #f5f7fb;
        text-align: center;

        p {
            color: #252E4A80;
            font-size: 12px;
            font-weight: 450;
        }
    }
`;

const DashboardLayout = () => {
    const [headerText, setHeaderText] = useState('Dashboard');  
    const location = useLocation(); // Get current location object from useLocation

    // Use useEffect to update the header text based on the current location
    useEffect(() => {
        if (location.pathname.includes('/admin/my-learnings')) {
            setHeaderText('My Learnings');
        } else if (location.pathname === '/admin/aspirants-progress') {
            setHeaderText('Aspirants Progress');
        } else if (location.pathname === '/admin/aspirants-progress/productive-students') {
            setHeaderText('Aspirants Progress');
        } else if (location.pathname === '/admin/aspirants-progress/timesheet-detail') {
            setHeaderText('Aspirants Progress');
        } else if (location.pathname === '/admin/aspirants-progress/aspirant-tech') {
            setHeaderText('Aspirants Progress');
        } else if (location.pathname === '/admin/aspirants-progress/stages') {
            setHeaderText('Aspirants Progress');
        } else if (location.pathname === '/admin/aspirants-progress/aspirant-certificate') {
            setHeaderText('Aspirants Progress');
        } else if (location.pathname === '/admin/aspirants-progress/material-detail') {
            setHeaderText('Aspirants Progress');
        } else if (location.pathname === '/admin/aspirants-progress/interview-detail') {
            setHeaderText('Aspirants Progress');
        } else if (location.pathname === '/admin/new-registration') {
            setHeaderText('New Registration');
        } else if (location.pathname === '/admin/new-registration/aspirants-view') {
            setHeaderText('New Registration');
        } else if (location.pathname === '/admin/events-info') {
            setHeaderText('Events & Info');
        } else if (location.pathname === '/admin/master-data') {
            setHeaderText('Master Data');
        } else if (location.pathname === '/admin/master-data/view') {
            setHeaderText('Master Data');
        } else if (location.pathname === '/admin/roles') {
            setHeaderText('Roles');
        } else if (location.pathname === '/admin/sub-admin') {
            setHeaderText('Sub Admin');
        } else {
            setHeaderText('Dashboard');
        }
    }, [location]); // Run the effect when the location changes

    return (  
        <Wrapper>  
            <div className="layout">  
                <aside className='sideBar'>  
                    <div className="logo">AspiraSys</div>  
                    <div className="list-cont">  
                        <NavLink to="/" className="list-item" activeClassName="active" onClick={() => setHeaderText('Dashboard')}>  
                            <div className="icon"><MdDashboard /></div>  
                            <span>Dashboard</span>  
                        </NavLink>  
                        <NavLink to="/admin/my-learnings" className="list-item" activeClassName="active" onClick={() => setHeaderText('My Learnings')}>  
                            <div className="icon"><MdNotes /></div>  
                             <span>My Learnings</span>  
                        </NavLink>  
                        <NavLink to="/admin/aspirants-progress" className="list-item" activeClassName="active" onClick={() => setHeaderText('Aspirants Progress')}>  
                            <div className="icon"><FaBarsProgress /></div>  
                            <span>Aspirants Progress</span>  
                        </NavLink>  
                        <NavLink to="/admin/new-registration" className="list-item" activeClassName="active" onClick={() => setHeaderText('New Registration')}>  
                            <div className="icon"><FaUserEdit /></div>  
                            <span>New Registration</span>  
                        </NavLink>  
                        <NavLink to="/admin/events-info" className="list-item" activeClassName="active" onClick={() => setHeaderText('Events & Info')}>  
                            <div className="icon"><MdEvent /></div>  
                            <span>Events & Info</span>  
                        </NavLink>  
                        <NavLink to="/admin/master-data" className="list-item" activeClassName="active" onClick={() => setHeaderText('Master Data')}>  
                            <div className="icon"><SiDatabricks /></div>  
                            <span>Master Data</span>  
                        </NavLink>  
                        <NavLink to="/admin/roles" className="list-item" activeClassName="active" onClick={() => setHeaderText('Roles')}>  
                            <div className="icon"><VscGraph /></div>  
                            <span>Roles</span>  
                        </NavLink>  
                        <NavLink to="/admin/sub-admin" className="list-item" activeClassName="active" onClick={() => setHeaderText('Sub Admin')}>  
                            <div className="icon"><RiAdminFill /></div>  
                            <span>Sub Admin</span>  
                        </NavLink>  
                    </div>  
                </aside>  

                <div className="main">  
                    <header className='navbar'>  
                        <div className="list-name">  
                            <span>{headerText}</span>  
                        </div>  
                        <div className="user">  
                            <span>Ehti</span>  
                        </div>  
                    </header>  
                    <Main />  
                    <footer>  
                        <p> © 2023 AspiraSys. All Rights Reserved.</p>  
                    </footer>  
                </div>  
            </div>  
        </Wrapper>  
    );  
};  

export default DashboardLayout;