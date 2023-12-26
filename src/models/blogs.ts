import { DataTypes, Sequelize, Model, BuildOptions } from '@sequelize/core';

import sequelize from '../databse';

export interface BlogAttributes {
  id: number;
  title: string;
  autor: string;
  puiblishAt: Date;
  content: string;
};

interface BlogInstance extends Model<BlogAttributes>, BlogAttributes {};

export type BlogModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): BlogInstance;
};

const BlogsModel = sequelize.define('blogs', {
  // Model attributes are defined here
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: {
    type: DataTypes.TEXT,
    // allowNull: false
  },
  autor: {
    type: DataTypes.TEXT
    // allowNull defaults to true, except for primary keys
  },
  puiblishAt: {
    type: DataTypes.DATE
    // allowNull defaults to true, except for primary keys
  },
  content: {
    type: DataTypes.TEXT
    // allowNull defaults to true, except for primary keys
  },
  shortContent: {
    type: DataTypes.VIRTUAL,
    get() {
      return this.content.slice(0, 70);
    },
  }
}, {
  // Other model options go here
  // dont use createdAt/update
  timestamps: false,
}) as BlogModelStatic;


export default BlogsModel;
