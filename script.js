$(function () {

   const kepData=[
       {
           cim:"Renault",
           eleresiUt:"pics/1.jpg",
           leiras:"Renault Megane II RS"
       },
       {
            cim:"Lamborghini",
            eleresiUt:"pics/2.jpg",
            leiras:"Lamborghini Huracan"
        },
        {
            cim:"Ferrari",
            eleresiUt:"pics/3.jpg",
            leiras:"Ferrari 488 Liberty Walk"
        }
   ];
    let aktIndex=0;
    const galeriaSzulo=$("#Galery");
    let sablonElem=$(".kartya");
    for (let index = 0; index < kepData.length; index++) {
        let ujElem= sablonElem.clone().appendTo(galeriaSzulo);
        const ujKartya=new Kartya(ujElem,kepData[index],index);
}
    
    let nagyKepSzulo=$("#foKep");
    let foElem= sablonElem.clone().appendTo(nagyKepSzulo);
    const nagyKartya=new Kartya(foElem,kepData[aktIndex],aktIndex);
    $("#jobb").click(jobbra);
    $("#bal").click(balra);
    sablonElem.remove();
    $(window).on("kepKattintas", (esemeny)=>{
        nagyKartya.setAdatok(esemeny.detail);
        aktIndex=esemeny.detail.index;
    });
    function jobbra() {
        aktIndex++;
        if (aktIndex>(kepData.length-1)){
            aktIndex=0;
        }
            nagyKartya.setAdatok(kepData[aktIndex]);
    }
    function balra() {
        aktIndex--;
        if (aktIndex<0){
            aktIndex=(kepData.length-1);
        }
        nagyKartya.setAdatok(kepData[aktIndex]);
    }
});
