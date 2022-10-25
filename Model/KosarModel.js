class KosarModel
{
    #kosarTomb=[];
    constructor()
    {
        this.#kosarTomb=[];
    }

    getKosarTomb()
    {
        return this.#kosarTomb;
    }

    kosarba(elem)
    {
        console.log(elem);
        this.#kosarTomb.push(elem);
        console.log(this.#kosarTomb);
    }
}

export default KosarModel;