import React from 'react';


const CategoryItem = ({ item }) => {

    return (

        <article className="col-lg-4 ms-2  shadow-lg p-3 mb-5" style={{
             height: '400px',backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover', opacity: '0.7', backgroundPosition: '0px -80px',
        }}>
            <p className="categTitle lh-lg ">{item.title}</p>
            
        </article>
        );


}

export default CategoryItem;