import {IOrdreLinie} from "./IOrdreLinie"

export class OrdreLinie{


private xproductID : number;
public get productID() : number {
    return this.xproductID;
}
public set productID(x : number){
    this.xproductID = x;
}

private xorderQty : number;
public get orderQty() : number {
    return this.xorderQty;
}
public set orderQty(x : number){
    this.xorderQty = x;
}

private xunitPrice : number;
public get unitPrice() : number {
    return this.xunitPrice;
}
public set unitPrice(x : number){
    this.xunitPrice = x;
}

private xunitPriceDiscount : number;
public get unitPriceDiscount() : number {
    return this.xunitPriceDiscount;
}
public set unitPriceDiscount(x : number){
    this.xunitPriceDiscount = x;
}

constructor(linie:IOrdreLinie){
    this.productID = linie.ProductID;
    this.orderQty = linie.OrderQty;
    this.unitPrice = linie.UnitPrice;
    this.unitPriceDiscount = linie.UnitPriceDiscount;
}

public BeregnSum(){
    return this.orderQty * this.unitPrice-this.unitPriceDiscount;
}

public Moms() {
    return this.BeregnSum() * 0.25;
}

public SumMedMoms() {
    return this.BeregnSum() + this.Moms();
}

}