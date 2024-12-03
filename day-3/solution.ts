const input = await Bun.file(`${import.meta.dir}/input.txt`).text()


const r = /mul\((\d+),(\d+)\)/g // solution 1
const r2 = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g // solution 1

let sum = 0
let multiplier = 1
for (const i of input.matchAll(r2)) {

	if (i[0] === "do()") {
		multiplier = 1
	} else if (i[0] === "don't()") {
		multiplier = 0
	} else {
		sum += parseInt(i[1]) * parseInt(i[2]) * multiplier
	}

}

console.log(sum)
