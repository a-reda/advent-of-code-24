
const input = await Bun.file(`${import.meta.dir}/input.txt`).text()


const listA: number[] = []
const listB: number[] = []

input.split('\n').forEach(element => {
	if (!element) {
		return
	}
	const [a , b] = element.split('   ')

	listA.push(parseInt(a))
	listB.push(parseInt(b))
}) 


listA.sort()
listB.sort()

console.log(listA.length, listB.length)

const result = listA.reduce((acc, current, index) => acc + Math.abs(current - listB[index]), 0)

console.log(result)
