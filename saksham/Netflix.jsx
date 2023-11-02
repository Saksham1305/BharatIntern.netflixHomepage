import React from 'react'
import { useState } from 'react';

const Netflix = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    return (
        <div>
            <div className=' first-section' >
                <div className="first-section-container">

                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" className='w-40 h-24 object-contain' />
                    </div>
                    <div className=' select-icon'>


                        <select className='select-items'>
                            <option value="">English</option>
                            <option value="">Hindi</option>
                        </select>
                        <button className='btn btn-danger'>Sign In</button>
                    </div>
                </div>

                <div className='center-info text-white '>
                    <h1 className=' text-center fw-bold display-4' style={{ alignContent: 'center' }}>
                        The biggest Indian hits. Ready to watch here from ₹ 149.
                    </h1>
                    <p className='text-center '>
                        Join today. Cancel anytime.
                    </p>
                    <h6 className='text-center '>
                        Ready to watch? Enter your email to create or restart your membership.
                    </h6>
                    <div className="input-box">

                        <input type="text" className='shadow mx-2' placeholder='Email address' />
                        <button>
                            get started <i class="fa-solid fa-angle-right fa-lg"></i>
                        </button>
                    </div>
                </div>

            </div>


            <div className="second-section">
                <div className="second-container">

                    <div className="row">
                        <div className="col-md-6  mycol">
                            <h1>
                                Enjoy on your TV
                            </h1>
                            <h4>
                                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                            </h4>
                        </div>
                        <div className="col-md-6">
                            <video className='video-container' controls autoPlay muted loop width="640" height="360">
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                            </video>
                            <img className="image1" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="img" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="second-section">
                <div className="third-container ">
                    <div className="row mx-auto">
                        <div className="col-md-6">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                            <div className="card shadow text-white" style={{ justifyContent: 'space-evenly' }}>
                                <div className="card-body d-flex" style={{ justifyContent: 'space-between' }}>

                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" style={{ width: 50 }} />
                                    <div className="content" >

                                        <h5>
                                            stranger things
                                            <p >
                                                downloading...
                                            </p>

                                        </h5>
                                    </div>
                                    <div className="icon">
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" style={{ width: 40, marginTop: 10 }} alt="" />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-6 mx-auto my-5">
                            <h1 className='display-5 fw-bold mt-5 '>
                                Download your shows to watch offline

                            </h1>
                            <p className=' mt-4 ' style={{ fontSize: 19 }}>
                                Save your favourites easily and always have something to watch.


                            </p>

                        </div>
                    </div>


                </div>
            </div>
            <div className="second-section">
                <div className="fourth-container">
                    <div className="row mx-auto">
                        <div className="col-md-6 mx-auto mt-5 my-5">
                            <h1 className='display-5 fw-bold mt-5' >
                                Watch everywhere
                            </h1>
                            <p className=' mt-4 ' style={{ fontSize: 20 }}>
                                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.

                            </p>

                        </div>
                        <div className="col-md-6">
                            <video controls autoPlay muted loop width="640" height="360" className='video2' >
                                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v' type='video/mp4' />
                            </video>
                            <img className='image2' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />

                        </div>
                    </div>


                </div>
            </div>
            <div className="second-section">
                <div className="fifth-container">
                    <div className="row ">
                        <div className="col-md-6">
                            <img src="https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />
                        </div>
                        <div className="col-md-6 my-5">
                            <h1 className='display-5 fw-bold mt-5' >
                                Create profiles for kids
                            </h1>
                            <p className=' mt-4 ' style={{ fontSize: 20 }}>
                                Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            <div className="second-section">
                <div className="sixth-container">
                    <h1 className="text-center display-6 fw-bold">
                        Frequently Asked Questions
                    </h1>
                    <div className="dropdown-container mt-5">

                        <button onClick={toggleDropdown} className="dropdown-button w-100 shadow" >
                            <h2>
                                what is netflix ?
                                <span style={{ marginLeft: 520 }}>
                                    <i className="fa-solid fa-plus"></i>
                                </span>
                            </h2>

                        </button>
                        {isDropdownVisible && (
                            <div className="dropdown-content" >
                                <p>
                                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                </p>
                                <p>
                                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="dropdown-container mt-2">

                        <button onClick={toggleDropdown} className="dropdown-button w-100 shadow" >
                            <h2>
                                how much netflix cost ?
                                <span style={{ marginLeft: 520 }}>
                                    <i className="fa-solid fa-plus"></i>
                                </span>
                            </h2>

                        </button>
                        {isDropdownVisible && (
                            <div className="dropdown-content" >
                                <p>
                                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                                </p>

                            </div>
                        )}
                    </div>


                </div>
            </div>

            <div className="second-section">
                <div className="seventh-container">
                    <h6 className='text-center '>
                        Ready to watch? Enter your email to create or restart your membership.
                    </h6>
                    <div className="input-box">

                        <input type="text" className='shadow mx-2' placeholder='Email address' />
                        <button>
                            get started <i class="fa-solid fa-angle-right fa-lg"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer bg-dark text-white">
                <div className=" sub-footer">

                    <h2>
                        Questions? Call 000-800-919-1694
                    </h2>
                    <div className="row mt-5" >
                        <div className="col-md-3" >
                            <li> FAQ</li>
                            <li>Investor relations</li>
                            <li>privacy</li>
                            <li>speed test</li>
                            </div>
                        <div className="col-md-3">
                            <li> help center</li>
                            <li>jobs </li>
                            <li>cookie preferences</li>
                            <li>legal notices</li>
                        </div>
                        <div className="col-md-3">
                            <li>account</li>
                            <li>ways to watch</li>
                            <li> CI</li>
                            <li> Only on netflix</li>
                            

                        </div>
                        <div className="col-md-3">
                            <li> media center</li>
                            <li>terms of use</li>
                            <li> contact us</li>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Netflix