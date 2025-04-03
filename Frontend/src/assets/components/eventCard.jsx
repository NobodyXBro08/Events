import "../assets/css/eventcard.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Fecha:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p><strong>Cupo:</strong> {event.attendees.length}/{event.maxAttendees}</p>
      <button disabled={event.attendees.length >= event.maxAttendees}>
        Reservar
      </button>
    </div>
  );
};

export default EventCard;
