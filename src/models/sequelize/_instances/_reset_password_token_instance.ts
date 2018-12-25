import { Instance } from "sequelize";
import { ResetPasswordTokenAttributes } from './../../interfaces/reset-password'
export interface ResetPasswordTokenInstance extends Instance<ResetPasswordTokenAttributes> {
    dataValues: ResetPasswordTokenAttributes;
}
