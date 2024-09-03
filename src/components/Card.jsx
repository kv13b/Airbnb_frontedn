//import star from "../images/star-solid.svg";
import star from "../../public/images/star-solid.svg";
import PropTypes from "prop-types";
export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      {props.item.openSpots === 0 && (
        <div className="card-badge">SOLD ITEM</div>
      )}
      <img
        src={`../images/${props.item.coverImg}`}
        className="card--image"
        alt="Main card image."
      />
      <div className="card--stats">
        <img src={star} className="card--star" alt="star image." />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.country}</span>
      </div>
      <h2 className="card--title">{props.item.title}</h2>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  openspot: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviewCount: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
