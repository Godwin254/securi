import React from 'react';
import { useNavigate } from 'react-router-dom';

//icons
import { BsSignpostFill, BsArrowRight } from 'react-icons/bs';
import { MdApproval } from 'react-icons/md';
import { BiLogInCircle } from 'react-icons/bi';
import { IoPersonAdd, IoNotificationsSharp, IoFingerPrintOutline } from 'react-icons/io5';
import {HiDocument, HiFingerPrint} from 'react-icons/hi'
import {SiArduino, SiExpress, SiReact} from 'react-icons/si'
import {AiFillTag} from 'react-icons/ai'
import {FaNode} from 'react-icons/fa'

//images
import carParkedImg from '../../assets/cars-parked.jpg'
import fingerPrintImg from '../../assets/fingerprint_header_sd.jpg'
import rfidImg from '../../assets/rfid-card.png'
import securityImg from '../../assets/security-guard.jpg'
import heroImg from "../../assets/hero.svg";

//layouts
import { WebLayout } from '../../layout/WebLayout';

export function LandingPage() {
    const navigate = useNavigate();
  return (
    <WebLayout>
        <header className='header'>
            <div className='header__left-view'>
                <h1 className='header__left-view__title'>Estate Vehicle Access Control System</h1>
                <p className='header__left-view__text'>
                    <b>Securi</b> is an innovative application that has been designed to automate the control and access of vehicles within an estate.
                </p>

                <div className="header__left-view__controls">
                    <button className='header__left-view__controls__button'>
                        <HiDocument className="header__left-view__controls__button__icon"/>
                        Documentation
                    </button>
                    <button className='header__left-view__controls__button' onClick={ () => navigate('/auth/register')}>
                        Register
                        <BsArrowRight className="header__left-view__controls__button__icon"/>
                    </button>
                </div>

            </div>
            <div className='header__right-view'>
                <img src={heroImg} alt='home' className='header__right-view__image' width='300px'/>
            </div> 

        </header>
        <section className="section section__about">
            <div className="section__about__left-view">

                <h1 className="section__about__left-view__title">
                    About Securi
                </h1>
                
                <p className="section__about__left-view__text">
                    <b>Securi</b> is an innovative application that has been designed to automate the control and access of vehicles within an estate.
                    This application is specifically designed to enhance the security of an estate by providing a reliable and efficient way of 
                    managing access to the estate's vehicles. With Securi, estate owners and residents can easily manage who has access to their vehicles, 
                    monitor vehicle usage, and ensure that only authorized individuals are allowed to use the vehicles. The application uses advanced security 
                    features, such as biometric authentication and real-time tracking, to ensure that only authorized individuals have access to the estate's vehicles.
                </p>
    
                <button className='section__about__left-view__button'>
                    <HiDocument className="header__left-view__button__icon"/>
                    Read more
                </button>

            </div>

            <div className="section__about__right-view">

                <div className="section__about__right-view__container">
                    <img src={carParkedImg} alt="image" className="section__about__right-view__container__img" width="200px"/>
                    <img src={rfidImg} alt="image" className="section__about__right-view__container__img" width="200px"/>
                    <img src={securityImg} alt="image" className="section__about__right-view__container__img" width="200px"/>
                    <img src={fingerPrintImg} alt="image" className="section__about__right-view__container__img" width="200px"/>
                </div>
            </div>

        </section>
        <section className="section section__about1">

            <h1 className="section__about1__title">How it works</h1>

            <div className="section__about1__content">

                <div className="section__about1__content__card">
                    <BsSignpostFill className='section__about1__content__card__icon'/>
                    <div className="section__about1__content__card__text">
                        <h3>Register</h3>
                        <p>
                            Register as a Resident and create an account
                        </p>
                    </div>
                </div>

                <div className="section__about1__content__card">
                    <MdApproval className='section__about1__content__card__icon' />
                    <div className="section__about1__content__card__text">
                        <h3>Approval</h3>
                        <p>
                            Wait for approval from Admin. This may take a while
                        </p>
                    </div>
                </div>

                <div className="section__about1__content__card">
                    <BiLogInCircle className='section__about1__content__card__icon' />
                    <div className="section__about1__content__card__text">
                        <h3>Login</h3>
                        <p>
                            Login to your account and start using the application
                        </p>
                    </div>
                </div>

                <div className="section__about1__content__card">
                    <IoPersonAdd className='section__about1__content__card__icon' />
                    <div className="section__about1__content__card__text">
                        <h3>Members</h3>
                        <p>
                            Add members to your account
                        </p>
                    </div>
                </div>

                <div className="section__about1__content__card">
                    
                    <IoFingerPrintOutline className='section__about1__content__card__icon' />
                    <div className="section__about__content__card__text">
                        <h3>Register Fingerprint</h3>
                        <p>
                            Register your fingerprint to gain access to the Gate
                        </p>
                    </div>
                </div>

                <div className="section__about1__content__card">
                    <IoNotificationsSharp className='section__about1__content__card__icon' />
                   
                    <div className="section__about1__content__card__text">
                        <h3>Notification</h3>
                        <p>
                            Get notified when a vehicle is accessed at the Gate
                        </p>
                    </div>
                </div>

            </div>

        </section>

        <section className="section section__about2">
            <h1 className="section__about2__title">Technologies</h1>

            <div className="section section__about2__container">
                <div className="section__about2__container__icons">
                    <SiArduino className='section__about2__container__icons__icon' />
                    <p className="section__about2__container__icons__text">
                        Arduino
                    </p>
                </div>
                <div className="section__about2__container__icons">
                    <AiFillTag className='section__about2__container__icons__icon' />
                    <p className="section__about2__container__icons__text">
                        RFID 
                    </p>
                </div>
                <div className="section__about2__container__icons">
                    <HiFingerPrint className='section__about2__container__icons__icon' />
                    <p className="section__about2__container__icons__text">
                        Fingerprint
                    </p>
                </div>
                <div className="section__about2__container__icons">
                    <SiReact className='section__about2__container__icons__icon' />
                    <p className="section__about2__container__icons__text">
                        Reactjs
                    </p>
                </div>
                <div className="section__about2__container__icons">
                    <FaNode className='section__about2__container__icons__icon' />
                    <p className="section__about2__container__icons__text">
                        Nodejs
                    </p>
                </div>
                <div className="section__about2__container__icons">
                    <SiExpress className='section__about2__container__icons__icon' />
                    <p className="section__about2__container__icons__text">
                        Express.js
                    </p>
                </div>
            </div>

            <button className="section section__about2__button">
                Contribute on Github
            </button>
        </section>

    </WebLayout>
  )
}