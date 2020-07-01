import React from 'react';
import './styles.css';
import eventServices from '../../../../../services/eventService';
import Loading from '../../../../../components/Loading';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { event: {}, eventId: [], isLoading: true };
  }

  async componentDidMount() {
    const { eventId } = this.state;
    const response = await eventServices.getEventById(eventId);
    this.setState({ event: response, isLoading: false });
    this.setState({
      event: response,
      isLoading: false,
    });
  }

  render() {
    const { isLoading, event } = this.state;
    return isLoading ? (
      <div className="container-eventLoading">
        <Loading />
      </div>
    ) : (
      <>
        <div className="container-event-detail">
          <h1>{event.name}</h1>
        </div>
      </>
    );
  }
}

export default Event;
