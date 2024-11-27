const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); // request package.json "@dark-yasiya/yt-dl.js": "latest"


cmd({
    pattern: "yt",
    alias: ["ytmp3","ytsong"],
    react: "🎶",
    desc: "Download Youtube song",
    category: "download",
    use: '.song < Yt url or Name >',
    filename: __filename
},
async(conn, mek, m,{ from, prefix, quoted, q, reply }) => {
try{

if(!q) return await reply("Please give me Yt url or Name")
	
const yt = await ytsearch(q);
if(yt.results.length < 1) return reply("Results is not found !")

let yts = yt.results[0]  
const ytdl = await ytmp3(yts.url)
		
let ytmsg = `
*╔══════✮❁•°♛°•❁✮ ══════╗*
❤️️𝐈𝐒𝐇𝐔 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑❤️️
*╚══════✮❁•°❀°•❁✮══════╝*

🎵 TITLE : ${yts.title}
🤵 AUTHOR : ${yts.author.name}
⏱ RUNTIME : ${yts.timestamp}
👀 VIEWS : ${yts.views}
🖇️ URL : ${yts.url}
*¸,ø¤º°`°º¤ø,¸¸,ø¤º°°º¤ø,¸¸,*
`
// SEND DETAILS
await conn.sendMessage(from, { image: { url: yts.thumbnail || yts.image || '' }, caption: ${ytmsg}}, { quoted: mek });

// SEND AUDIO TYPE
await conn.sendMessage(from, { audio: { url: ytdl.download.url }, mimetype: "audio/mpeg" }, { quoted: mek })

// SEND DOC TYPE
await conn.sendMessage(from, { document: { url: ytdl.download.url }, mimetype: "audio/mpeg", fileName: ytdl.result.title + '.mp3', caption: ${ytdl.result.title} }, { quoted: mek })


} catch (e) {
console.log(e)
reply(e)
}}
)
