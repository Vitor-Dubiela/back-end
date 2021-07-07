import { Router } from "express";
import { ComputerController } from "../controllers/ComputerController";

const router = Router();
const controller = new ComputerController();

router.get("/", controller.listar);
router.get("/listar/:id", controller.listarPorId);
router.post("/cadastrar", controller.cadastrar);
router.delete("/excluir/:id", controller.excluir);

export { router };

