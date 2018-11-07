import {OrdreLinie} from "./OrdreLinie";

export class Ordre {
    private xordreListe : OrdreLinie[];
    public get ordreList() : OrdreLinie[] {
        return this.xordreListe;
    }
    public set ordreList(x : OrdreLinie[]) {
        this.xordreListe = x;
    }
    
    
    private xordreID : number;
    public get ordreID() : number {
        return this.xordreID;
    }
    public set ordreID(x : number) {
        this.xordreID = x;
    }

    constructor(ordreID:number, liste:OrdreLinie[]){
        this.xordreListe = liste;
        this.xordreID = ordreID;
    }

    public totalSum() : number {
        let sum : number;
        this.xordreListe.forEach(
            ol => {sum += ol.SumMedMoms()}
            )
        return sum;
    }

}