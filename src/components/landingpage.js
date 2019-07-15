import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'; 


class Landing extends Component {
    render() {
        return (
            <div style={{width:'100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                    src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HC3tMfuv2Zor_k3Tio4xemEt9dj69csIDzpAsWstjIBfWxZROA"
                    alt="avatar"
                    className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Full Stack Javascript Developer</h1>
                        <hr/>

                        <p>HTML/CSS: Bootstrap | Javascript | React | NodeJS | Mongodb</p>
                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/jovanolli/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>

                              {/* LinkedIn */}
                              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>

                              {/* LinkedIn */}
                              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-free-code-camp"  aria-hidden="true" />
                            </a>

                              {/* LinkedIn */}
                              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-youtube-square"  aria-hidden="true" />
                            </a>

                        </div>

                    </div>
                    </Cell>
            </Grid>
       </div>
        )
    }
}

export default Landing;