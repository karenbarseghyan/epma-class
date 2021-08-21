import express from 'express';

const router = express.Router();

router.get('/', (req,res) => {
    res.send(blogs);
})

export default router;

function blogs(blogs: any) {
    throw new Error('Function not implemented.');
}
