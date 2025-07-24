enum VehicleType {
    CAR = "CAR",
    BIKE = "BIKE",
    TRUCK = "TRUCK",
}

interface Vehicle {
    vehicleType: VehicleType;
    licensePlateNumber: string;
}

class Car implements Vehicle {
    readonly vehicleType: VehicleType = VehicleType.CAR;
    licensePlateNumber: string;

    constructor(licensePlateNumber: string) {
        this.licensePlateNumber = licensePlateNumber;
    }
}

class Bike implements Vehicle {
    readonly vehicleType: VehicleType = VehicleType.BIKE;
    licensePlateNumber: string;

    constructor(licensePlateNumber: string) {
        this.licensePlateNumber = licensePlateNumber
    }

}

class Truck implements Vehicle {
    readonly vehicleType: VehicleType = VehicleType.TRUCK;
    licensePlateNumber: string;

    constructor(licensePlateNumber: string) {
        this.licensePlateNumber = licensePlateNumber
    }

}

enum SpotSize {
    S = "S",
    M = "M",
    L = "L",
}

interface IParkingSpot {
    spotSize: SpotSize;
    available: boolean;
    vehicle?: Vehicle;
    canFitVehicle(vehicle: Vehicle): boolean;
    park(vehicle: Vehicle): void;
    unpark(vehicle: Vehicle): void;
}

class ParkingSpot implements IParkingSpot {
    readonly spotSize: SpotSize;
    available: boolean = true;
    vehicle?: Vehicle;

    constructor(spotSize: SpotSize) {
        this.spotSize = spotSize;
    }

    canFitVehicle(vehicle: Vehicle): boolean { // some places can allow a large space to the bikes / cars. This can be more flexible
        if (vehicle.vehicleType === VehicleType.BIKE && this.spotSize === "S") return true;
        if (vehicle.vehicleType === VehicleType.CAR && this.spotSize === "M") return true;
        if (vehicle.vehicleType === VehicleType.TRUCK && this.spotSize === "L") return true;

        return false;

    }

    park(vehicle: Vehicle) {
        if (!this.available) throw new Error("Parking space not available / already occupied");

        if (!this.canFitVehicle(vehicle)) throw new Error("this parking space cannot fit the vehicle");

        this.vehicle = vehicle;
        this.available = false;

        return;

    }

    unpark() {
        const vehicle = this.vehicle;
        this.vehicle = undefined;
        this.available = true;

        return vehicle;
    }

}

class Ticket {
    private inTime: number;
    private outTime: number;
    private pricePerHour: number = 10;
    paid: boolean = false;

    constructor(private readonly vehicle: Vehicle, private readonly floor: ParkingFloor, private readonly spot: ParkingSpot){
        this.inTime = 1;
    }
    
    addOutTime(time: number): number {
        this.outTime = time;
        return this.outTime - this.inTime * this.pricePerHour
    }

    pay() {
        this.paid = true;
    }




}

interface IParkingFloor {
    addSpot(spot: ParkingSpot): void;
    getAvailableSpots(): ParkingSpot[];
    floorNumber: number;
    park(vehicle: Vehicle): ParkingSpot | null;
    unpark(spot: ParkingSpot, ticket: Ticket): Vehicle
}

class ParkingFloor implements IParkingFloor {
    private parkingSpots: ParkingSpot[] = [];

    constructor(readonly floorNumber: number) { }

    addSpot(spot: ParkingSpot): void {
        this.parkingSpots.push(spot);
    }

    getAvailableSpots(): ParkingSpot[] {
        return this.parkingSpots.filter((spot) => spot.available);
    }

    park(vehicle: Vehicle): ParkingSpot | null {

        for (let spot of this.parkingSpots) {
            if (spot.available && spot.canFitVehicle(vehicle)) {
                spot.park(vehicle);
                return spot;
            }
        }

        return null;
    }

    unpark(spot: ParkingSpot, ticket: Ticket): Vehicle {
        if (!ticket.paid) throw new Error("pending payment, please pay the amount to unpark")
        const vehicle = spot.unpark();
        return vehicle;
    }
}


class ParkingLot {
    private floors: ParkingFloor[] = [];
    private maxfloorCapacity = 4;


    constructor() { }

    addFloor(floor: ParkingFloor) {
        if (this.floors.length >= this.maxfloorCapacity) throw new Error("cannot add more floors");
        this.floors.push(floor);
    }


    getAvailableFloors() {
        return this.floors;
    }

    getAvailableSpots() {
        const availableSpots: ParkingSpot[] = [];
        for (let floor of this.floors) {
            availableSpots.push(...floor.getAvailableSpots());
        }

        return availableSpots;
    }

    park(vehicle: Vehicle): {spot: ParkingSpot, floorNumber: number, ticket: Ticket} | null {
        for (let floor of this.floors) {
            const spot = floor.park(vehicle);
            if (spot) {
                const ticket = new Ticket(vehicle, floor, spot);
                return {spot, floorNumber: floor.floorNumber, ticket};

            } 
        }
        return null;
    }

    unPark(floorNumber: number, spot: ParkingSpot, ticket: Ticket): Vehicle | undefined {
        const parkedFloor = this.floors.find((floor) => floorNumber === floor.floorNumber);
        if (!parkedFloor) throw new Error("invalid floor number");

        ticket.pay();

        const vehicle = parkedFloor.unpark(spot, ticket);

        return vehicle;
    }

}