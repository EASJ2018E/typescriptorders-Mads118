import { OrdreLinie } from "./OrdreLinie";
import { IOrdreLinie } from "./IOrdreLinie";
import {Ordre} from "./Ordre";

let orderList : OrdreLinie[] = [];


function oneOrder(ol: OrdreLinie): string {
    return ol.productID.toString() + " " + ol.orderQty.toString() + " " +ol.unitPrice.toString() + " " + ol.unitPriceDiscount.toString() + " "
}

function printList(liste : Ordre): string {
    // Lav en hjælpe funktion her til at lave det pænt
    let x : string = "";
    x += "<ol>";
    liste.ordreList.forEach(element => {
        x += "<li>" + "Sum uden Moms = "+ element.BeregnSum() +" / Sum med Moms = " +element.SumMedMoms().toString() + "</li>"
    });
    x += "</ol>";
 
    return x;
    
 }

let listitem1 : IOrdreLinie = {ProductID:1, OrderQty:5, UnitPrice:50, UnitPriceDiscount:5}
let listitem2 : IOrdreLinie = {ProductID:2, OrderQty:10, UnitPrice:25, UnitPriceDiscount:10}

let orderLinie1 : OrdreLinie = new OrdreLinie(listitem1);
let orderLinie2 : OrdreLinie = new OrdreLinie(listitem2);

orderList.push(orderLinie1);
orderList.push(orderLinie2);

let Ordre1 : Ordre = new Ordre(1, orderList)

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = printList(Ordre1);
