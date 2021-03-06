import React from "react";
import StaticRating from "../Stars/StaticRating";
import { calculateAvgRating } from "../../utils";

const CollectionItem = props => {
  return (
    <div className="collection-item">
      <img
        className="collection-item__cover"
        src={props.book.book_img}
        alt={props.book.title}
      />

      <div className="collection-item__details">
        <div className="collection-item__rating">
          <span>Avg. Rating: </span>
          <StaticRating value={calculateAvgRating(props.book.reviews)} />
        </div>
        <h3>{props.book.title}</h3>

        <div className="collection-item__author">
          {props.book.author} &middot; {props.book.publisher}
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
