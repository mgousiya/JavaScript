const message = 'Hello world!'

const faltuMessage ='  Hi, I am Gousiya.'
const finalMessage = faltuMessage.trim()
const finalMessageLowerCase = faltuMessage.trim().toLocaleLowerCase()
const replacedMessage = finalMessage.replace('Hi', 'Hello')

const lastFourDigits = '7856'
const maskedAccountNumber = lastFourDigits.padStart(16,'*')

const capitalMessage = message.toUpperCase()

const concatenatedString = `Last four digit of my account number is `.concat('lastFourDigits')
const templateString = `My Account number is ${lastFourDigits}`