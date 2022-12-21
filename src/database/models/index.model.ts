import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'Indexes',
})
export class Index extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false, 
        autoIncrement:true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false, 
    })
    year!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false, 
    })
    month!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false, 
    })
    yearmonth!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false, 
    })
    contributionSalariesCorrection!: string;

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