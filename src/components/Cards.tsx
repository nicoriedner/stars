import React from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";
import IProduct from "../models/interface";

interface ICards {
    items:IProduct[],
    onLike: (id:number) => void,

}

function Cards({items, onLike}:ICards) {
    return (
        <div>
            {items.map((value:IProduct) => <Card key={value.id} value={value} onLike={onLike} />)}
        </div>
    );
}

Cards.propTypes = {
  items: PropTypes.array.isRequired,
    onLike: PropTypes.func.isRequired,
};

export default Cards;