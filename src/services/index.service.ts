import { Index } from '../database/models/index.model';
import { IndexInput } from '../interfaces/index.interface';

class IndexServices {
    
    constructor() {}

    public async create(data: IndexInput) {
        try {
            const index = await Index.create(data);
            return index;

        } catch (error) {
            console.log(error);
        }
    }

    public async update(id: number, data: IndexInput) {
        try {
            const index = await Index.findOne({ where: { id } });

            if(!index) {
                return 'Index not found';
            }

            const updatedIndex = await index.update(data);
            return updatedIndex;

        } catch (error) {
            console.log(error)
        }
    }

    public async getAll() {
        try {
            const indexes = await Index.findAll();
            return indexes;

        } catch (error) {
            console.log(error);
        }
    }

    public async getById(id: number) {
        try {
            const index = await Index.findOne({ where: { id } });

            if(!index) {
                return 'Index not found';
            }

            return index;

        } catch (error) {
            console.log(error);
        }
    }

    public async getByYearMonth(yearmonth: number) {
        try {
            const index = await Index.findOne({ where: { yearmonth } });

            if(!index) {
                return 'Index not found';
            }
            return index;

        } catch(error) {
            console.log(error);
        }
    }

    public async delete(id: number) {
        try {
            const index = await Index.destroy({ where: { id } });

            if(!index) {
                return 'Index not found';
            }

            return 'Index successfully deleted';

        } catch (error) {
            console.log(error);
        }
    }
}

export default new IndexServices();