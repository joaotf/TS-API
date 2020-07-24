import User from '../model/User';
import { Request, Response } from 'express';

class UserController {
    public async index(req: Request, res: Response): Promise<Response> {
        const users = await User.find();

        return res.status(200).json(users);
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const { email } = req.body;

        const user = await User.find({
            email
        })

        if(user.length !== 0){
            return res.status(400).json({ message: "User already registered!"});    
        }
        
        const created_user =  await User.create(req.body);
            
        return res.status(200).json(created_user);
    }
    
    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const findId = await User.find({
            _id: id
        });

        if(findId.length === 0){
            return res.status(400).json({ message: "Usuário não encontrado!"})
        }

        const user = await User.findOneAndUpdate({_id: id}, req.body, { new: true });

        return res.status(200).json(user);
    }

    public async destroy(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const findId = await User.find({
            _id: id
        });

        if(findId.length === 0){
            return res.status(400).json({ message: "Usuário não encontrado!"})
        }

        await User.findOneAndDelete({ _id: id});

        return res.status(200).json({ message: "Usuário excluído com sucesso!"});
    }

    public async getIndex(req: Request, res: Response): Promise<Response> {
        const user = await User.findById(req.params.id);

        return res.status(200).json(user);
    }

}

export default new UserController();