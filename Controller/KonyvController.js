import KonyvekAdminView from "../View/admin/KonyvekAdminView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/Public/KonyvekPublicView.js";
import KosarModel from "../Model/KosarModel.js";
import KosarView from "../View/kosar/kosarView.js";
// import KosarakView from "../View/kosar/kosarakView.js";

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
        $(window).on("torol", (event)=>
        {
            console.log("controllerben módosít", event.detail);
            konyvModel.adatModosit(event.detail);
        });
        
        
        const kosarModel= new KosarModel;
        
        $("#kosar").on("click", ()=>
        {
            // kosarModel.getKosarTomb();
            const tomb=kosarModel.getKosarTomb();
            this.kosarAdatok(tomb);

        })
        
        $(window).on("kosarba", (event)=>
        {
            console.log("kosárba módosít", event.detail);
            kosarModel.kosarba(event.detail);
        });
    }
    
    konyvAdatok(tomb) 
    {
        const szuloElem=$("main")
        new KonyvekAdminView(tomb, szuloElem);
    }

    konyvPublicAdatok(tomb) 
    {
        const szuloElem=$("main")
        new KonyvekPublicView(tomb, szuloElem);
    }

    kosarAdatok(tomb)
    {
        const szuloElem=$("#kosarDiv");
        console.log(szuloElem);
        // new KosarakView(tomb, szuloElem);
        new KosarView(tomb, szuloElem);
    }
}

export default KonyvController;