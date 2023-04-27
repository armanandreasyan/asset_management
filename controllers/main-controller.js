const { productService } = require("../services/product-service");
const { userService } = require("../services/user-service");
const { catalogService } = require("../services/catalog-service");
const { assetService } = require("../services/asset-service");

async function buyProduct(req, res) {
    if(!req.body.id || !req.body.address){
        return res.status(400).send({
            error:{
                errorMessage:"Invalid data!"
            },
            success: false,
            data: {}
        })
    }
    const catalog = await catalogService.getCatalogByID(req.body.id);
    const user = await userService.getUserByAddress(req.body.address);
    if(!catalog || !user){
        return res.status(400).send({
            error:{
                errorMessage: "The id or address is incorrect!"
            },
            success: false,
            data: {}
        })
    }
    if(user.cash1 < catalog.cost1 &&
        user.cash2 < catalog.cost2 &&
        user.cash3 < catalog.cost3){
        return res.status(400).send({
            error:{
                errorMessage:"The user does not have enough money!",
            },
            success: false,
            data: {}
        })
    }
    const assets = await assetService.getAssetsByAddress(user.address);
    if (!assets){
        return res.status(400).send({
            error:{
                errorMessage:"The user does not own assets.",
            },
            success: false,
            data: {}
        })
    }
    for (let i = 0; i < assets.length; ++i) {
        if (assets[i].level <= catalog[`req${assets[i].type}`]){
            let updatedUser;
            if (user.cash1 >= catalog.cost1){
                const cash1 = user.cash1 - catalog.cost1;
                updatedUser = await userService.updateUser(
                    user.address,
                    { cash1 }
                    )
            }else if(user.cash2 >= catalog.cost2) {
                const cash2 = user.cash2 - catalog.cost2;
                updatedUser = await userService.updateUser(
                    user.address,
                    { cash2 }
                )
            }else{
                const cash3 = user.cash3 - catalog.cost3;
                updatedUser = await userService.updateUser(
                    user.address,
                    { cash3 }
                )
            }
            // const newProduct = await productService.createProduct({
            //     //todo
            //     address: "product address",
            //     id: 1,
            //     user_address: user.address
            // })
            return res.send({
                success: true,
                data: {
                    resources: {
                        cash1: updatedUser.cash1,
                        cash2: updatedUser.cash2,
                        cash3: updatedUser.cash3
                    }

                }
            })
        }
    if (i === assets.length - 1){
        return res.status(400).send({
            error:{
                errorMessage:"Levels of the building higher than req x",
            },
            success: false,
            data: {}
        })
    }
    } 
}

module.exports = {
    buyProduct
}