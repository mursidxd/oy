const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ["6281248009076", "6288233832771"]
global.premium = ['6288233832771']
global.youtube = 'https://youtube.com'
global.ownername = 'Kina Cans'
global.botname ='ᴋɪɴᴀ ʙᴏᴛ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ'
global.donasi = {
    saweria: 'https://saweria.co/mursid25',
    nomor: '081248009076'
}
global.packname = 'ᴋɪɴᴀ ʙᴏᴛ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ'
global.author = 'мυʀѕι∂-χмℓ'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⬡'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...'
}
global.thumb = fs.readFileSync('./image/kina.jpg')
global.vn = './sound/yaa.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
