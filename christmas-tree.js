let stuff = [ '.', '~', "'", 'O', "'", '~', '.', '*' ]
let treeSize = 9

let w = 1
let r = stuff.length - 1

for (let n = 1; n <= treeSize; n ++) {
	let treePart = ''
	for (let i = treeSize - n; i > 0; i --) {
		treePart += ' '
	}
	for (let i = 1; i <= w; i ++) {
		treePart += `${stuff[r]}`
		if (r > 5) {
			r = 0
		} else {
			++ r
		}
	}
	w += 2
  console.log(treePart)
  treePart = ''
}

console.log('** Merry Christmas **')
