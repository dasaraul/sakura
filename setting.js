const chalk = require('chalk')
const fs = require('fs')

//SELEBIHNYA JIKA MAU SETTING ADA DI FOLDER JS 

//api ibeng
global.apiibeng = 'M3fAsTprq2' // letakan apikey kalian daftar dlu ya
// •> https://api.ibeng.tech
//lalu klian daftar jika sudah daftar di dashboard ada tulisan apikey kalian salin aja Paste di 'APIKEY'





global.owner = ['6282210819939'] 
global.ownernomer = "6282210819939"
global.socialmedia = "IG: @tam.aspx"
global.yutub = "YT: -"
global.lokasi = "Indonesia, Jawir"
global.sakuraurl = 'https://shoplinks.to/vyna-store'
global.packgename = "©" 
global.author = "Tamaengs Bot" 
global.title = 'TamaengsBOT'
global.body = 'Wir Jawir'
global.welcome = true //false mati true nyala
global.left = true //false mati true nyala
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})