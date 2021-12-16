const {
	default: makeWASocket,
	WASocket, 
	AuthenticationState,
	WAMessage, 
	Contact, 
	SocketConfig, 
	DisconnectReason, 
	BaileysEventMap,
	GroupMetadata,
	AnyMessageContent,
	MessageType,
	MiscMessageGenerationOptions,
	BufferJSON,
	delay,
	useSingleFileAuthState,
	downloadContentFromMessage,
	generateWAMessage,
	generateWAMessageFromContent
} = require('@adiwajshing/baileys-md')
const fs = require("fs")
const moment = require("moment-timezone")
const { color } = require("../lib/color")
const { exec } = require("child_process")
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep } = require("../lib/myfunc");
sph = "き⃟🌹"
fake = "CAF-BOTz created by ©CAF 2K21"

let setting = JSON.parse(fs.readFileSync("./setting.json"))
let mess = JSON.parse(fs.readFileSync('./connect/mess.json'));
let {
imgPath,
ownerNumber,
ownerName,
botName
} = setting

// db
// let welcome = JSON.parse(fs.readFileSync("./database/welcome.json"))

module.exports = async (cafnay, msg) => {
        try {
            const type = Object.keys(msg.message)[0]
            body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type == "templateButtonReplyMessage" && msg.message.templateButtonReplyMessage.selectedId) ? msg.message.templateButtonReplyMessage.selectedId : ''
            //cmd = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message[type].caption ? msg.message[type].caption : (type == 'videoMessage') && msg.message[type].caption ? msg.message[type].caption : (type == 'extendedTextMessage') && msg.message[type].text ? msg.message[type].text : (type == 'listResponseMessage') && msg.message[type].singleSelectReply.selectedRowId ? msg.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && msg.message[type].selectedButtonId ? msg.message[type].selectedButtonId : ""
            //button = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedDisplayText : ''
            budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
            //selectedButton = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
            //responseButton = (type == 'listResponseMessage') ? msg.message.listResponseMessage.title : ''
            if (cafnay.multi) {
            var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '.'
            } else {
            if (cafnay.nopref) {
            var prefix = ''
            } else {
            var prefix = cafnay.prefa
            }
            }
            const command = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
            const isCmd = body.startsWith(prefix)
            const { menu } = require("./help.js")
            const from = msg.key.remoteJid
            const isGroup = from.endsWith('@g.us')
            const sender = isGroup ? msg.participant : msg.key.remoteJid
            const isOwner = ownerNumber.includes(sender) 
            budy = (type === "conversation") ? msg.message.conversation : (type === "extendedTextMessage") ? msg.message.extendedTextMessage.text : ""
            const pushname = msg.pushName
            //const teh = msg.key.fromMe ? msg.user.jid : msg.contacts[sender] || { notify: jid.replace(/@.+/, "") };
            //const pushnames = msg.key.fromMe ? msg.user.name : teh.notify || teh.vname || teh.name || "Null Name"
            const args = body.trim().split(/ +/).slice(1)
            const q = args.join(" ")
            const botNumber = cafnay.user.id.split(':')[0] + '@s.whatsapp.net'
            //const totalchat = await cafnay.chats.all()
            const groupMetadata = isGroup ? await cafnay.groupMetadata(from) : ''
	        const groupName = isGroup ? groupMetadata.subject : ''
	        const groupId = isGroup ? groupMetadata.id : ''
	        const groupMembers = isGroup ? groupMetadata.participants : ''
	        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	        const isGroupAdmins = groupAdmins.includes(sender) || false

            const sendVn = (teks) => {cafnay.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true})}
            
            const isUrl = (url) => {
                return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
            }

            const reply = (string) => {
                cafnay.sendMessage(from, { text: string, qouted: msg })
            }
            
            cafnay.createMessage = async (jidnya, kontennya, optionnya) => {
            return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: cafnay.authState.creds.me.id,upload: cafnay.waUploadToServer})
            }
            //const. ku
            // CONST AUDIO
