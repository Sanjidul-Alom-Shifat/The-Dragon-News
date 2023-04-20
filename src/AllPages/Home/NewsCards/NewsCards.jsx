import React from 'react';
import { Card, Image } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar  } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCards = ({ news }) => {

    const { _id, title, details, image_url, author, rating, total_view } = news;

    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='ps-2 flex-grow-1 my-auto'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small> {moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                    </div>
                    <div className='gap-2'>
                        <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}...  <Link to={`/news/${_id}`} className='text-danger text-decoration-none fw-bold'>Read More</Link></>   
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex ">
                    <div className='flex-grow-1 align-items-center'>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                        <span> {rating?.number}</span>
                    </div>
                    <div>
                        <FaEye></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCards;