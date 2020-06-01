import React from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
class Member extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Container className="self_image">
                <Image
                src= {this.props.img_source}
                thumbnail = {true}
                />
                <p>{this.props.name}</p>
                <h4>{this.props.info}</h4>
            </Container>
        );
    }
}
export default Member;