// src/routes/menuRoutes.ts

import express from 'express';
import MenuController from '../controllers/menu-controller';

const router = express.Router();

// Endpoint para obtener la lista de menús disponibles
router.get('/menu', MenuController.getMenuList);

export default router;
