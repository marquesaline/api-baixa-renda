import { Optional } from 'sequelize';

export interface IndexAttributes {
    id: number;
    year: number;
    month: number;
    yearmonth: number;
    contributionSalariesCorrection: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IndexInput extends Optional<IndexAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IndexOuput extends Required<IndexAttributes> {}