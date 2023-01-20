
class CrudRepository{
    constructor(model){
        this.model = model;
    }
    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }
    async destory(modelId){
        try {
            await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }
    async get(id){
        try {
            const result = await this.model.findByPk(id);
            return result;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }
    async getAll(){
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }
    async update(id,data){
        try {
            const result = await this.model.update(data, {
                where: {
                    id: id
                }
            })
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw error;
        }
    }
}
module.exports = CrudRepository;