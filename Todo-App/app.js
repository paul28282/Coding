// Random variables
let taskArray = []
let taskClass = "trash"
let taskCounter = 0

// DOM Elements

let menu = document.querySelector('.menu'),
    icon = document.querySelector('.icon'),
    topics = document.querySelector('.topics'),
    plus = document.querySelector('plus-sign'),
    input = document.querySelector('.topics-input'),
    tasks = document.querySelector('.tasks'),
    input2 = document.querySelector('.tasks-input')


// Date

function today() {
let time = new Date()
let day = time.getDay()
let month = time.getMonth()
let date = time.getDate()
let yeare = time.getFullYear()

let realDay = getDayName(day)
let realMonth = getMonthName(month)
document.querySelector('.day').innerHTML = realDay
document.querySelector('.month').innerHTML = realMonth
document.querySelector('.date').innerHTML = date
document.querySelector('.yeare').innerHTML = yeare

}

function getDayName(dayNumber) {
    let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return dayName[dayNumber]
}

function getMonthName(monthNumber) {
    let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep'
                    , 'Oct', 'Nov', 'Dec']
    return monthName[monthNumber]
} 

today()

//Appending lists

//Task

function newTaskClass() {
    taskArray.push(taskClass)
    taskClass += 'a'
    console.log('hello')
}

function addTask(e) {
    if (e.keyCode === 13) {
        newTaskClass()
        let node = document.createElement('li')
        let trash = document.createElement('a')
        trash.setAttribute('class', `${taskArray[taskCounter]}`)
        trash.setAttribute(`onclick`, `removeTask('${taskArray[taskCounter]}')`)
        taskCounter++
        let trashImg = document.createElement('div')
        let text = document.createTextNode(input2.value)
        trash.appendChild(trashImg)
        node.appendChild(trash)
        node.appendChild(text)
        tasks.appendChild(node)
    }
}

function removeTask(value) {
    let jokuhomma = document.querySelector('.' + value)
    tasks.removeChild(jokuhomma.parentNode)
    
}




