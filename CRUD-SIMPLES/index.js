const myForm = document.querySelector('form');

myForm.addEventListener('submit', function createPostController(eventInfos) {
    eventInfos.preventDefault()
    const createPostField = document.querySelector('input[name="createPostField"]')
    console.log("The form was submited")
    const postList = document.querySelector('.post-list')
    postList.insertAdjacentHTML('afterbegin',`<li>${createPostField.value}</li`)
})



