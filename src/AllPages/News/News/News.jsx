import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {

    const news = useLoaderData();
    console.log(news)

    const { _id, title, details, image_url, category_id } = news;

    return (
        <div>
            <h5>Dragon News Home</h5>
            <div className='mt-4'>
                <Card>
                    <Card.Img className='p-3' variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/category/${category_id}`}>
                            <Button variant="danger"><FaArrowLeft></FaArrowLeft>  All News in this category</Button></Link>
                    </Card.Body>
                </Card>
            </div>
            <div className="mt-5">
                <EditorsInsights className='mt-4'></EditorsInsights>
            </div>
        </div>
    );
};

export default News;