import React from 'react';
import services from '../../services/eventService';
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

  render() {
    return this.state.isLoading ? (
      <h1>calmapoha</h1>
    ) : (
      <div>{this.state.events[0].name}</div>
    );
  }
}

export default EventList;
