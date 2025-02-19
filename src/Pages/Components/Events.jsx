import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/events");
        // Map API response to extract year from the date
        const eventsData = response.data.map((event) => ({
          id: event._id,
          imageUrl: event.imageUrl,
          year: new Date(event.date).getFullYear(), // Extract year from date
        }));
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center mt-10">Loading events...</div>
    );
  }

  const sortedEvents = [...events].sort((a, b) => b.year - a.year);

  return (
    <div className="">
      <div className="min-h-screen flex flex-col items-center p-6">
        {sortedEvents.length > 0 ? (
          sortedEvents.map((event) => (
            <div key={event.id} className="w-full max-w-2xl mb-8 text-center">
              <h1
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "Abril Fatface, serif" }}
              >
                {event.year}
              </h1>
              {event.imageUrl && (
                <img
                  src={event.imageUrl}
                  alt={`Event in ${event.year}`}
                  className="w-full rounded-lg shadow-lg"
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No events available</p>
        )}
      </div>
    </div>
  );
};

export default Events;