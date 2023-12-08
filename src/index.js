document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let newTask = document.querySelector('#new-task-description')
    newToDos(newTask.value)

  }
  )});

  function newToDos(task) {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent ='x'
    li.textContent = `${task}`
    li.appendChild(btn)
    document.querySelector('#tasks').appendChild(li)
  }
  
  function handleDelete (e) {
    e.target.parentNode.remove()
  }


