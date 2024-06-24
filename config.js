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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347062886232";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_38_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDY3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzLFxuICAgICAgICA0NCxcbiAgICAgICAgNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzksXG4gICAgICAgIDcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk4LFxuICAgICAgICA0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZR3FGajBNdCtxT25vMWVLczFNUzB2Q0pTTVp3U28weUtXQ1pwZXMrRHR3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjI4ODYyMzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQUQ2QkMzQjVBQ0U5NDk4REI1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTI2NTA4OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJucXh6eHBfUFJhdWVmT0tTVjQ3a2ZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNkNmY2MWFkLTQ5MGQtNDM1OS05YzJlLWU4NTNjODU4NDgxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAxNjcsXG4gICAgICAyMDAsXG4gICAgICA5MSxcbiAgICAgIDE0NyxcbiAgICAgIDQzLFxuICAgICAgMjE4LFxuICAgICAgMTY1LFxuICAgICAgOTQsXG4gICAgICAxOTIsXG4gICAgICA2NSxcbiAgICAgIDIxNyxcbiAgICAgIDE5MCxcbiAgICAgIDI0MCxcbiAgICAgIDIzMCxcbiAgICAgIDYzLFxuICAgICAgMTUyLFxuICAgICAgMTMsXG4gICAgICAxOTksXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDE2MyxcbiAgICAgIDIwMSxcbiAgICAgIDE1LFxuICAgICAgNTIsXG4gICAgICAyMjQsXG4gICAgICAyNDQsXG4gICAgICAyMTgsXG4gICAgICA3NyxcbiAgICAgIDM1LFxuICAgICAgODYsXG4gICAgICAxNTMsXG4gICAgICAxNyxcbiAgICAgIDEyNSxcbiAgICAgIDU1LFxuICAgICAgMTM4LFxuICAgICAgMTY0LFxuICAgICAgMjgsXG4gICAgICAxMzcsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjdQODhHVDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjI4ODYyMzI6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MDg3NTM2MzUyMDUyMzoxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn6e4QkFEQk9ZIFZJQ1RPUvCfp7hcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdjh2NjhIRUxETzU3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkF4SWZRclo5V2VWbkpJME9ZeUwvdHFjYjBXMld2Z2tYVU5ETitLSjVEVmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieGlVMW10Y1RSVXQ5aXVLcW9uZGFFaXFld1p4cnZoTlRPZDlvSndZVWswNldLN1NGeEQ0TUZNL0F2blg5cllSTW5vWjN3TDFQZ0Y1SUZwTG9lMVN6Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiamJ0NUcrbDdkQlkxdmRld1ZlOXV6QTljNGtOVjVLODd4UGRQRVVRakM1UEp5YUV4ZFZiUzh4MDNJK0NnVXhpYUZXN0MxRHE2dU1mbUdONXZHc1RVQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2Mjg4NjIzMjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTI2NTA4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdqRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2pGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL2tvVExsS0lSaDVHZ3hnK0xXdlFURTRCWVRTRG1SSHNieG00UVJ3Ym9oOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTc4NjYyNDkxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkyNjUwODMxNzZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "badboyvictor",


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
