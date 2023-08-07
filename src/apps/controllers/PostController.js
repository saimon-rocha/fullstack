const Posts = require('.../models/Posts')

class PostController {
    async create(req, res) {
        const { image, description } = req.body;
        const newPost = await Posts.create({
            image,
            description,
            author_id: req.userId,
        })
        if (!newPost) {
            return res.status(400).json({ message: 'Created Post failed!' })
        }
        return res.status(200).json({ data: { image, description } })
    }

    async delete(req, res) {
        const { id } = req.params
        const verifyPost = await Posts.findOne({
            where: {
                id,
                // author_id: req.userId,
            }
        })
        if (!verifyPost) {
            return res.status(404).json({ message: 'Post does not exists' })
        }
        if (verifyPost.author_id != req.userId) {
            return res.status(401).json({
                message: 'You do\t have permission to delete this post!'
            })
        }
        const deletedPost = await Posts.destroy({
            where: {
                id,
            }
        })
        if (!deletedPost) {
            return res.status(400).json({ message: 'Failed to delete this post' })
        }
        return res.status(200).json({ message: 'Post deleted' })
    }

    async update(req, res) {
        const { image, description } = req.body
        const verifyPost = await Posts.findOne({
            where: {
                id,
                // author_id: req.userId,
            }
        })
        if (!verifyPost) {
            return res.status(404).json({ message: 'Post does not exists' })
        }
        if (verifyPost.author_id != req.userId) {
            return res.status(401).json({
                message: 'You do\t have permission to delete this post!'
            })
        }
        const postUpdate = await Posts.update(req.body, { where: { id } })
        if (postUpdate) {
            return res.status(400).json({ message: 'Failed to update this post' })
        }
        return res.status(200).json({ message: 'Posts updated' })

    }

    async addlike(req, res) {
        const { id } = req.params
        const verifyPost = await Posts.findOne({
            where: {
                id,
                // author_id: req.userId,
            }
        })

        if (!verifyPost) {
            return res.status(404).json({ message: 'Post does not exists' })
        }

        const postUpdate = await Posts.update({
            number_likes: verifyPost.number_likes + 1
        },
            {
                where: { id }
            })

        if (postUpdate) {
            return res.status(400).json({ message: 'Failed to add Like in this post' })
        }

        return res.status(200).json({ message: 'like storaged!' })
    }
}

module.exports = new PostController()