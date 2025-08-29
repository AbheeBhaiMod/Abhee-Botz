qqconst fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9aemo5WEpBcW4yYXlERWRzNG1lZW5QM1hXeGl6c2JZMDMybWkwMFpsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnFxdkdIVzI3a09CK0IwSDBDZ0l2dStSZWUxZU5jMzZCNTVMNENsdFEwWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SUV6dXNqeEtXbmlLdnZsZVVZTkxzaG1YQS9rQVlNYklGcFJ1bFdsRlg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjbkN0RDlkM2R3UHVzNTRvNDZQdEJaL2lVcjFyUkxSVkFCY0VDeE0xMHpZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQMTR5c0JTR2c4WlNmK2dqR080NWsvdSs1NW8xL1VUbnEyWFBxQ1ViRXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBBM09uRndpYmNMamcvQkF0UWErbUdIdk11Uy9aaXdzcytVNnNETDBwekE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUQ3ZVZJWjg2T21TSnIwbHVGZS9iUkVKN25GTDJ2THJ0VmlWVXF3bVcxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlBHd0t1Z3pxTVlLUjNRN000Um9uU1VNSHZsMm1UYmZWN05jdDh4RTcwYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldvWTJvdnkzOTNDUHFDSWZ5alMrMDBXSDlKMHBJZFlOUzZCdzMrd256VjhKMFlVT3RrSm1ScFhYalVuY3JzMlh1Nlg3d2ZvRUkyOFkzSFQxNmxiampRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6InR2dGZmQVNmazA0SVplZy9BY1gzOG50QS90TnR2WTZnbndRUWdRbVU1aVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzI2NDkxMzAwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ5OTgxNEFGMUZFMEUyMjBDQjFDQzdCNDA0N0QwRENBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY0OTIyMzB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjZKQUc1QzEzIiwibWUiOnsiaWQiOiI5MjMzMjY0OTEzMDA6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBYmhlZWJoYWkiLCJsaWQiOiIyMjE4MjcwNDEzNzQzMzQ6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lEdHVyNEdFTURqeDhVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpERVdpVU14QlNYNnVXYkhVVFZ6MnRyTXhLaGxCQUdJdU5iZWhacXlUaTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImMzc0xHZWpiT2FGSk16bDlyYXI4YWNkRE9oVlpCdW14S2hvRWVFSnFLNGdGb2tKM1lkUGJaSVJla1NrbkFmTVBJb0hjRWZYcjVrUTNoN2srRXMwOURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEbnBMMDFERjFoYnFhT2NOVmFPOFdQY0F1S2J6UzdIK0R5azhIektkazliNi9NcXowMitlUWhDMDZEaG4vNzFrYVVNYW85b0kxRjlKNCtvdEdRTCtnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMyNjQ5MTMwMDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN3eEZvbERNUVVsK3JsbXgxRTFjOXJhek1Tb1pRUUJpTGpXM29XYXNrNHQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjQ5MjIyNywibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNQU0ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY AbheeBhai Botz ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Abhee_Hacker_𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923326491300",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Abhee_HACKER_MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Abhee_HACKER_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
