import fetch from 'node-fetch'

let handler = async (m, { usedPrefix, command, conn, args }) => {
  if (!args[0]) throw `*🚩 Example:* ${usedPrefix}${command} Zhao Lusi`;
  m.reply(wait)
  try {
    let response = await fetch(`https://aemt.me/pinterest?query=${args[0]}&text`);
    let data = await response.json();   
    let old = new Date()
    let limit = Math.min(5, data.result.length);
    for(let i = 1; i <= limit; i++) { 
      await sleep(3000);
      conn.sendFile(m.chat, data.result[i], 'pin.png', `🍟 *Fetching* : ${((new Date - old) * 1)} ms`, m);
    }
  } catch (e) {
    throw `${eror}`;
  }
}


handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['pinterest'] 

export default handler

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}