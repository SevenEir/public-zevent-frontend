import React from 'react';
import services from '../../services/eventService';
import EventItem from '../EventItem';
import Loading from '../Loading';
import './styles.css';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [], isLoading: true };
  }

  async componentDidMount() {
    const response = await services.getEvents();
    this.setState({ events: response, isLoading: false });
  }

  renderEvents() {
    const { events } = this.state;
    return events.map((event) => {
      return <EventItem key={event.id} event={event} />;
    });
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <div className="container-eventLoading">
        <Loading />
      </div>
    ) : (
      <div className="container-eventList">{this.renderEvents()}</div>
    );
  }
}

export default EventList;
