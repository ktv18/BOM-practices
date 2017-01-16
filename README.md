# BOM practices


### 1 Create an array of all students 
* each student Object must have next structure:
 `{
    name: string,
    lastName: string,
    age: number,
    img: string, //url of img of avatar
    coverImg: string, //url of img of cover photo
    email: string,
    skills: array
   }`
   example: 
  `{
     name: 'Taras',
     lastName: 'Kliushta',
     age: 26,
     img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
     coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
     email: 'tarasklyushta@gmail.com',
     skills: ['JS','CSS', 'HTML']
    }`

### 2 API 
* `renderStudents(students)` - function which accepts an array of students objects and render it on the page
* `renderStudentInfo(studentInfo)` - functions which accepts an student object and render it on the page
* `showLoader(show)` - function which accepts a boolean value and depending on true/false show/hide animation on the page
* `clearStudentsList()` - function which removes all students information from the page
* `clearStudentInfo` - function which remove student info from the page

