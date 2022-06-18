abstract class Room{
    protected family: string[] = [];
    readonly dobShikha: string = '1982-12-12';
    private readonly dobHriday: string = '2013-12-12';
    constructor(public room: string){}

    addFamilyMember(member: string){
        this.family.push(member);
    }
    showFamily(){
        console.log(this.family);
    }
    abstract cleanRoom(soap: string): void;
}

class OyoRoom extends Room{
    private reports: string[] = [];
    static currentYear = 2022;
    cleanRoom(soap: string){
        console.log(`${this.room}'s Oyo Room cleaned with ${soap}`);
    }
    get allReports(){
        return this.reports;
    }
    set newReport(report: string){
        this.reports.push(report);
    }
    constructor(room: string, private roomRent: number){
        super(room);
    }

    static createRoom(room: string){
        return { room: room };
    }

    addFamilyMember(member: string){
        if(member === 'Kapil')
            return
        this.family.push(member);
    }

    changeRoomRent(rent: number){
        this.roomRent = rent;
    }

    showRoomRent(){
        console.log(`${this.room}'s room rent is ${this.roomRent}`);
    }
}

class TreboHotel extends Room{
    private static instance: TreboHotel;
    private constructor(room: string, private roomRent: number){
        super(room);
    }

    static getInstance(){
        if(!TreboHotel.instance){
            TreboHotel.instance = new TreboHotel('Trebo', 1000);
        }
        return TreboHotel.instance;
    }

    cleanRoom(soap: string){
        console.log(`${this.room}'s Trebo Room cleaned with ${soap}`);
    }
}

const vijay = TreboHotel.getInstance();
console.log(vijay);

const rohit = OyoRoom.createRoom('Rohit');
console.log(rohit);
console.log(OyoRoom.currentYear);
const shekar = new OyoRoom('Shekar', 1000);
const shobha = new OyoRoom('Shobha', 1000);
const kapil = new OyoRoom('Shobha', 1000);
shekar.newReport = 'Year End Report';
console.log(shekar.allReports);
shekar.addFamilyMember('Shekar');
shekar.addFamilyMember('Shobha');
shekar.addFamilyMember('Kapil');
shekar.showFamily();
shekar.showRoomRent();
shekar.changeRoomRent(2000);
shekar.showRoomRent();
shekar.cleanRoom('Phenyl');

// const nab = new Room('Nabendu');
// const shi = new Room('Shikha');
// const hri = new Room('Hriday');
// const mou = new Room('Mousam');
// nab.dobShikha;
// nab.addFamilyMember('Nabendu');
// nab.addFamilyMember('Shikha');
// nab.addFamilyMember('Hriday');
// mou.cleanRoom('Lizol');
// nab.showFamily();