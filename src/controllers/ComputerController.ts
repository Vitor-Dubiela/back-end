import { Request, Response } from "express";
import ComputerSchema  from "../models/ComputerSchema";

class ComputerController {
    async listar(request: Request, response: Response) {
        try 
        {
            const computers = await ComputerSchema.find();
            response.status(200).json(computers);
        }
        catch(error)
        {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível encontrar os Computadores."
            });
        }
    }
    
    async listarPorId(request: Request, response: Response) {
        try 
        {
            const { id } = request.params;
            const computer = await ComputerSchema.findById({_id: id});
            response.status(200).json(computer);
        }
        catch(error)
        {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível encontrar o objeto por ID."
            });
        }
    }

    async cadastrar(request: Request, response: Response) {
        try 
        {
            const computerList = await ComputerSchema.find();
            const isListed = computerList.find(
                (data: any) => data.dono === request.body.dono
            );

            if(!isListed)
            {
                const result = await ComputerSchema.create(request.body);
                response.status(200).json(result);
            }
            else
            {
                response.status(400).json({
                    error: true,
                    msg: "Dono já cadastrado." 
                });
            }
        }
        catch (error)
        {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível realizar o cadastro do objeto."
            });
        }
    }

    async excluir(request: Request, response: Response) {
        try 
        {
            const { id } = request.params;
            const computer = await ComputerSchema.findByIdAndDelete(id);
            response.status(201).json(computer);
        } 
        catch(error) 
        {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível excluir o objeto",
            });
        }
    }
}

export { ComputerController };