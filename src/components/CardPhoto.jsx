import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardPhoto = (props) => {


  return (
<div className='container-fluid'>
    <div className='aa '>
    {props.value.map(e=>(
      <Card style={{ width: '18rem' }} className='m-5'>
      <Card.Img variant="top" src={e.src.landscape } />
      <Card.Body>
        <Card.Title>{e.photographer}</Card.Title>
        <Card.Text>
          {e.alt}
        </Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
        
              <Button variant="success" target='_blank' href={e.url}>{e.id}</Button>
      
              <svg xmlns="http://www.w3.org/2000/svg" width="16"    height="16"  class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
        
      </div>
        </Card.Body>
    </Card>


    ))


    }
    </div>
    </div>
  )
}

export default CardPhoto