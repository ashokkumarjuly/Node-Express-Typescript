import {Instance} from "sequelize";
import {PostAttributes} from "./../../models/interface/posts";

export interface PostInstance extends Instance<PostAttributes> {
  dataValues: PostAttributes;
}
