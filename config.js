const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "7044170098";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_13_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDksXG4gICAgICAgIDYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDMxLFxuICAgICAgICA5MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAwLFxuICAgICAgICAzMCxcbiAgICAgICAgODksXG4gICAgICAgIDM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNTYsXG4gICAgICAgIDczLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0LFxuICAgICAgICA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDczLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDU5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhaeFg5K2w4WE9aZlJ1UThvUUFrTnN4Q0U1TU9NUU54UlUyajJFNDhhOG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA0NDYyNzY2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0JDNkQwQzA0MjU2QjU5OEFBNTZBNzdGOTE2QzU4Q0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NjI0Nzg0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA0NDYyNzY2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0RGQTA5RjYxNkVEMUNBMTY3NUM0QTIyREQ1QzY5NDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NjI0Nzg1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk00eWdyUzZJUmhxa3Nac2g2SmtOMFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjUzOGVkYmEtZmU4OS00ZGZlLThiZjItOWQzOGNmMzhlYzRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTIsXG4gICAgICAxNTIsXG4gICAgICA5LFxuICAgICAgMjE0LFxuICAgICAgOCxcbiAgICAgIDEwMyxcbiAgICAgIDYsXG4gICAgICAxMTksXG4gICAgICAxMTcsXG4gICAgICA5MyxcbiAgICAgIDExNixcbiAgICAgIDU4LFxuICAgICAgMTU2LFxuICAgICAgMTEyLFxuICAgICAgOTgsXG4gICAgICAxNDksXG4gICAgICA0LFxuICAgICAgMjIsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAxODEsXG4gICAgICAyMDAsXG4gICAgICAxOTMsXG4gICAgICAyNTAsXG4gICAgICA0OCxcbiAgICAgIDg1LFxuICAgICAgOTEsXG4gICAgICA0NSxcbiAgICAgIDIzMCxcbiAgICAgIDE0NCxcbiAgICAgIDk0LFxuICAgICAgNDYsXG4gICAgICAxMixcbiAgICAgIDExNyxcbiAgICAgIDMwLFxuICAgICAgNjgsXG4gICAgICAyMTMsXG4gICAgICAxODEsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDS1ZNTE1FQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0NDYyNzY2NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzQxODI1OTIwMjA2NDc6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYkR2dElDRUl1N3hySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldNU1RRbUdvalhQNCtINlpucnJHNTVRemM0YUozWi9iNVc0ZHEzWnorVFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicCtkdDlnOHRXVS9BMEdUVXcxYlNLTkVBRXZLVFBwSmkzTnZ5aFJlNU91cVFyems1WlNTZWdEUDQ3UmtwMXpNM3JEYS96aDI5c05MU3hlRTNwSFllQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNnlIbVFmOHJOUTl1MnVwcGFPV1FFd2FLL29nb3cwTWNucXY3Vyt0SENqVTlZTWtlNG9PYithSkF5aVRYd08yK1o5ZWZFNExUNkhzZzJXZmRjNk5NZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0NDYyNzY2NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NjI0NzgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjVZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCNVkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKdzRYbTUvRWJnZGo3VjB3L1d1V20wbDFtQTZNRXBMcWI3eUpKbUVJU2pFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwOTg2MTg2MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2NjI0Nzg2NjM4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
