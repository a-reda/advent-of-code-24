const input = await Bun.file(`${import.meta.dir}/input.txt`).text()

const reports = input.replace(/\n+$/, "").split("\n")


const isSafe = (array: number[]) => {
	let isReportIncreasing;

	for(let i = 1; i < array.length; i++ ) {
		const diff = array[i-1] - array[i]
		const absDiff = Math.abs(diff)

		if (i === 1) {
			isReportIncreasing = diff > 0
		}
		
		const isIncreasing = diff > 0

		if (absDiff >= 1 && absDiff <= 3 && isIncreasing == isReportIncreasing ) {
			continue
		} else {
			return false
		}
	}

	return true 

}

const result = reports.reduce((acc, report) => {
	const array = report.split(' ').map(e => parseInt(e))

	return isSafe(array) ? acc + 1 : acc
}, 0)


const result2 = reports.reduce((acc, report) => {
	const array = report.split(' ').map(e => parseInt(e))

	if (isSafe(array)) return acc + 1

	for (let i = 0; i < array.length; i++) {
		if (isSafe([...array.slice(0, i), ...array.slice(i + 1, array.length)]) ) {
			return acc + 1
		}
	}

	return acc

}, 0)

console.log(result)
console.log(result2)
