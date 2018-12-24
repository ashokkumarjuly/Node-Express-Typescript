import {Instance} from "sequelize";
import {PostAttributes} from "./../../repo/interface/posts";

export interface PostInstance extends Instance<PostAttributes> {
  dataValues: PostAttributes;
}
