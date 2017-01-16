# BOM practices


### 1 Create an array of all students 
* each student Object must have next structure:
```javascript
 {
    name: string,
    lastName: string,
    img: string, // url of img for your avatar
    coverImg: string, //url of img for your cover photo
    email: string,
    skills: array
 } 
```



   
   example: 
 
 ```javascript 
 {
     name: 'Taras',
     lastName: 'Kliushta',
     img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
     coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
     email: 'tarasklyushta@gmail.com',
     skills: ['JavaScript','CSS', 'HTML']
 } 
```
### 2 Create index.html, script.js, style.css files
* populate index.html with content from ```https://raw.githubusercontent.com/ktv18/BOM-practices/master/index.html```
* populate script.js with content from ```https://raw.githubusercontent.com/ktv18/BOM-practices/master/script.js```
* populate style.css with content from ```https://raw.githubusercontent.com/ktv18/BOM-practices/master/style.css```

### 3 Open index.html 
* take a look on line 26
* create variable `students` which contains array of all students objects
* write function `findStudentByLastName(lastName)` which accepts string of lastName, finds and returns object from array of studens with this lastName
* Add event listener for hash changes (window.addEventListener('hashchange', function(){})

### 4 Using information from API write app:
* app displays all students on the main page (when `location.hash` is empty)
* app displays information about particular student on student related page (when hash contains lastName of student)
* when student is not found by hash value you shoud be redirected on the main page

### 5 Apply animation
* each time page is changed, animation should be shown during 2 seconds
* behind animation nothing should be shown (except for header) 



### 6 API 
* `renderStudents(students)` - function which accepts an array of students objects and render it on the page
* `renderStudentInfo(studentInfo)` - functions which accepts a student object and render it on the page
* `showLoader(show)` - function which accepts a boolean value and depending on true/false show/hide animation on the page
* `clearStudentsList()` - function which removes all students information from the page
* `clearStudentInfo()` - function which remove student info from the page

