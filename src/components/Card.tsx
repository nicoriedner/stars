import React from 'react';
import PropTypes from 'prop-types';
import Cards from "./Cards";
import MenuPanel from "./MenuPanel";
import IProduct from "../models/interface";

Card.propTypes = {
    value: PropTypes.object.isRequired,
    onLike: PropTypes.func.isRequired,

};

interface ICard {
    value: IProduct,
    onLike: (id:number) => void,
}

function Card({value, onLike}:ICard ) {
    console.log("Card value = %o", value);
    const likeComp = value.likes > 0 ? <p className="card-text">{value.likes}</p>:null;
    return (
        <>
            <div className="card">

                <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.subtitle}</p>
                    <p className="card-text">{value.details}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <button className="btn btn-sm btn-primary"
                            onClick={() => onLike(value.id)}>Like

                    </button>

                    {likeComp}
                </div>
            </div>
        </>
    );
}

export default Card;