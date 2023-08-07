const fsp = require('fs/promises')
const B2 = require('backblaze-b2')

const B2 = new B2({
    applicationKeyId: '',
    applicationKey: ''
})

class FileController {
    async upload(req, res) {
        const { filename } = req.file
        try {
            const file = await fsp.readFile(`uploads/${filename}`, (err, data) => {
                if (err) {
                    throw err
                }
                return data
            })
            await b2.authorize()
            const { data } = await b2.getUploadUrl({
                bucketId: "2b09175a527e897471bf0b1d"
            })
            const { data } = await b2.uploadFile({
                uploadUrl: 'uploadUrl',
                uploadAuthToken: 'uploadAuthToken',
                fileName: 'fileName'
            })
            return res.send({ url:`` })
        } catch (error) {
            return res.status(400).send({message: 'Failed Upload'})
        }


        return res.status(200).json({ url: `uploads/${filename}` })
    }
}
module.exports = new FileController();
