let hideBootstrapModal = (element) => {
    let myModal = document.getElementById(element)
    let modal = bootstrap.Modal.getInstance(myModal)
    modal.hide()    
}

let getAllStudent = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", '/api/students');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
    let data = "";
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let students = JSON.parse(xhr.responseText).Students;
            for (let i=0;i<students.length;i++) {
                data += `
                        <tr>
                            <td>${students[i].id}</td>
                            <td>${students[i].name}</td>
                            <td>${students[i].email}</td>
                            <td>${students[i].mno}</td>
                            <td>
                            <button type="button" onclick="editStudent(event)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editStudentModal">
                                Edit
                            </button>
                            <button type="button" onclick="deleteStudent(event)" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteStudentModal">
                                Delete
                            </button>
                            </td>
                        </tr>
                `;                
            }
            document.getElementById("data-of-student").innerHTML = data;
        }
    }
}

getAllStudent();


let submitFormAddStudent = (event) => {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open("POST", '/api/students/add');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    let name    = document.getElementById("name").value
    let email   = document.getElementById("email").value
    let mno     = document.getElementById("mno").value
    let data    = `name=${name}&email=${email}&mno=${mno}`; 

    xhr.send(data)

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let res = JSON.parse(xhr.responseText);
            let formNewStudent = document.getElementById("formNewStudent");
            formNewStudent.querySelector(".error-msg").innerHTML = "";
            if(res.status == "200") {
                getAllStudent();
                hideBootstrapModal("addNewStudent")    
            } else if(res.status == "404") {
                for(let i=0;i<res.message.length;i++) {
                    formNewStudent.querySelector(".error-msg").innerHTML += `<div class='alert alert-danger msg'>${res.message[i]}</div>`
                }
                hideErrMsg();
            }       
        }
    }   
}

var hideErrMsg = () => {
    let errorMsg = document.getElementsByClassName("msg");                
    for (let i = 0; i < errorMsg.length; i++) {
        errorMsg[i].addEventListener("click", function () {
            this.closest(".alert").remove();
        })
    }
}

let editStudent = (event) => {
    let datas = event.target.closest("tr").children
    let data = [];
    Array.from(datas).forEach(el => {
        data.push(el.innerText)
    });
    let formEditStudent = document.getElementById("formEditStudent");
        formEditStudent.querySelector("#id").value = data[0]
        formEditStudent.querySelector("#name").value = data[1]
        formEditStudent.querySelector("#email").value = data[2]
        formEditStudent.querySelector("#mno").value = data[3]
}

let submitFormEditStudent = (event) => {
    event.preventDefault();

    let formEditStudent = document.getElementById("formEditStudent");
    let id      = formEditStudent.querySelector("#id").value
    let name    = formEditStudent.querySelector("#name").value
    let email   = formEditStudent.querySelector("#email").value
    let mno     = formEditStudent.querySelector("#mno").value
    
    let data = `id=${id}&name=${name}&email=${email}&mno=${mno}`;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/students/edit')
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let res = JSON.parse(xhr.responseText);
            let formEditStudent = document.getElementById("formEditStudent");
            formEditStudent.querySelector(".error-msg").innerHTML = "";
            if(res.status == "200") {
                getAllStudent();
                hideBootstrapModal("editStudentModal")    
            } else if(res.status == "404") {
                for(let i=0;i<res.message.length;i++) {
                    formEditStudent.querySelector(".error-msg").innerHTML += `<div class='alert alert-danger msg'>${res.message[i]}</div>`
                }
                hideErrMsg();
            }
        }
    }
}

let deleteStudent = (event) => {
    let datas = event.target.closest("tr").children
    let data = [];
    Array.from(datas).forEach(el => {
        data.push(el.innerText)
    });
    let formDeleteStudent = document.getElementById("formDeleteStudent");
        formDeleteStudent.querySelector("#id").value = data[0]
}

let submitFormDeleteStudent = (event) => {
    event.preventDefault();

    let formDeleteStudent = document.getElementById("formDeleteStudent");
    let id      = formDeleteStudent.querySelector("#id").value
    
    let data = `id=${id}`;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/students/delete')
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let res = JSON.parse(xhr.responseText);
            let formDeleteStudent = document.getElementById("formDeleteStudent");
            formDeleteStudent.querySelector(".error-msg").innerHTML = "";
            if(res.status == "200") {
                getAllStudent();
                hideBootstrapModal("deleteStudentModal")    
            } else if(res.status == "404") {
                for(let i=0;i<res.message.length;i++) {
                    formDeleteStudent.querySelector(".error-msg").innerHTML += `<div class='alert alert-danger msg'>${res.message[i]}</div>`
                }
                hideErrMsg();
            }
        }
    }
}

