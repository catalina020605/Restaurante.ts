// src/controllers/menuController.ts

import { Request, Response } from 'express';
import menuData from '../data/dataMenues';

class MenuController {
    static getMenuList(req: Request, res: Response) {
        res.json(menuData);
    }
}

export default MenuController;
