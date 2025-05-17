import { Request, Response } from "express";
import * as userService from '../services/userService';

export const getUsers = async (req: Request, res: Response) : Promise<void> => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) : Promise<void> => {
    try {
        const user = await userService.getUserById(req.params.id)
        res.status(200).json(user)
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};

export const registerUser = async (req: Request, res: Response) : Promise<void> => {
    try {
        const { nombre, email, password } = req.body;
        const newUser = await userService.registerUser({ nombre, email, password });
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateUser = async (req: Request, res: Response) : Promise<void> => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req: Request, res: Response) : Promise<void> => {
    try {
        const deletedUser = await userService.deleteUser(req.params.id);
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


