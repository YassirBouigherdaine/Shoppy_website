import React, { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem';


const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/categories', { method: "Get" })
            .then((response) => response.json())
            .then(categs => {

                setCategories(categs);
                
            });
    }, [])

    return (

        <div className="container-fluid  ">

            <h1 className="display-6 myTitle mt-5 mb-5">CATEGORIES</h1>
            <div className="underline d-inline d-none d-lg-block"></div>

            <div className="d-lg-flex justify-content-center mt-2 m-5 p-3 ">
            {categories && categories.map((item) => {

                return < CategoryItem
                    key={item.id}
                    item={item}

                ></CategoryItem>;
            })}
            </div>
        </div>

    );

}


export default Categories;