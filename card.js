class Kartya {
    constructor(elem, adat){
        this.elem=elem;
        this.cim=this.elem.children("h3");
        this.kep=this.elem.children("img");
        this.leiras=this.elem.children("p");
        this.adat=adat;
        this.setAdatok(this.adat);
        

        this.cim.html(this.adat.cim);
        this.kep.attr("src",this.adat.eleresiUt);
        this.leiras.html(this.adat.leiras);
    }
    setAdatok(ertekek){
        this.cim.html(ertekek.cim);
        this.kep.attr("src",ertekek.eleresiUt);
        this.leiras.html(ertekek.leiras);
    }
    
}
class KisKartya extends Kartya {
    constructor(elem, adat, index){
        super(elem, adat, index);

        this.adat.index=index
        

        this.elem.on("click",()=> {
            this.kattintasTrigger();
        });
    }
    kattintasTrigger(){
        let esemeny=new CustomEvent("kepKattintas", {detail:this.adat});
        window.dispatchEvent(esemeny);
    }
}