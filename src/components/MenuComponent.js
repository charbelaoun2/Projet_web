import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';

    function RenderMenuItem ({donation}) {
        return (
            <div className="menu-main">
                <Card>
                    <CardImg height="320px" src={donation.image} alt={donation.name} />
                    <CardImgOverlay>
                        <CardTitle>{donation.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    }

    const Menu = (props) => {

        const menu = props.donations.map((donation) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={donation.id}>
                    <RenderMenuItem donation={donation} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;