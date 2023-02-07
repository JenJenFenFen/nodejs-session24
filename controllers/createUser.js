exports.createUser = (req, res) => {
    try {
        const payload = req.body

        if (payload.name == '' || payload.email == '' ) {
            return res.status(400).send({
                'message': 'nama atau email tidak boleh kosong'
            })
        }

        return res.status(200).send({
            'message': 'Data berhasil dibuat'
        })
    }
    catch (err) {
        return res.status(500).send({
            'message': err.toString()
        })
    }
}