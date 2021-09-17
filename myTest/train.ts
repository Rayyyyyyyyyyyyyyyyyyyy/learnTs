export enum TransportTicketType {
    Train,
    MRT,
    Aciation
}



type TimeFormat = [number, number, number]
type TrainStation = {
    name: string,
    nextStop: string,
    duration: TimeFormat
}


class TicketSystem {
    constructor(
        private type: TransportTicketType,
        protected startingPoint: string,
        protected destination: string,
        private departureTime: Date,
    ) { }

    protected deriveDuration(): TimeFormat {
        return [1, 0, 0]
    }
    private deriveArrivalTime(): Date {
        const { departureTime } = this

        const [hours, minutes, seconds] = this.deriveDuration()
        const durationSeconds = hours * 60 * 60 + minutes * 60 + seconds
        const durationMilliseconds = durationSeconds * 1000

        const arrivalMilliseconds = departureTime.getTime() + durationMilliseconds
        return new Date(arrivalMilliseconds)
    }

    public getTicketInfo() {
        const ticketName = TransportTicketType[this.type]
        const arrivalTime = this.deriveArrivalTime()

        console.log(`
            Ticket Type: ${ticketName}
            Station: ${this.startingPoint} - ${this.destination}
            Departure: ${this.departureTime}
            Arrival: ${arrivalTime}
            `);
    }
}
class TrainTicket extends TicketSystem {
    constructor(
        startingPoint: string,
        destination: string,
        departureTime: Date,
    ) {
        super(
            TransportTicketType.Train,
            startingPoint,
            destination,
            departureTime
        )
    }
    private stops: string[] = [
        'pingtung',
        'kaohsiung',
        'taipei',
        'tainan',
        'taichung',
        'hsinchu',

    ]
    private stationsDetail: TrainStation[] = [
        {
            name: "pingtung", nextStop: 'kaohsiung', duration: [2, 30, 0]
        }, {
            name: "kaohsiung", nextStop: 'tainan', duration: [1, 45, 30]
        }, {
            name: "tainan", nextStop: 'taichung', duration: [3, 20, 10]
        }, {
            name: "taichung", nextStop: 'hsinchu', duration: [7, 50, 20]
        }, {
            name: "hsinchu", nextStop: 'taipei', duration: [1, 37, 10]
        }
    ]

    private isStopExit(stop: string): boolean {
        for (let i = 0; i < this.stops.length; i++) {
            const existedStop = this.stops[i]
            if (existedStop == stop) return true
        }
        return false
    }

    protected deriveDuration(): TimeFormat {
        const { startingPoint, destination } = this
        if (this.isStopExit(startingPoint) &&
            this.isStopExit(destination)) {
            let time: TimeFormat = [0, 0, 0]
            let stopFound = false

            for (let i = 0; i < this.stationsDetail.length; i++) {
                const detail = this.stationsDetail[i]

                if (!stopFound && detail.name == startingPoint) {
                    stopFound = true
                    time[0] += detail.duration[0]
                    time[1] += detail.duration[1]
                    time[2] += detail.duration[2]
                } else if (stopFound) {
                    time[0] += detail.duration[0]
                    time[1] += detail.duration[1]
                    time[2] += detail.duration[2]

                    if (detail.nextStop == destination) break
                }
            }
            let minutes = Math.floor(time[2] / 60)
            time[1] += minutes
            time[2] -= minutes * 60

            let hours = Math.floor(time[1] / 60)
            time[0] += hours
            time[1] -= hours * 60

            return time
        }
        throw new Error('weong stop name! please check again')
    }
}

const randomTicket = new TicketSystem(
    TransportTicketType.Train,
    'tainan',
    'taipei',
    new Date(2021, 8, 18, 11, 0, 0)
)

randomTicket.getTicketInfo()