const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/RQOPG85.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "╒✦•=============•••••••••============•✦
│ CREATER : LAKSIDU NIMSARA
│ VERSION : ᴠ.2.5.0
│ UPTIME  :  1 hour, 28 minutes, 6 seconds
│ ʀᴀᴍ ᴜꜱᴀɢᴇ  : 48.07MB / 63276MB
│ HOST NAME : 64ce5d1c-2f9d-4f90-bd6e-3d8e6965a3f9
╘✦•================•••••••••===============•✦
────────────────
💜𝐐𝐔𝐄𝐄𝐍 𝐈𝐒𝐇𝐔 𝐀𝐋𝐈𝐕𝐄 𝐍𝐎𝐖💜
────────────────
╭──────────────
│ 💜 වික්ශිප්ත ආකාසත් කියනවා විටෙක දුක්බර කතාවක්🌥️
│ 💜 කදුලු ලෙස වැටෙනවා නොව්ව් ද එහි විඩාවත්🌧️
│ 💜 දාරාන තවමත් ප්‍රේම කරනවා නොවෙනස්  සූරියකාන්තත්🌻
│ 💜 කොච්චර රිදුනත් බලාන ඉන්නවා තවටත් සූර්යයා දිහාත් 🌞
│ 💜 පතොකුත් විටෙකදී ඉල්ලනවා නොවෙද සැනසිමට වැහි බින්දුත් 🌵
│ 💜 වැස්සත් දන්නවා බලාන ඉන්නවමයි කියන්න පතොකුත් 🌧️🌵
│ 💜 හරියට අපි වගේමයි ස්වභාව ධර්මයත් 😊
│ 💜 ආදරයෙන් බලාන ඉන්න හැමෝම දවසක එකතු වෙන්න ඕනි ඒක මගෙ පුන්චි ප්‍රාර්ථනාවක්හරි ආදරයෙන් 💐❤️
│ 💜 ස්තූතිය....!
⁠⁠⁠⁠╰─────────────
© CREATED BY LAKSIDU NIMSARA · · ·",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "QUEEN ISHU",
};
