document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#add-new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

    const sortListItems = document.querySelector('#sort');
    sortListItems.addEventListener('click', handleListItemSort);


});


const handleNewItemFormSubmit = function(event){
    event.preventDefault();

    const listItem = createListItem(event.target);
    const munroList = document.querySelector('#munro-list');
    munroList.appendChild(listItem);

    event.target.reset();
};



const createListItem = function(form){
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');


    const name = document.createElement('h2');
    name.textContent = form.name.value;
    listItem.appendChild(name);

    const height = document.createElement('h3');
    height.textContent = `${form.height.value} ft`;
    listItem.appendChild(height);

    const location = document.createElement('h4');
    location.textContent = form.location.value;
    listItem.appendChild(location);

    return listItem;
};


const handleDeleteAllClick = function(event){
    const munroList = document.querySelector('#munro-list');
    munroList.innerHTML = '';
};


const handleListItemSort = function(event){
    if(event.target.value === 'highest'){
        //sort highest to lowest
        console.log('highest clicked')
    } else {
        if(event.target.value === 'lowest'){
            //sort lowest to highest
            console.log('lowest clicked')
        }
    }

};