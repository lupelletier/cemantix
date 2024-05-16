document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.querySelector('#send-button');
    const input = document.querySelector('#word-input');
    const tableBody = document.querySelector('#table-body');

    function sendItem() {
        const itemText = input.value;
        if (itemText.trim() !== '') {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <th scope="row">${tableBody.children.length + 1}</th>
                <td>${itemText}</td>
                <td></td>
                <td></td>
            `;
            tableBody.appendChild(newRow);
            input.value = '';
        }
    }

    // add item on click
    sendButton.addEventListener('click', sendItem);

    // add item on enter
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendItem();
        }
    });
    // call to python api function to get the result

});
