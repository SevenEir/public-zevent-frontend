import React, { Component } from 'react';
import EventForm from './components/EventForm';
import AddressForm from './components/AddressForm';
import OrganizationForm from './components/OrganizationForm';
import './index.css';

// NÃO USAR DE MODELO

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currStep: 0,
      event: {},
      address: {},
      organization: {}
    };
  }

  handleSteps = (step, formName, formData) => {
    this.setState({
      currStep: step,
      [formName]: formData
    })
  }

  saveEvent = (OrganizationFormData) => {
    this.setState({ organization: OrganizationFormData });

  }

  render() {
    console.log("this", this.state);
    const steps = [
      { title: 'Evento', section: EventForm },
      { title: 'Endereço', section: AddressForm },
      { title: 'Organização', section: OrganizationForm },
    ];

    const { currStep } = this.state;

    return (
      <div className="container-new-event-form">
        <div className="content-tabs">
          {steps.map((item, index) => (
            <div
              className={`tab-item ${index === currStep && "selected"}`}
              key={index}
            >
              <p className="tab-item-title">{item.title}</p>
            </div>
          ))}
        </div>
        {React.createElement(steps[currStep].section, {
          saveEvent: (formData) => this.saveEvent(formData),
          handleSteps: (step, formName, formData) => this.handleSteps(step, formName, formData)
        })}
      </div>
    );
  }
}