audio1 = fs.readFileSync('./AUDIO/nyz1.m4a')
audio2 = fs.readFileSync('./AUDIO/nyz2.m4a')
audio3 = fs.readFileSync('./AUDIO/nyz3.m4a')
audio4 = fs.readFileSync('./AUDIO/nyz4.m4a')
audio5 = fs.readFileSync('./AUDIO/nyz5.m4a')
audio6 = fs.readFileSync('./AUDIO/nyz6.m4a')
audio7 = fs.readFileSync('./AUDIO/nyz7.m4a')
audio8 = fs.readFileSync('./AUDIO/nyz8.m4a')
audio9 = fs.readFileSync('./AUDIO/nyz9.m4a')
audio10 = fs.readFileSync('./AUDIO/nyz10.m4a')
audio11 = fs.readFileSync('./AUDIO/nyz11.m4a')
audio12 = fs.readFileSync('./AUDIO/nyz12.m4a')
audio13 = fs.readFileSync('./AUDIO/nyz13.m4a')
audio14 = fs.readFileSync('./AUDIO/nyz14.m4a')
audio15 = fs.readFileSync('./AUDIO/nyz15.m4a')
audio16 = fs.readFileSync('./AUDIO/nyz16.m4a')
audio17 = fs.readFileSync('./AUDIO/nyz17.m4a')
audio18 = fs.readFileSync('./AUDIO/nyz18.m4a')
audio19 = fs.readFileSync('./AUDIO/nyz19.m4a')
audio20 = fs.readFileSync('./AUDIO/nyz20.m4a')
audio22 = fs.readFileSync('./AUDIO/nyz22.m4a')
audio23 = fs.readFileSync('./AUDIO/nyz23.m4a')
audio24 = fs.readFileSync('./AUDIO/nyz24.m4a')
audio25 = fs.readFileSync('./AUDIO/nyz25.m4a')
audio26 = fs.readFileSync('./AUDIO/nyz26.m4a')
audio27 = fs.readFileSync('./AUDIO/nyz27.m4a')
audio28 = fs.readFileSync('./AUDIO/nyz28.m4a')
audio29 = fs.readFileSync('./AUDIO/nyz29.m4a')
audio30 = fs.readFileSync('./AUDIO/nyz30.m4a')
audio31 = fs.readFileSync('./AUDIO/nyz31.m4a')
audio32 = fs.readFileSync('./AUDIO/nyz32.m4a')
audio33 = fs.readFileSync('./AUDIO/nyz33.m4a')
audio34 = fs.readFileSync('./AUDIO/nyz34.m4a')
audio35 = fs.readFileSync('./AUDIO/nyz35.m4a') 
// CONST AUDIO GURA
gura1 = fs.readFileSync('./GURA/gura1.m4a')
gura2 = fs.readFileSync('./GURA/gura2.m4a')
gura3 = fs.readFileSync('./GURA/gura3.m4a')
gura4 = fs.readFileSync('./GURA/gura4.m4a')
gura5 = fs.readFileSync('./GURA/gura5.m4a')
gura6 = fs.readFileSync('./GURA/gura6.m4a')
gura7 = fs.readFileSync('./GURA/gura7.m4a')
gura8 = fs.readFileSync('./GURA/gura8.m4a')
gura9 = fs.readFileSync('./GURA/gura9.m4a')
gura10 = fs.readFileSync('./GURA/gura10.m4a')
gura11 = fs.readFileSync('./GURA/gura11.m4a')
gura12 = fs.readFileSync('./GURA/gura12.m4a')
gura13 = fs.readFileSync('./GURA/gura13.m4a')
gura14 = fs.readFileSync('./GURA/gura14.m4a')
gura15 = fs.readFileSync('./GURA/gura15.m4a')
gura16 = fs.readFileSync('./GURA/gura16.m4a')
gura17 = fs.readFileSync('./GURA/gura17.m4a')
gura18 = fs.readFileSync('./GURA/gura18.m4a')
gura19 = fs.readFileSync('./GURA/gura19.m4a')
gura20 = fs.readFileSync('./GURA/gura20.m4a')
gura22 = fs.readFileSync('./GURA/gura22.m4a')
gura23 = fs.readFileSync('./GURA/gura23.m4a')
gura24 = fs.readFileSync('./GURA/gura24.m4a')
gura25 = fs.readFileSync('./GURA/gura25.m4a')
gura26 = fs.readFileSync('./GURA/gura26.m4a')
gura27 = fs.readFileSync('./GURA/gura27.m4a')
gura28 = fs.readFileSync('./GURA/gura28.m4a')
gura29 = fs.readFileSync('./GURA/gura29.m4a')
gura30 = fs.readFileSync('./GURA/gura30.m4a')
gura31 = fs.readFileSync('./GURA/gura31.m4a')
gura32 = fs.readFileSync('./GURA/gura32.m4a')
gura33 = fs.readFileSync('./GURA/gura33.m4a')
gura34 = fs.readFileSync('./GURA/gura34.m4a')
gura35 = fs.readFileSync('./GURA/gura35.m4a') 
gura36 = fs.readFileSync('./GURA/gura36.m4a')
gura37 = fs.readFileSync('./GURA/gura37.m4a')
gura38 = fs.readFileSync('./GURA/gura38.m4a')
gura39 = fs.readFileSync('./GURA/gura39.m4a')
gura40 = fs.readFileSync('./GURA/gura40.m4a')
gura41 = fs.readFileSync('./GURA/gura41.m4a')
gura42 = fs.readFileSync('./GURA/gura42.m4a')
gura43 = fs.readFileSync('./GURA/gura43.m4a')
gura44 = fs.readFileSync('./GURA/gura44.m4a')
gura45 = fs.readFileSync('./GURA/gura45.m4a')
gura46 = fs.readFileSync('./GURA/gura46.m4a')
gura47 = fs.readFileSync('./GURA/gura47.m4a')
gura48 = fs.readFileSync('./GURA/gura48.m4a')
gura49 = fs.readFileSync('./GURA/gura49.m4a')
gura50 = fs.readFileSync('./GURA/gura50.m4a')
gura51 = fs.readFileSync('./GURA/gura51.m4a')
gura52 = fs.readFileSync('./GURA/gura52.m4a')
gura53 = fs.readFileSync('./GURA/gura53.m4a')
gura54 = fs.readFileSync('./GURA/gura54.m4a')
// CONST AUDIO AOKIJI
kiji = fs.readFileSync('./kiji/kiji.m4a')
            
            /*cafnay.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
            let mime = (message).mimetype || ''
            let messageType = mime.split('/')[0]
            let extension = mime.split('/')[1]
            trueFileName = attachExtension ? (filename + '.' + extension) : filename
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
            }
            // save to file
            await fs.writeFileSync(trueFileName, buffer)
            return trueFileName
           }*/
            
            const sendContact = (jid, numbers, name, quoted, men) => {
            let number = numbers.replace(/[^0-9]/g, '')
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:' + name + '\n'
            + 'ORG:;\n'
            + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
            + 'END:VCARD'
            return cafnay.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : men ? men : []},{ quoted: quoted })
            }
            
