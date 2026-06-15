const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFiles(buffer){
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "billa.png"
    })
    return result;
}

module.exports = uploadFiles;