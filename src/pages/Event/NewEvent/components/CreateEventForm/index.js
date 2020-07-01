import React, { Component } from 'react';
import EventForm from './components/EventForm';
import AddressForm from './components/AddressForm';
import OrganizationForm from './components/OrganizationForm';
import eventService from './../../../../../services/eventService';
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

  saveEvent = async (OrganizationFormData) => {
    this.setState({ organization: OrganizationFormData });

    const { event, address, organization } = this.state;

    const value = event.eventIsPaid ? 0 : event.eventValue;

    const data = {
      name: event.name,
      category: event.category,
      type: event.type,
      desc: event.desc,
      value,
      seats: 250,
      imageUrl: 'https://www.smh.com.au/events/american-express-open-air-cinemas.jpg',
      initDate: address.initDate,
      finishDate: address.finishDate,
      organization: {
        socialReason: organization.organizationSocialName,
        fantasyName: organization.organizationName,
        CNPJ: organization.cnpj,
        actuationArea: organization.organizationSocialName,
        address: {
          postalCode: "04538133",
          country: "Brasil",
          state: "SP",
          city: "São Paulo",
          neighborhood: "Jardim Paulista",
          street: "Avenida Luciano Costa",
          number: "7955",
          complement: "12° Andar"
        }
      },
      address: {
        postalCode: address.postalCode,
        country: "Brasil",
        state: address.addressState,
        city: address.addressCity,
        neighborhood: address.addressNeighborhood,
        street: address.addressStreet,
        number: address.addressNumber,
        complement: address.addressComplement
      }
    }
    const response = await eventService.createEvent(data);
  }

  render() {
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
