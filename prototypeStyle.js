function Student(name, avarageMark) {
  this._name = name;
  this._avarageMark = avarageMark;
}
Student.prototype.setName = function(name) {
  this._name = name;
}
Student.prototype.getName = function() {
  return this._name;
}
Student.prototype.setAvarageMark = function(value) {
  this._avarageMark = value;
}
Student.prototype.getAvarageMark = function() {
  return this._avarageMark;
}
Student.prototype.visitLesson = function() {
   console.log('Student ' + this._name + ' visited the lesson');
}

function JavaProgrammer(name, avarageMark) {
  Student.apply(this, arguments);
  this._mentor = 'Podrubaylo O.O.';
}

JavaProgrammer.prototype = Object.create(Student.prototype);
JavaProgrammer.prototype.constructor = JavaProgrammer;

JavaProgrammer.prototype.getMentor = function() {
  return this._mentor;
}
JavaProgrammer.prototype.visitLesson = function() {
  Student.prototype.visitLesson.call(this);
  console.log(this._mentor + ' taught me Java');
}



function NodejsProgrammer(name, avarageMark) {
  Student.apply(this, arguments);
  this._mentor = 'Timur Shemsedinov';
}

NodejsProgrammer.prototype = Object.create(Student.prototype);
NodejsProgrammer.prototype.constructor = JavaProgrammer;

NodejsProgrammer.prototype.getMentor = function() {
  return this._mentor;
}
NodejsProgrammer.prototype.visitLesson = function() {
  Student.prototype.visitLesson.call(this);
  console.log(this._mentor + ' taught me Nodejs');
}


function CsharpProgrammer(name, avarageMark) {
  Student.apply(this, arguments);
  this._mentor = 'CLASSIFIED person';
}

CsharpProgrammer.prototype = Object.create(Student.prototype);
CsharpProgrammer.prototype.constructor = JavaProgrammer;

CsharpProgrammer.prototype.getMentor = function() {
  return this._mentor;
}
CsharpProgrammer.prototype.visitLesson = function() {
  Student.prototype.visitLesson.call(this);
  console.log(this._mentor + ' taught me Csahrp');
}




var students = [
  new JavaProgrammer('Yura', 5.0),
  new CsharpProgrammer('Valera', 4.9),
  new NodejsProgrammer('Valentin', 4.8)
];

students.forEach(function(student){
  console.log(student.getName() + ':');
  student.visitLesson();
  console.log();
});