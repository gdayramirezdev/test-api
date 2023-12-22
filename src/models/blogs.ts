import { DataTypes } from '@sequelize/core';
import sequelize from '../databse';

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
}, {
  // Other model options go here
  // dont use createdAt/update
  timestamps: false,
});


export default BlogsModel;
