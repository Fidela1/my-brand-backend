import express from "express";
import blogRoutes from './blogRoutes/blogs';
import userRoutes from './usersRoutes/users';
const router = express.Router();

router.use('/blogs', blogRoutes);
router.use('/users', userRoutes);
export default router;
