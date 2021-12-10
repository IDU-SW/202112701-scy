import React, {useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import '../Portfolio.css';

const PortfolioMain = styled.main`
    display: block;
    margin: 0 auto;
    max-width: 800px;
    width: 80%;
`;

export const Portfolio = () => {
    const sticky_note = <FontAwesomeIcon icon={faStickyNote} />
    const calendar_alt = <FontAwesomeIcon icon={faCalendarAlt} />
    const fa_cog = <FontAwesomeIcon icon={faCog} />

    return (
        <PortfolioMain>
            <a href="/2018-03-25/create-ap.theme" class="portfolio-item">
                <div>
                    <h1 class="portfolio-title">Create AP theme</h1>
                    <div class="portfolio-line"></div>

                    <div class="portfolio-content"> 
                    <span class="portfolio-icon">
                        {sticky_note} <span class="portfolio-icon-text">[Toy] Create About/Portfolio theme</span>
                    </span>
                    <br/>
                    <span class="portfolio-icon">
                        {calendar_alt} <span class="portfolio-icon-text">March 25, 2018</span>
                    </span>
                    <br/>
                    <span class="portfolio-icon">
                        {fa_cog} <span class="portfolio-icon-text">ruby, jekyll</span>
                    </span>
                    </div>
                </div>
            </a>
        </PortfolioMain>
    );
}
