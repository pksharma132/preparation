class LockService {
    constructor() {}

    checkIfSeatsAvailable(seatIds: string[]) {
        return true;
    }

    lockSeats(userId: string, seatIds: string[], showId: string) {}

    unlockSeats(seatIds: string[]) {

    }

    markAsBooked(userId: string, seatIds: string[]) {

    }
 };
class PaymentService {
    constructor() {};

    redirectPayment(draftBooking: DraftBooking) {
        return "url";
    }
 };
class TicketService {
    constructor() {}

    getPayableAmount(seatIds) {
        return 1000;
    }

    sendTicketToUser(booking: Object) {

    }
 };
class NotificationService {
    constructor() {}
    notify(seatIds: string[], showId: string, status: string) {

    }
 };

class DraftBooking {}


class BookingService {
    constructor(
        private lockService: LockService,
        private paymentService: PaymentService,
        private ticketService: TicketService,
        private notificationService: NotificationService) { }

    createBooking(draftBooking: DraftBooking) {
        return {id: "string", showId: "string", userId: "string", seatIds: []};
    }

    createDraftBooking(userId: string, seatIds: string[], showId: string, paymentAmount: number) {
        return {id: "string", userId, seatIds, showId}
    }

    updateDraftBooking(draftBookingId: string, status: string, paymentStatus: string, ) {
        return {id: "string", "userId": "", "seatIds": [], "showId": ""}
    }


    cancelDraftBooking(draftBookingId: string, paymentStatus: string) {
        const draftBooking = this.updateDraftBooking(draftBookingId, "failed", paymentStatus);
        const { userId, showId, seatIds } = draftBooking;
        this.lockService.unlockSeats(seatIds);
        this.notificationService.notify(seatIds, showId, "AVAILABLE")
    }

    confirmBooking(draftBookingId: string, paymentStatus: string) {
        const draftBooking = this.updateDraftBooking(draftBookingId, "booked", paymentStatus);
        const booking = this.createBooking(draftBooking);

        const { userId, showId, seatIds } = booking;
        this.lockService.markAsBooked(userId, seatIds);
        this.notificationService.notify(seatIds, showId, "BOOKED");
        this.ticketService.sendTicketToUser(booking);
    }




    confirmBookingDraft(userId: string, seatIds: string[], showId: string) {
        if (!this.lockService.checkIfSeatsAvailable(seatIds)) {
            throw new Error("seats are not available");
        }

        this.lockService.lockSeats(userId, seatIds, showId);

        this.notificationService.notify(seatIds, showId, "LOCKED")


        const paymentAmount = this.ticketService.getPayableAmount(seatIds);
        const draftBooking = this.createDraftBooking(userId, seatIds, showId, paymentAmount)

        this.paymentService.redirectPayment(draftBooking);
    }

    handlePaymentCallback(draftBookingId: string, paymentStatus: "failed" | "sucess") {
        if (paymentStatus === "failed") return this.cancelDraftBooking(draftBookingId, paymentStatus);
        
        const ticket = this.confirmBooking(draftBookingId, paymentStatus);
        return ticket;

    }


}