const sendButton5 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "Github Owner",
              "url": "https://github.com/CAF-ID"
            }
          },
          {
            "callButton": {
              "displayText": "Call Owner",
              "phoneNumber": "6283167714830"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Donasi",
              "id": `${prefix}donasi`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Script",
              "id": `${prefix}sc`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
              "id": `${prefix}owner`
            }
          }
        ]
      }
    }
  }, {})
cafnay.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}
           
            const sendPhoto = (imageDir, caption) => {
                cafnay.sendMessage(from, {
                    image: fs.readFileSync(imageDir),
                    caption: caption
                })
            }
            
            const jsonformat = (json) => {
                return JSON.stringify(json, null, "\t")
            }

            const textButtons = (firstId, firstText, secondId, secondText, content) => {
                var buttonsContent = [
                    { buttonId: firstId, buttonText: { displayText: firstText }, type: 1 },
                    { buttonId: secondId, buttonText: { displayText: secondText }, type: 1 }
                ]

             //Button Text
             const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
             const buttonMessage = {
             contentText: text1,
             footerText: desc1,
              buttons: but,
              headerType: 1
              }
              cafnay.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
              }

                var msgContent = {
                    contentText: content,
                    footerText: 'CAF-BOTz - Multi Device',
                    buttons: buttonsContent,
                    headerType: 1
                }
                return msgContent
            }
            
            if (cafnay.mode == "self") {
            if (!msg.key.fromMe && !isOwner) return
            }
            
            if (cafnay.autoRead) {
            cafnay.sendReadReceipt(from, sender, [msg.key.id])
            }

