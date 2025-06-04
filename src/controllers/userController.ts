import { Request, Response } from 'express';
import prisma from '../prismaClient';

export const getUsers = async (_: Request, res: Response) => {
  const users = await prisma.user.findMany({ include: { posts: true } });
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({ data: { name, email } });
  res.status(201).json(user);
};
