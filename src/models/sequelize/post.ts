import * as SequelizeStatic from "sequelize";
import {DataTypes, Sequelize} from "sequelize";
import {PostAttributes} from "../../repo/interface/posts";
import {PostInstance} from "./_postInstance";

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
    tableName: 'posts',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [],
    paranoid: true,
    underscored: true
  });

  // Post.afterDestroy((post: PostInstance, options: Object) => {
  //   sequelize.models.Comment.destroy({where: {post_id: post.dataValues.id}, individualHooks: true});
  // });

  return Post;
}
