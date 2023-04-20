import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCards from '../NewsCards/NewsCards';

const Category = () => {

    const { id } = useParams();
    // console.log(id);
    const CategoryNews = useLoaderData();
    // console.log(CategoryNews)

    return (
        <div>
            <h5>Dragon News Home</h5>
            <div className='mt-4'>
                {
                    CategoryNews.map(news =>
                        <NewsCards
                            key={news._id}
                            news={news}
                        ></NewsCards>    
                    )
                }
            </div>
        </div>
    );
};

export default Category;