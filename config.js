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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348121303497";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_57_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MixcbiAgICAgICAgODksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICAyMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDc0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDQyLFxuICAgICAgICA1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICA3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQjVNWXg5Y2FZblhlYkQ2bHVqd0JzMlhtK1dxanNKcEVaaFNETlpRTWtDMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTIxMzAzNDk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRTg5NTJBMTY3NUFCOTkxODYxRUE3RDQzRTdDNjdDM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkxMDc4MTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZFRMcDVFNzJUb2kzVGZoSmw2VWlCZ1wiLFxuICBcInBob25lSWRcIjogXCI4OTI0ZDczZS05ODkyLTQ3NTktYTQxZS0wZDVhMzlkYTZmZWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMjA2LFxuICAgICAgMTE5LFxuICAgICAgMTMyLFxuICAgICAgNzEsXG4gICAgICAxNjgsXG4gICAgICAxNzcsXG4gICAgICA5OSxcbiAgICAgIDE2NSxcbiAgICAgIDIwNSxcbiAgICAgIDIxMSxcbiAgICAgIDIwMyxcbiAgICAgIDIyOSxcbiAgICAgIDIwMixcbiAgICAgIDU5LFxuICAgICAgMjksXG4gICAgICAyMzMsXG4gICAgICAxMDEsXG4gICAgICAyMTIsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMzgsXG4gICAgICAyMTQsXG4gICAgICAxMzAsXG4gICAgICA3NyxcbiAgICAgIDEzOSxcbiAgICAgIDc3LFxuICAgICAgMjgsXG4gICAgICA5NixcbiAgICAgIDIzOSxcbiAgICAgIDQsXG4gICAgICA1MixcbiAgICAgIDI0OCxcbiAgICAgIDE1MCxcbiAgICAgIDE3MSxcbiAgICAgIDIzOCxcbiAgICAgIDE1NSxcbiAgICAgIDk1LFxuICAgICAgODgsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWV0JKMlBRUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyMTMwMzQ5Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTM5NjIwMjgyNTczOTE6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdVZoWEFRNElIZXN3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhaL1dOd1VadXh4Q2grd0lJdGdWQ0xPVkpYSE5nTkU5eE0vWmVlUEdnazg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVHBZNVN4NVppZnh2VFVlK29MNm5UY0hLV2N1N0pyWmFDVzh0YXdlRlpOeW1VN01ONGtLVWxBdlZyWHlsUExsR1gwZms3MGtDQXhreHNmZitlS1NKQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZEJ2WEJVTWFwbnZDRjVvVldNVG92aFh6RmdFekg2ZjI2YWJvcDBUWlpIM0V0SnUwQTY4VFk5ZjU4bUVWUDdLL3ZmYitVVk9aejBqWmJTRzJhNXdQREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyMTMwMzQ5Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkxMDc4MTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQTmxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBObC5qc29uIjogIntcImtleURhdGFcIjpcIkRmV2RZdTNOSXpjTHp6MEppSEJLdVVDUjlva055NEtQMGtCdVBCRHJleGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjM0OTY1NzA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkxMDc4MTg0NTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
