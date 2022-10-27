import React from 'react';
import { BsSignpostFill } from 'react-icons/bs';
import { MdApproval } from 'react-icons/md';
import { BiLogInCircle } from 'react-icons/bi';
import { IoPersonAdd, IoNotificationsSharp } from 'react-icons/io5';

import Navbar from '../components/Navbar';

function Home() {
    const home1 = require('../images/home1.png');
  return (
    <div className='homepage'>
        <Navbar about={"About"}/>
        <header className='header'>
            <div className='header__left-view'>
                <h1 className='header__left-view__title'>Estate Vehicle Access Control System</h1>
                <p className='header__left-view__text'>
                    This is an appliction that is aimed to curb cases of vehicle theft within major gated communities.
                    This is an appliction that is aimed to curb cases of vehicle theft within major gated communities.
                </p>
                <button>
                    Get Started
                </button>

            </div>
            <div className='header__right-view'>
                <img src={home1} alt='home' className='header__right-view__image' width='300px'/>
            </div> 

        </header>
        <section className="section section__about">

            <h1 className="section__about__title">How it works</h1>

            <div className="section__about__content">

                <div className="section__about__content__card">
                    <div className="section__about__content__card__icon">
                        <BsSignpostFill className='i'/>
                    </div>
                    <div className="section__about__content__card__text">
                        <h3>Register</h3>
                        <p>
                            Register as a Resident and create an account
                        </p>
                    </div>
                </div>

                <div className="section__about__content__card">
                    <div className="section__about__content__card__icon">
                        <MdApproval className='i' />
                    </div>
                    <div className="section__about__content__card__text">
                        <h3>Approval</h3>
                        <p>
                            Wait for approval from Admin. This may take a while
                        </p>
                    </div>
                </div>

                <div className="section__about__content__card">
                    <div className="section__about__content__card__icon">
                        <BiLogInCircle className='i' />
                    </div>
                    <div className="section__about__content__card__text">
                        <h3>Login</h3>
                        <p>
                            Login to your account and start using the application
                        </p>
                    </div>
                </div>

                <div className="section__about__content__card">
                    <div className="section__about__content__card__icon">
                        <IoPersonAdd className='i' />
                    </div>
                    <div className="section__about__content__card__text">
                        <h3>Members</h3>
                        <p>
                            Add members to your account
                        </p>
                    </div>
                </div>

                <div className="section__about__content__card">
                    <div className="section__about__content__card__icon">
                        <IoNotificationsSharp className='i' />
                    </div>
                    <div className="section__about__content__card__text">
                        <h3>Register Fingerprint</h3>
                        <p>
                            
                        </p>
                    </div>
                </div>

                <div className="section__about__content__card">
                    <div className="section__about__content__card__icon">
                        <IoNotificationsSharp className='i' />
                    </div>
                    <div className="section__about__content__card__text">
                        <h3>Notification</h3>
                        <p>
                            Get notified when a vehicle is accessed at the Gate
                        </p>
                    </div>
                </div>

            </div>

        </section>

    </div>
  )
}

export default Home