let keys = Object.keys(localStorage), i = keys.length;
while (i--) {
    value = JSON.parse(localStorage.getItem(keys[i]))
    let html = `<tr>
                    <td><input class="form-check-input" type="checkbox" onclick="selectData()" name="checkbox" value="${value.email}" id="${value.email}"></td>
                    <td>${value.firstName}</td>
                    <td>${value.lastName}</td>
                    <td>${value.email}</td>
                    <td>${value.gender}</td>
                    <td>${value.hobby}</td>
                    <td>${value.technology}</td>
                </tr>`
    document.getElementById('tableBodyData').innerHTML += html;
}


function selectData() {
    const selectedElm = document.querySelectorAll('input[name="checkbox"]:checked')
    if (selectedElm.length == 0) {
        document.getElementById("editBtn").disabled = true
        document.getElementById("deleteBtn").disabled = true
    }
    else if (selectedElm.length == 1) {
        document.getElementById("editBtn").disabled = false
        document.getElementById("deleteBtn").disabled = false
    }
    else {
        document.getElementById("editBtn").disabled = true
        document.getElementById("deleteBtn").disabled = false
    }
}

function deleteData() {
    const selectedElm = document.querySelectorAll('input[name="checkbox"]:checked')
    selectedElm.forEach(element => {
        localStorage.removeItem(element.value)
        window.location.reload()
    });
}

function editData() {
    const selectedElm = document.querySelectorAll('input[name="checkbox"]:checked')
    selectedElm.forEach(element => {
        window.location = `/editData.html?email=${element.value}`
    });
}