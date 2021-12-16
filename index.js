const { 
default: makeWASocket, 
DisconnectReason, 
AnyMessageContent, 
delay, 
useSingleFileAuthState 
} = require('@adiwajshing/baileys-md')
const P = require("pino")
const { color, cafnayLog } = require("./lib/color")
const { Boom } = require("@hapi/boom")
const fs = require("fs")
setting = JSON.parse(fs.readFileSync("./setting.json"))
const { state, loadState, saveState } = useSingleFileAuthState(setting.sesionName+".json")

require("./connect/cafnay")
nocache("./connect/cafnay", (module) => console.log(cafnayLog(`Module "${module}" terupdate`)))
require("./connect/help")
nocache("./connect/help", (module) => console.log(cafnayLog(`Module "${module}" terupdate`)))

/* sebelom pake mampir rest api gw dulu :
  https://api.ardyapi.xyz
  https://app.ardyapi.rf.gd
*/

async function start() {
  console.log(cafnayLog("[MADE WITH Xcafnay]"))
  const cafnay = await makeWASocket({
    logger: P({ level: 'debug' }),
    browser: ["cafnay-Md","Safari","1.0.0"],
    printQRInTerminal: true,
    auth: state
  })
  console.log(color("Connected"))
  
  cafnay.prefa = "."
  cafnay.multi = true
  cafnay.nopref = false
  cafnay.mode = "public"
  cafnay.autoRead = true
  cafnay.modelmenu = "gif"
  
  cafnay.ev.on("messages.upsert", async m => {
    if (!m.messages) return
    xcafnay = m.messages[0]
    require("./connect/cafnay")(cafnay, xcafnay)
  })
  
  cafnay.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update
    if (connection == "close") {
      lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
                ? start()
                : console.log(cafnayLog('connection closed'))
    }
  })
  
  cafnay.ev.on('creds.update', saveState)
  
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 function nocache(module, cb = () => { }) {
    console.log(color(`Module '${module}'`), color(`Dipantau oleh Xcafnay Team`, "white"))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

start()
