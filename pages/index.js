import React from 'react';
import Head from 'next/head'
// import logo from './logo.svg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Member from '../components/Member.js'
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import 'react-markdown'


// const ReactMarkdown = require('react-markdown')

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      heigh: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  getFirst = () =>{
    return(
      // <link type="text/html" href="./final_report/Writeup/week1_videos.html" />
      <embed type="text/html" src="./final_report/Writeup/week1_videos.html" width ={this.state.width/2}/>

   );
  }
  render(){
    return (
        <div className="App">
          <Head>
          <link rel="shortcut icon" href="/espcade_logo.png" />
          </Head>
          <header className="App-header">

            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Image
            src = {"espcade_logo.png"}
            // className="App-logo"
            />
            {/* <h1>ESPCade</h1> */}
            <p><i>Even when we are apart, we can have fun together.</i></p>
            <p>
              This is our final project for the class <a target="_blank" href="http://student.mit.edu/catalog/search.cgi?search=6.08"><i>6.08: Interconnected Embedded Systems</i></a>, Spring 2020 at MIT.
            </p>
            <p>

            </p>
            <h2 className="section">Description</h2>
            <Col lg={8}>
              We may all be stuck at home, but that doesn't mean we can't have some fun with friends on our arduino boards!!
  With our project, you can play your favourite classics with your new friends from 6.08 🥰, and compete to be at the top of the leaderboard!
  Who needs animal crossing when you've got pong, hangman and pictionary all in one place anyways?? (Surprise memes included 😉🤯)
            </Col>
            <h2 className="section">Demostration:</h2>
            <iframe width="420" height="315"
            src="https://www.youtube.com/embed/FLWdBho8LZU">
            </iframe>
            <h2 className="section">Full report</h2>
            <p>
            You can find our full report <Button variant="info" target="_blank" href="/final_report/Writeup/final_report.html"> here</Button>
            </p>
            <h2 className="section">Weekly videos</h2>
            <p>
              Each week we had to present videos that showed what we had done in that week. <br/>
              You can see them here:
            </p>
            {/* <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle> */}
            <Row>
              <Button variant="outline-success" className="separated" target="_blank" href = "/final_report/Writeup/week1_videos.html">Week 1</Button>
              <Button variant="outline-success" className="separated" target="_blank" href = "/final_report/Writeup/week2_videos.html">Week 2</Button>
              <Button variant="outline-success" className="separated" target="_blank" href = "/final_report/Writeup/week3_videos.html">Week 3</Button>
              <Button variant="outline-success" target="_blank" href = "/final_report/Writeup/week4_videos.html">Week 4</Button>
            </Row>

            <br/>

            <h2 className="section"> <i>Our team:</i></h2>
            <Row className="image_container">
              <Member
              img_source = "members/raul.png"
              name = "Raul Alcantara"
              info = "MIT raising junior - Class of 2022"
              />
              <Member
              img_source = "members/shinjini.png"
              name = "Shinjini Ghosh"
              info = "MIT raising junior - Class of 2022"
              />
              <Member
              img_source = "members/vik.png"
              name = "Viktoriya Tabunshchyk"
              info = "MIT raising junior - Class of 2022"
              />
              <Member
              img_source = "members/pawan.png"
              name = "Pawan Goyal"
              info = "MIT raising junior - Class of 2022"
              />            
              </Row>
            {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
          </header>
        </div>
      );
  }
}
export default Home