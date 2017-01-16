
let showLoader = (show) => {  
    let body = document.body;        
    show ? body.classList.add('loading')
         : body.classList.remove('loading');
} 

let renderStudents = students => {
    studentInfo.innerHTML = '';
    students.map(std => {
        let imgUrl = std.img || 'https://d30y9cdsu7xlg0.cloudfront.net/png/35778-200.png',
            name,
            lastName,
            fullName;
        if (typeof std === 'object') {
            name = std.name;
            lastName = std.lastName;
            fullName = `${name} ${lastName}`;
            email = std.email;
        } else {
            name = lastName = fullName = email = std; 
        }           
        studentsGrid.innerHTML += `<div class="user-cell">
                        <div class="user-profile">
                            <img class="user-photo" src="${imgUrl}">
                            <div class="user-meta">
                                <h2>${fullName}</h2>
                                <a href="#">${email || ''}</a>
                            </div>
                        </div>
                        <a href="#${lastName}">View student</a>
                    </div>`                                
    })
}; 

let renderStudentInfo = stdInfo => {
    let skills = `<div class="desc">${(stdInfo.skills || []).join(`</div><div class="desc">`)}</div>`;
    studentInfo.innerHTML = `<h1 class="text-center">${stdInfo.name}</h1>`
    studentInfo.innerHTML += `
                        <div class="container">
                        <div class="row">
                            <div class="col-sm-offset-3 col-sm-6">
                                <div class="card hovercard">
                                    <div class="cardheader" style="background-image:url(${stdInfo.coverImg})">
                                    </div>
                                    <div class="avatar">
                                        <img alt="" src="${stdInfo.img}">
                                    </div>
                                    <div class="info">
                                        <div class="title">
                                            ${stdInfo.name} ${stdInfo.lastName}
                                        </div>
                                        ${skills}
                                    </div>
                                </div>
                                </div>
                        </div>
                        </div>`
} 

let clearStudentsList = () => studentsGrid.innerHTML = '';

let clearStudentInfo = () => studentInfo.innerHTML = '';
