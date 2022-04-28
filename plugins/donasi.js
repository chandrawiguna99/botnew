let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081211423262]
╰────

╭─「 Donasi • Non Pulsa 」
│ • JAPRI OWNER wa.me/625861009691
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
