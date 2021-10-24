import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDonation(donation) {

    if (donation != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={donation.image} alt={donation.name} />
                    <CardBody>
                        <CardTitle> {donation.name}</CardTitle>
                        <CardText> {donation.description} </CardText>
                    </CardBody>
                </Card>
            </div>   
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function RenderComments(comments) {
    const comnt = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', 
                { year: 'numeric', month: 'short', day: '2-digit'})
                .format(new Date(Date.parse(comment.date)))}
                </p>
            </li>
        )
    })
    if (comments == null) {
        return <div></div>
    }
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {comnt}
            </ul>

        </div>
    )
}

const DonationDetl = (props) => {
    const donation = props.donation

    console.log(donation);
    
    if (donation == null) {
        return (<div></div>);
    }

    const donationItem = RenderDonation(donation);
    const donationComment = RenderComments(donation.comments);

    return (
        <div class = "container">  
            <div className='row'>
                {donationItem}
                {donationComment}
            </div>
        </div>
    )
}


export default DonationDetl;