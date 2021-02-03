let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Three Ind [0895412691100]
│ • Telkomsel [082313021398]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
