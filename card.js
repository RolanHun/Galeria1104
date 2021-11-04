class Kartya{
    constructor(elem, adat, index){
        this.elem=elem;
        this.cim=this.elem.children("h3");
        this.kep=this.elem.children("img");
        this.leiras=this.elem.children("p");
        this.adat=adat;
        this.adat.index=index
        this.setAdatok(this.adat);
        this.elem.on("click",()=> {
            this.kattintasTrigger();
        });

        this.cim.html(this.adat.cim);
        this.kep.attr("src",this.adat.eleresiUt);
        this.leiras.html(this.adat.leiras);
    }
    setAdatok(ertekek){
        this.cim.html(ertekek.cim);
        this.kep.attr("src",ertekek.eleresiUt);
        this.leiras.html(ertekek.leiras);
    }
    kattintasTrigger(){
        let esemeny=new CustomEvent("kepKattintas", {detail:this.adat});
        window.dispatchEvent(esemeny);
    }
}