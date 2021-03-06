import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ donation,onClick }) {
  return (
    <Card>
      <Link to={`/menu/${donation._id}`}>
        <CardImg className="img-donation" src={baseUrl + donation.image} alt={donation.name}
        />
        <CardImgOverlay>
          <CardTitle className="title-donation">{donation.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.donations.donations.map((donation) => {
    return (
      <div className="col-12 col-md-5 m-1" key={donation.id}>
        <RenderMenuItem donation={donation} />
      </div>
    );
  });

  if (props.donations.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.donations.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.donations.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Donations</h3>
            <hr />
          </div>
        </div>
        <div className="row card-donation">{menu}</div>
      </div>
    );
  }
};

export default Menu;
