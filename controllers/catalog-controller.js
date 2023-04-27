const { catalogService } = require("../services/catalog-service");

async function getCatalog(req, res) {
    const catalog_id = +req.params.id;
    if (isNaN(+catalog_id)){
        return res.status(400).send({
            error:{
                errorMessage:"Type of id must be number!"
            },
            success: false,
            data: {}
        })
    }
    const catalog = await catalogService.getCatalogByID(catalog_id);
    if(!catalog){
        return res.status(400).send({
            error:{
                errorMessage:"Catalog Not Found!"
            },
            success: false,
            data: {}
        })
    }
    const result = {
        id: catalog.ID,
        name: catalog.name,
        description: catalog.description,
        imageUrl: catalog.url,
        price: {
            cost1: catalog.cost1,
            cost2: catalog.cost2,
            cost3: catalog.cost3,
        },
        req: {
            req1: catalog.req1,
            req2: catalog.req2,
            req3: catalog.req3,
        }
    };

    return res.send({
        success: true,
        data: {
            result
        }
    })
}

module.exports = {
    getCatalog
}