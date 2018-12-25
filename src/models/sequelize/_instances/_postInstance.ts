import {Instance} from "sequelize";
import {PostAttributes} from "./../../interfaces/posts";

export interface PostInstance extends Instance<PostAttributes> {
  dataValues: PostAttributes;
}
