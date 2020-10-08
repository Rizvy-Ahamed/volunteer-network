import React, { useEffect, useState } from 'react';
import { Card, NavLink } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Header from './Header/Header';

const Home = () => {
    const[myalldata, setMyalldata] = useState([])
    useEffect(() => {
   fetch('http://localhost:5000/volunteers')
   .then(response => response.json())
   .then(data => setMyalldata(data))
    }, [])

    return (
        <div >
                <Header>
                </Header>
                <div className="d-flex flex-wrap">   
                {
                    myalldata.map(fd => <Card className="col-md-2 m-3" style={{ width: '18rem' }}>
                        <Link to={`/selection/${fd._id}`}>
                    <Card.Img variant="top" src={fd.img} />
                    <Card.Body>
                      <Card.Title>{fd.name}</Card.Title>
                      </Card.Body> 
                      </Link>
                  </Card>)
                }
                </div>
              

        </div>
    );
};

export default Home;