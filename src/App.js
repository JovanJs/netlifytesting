import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
  return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="JS Engineer" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="JS Engineer">
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
          <Main/>
        </Content>

        <Footer className="footer-color" size="mini">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="/">Help</a>
            <a href="/">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>


    </Layout>

</div>
  );
}
}

export default App;
