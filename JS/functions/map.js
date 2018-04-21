let phoneNumbers = [
    {
        "phone_number": "8793362715"
    },
    {
        "phone_number": "9881144581"
    },
    {
        "phone_number": "8888888802"
    }
]

const transformPhoneNumbers = phoneNumbers => phoneNumbers.map(phoneNumber => '91' + phoneNumber.phone_number)
console.log(transformPhoneNumbers(phoneNumbers))

console.log(phoneNumbers.map(a => a.phone_number))