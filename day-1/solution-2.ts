
const input = await Bun.file(`${import.meta.dir}/input.txt`).text()

const listA: number[] = []
const listB: Map<number, number> = new Map()

input.split('\n').forEach(element => {
	if (!element) {
		return
	}
	const [a , b] = element.split('   ')

	const aInt = parseInt(a)
	const bInt = parseInt(b)
	listA.push(aInt)

	if (listB.has(bInt)) {
		listB.set(bInt, listB.get(bInt)! + 1)
	} else {
		listB.set(bInt, 1)
	}
}) 


const result = listA.reduce((acc, current) => {
	const multiplier = listB.get(current) || 0 
	return acc + multiplier * current
}, 0)

console.log(result)

