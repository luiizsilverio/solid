import * as chalk from 'chalk';
import DataBase from "../servers/DataBase";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckWeakPasswordMiddleware extends Middleware {
        
    public check(email: string, password: string): boolean {
        
        if (password === "123456") {
            console.log(chalk.yellow("Senha muito fraca, favor mudar a senha."));
        }

        return this.checkNext(email, password);

    }    

}