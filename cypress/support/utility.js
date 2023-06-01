export function getRandomString (length) {
	const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let result = ''
	for (let i = 0; i < length; i++) {
		result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
	}
	return result
}
  
export function randomNum () {
	if (seedValue === 9999) {
		seedValue = 0
	}
	seedValue += 1
	const time = new Date().getTime().toString()
	const random = ('000' + seedValue).slice(-4).toString()
	return time + random
}