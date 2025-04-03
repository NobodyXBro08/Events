import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import "../assets/css/home.css";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error al cargar eventos:", error));
  }, []);

  return (
    <div className="home">
      <h2>Eventos Disponibles</h2>
      <div className="events-container">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;
