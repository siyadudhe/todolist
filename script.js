
const inputElement = document.querySelector(".container-task-input");    
const addTaskButton = document.querySelector(".button-task-add");      
const taskContainer = document.querySelector(".task-list");                   

const validateInput = () => inputElement.value.trim().length > 0;         


const handleAddtask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        inputElement.classList.add("error");
        return;
    }

    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;

    const deleteItem = document.createElement("i");
    deleteItem.classList.add("fa-solid");
    deleteItem.classList.add("fa-trash-can");
    deleteItem.addEventListener("click", () => {
        taskItemContainer.remove(); // Remove the task item container when the trash can icon is clicked
    });

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    taskContainer.appendChild(taskItemContainer);

    inputElement.value = "";
};


const handleInputChange = () =>{
    const inputIsValid = validateInput();

    if(inputIsValid){
        return inputElement.classList.remove("error");
    }
};

addTaskButton.addEventListener("click", () =>handleAddtask()); 
inputElement.addEventListener("change", () => handleInputChange()); 