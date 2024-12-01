import { mkdir, readdir } from 'node:fs/promises'

const session = process.env['AOC_TOKEN']

if (!session || session === '') {
	console.error('No session token provided')
	process.exit(1)
}

const dirContent = await readdir(import.meta.dir, { withFileTypes: true})
const directories = dirContent.filter(dir => dir.isDirectory()).map(dir => dir.name).sort()

const dayNumber = parseInt(directories[directories.length -1].split('-')[1]) + 1
const dayName = `day-${dayNumber}` // need to add more logic here
const inputUrl = `https://adventofcode.com/2024/day/${dayNumber}/input`

await mkdir(`./${dayName}`).catch(() => {
	console.error(`Day ${dayNumber} already exists`)
	process.exit(1)
})

const input = await fetch(inputUrl, { headers: { Cookie: `session=${session};` }}).then(res => res.text())

Bun.write(`./${dayName}/input.txt`, input)
Bun.write(`./${dayName}/solution.ts`, await Bun.file('./solution-init.ts').text())

console.log((`Day ${dayNumber} created`))





