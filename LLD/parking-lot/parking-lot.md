
Design a parking lot system that supports:
1. Multiple levels/floors
2. Multiple types of parking spots (for cars, bikes, trucks)
3. Parking and un-parking of vehicles
4. Finding the nearest available spot
5. Real-time availability tracking

Functional Requirements
1. A vehicle can enter and park in the nearest available spot.
2. A vehicle can exit and free the spot
3. Support multiple vehicle types: Car, Bike, Truck
4. Support different spot sizes: Small, Medium, Large
5. Ability to query available spots by type or floor

Non-functional Requirements
1. Thread-safety (in real-world, but can skip for now)
2. Scalable design
3. Clean object-oriented structure


Core entities:
1. Vehicle - type of the vehicle (bike, car, truck);
2. ParkingSpot - the space to park (small, medium, large)
3. ParkingFloor - Will have multiple parking spots 
4. ParkingLot - Will have multiple floors
5. Ticket - Issued when a vehicle enters the lot

UML:

Vehicle (abstract)
 ├── Car
 ├── Bike
 └── Truck

ParkingSpot (abstract)
 ├── SmallSpot
 ├── MediumSpot
 └── LargeSpot

ParkingFloor
 ├── floorNumber
 ├── List<ParkingSpot>
 └── getAvailableSpots()

ParkingLot
 ├── List<ParkingFloor>
 ├── parkVehicle(vehicle)
 └── unparkVehicle(ticket)

Ticket
 ├── ticketId
 ├── vehicle
 ├── spot
 └── timeIn/out