const hour_now = moment().format('HH')
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'//'Pagi🌄'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'//'Pagi 🌅'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'//'Siang 🌞'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'//'Soree ☀️'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Selamat 🌠'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Malam 🌌'
} else {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Selamat Malam!'
}


const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum`at"; break;
case 6: hari = "Sabtu"; break;
}
switch(bulan) {
case 0: bulan = "Januari"; break;
case 1: bulan = "Februari"; break;
case 2: bulan = "Maret"; break;
case 3: bulan = "April"; break;
case 4: bulan = "Mei"; break;
case 5: bulan = "Juni"; break;
case 6: bulan = "Juli"; break;
case 7: bulan = "Agustus"; break;
case 8: bulan = "September"; break;
case 9: bulan = "Oktober"; break;
case 10: bulan = "November"; break;
case 11: bulan = "Desember"; break;
}
var Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;

//var groups = cafnay.chats.array.filter(v => v.jid.endsWith('g.us'))
//var private = cafnay.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
menunya = `*Menu cafnay Bot*

⏰ _*${ucapanWaktu}*_
*き⃟🌍 Date* : _${Tanggal}_
 Wib : _${wib}_
 Wit : _${wit}_
 Wita : _${wita}_
 
 
⛾ *Bot Info*
き⃟💞 Mode : _${cafnay.mode}_
- - - - - - - -
Your Name : _${pushname}_
Tag : _${sender}_


