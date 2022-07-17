import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails
  const eventImageClass = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} className="event-image" alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
