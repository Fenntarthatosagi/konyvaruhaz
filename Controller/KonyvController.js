import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/KonyvekPublicView.js";

class KonyvController {
    constructor() 
    {
        const konyvModel = new KonyvModel();
        $("#admin").on("click", ()=>{
            konyvModel.adatBe("./adat.json", this.konyvAdatok);
        });

        $("#public").on("click", ()=>{
            konyvModel.adatBe("./adat.json", this.konyvPublicAdatok);
        })

        $(window).on("modosit", (event)=>
        {
            console.log("controllerben módosít", event.detail);
            konyvModel.adatModosit(event.detail);
        });
    }
    
    konyvAdatok(tomb) 
    {
        const szuloElem=$("main")
        new KonyvekView(tomb, szuloElem);
    }

    konyvPublicAdatok(tomb) 
    {
        const szuloElem=$("main")
        new KonyvekPublicView(tomb, szuloElem);
    }
}

export default KonyvController;