${menu(prefix)}`

        if (isCmd && !isGroup) {
			console.log(color('[CMD]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && isGroup) {
			console.log(color('[CMD]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }
        
        if (budy.startsWith("x ")) {
        if (!isOwner) return
        var bang = await eval(`;(async () => { return ${budy.slice(2)} })();`)
        reply(jsonformat(bang))
        }
        
        if (budy.startsWith("$ ")) {
        if (!isOwner) return
        exec(budy.slice(2), async (err, stdout) => {
        if (err) return reply(err)
        reply(stdout)
        })
        }
            
            switch(command) {
                case 'menu':
if (cafnay.modelmenu == "gif") {
// gif buttons 5
await sendButton5(from, menunya, fake, await cafnay.createMessage(from, {video: {url: "./media/cafnay.mp4", caption: menunya}, gifPlayback: true}))
} else if (cafnay.modelmenu == "image") {
// image button 5
await sendButton5(from, menunya, fake, await cafnay.createMessage(from, {image: {url: setting.imgPath, caption: menunya}}))
}
                break
//AUDIO BY CAF
case 'audio1':
            sendVn(audio1)
            break   
            case 'audio2':
            sendVn(audio2)
            break       
            case 'audio3':
            sendVn(audio3)
            break       
            case 'audio4':
            sendVn(audio4)
            break       
            case 'audio5':
            sendVn(audio5)
            break       
            case 'audio6':
            sendVn(audio6)
            break       
            case 'audio7':
            sendVn(audio7)
            break       
            case 'audio8':
            sendVn(audio8)
            break       
            case 'audio9':
            sendVn(audio9)
            break       
            case 'audio10':
            sendVn(audio10)
            break       
            case 'audio11':
            sendVn(audio11)
            break       
            case 'audio12':
            sendVn(audio12)
            break       
            case 'audio13':
            sendVn(audio13)
            break       
            case 'audio14':
            sendVn(audio14)
            break       
            case 'audio15':
            sendVn(audio15)
            break       
            case 'audio16':
            sendVn(audio16)
            break       
            case 'audio17':
            sendVn(audio17)
            break       
            case 'audio18':
            sendVn(audio18)
            break       
            case 'audio19':
            sendVn(audio19)
            break  
            case 'audio20':
            sendAudio(audio20)
            break 
            case 'audio21':
            sendVn(audio21)
            break   
            case 'audio22':
            sendVn(audio22)
            break   
            case 'audio23':
            sendVn(audio23)
            break   
            case 'audio24':
            sendVn(audio24)
            break   
            case 'audio25':
            sendVn(audio25)
            break   
            case 'audio26':
            sendVn(audio26)
            break   
            case 'audio27':
            sendVn(audio27)
            break   
            case 'audio28':
            sendVn(audio28)
            break   
            case 'audio29':
            sendVn(audio29)
            break   
            case 'audio30':
            sendVn(audio30)
            break   
            case 'audio31':
            sendVn(audio31)
            break   
            case 'audio32':
            sendVn(audio32)
            break   
            case 'audio33':
            sendVn(audio33)
            break   
            case 'audio34':
            sendVn(audio34)
            break   
            case 'audio35':
            sendVn(audio35)
            break               	
            //case gura voice
            case 'gura1':
            sendVn(gura1)
            break   
            case 'gura2':
            sendVn(gura2)
            break       
            case 'gura3':
            sendVn(gura3)
            break       
            case 'gura4':
            sendVn(gura4)
            break       
            case 'gura5':
            sendVn(gura5)
            break       
            case 'gura6':
            sendVn(gura6)
            break       
            case 'gura7':
            sendVn(gura7)
            break       
            case 'gura8':
            sendVn(gura8)
            break       
            case 'gura9':
            sendVn(gura9)
            break       
            case 'gura10':
            sendVn(gura10)
            break       
            case 'gura11':
            sendVn(gura11)
            break       
            case 'gura12':
            sendVn(gura12)
            break       
            case 'gura13':
            sendVn(gura13)
            break       
            case 'gura14':
            sendVn(gura14)
            break       
            case 'gura15':
            sendVn(gura15)
            break       
            case 'gura16':
            sendVn(gura16)
            break       
            case 'gura17':
            sendVn(gura17)
            break       
            case 'gura18':
            sendVn(gura18)
            break       
            case 'gura19':
            sendVn(gura19)
            break  
            case 'gura20':
            sendgura(gura20)
            break 
            case 'gura21':
            sendVn(gura21)
            break   
            case 'gura22':
            sendVn(gura22)
            break   
            case 'gura23':
            sendVn(gura23)
            break   
            case 'gura24':
            sendVn(gura24)
            break   
            case 'gura25':
            sendVn(gura25)
            break   
            case 'gura26':
            sendVn(gura26)
            break   
            case 'gura27':
            sendVn(gura27)
            break   
            case 'gura28':
            sendVn(gura28)
            break   
            case 'gura29':
            sendVn(gura29)
            break   
            case 'gura30':
            sendVn(gura30)
            break   
            case 'gura31':
            sendVn(gura31)
            break   
            case 'gura32':
            sendVn(gura32)
            break   
            case 'gura33':
            sendVn(gura33)
            break   
            case 'gura34':
            sendVn(gura34)
            break   
            case 'gura35':
            sendVn(gura35)
            break               	
            case 'gura36':
            sendVn(gura36)
            break       
            case 'gura37':
            sendVn(gura37)
            break       
            case 'gura38':
            sendVn(gura38)
            break       
            case 'gura39':
            sendVn(gura39)
            break       
            case 'gura40':
            sendVn(gura40)
            break       
            case 'gura41':
            sendVn(gura41)
            break       
            case 'gura42':
            sendVn(gura42)
            break       
            case 'gura43':
            sendVn(gura43)
            break       
            case 'gura44':
            sendVn(gura44)
            break       
            case 'gura45':
            sendVn(gura45)
            break       
            case 'gura46':
            sendVn(gura46)
            break       
            case 'gura47':
            sendVn(gura47)
            break       
            case 'gura48':
            sendVn(gura48)
            break       
            case 'gura49':
            sendVn(gura49)
            break  
            case 'gura50':
            sendgura(gura50)
            break 
            case 'gura51':
            sendVn(gura51)
            break   
            case 'gura52':
            sendVn(gura52)
            break   
            case 'gura53':
            sendVn(gura53)
            break   
            case 'gura54':
            sendVn(gura54)
            break
//BATAS AUDIO NYA
case "donasi":
cafnay.sendMessage(from, {text: `${sph}  Donasi
*Gopay* : _083167714830_
*Dana* : _083167714830_
${sph}  Donasi Seikhlas Nya`, quoted: msg})
break

case "sc":
case "sourcecode":
case "scriptbot":
cafnay.sendMessage(from, {text: `Pastinya bukan sc gh atau sc yt:v`, quoted: msg})
break

case "setprefix":
if (!q) return reply("Masukan opts : [multi/nopref]")
if (q == "multi") {
cafnay.nopref = false
cafnay.multi = true
reply("Done change prefix to "+q)
} else if (q == "nopref") {
cafnay.multi = false
cafnay.nopref = true
reply("Done change prefix to "+q)
} else {
cafnay.nopref = false
cafnay.multi = false
cafnay.prefa = q
reply("Done change prefix to "+q)
}
break

case "owner":
for (let i of ownerNumber) {
sendContact (from, i.split("@")[0], "Owner Bot - "+botName, msg)
}
break

case "setmenu":
if (!q) return reply(`Masukan opts :\n
${sph}gif
${sph}image`)
if (q == "gif") {
cafnay.modelmenu = "gif"
reply("Done change menu to "+q)
} else if (q == "image") {
cafnay.modelmenu = "image"
reply("Done change menu to "+q)
} else {
reply(`Masukan opts :\n
${sph}gif
${sph}image`)
}
break
                 /* case prefix + "welcome": {
                    if (!isGroup) return reply(mess.OnlyGrup)
                    if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                    if (args.length == 0) return reply(`Pilih on atau off`)
                    if (args[0].toLowerCase() == "on") {
                      if (isWelcome) return reply(`Udah aktif`)
                      welcome.push(from)
                      fs.writeFileSync("./database/welcome.json", JSON.stringify(welcome))
                      reply("Welcome di group ini aktif")
                    } else if (args[0].toLowerCase() == "off") {
                      //if (!isAntiLink) return reply("Anti link di group ini belum pernah aktif")
                      let anu = welcome.indexOf(from)
                      welcome.splice(anu, 1)
                      fs.writeFileSync("./database/welcome.json", JSON.stringify(welcome))
                      reply("Welcome di group ini mati")
                    } else {
                      reply(`Pilih on atau off`)
                    }
                  }
                  break */

        case 'p':
              const buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]

const buttonMessage = {
    text: "Hi it's button message",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}
cafnay.sendMessage(from, buttonMessage)
               break
               
////////////////////END BRAY..... /////////////////////
            }
        } catch (e) {
            console.log(e)
        }
}