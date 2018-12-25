import * as SequelizeStatic from "sequelize";
import {DataTypes, Sequelize} from "sequelize";
import {PostAttributes} from "../../models/interfaces/posts";
import {PostInstance} from "./_instances";

export default (sequelize: Sequelize, dataTypes: DataTypes):
  SequelizeStatic.Model<PostInstance, PostAttributes> => {
  const Post = sequelize.define<PostInstance, PostAttributes>("Post", {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: dataTypes.INTEGER,
    title: dataTypes.STRING,
    body: dataTypes.STRING,
    deleted_at: dataTypes.DATE
  }, {
    tableName: 'posts'
  });

  return Post;
}
