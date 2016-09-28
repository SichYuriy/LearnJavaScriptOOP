function Student(name, avarageMark) {
  this._name = name;
  this._avarageMark = avarageMark;
  var self = this;

  this.setName = function(name) {
    self._name = name;
  }
  this.getName = function() {
    return self._name;
  }
  this.setAvarageMark = function(value) {
    self._avarageMark = value;
  }
  this.getAvarageMark = function() {
    return self._avarageMark;
  }
  this.visitLesson = function() {
    console.log('Student ' + self._name + ' visited the lesson');
  }
}

function JavaProgrammer(name, avarageMark) {
  Student.apply(this, arguments);
  this._mentor = 'Podrubaylo O.O.';

  var self = this;

  this.getMentor = function() {
    return self._mentor;
  }

  var parentVisitLesson = this.visitLesson;
  this.visitLesson = function() {
    parentVisitLesson();
    console.log(self._mentor + ' taught me Java');
  }
}

function NodejsProgrammer(name, avarageMark) {
  Student.apply(this, arguments);
  this._mentor = 'Timur Shemsedinov';

  var self = this;

  this.getMentor = function() {
    return self._mentor;
  }

  var parentVisitLesson = this.visitLesson;
  this.visitLesson = function() {
    parentVisitLesson();
    console.log(self._mentor + ' taught me Nodejs');
  }
}
function CsharpProgrammer(name, avarageMark) {
  Student.apply(this, arguments);
  this._mentor = 'CLASSIFIED person';

  var self = this;

  this.getMentor = function() {
    return self._mentor;
  }

  var parentVisitLesson = this.visitLesson;
  this.visitLesson = function() {
    parentVisitLesson();
    console.log(self._mentor + ' taught me Csharp');
  }
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