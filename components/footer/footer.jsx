import React from "react"
import "./style.css"

const footer = () => {
    return (
        <footer>
            <div className="top">
                <div className="top-line"></div>
                <div className="top-content">
                    <div className="box box1">
                        <div>
                            <span className="box1-span-title">IEEE SB NITC</span>
                        </div>
                        <div className="box1-content">
                            <div>Thank you for visiting our website!</div>
                            <div>
                                "Prepare to embark on a captivating journey through the corridors of
                                innovation."
                            </div>
                            <div>We warmly appreciate your visit and support.</div>
                        </div>
                        <div className="box1-end">
                            <a href="https://facebook.com" target="_blank">
                                <i
                                    className="fa-brands fa-square-facebook fa-2x"
                                    style={{ color: "#4267B2" }}
                                />
                            </a>
                            <a href="https://instagram.com" target="_blank">
                                <i className="fa-brands fa-instagram fa-2x instagram-icon" />
                            </a>
                            <a href="https://linkedin.com" target="_blank">
                                <i
                                    className="fa-brands fa-linkedin fa-2x"
                                    style={{ color: "#0077B5" }}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box25-title">QUICK LINKS</div>
                        <ul className="box25-content">
                            <li><a href="https://www.ieee.org/" target="_blank" rel="noopener">IEEE.ORG</a></li>
                            <li><a href="https://ieeextreme.org/" target="_blank" rel="noopener">IEEE XTREME</a></li>
                            <li><a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noopener">IEEE Xplore</a></li>
                            <li><a href="https://www.ieee.org/about/index.html" target="_blank" rel="noopener">IEEE</a></li>
                        </ul>
                    </div>
                    <div className="box">
                        <div className="box25-title">MEMBERSHIPS</div>
                        <ul className="box25-content">
                            <li><a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener">Join IEEE</a></li>
                            <li><a href="https://www.ieee.org/membership-catalog/index.html?srchProdType=Societies&searchType=prodType" target="_blank" rel="noopener">Join a Society</a></li>
                            <li><a href="https://www.ieee.org/membership/renew.html?utm_source=button_text&utm_medium=lp-membership&utm_campaign=renew" target="_blank" rel="noopener">Renew Membership</a></li>
                            <li><a href="https://www.ieee.org/membership/benefits/index.html" target="_blank" rel="noopener">Info</a></li>
                        </ul>
                    </div>
                    <div className="box">
                        <div className="box25-title">SOCIETIES</div>
                        <ul className="box25-content box4-content">
                            <li>CASS</li>
                            <li>ComSoc</li>
                            <li>CS</li>
                            <li>CSS</li>
                            <li>IAS</li>
                            <li>EDS</li>
                            <li>EdSoc</li>
                            <li>RAS</li>
                            <li>SPS</li>
                        </ul>
                    </div>
                    <div className="box box5">
                        <div className="box25-title">AFFINITY AND SPECIAL INTEREST GROUP</div>
                        <ul className="box25-content">
                            <li>WIE</li>
                            <li>SIGHT</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-line"></div>
                <div className="bottom-content">© Copyright 2025 IEEE SB NITC</div>
            </div>
        </footer>
    );
}

export default footer;