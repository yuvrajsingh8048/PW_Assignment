// ************ Question 01 *************
//  Sucessfully initialize package.json file

// ************** Question 02 ********************

// Sucessfully write a text in input.txt file

// **************** Question 03 ************************

// const { isUtf8 } = require('buffer')
// const fs = require('fs')

// fs.readFile('input.txt', function(err, data) {
//     if(err) {
//         console.log('Error in reading a file', err)
//     }
//     else {
//         console.log('Sucessfully read a file')
//         console.log('Data : ' ,data.toString())
//     }
// })

// ******************** Question 04 *****************

// const appendData = "Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop."
// fs.appendFile('input.txt', appendData, 'utf8', function(err, data) {
//     if(err) {
//         console.log('Error in appending a File')
//     }
//     else {
//         console.log('File Append Sucessfully')
//     }
// })


// ************************* Question 05 *****************

// fs.unlink('input.txt', function(err) {
//     if(err) {
//         console.log('Error in deleting a File')
//     }
//     else {
//         console.log('Successfully Delete a File')
//     }
// })

// ********************* Question 06 ***********************
// const os = require('os')
// console.log('Operating system name : ', os.type())
// console.log('OS Release : ', os.release())

// *************** Question 07 ************************

const http = require('http')
const port = 3010
const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write('<h1>I am Happy to learn full stack web devlopment from PW Skills</h1>')
    }
    res.end()
})
server.listen(port)
console.log(`Server is running at PORT : ${port}`)