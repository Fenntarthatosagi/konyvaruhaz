class KonyvPublicView
{
    #elem;
    constructor(elem, szuloElem)
    {
        console.log("KonvyPublicView");
        this.#elem=elem
        szuloElem.html(`
        <div class="konyvAdatok">
            <h1>Könyv cím: ${elem.cim}</h1>
            <div>
                <p>Szerző: ${elem.szerzo}</p>
                <p>Ár: ${elem.ar}</p>
            </div>
        </div>
        `);

       
    }
}

export default KonyvPublicView;