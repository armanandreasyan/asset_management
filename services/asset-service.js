const { Asset } =  require("../db/models");

class AssetService {
    async getAssetsByAddress(address){
        return Asset.findAll({
            where: { address }
        })
    }

}

const assetService = new AssetService();

module.exports = {
    assetService,
    AssetService
}