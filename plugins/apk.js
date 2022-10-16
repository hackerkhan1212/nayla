let axios = require("axios")
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Command nya', m)
	await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://telegra.ph/file/232f4302a0240b8cd0d97.png',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
	axios.get(`https://api.lolhuman.xyz/api/playstore?apikey=85faf717d0545d14074659ad&query=${text}`).then ((res) => {
	 	let hasil = `
Name App : ${result.title}
AppId : ${result.appId}		
Link download : ${result.url}
Want to download right away? Type .apkdl (AppId)`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['apk (keywords)']
handler.tags = ['apk']
handler.command = /^(apk)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
