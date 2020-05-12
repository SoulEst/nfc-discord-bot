const Discord = require("discord.js")

module.exports.gpuEmbed  = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('GPU Info')
	.setDescription('GPU fitment presents an interesting challenge in the S4M. The community maintains the following list of GPU compatibility with the S4M chassis.')
	.addFields(
		{ name: 'Maximum slots', value: 'Two (2)', inline: true },
		{ name: 'Maximum card length', value: '215mm', inline: true },
        { name: 'Maximum card height', value: '111mm (without mods)', inline: true },
        { name: 'Current most powerful non-mod GPU', value: 'Inno3D/Galax/KFA2/ELSA RTX 2070 (non-SUPER)' },
        { name: 'Current most powerful mod-required GPU', value: 'Zotac GTX 1080 Mini' },
        { name: 'Community GPU spreadsheet', value: 'https://docs.google.com/spreadsheets/d/1H7F9lVWRqY5UHa9y0bOolioUddbVZYbhnz5A5FsVyN0/edit?pli=1#gid=2119905704'}
	)

module.exports.bricklessEmbed  = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Brickless Fitment Info')
    .setDescription('"Brickless" is a configuration where the the entire power supply function (both AC->DC conversion and DC voltage step-down) is housed inside the S4M chassis. ' + 
                    'This is in contrast to "brick" configurations, where the AC->DC conversion is done by a power brick (most commonly a Dell 330w unit) that lives outside the chassis.')
	.addFields(
        { name: 'Standard Layout', value: 'The most common brickless configuration is using an HDPLEX 400W AC-DC module along the side of the chassis near the GPU ' + 
                                    'to convert mains power input to 19V DC output. This is then fed to an HDPLEX 400W HiFi DC-ATX module, which converts the 19V ' +
                                    'to the various voltages and connectors necessary for the motherboard, GPU, and SATA drives (if used).' }
	)