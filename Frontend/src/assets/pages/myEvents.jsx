import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../assets/css/myEvents.css";

const MyEvents = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/events/user/${user.id}`);
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error al obtener eventos reservados:", error);
      }
    };
    fetchMyEvents();
  }, [user]);

  return (
    <div className="my-events-container">
      <h2>Mis Eventos Reservados</h2>
      <ul>
        {events.length > 0 ? (
          events.map((event) => (
            <li key={event._id}>{event.title} - {event.date}</li>
          ))
        ) : (
          <p>No has reservado ningún evento.</p>
        )}
      </ul>
    </div>
  );
};

export default MyEvents;
