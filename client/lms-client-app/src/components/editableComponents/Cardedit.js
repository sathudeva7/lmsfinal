import React, { Component } from 'react'
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container, CardDeck,Jumbotron} from 'reactstrap';
import a11 from '../../assets/a11.png'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import d from '../../assets/d.jpg'
import e from '../../assets/e.jpg'




export class Cardedit extends Component {
  static propTypes = {
    auth:PropTypes.object.isRequired
}

  
  render() {
    const {isAuthenticated,user} = this.props.auth
    const authnot = (
        <>
         <CardDeck style={{padding:'10px'}} >
        <Card style={{width:"250px"}} > 
        <CardImg width="50px"  src={a11} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Can Submit Assignments</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        
        </CardBody>
      </Card>

      <Card style={{width:"250px"}} > 
        <CardImg width="50px"  src={d} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Can Teach</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        
        </CardBody>
      </Card>
      <Card style={{width:"250px"}} > 
        <CardImg width="50px"  src={e} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Can Study</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        
        </CardBody>
      </Card>
      </CardDeck>
        </>
    )
    return (
      
      <div>
        {isAuthenticated ? "" : authnot}

       
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth:state.auth
})

export default connect(mapStateToProps,null)(Cardedit)
