let handler = async (m, { conn }) => {
	let user = global.db.data.users[m.sender]
	let pickaxe = global.db.data.users[m.sender].pickaxe
    let __waktur = (new Date - global.db.data.users[m.sender].lastmining)
    let _waktur = (600000 - __waktur)
    let waktur = clockString(_waktur)
    let hasil = (pickaxe == 1 ? Math.floor(Math.random() * 8) : '' || pickaxe == 2 ? Math.floor(Math.random() * 13) : '' || pickaxe == 3 ? Math.floor(Math.random() * 17) : '' || pickaxe == 4 ? Math.floor(Math.random() * 20) : '' || pickaxe == 5 ? Math.floor(Math.random() * 25) : '' )
    let hasiiil = (pickaxe == 1 ? Math.floor(Math.random() * 20) : '' || pickaxe == 2 ? Math.floor(Math.random() * 30) : '' || pickaxe == 3 ? Math.floor(Math.random() * 40) : '' || pickaxe == 4 ? Math.floor(Math.random() * 50) : '' || pickaxe == 5 ? Math.floor(Math.random() * 60) : '' )
    let hasiil = (pickaxe == 1 ? Math.ceil(Math.random() * 500) : '' || pickaxe == 2 ? Math.ceil(Math.random() * 400) : '' || pickaxe == 3 ? Math.ceil(Math.random() * 300) : '' || pickaxe == 4 ? Math.ceil(Math.random() * 250) : '' || pickaxe == 5 ? Math.ceil(Math.random() * 200) : '' )
    let konz = Math.floor(Math.random() * 100)
   let goa = (pickRandom(['Finally', 'Found it!', 'The cave is too big', 'Its deep', 'Finally found it!', 'Finding it', 'Lots of rocks!', 'Looks like a nice cave' ]))
    let done = (pickRandom(['huuh', 'So done', 'Looks like trash', 'Sounds good', 'Need to upgrade this pickaxe for good results', 'Trash!', 'GG', 'Just a lot of rocks' , 'Little iron', 'Little diamond', 'How much Diamond', 'How much Iron']))
            
    if (pickaxe > 0) {
    if (global.db.data.users[m.sender].pickaxedurability > 99) {
    if (new Date - global.db.data.users[m.sender].lastmining > 600000) {
       
global.db.data.users[m.sender].lastmining = new Date * 1
global.db.data.users[m.sender].diamond += hasil * 1 
global.db.data.users[m.sender].iron += hasiiil * 1 
global.db.data.users[m.sender].batu += hasiil * 1 
global.db.data.users[m.sender].pickaxedurability -= konz * 1

          setTimeout(() => {
          	m.reply(`${selesai}
Akhirnya Kamu Mendapatkan :
💎 ${hasil} Diamond
⛓️ ${hasiiil} Iron Dan
🗿 ${hasiil} Batu`)
          }, 20000)
          
          setTimeout(() => {
          	m.reply(`Dan Akhirnya Kamu Mendapatkan ${hasil} diamond!`)
                     }, 18000) 

                     setTimeout(() => {
                     m.reply(`Kamu Juga Mining Iron Dan Mendapat ${hasiiil} Iron`)
                      }, 15000)

                     setTimeout(() => {
                     m.reply(`Kamu Menggali Dan Mendapatkan ${hasiil} Batu Untuk Mencari Diamond`)
                     }, 14000) 

                     setTimeout(() => {
                     m.reply(`${goa}`)
                     }, 10000) 

                     setTimeout(() => {
                     m.reply('_Sedang Mencari Goa..._')
                     }, 0) 
                     
        } else m.reply(`You are exhausted and lazy to mine, Please wait for ${timer} again to mine!!`)
         } else m.reply(`Your pickaxe will be destroyed upgrade soon!`)
     } else m.reply(`You don't have a Pickaxe yet, buy it now by typing .buy pickaxe !!`)
 }

handler.help = ['mining']
handler.tags = ['rpg']
handler.command = /^(mining)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
