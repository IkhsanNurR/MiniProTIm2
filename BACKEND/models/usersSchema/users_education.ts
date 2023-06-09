import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface users_educationAttributes {
    usdu_id?: number;
    usdu_entity_id: number;
    usdu_scholl?: string;
    usdu_degree?: string;
    usdu_field_study?: string;
    usdu_graduate_year?: string;
    usdu_start_date?: Date;
    usdu_start_end?: Date;
    usdu_grade?: string;
    usdu_activities?: string;
    usdu_description?: string;
    usdu_modified_date?: Date;
}

@Table({
	tableName: "users_education",
	schema: "users",
	timestamps: false 
})
export class users_education extends Model<users_educationAttributes, users_educationAttributes> implements users_educationAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER,
    	defaultValue: Sequelize.literal("nextval('users.users_education_usdu_id_seq'::regclass)") 
    })
    @Index({
    	name: "users_education_pkey",
    	using: "btree",
    	unique: true 
    })
    	usdu_id?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "users_education_pkey",
    	using: "btree",
    	unique: true 
    })
    @Index({
    	name: "users_education_usdu_entity_id_key",
    	using: "btree",
    	unique: true 
    })
    	usdu_entity_id!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	usdu_scholl?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(15) 
    })
    	usdu_degree?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(125) 
    })
    	usdu_field_study?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(4) 
    })
    	usdu_graduate_year?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	usdu_start_date?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	usdu_start_end?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(5) 
    })
    	usdu_grade?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(512) 
    })
    	usdu_activities?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(512) 
    })
    	usdu_description?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE 
    })
    	usdu_modified_date?: Date;

}