const { User } =  require("../db/models");

class UserService {
    async getUserByAddress(address){
        return User.findOne({
            where: { address }
        })
    }
    async updateUser(address, updatedVal){
        const user = await User.findOne({
            where: { address }
        });
        await user.update(updatedVal);

        return user.save()
    }

}

const userService = new UserService();

module.exports = {
    userService,
    UserService
}