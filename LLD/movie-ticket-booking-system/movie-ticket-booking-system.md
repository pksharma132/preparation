design the backend for a movie booking platform (like BookMyShow).
Users should be able to browse movies, select shows, view available seats, lock seats temporarily, and complete booking.

Core Entities
1. User {id, name, email, ...}
2. Movies {name, title, duration}
3. Seat {id, position, status: "booked" | "locked" | "available", price}
4. Venue {id, location, name, seats}
5. Show {movie, venue, timings, seats}
6. Ticket {id, show, price, seats, user}

Services
1. UserService
2. ShowService
3. TicketService
4. VenueService
5. BookingService