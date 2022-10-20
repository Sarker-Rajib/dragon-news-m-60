import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaShareAlt, FaRegBookmark, FaRegStar, FaRegEye } from "react-icons/fa";

const NewsSummeryCard = ({ news }) => {
   // console.log(news);
   const { _id, title, rating, details, author, total_view, image_url } = news;
   const { name, img, published_date } = author;
   return (
      <Card className="mb-3">
         <Card.Header className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between">
               <Image roundedCircle src={img} style={{ height: '60px' }} />
               <div className="ps-2">
                  <h5 className="mb-1">{name}</h5>
                  <p className="m-0">{published_date}</p>
               </div>
            </div>
            <div>
               <FaShareAlt className="me-3"></FaShareAlt>
               <FaRegBookmark></FaRegBookmark>
            </div>
         </Card.Header>
         <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
               {details.length > 200 ?
                  <span>{details.slice(0, 180) + '...'} <Link to={`/news/${_id}`} >More</Link> </span>
                  :
                  <span>{details}</span>
               }
            </Card.Text>
         </Card.Body>
         <Card.Footer className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
               <FaRegStar className="text-warning me-2"></FaRegStar>
               <span>{rating.number}</span>
               <span className="ms-2">{rating.badge}</span>
            </div>
            <div>
               <FaRegEye></FaRegEye>
               <span className='ms-2'>total view {total_view}</span>
            </div>
         </Card.Footer>
      </Card>
   );
};

export default NewsSummeryCard;