import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'IncomeLimit'
})
export class IncomeLimit extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        unique: true
    })
    year!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    income_limit!: string;

    @Column({
        type: DataType.DATE,
        defaultValue: new Date(),
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        defaultValue: new Date(),
    })
    updatedAt!: Date;
}