import React from 'react'
import { Segment, Item, Button, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const EventDetailHeader = ({event, isHost, isGoing, goingToEvent}) => {
    let eventDate;
    if (event.date) {
        eventDate = event.date.toDate()
    }
    return (
        <Segment.Group>
            <Segment basic attached="top" style={{ padding: '0' }}>
            <Image src={`/assets/categoryImages/${event.category}.jpg`} fluid  style={eventImageStyle}/>
    
            <Segment basic style={eventImageTextStyle}>
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Header
                                size="huge"
                                content={event.title}
                                style={{ color: 'white' }}
                            />
                            <p>{format(eventDate, 'dddd Do MMMM')}</p>
                            <p>
                                Hosted by <strong>{event.hostedBy}</strong>
                            </p>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            </Segment>
    
            <Segment attached="bottom">
                {!isHost && (
                <div>
                    {isGoing ? 
                        <Button>Cancel My Place</Button> : 
                        <Button onClick={() => goingToEvent(event)} color="teal">JOIN THIS EVENT</Button>
                    }
                </div>
                )}
                
                {isHost && 
                    <Button color="orange" as={Link} to={`/manage/${event.id}`}>
                        Manage Event
                    </Button>
                }
            </Segment>
        </Segment.Group>
    )
}

export default EventDetailHeader
