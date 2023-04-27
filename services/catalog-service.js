const { Catalog } =  require("../db/models");

class CatalogService {
    async getCatalogByID(id){
        return Catalog.findOne({
            where: { ID: id }
        })
    }

}

const catalogService = new CatalogService();

module.exports = {
    catalogService,
    CatalogService
}