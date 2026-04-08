import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {

    const [readMore, setReadMore] = useState(false);

    return (
        <div className="tour-card">

            <img src={image} alt={name} />

            <h3>{name}</h3>
            <h4>${price}</h4>

            <p id={`tour-item-para-${id}`}>
                {readMore ? info : `${info.substring(0, 200)}...`}

                <button
                    id={`see-more-${id}`}
                    onClick={() => setReadMore(!readMore)}
                >
                    {readMore ? "See Less" : "See More"}
                </button>
            </p>
            <button
                id={`delete-btn-${id}`}
                onClick={() => removeTour(id)}
            >
                Remove
            </button>

        </div>
    );
};

export default Tour;