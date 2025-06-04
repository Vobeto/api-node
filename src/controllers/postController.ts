import { Request, Response } from 'express';
import prisma from '../prismaClient';

export const getPosts = async (_: Request, res: Response) => {
  const posts = await prisma.post.findMany({ include: { author: true } });
  res.json(posts);
};

export const createPost = async (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;
  const post = await prisma.post.create({
    data: { title, content, authorId },
  });
  res.status(201).json(post);
};
