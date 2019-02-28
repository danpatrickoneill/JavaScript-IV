// CODE here for your Lambda Classes
class Person {
  constructor(personAttrs) {
    this.name = personAttrs.name;
    this.age = personAttrs.age;
    this.location = personAttrs.location;
    this.gender = personAttrs.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  adjustGrade(student) {
    let flip = Math.floor(Math.random() * 2);
    let currentGrade = student.grade;
    let adjustment = Math.round(Math.random() * 10);
    if (flip) {
      student.grade += adjustment;
      console.log(
        `Great job, ${
          student.name
        }! Your grade has increased from ${currentGrade} to ${student.grade}.`
      );
    } else {
      student.grade -= adjustment;
      console.log(
        `Not your best work, ${
          student.name
        }. Your grade has gone from ${currentGrade} to ${student.grade}.`
      );
    }
  }
}

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
    this.grade = studentAttrs.grade;
  }
  listsSubjects() {
    this.favSubjects.forEach(subj => console.log(subj));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduate() {
    if (this.grade >= 70) {
      console.log(`Congrats, ${this.name}! You're a Lambda School graduate!`);
    } else {
      console.log(
        `Hmmm, not quite, ${
          this.name
        }. Let's see if we can find some extra credit work for you.`
      );
      do {
        keating.adjustGrade(this);
      } while (this.grade < 70);
        console.log(
        `Congrats, ${this.name}! You got your grade up to a ${
          this.grade
        }. You're a Lambda School graduate!`
      );
    }
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const keating = new Instructor({
  name: "John Keating",
  location: "Vermont",
  age: 40,
  gender: "male",
  specialty: "self-expression",
  favLanguage: "English",
  catchPhrase: `O Captain! My Captain!`
});

const stein = new Instructor({
  name: "Ben",
  location: "Chicago",
  age: 50,
  gender: "male",
  specialty: "attendance",
  favLanguage: "JavaScript",
  catchPhrase: `Bueller?`
});

const fred = new Student({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favSubjects: ["CSS", "React"],
  className: "WEB18",
  previousBackground: `factory worker`,
  grade: 90
});

const barney = new Student({
  name: "Barney",
  location: "Bedrock",
  age: 36,
  gender: "male",
  favSubjects: [
    "Pre-Processing",
    "Applied JS",
    "Building RESTful Web APIs with Express and Node.js"
  ],
  className: "WEB18",
  previousBackground: `purple dinosaur washer`,
  grade: 67
});

const janet = new ProjectManager({
  name: "Janet",
  location: "San Jose",
  age: 23,
  gender: "female",
  specialty: "Debugging",
  favLanguage: "Python",
  catchPhrase: `Sup, nerds?`,
  gradClassName: `CS2`,
  favInstructor: `Jennifer`
});

const bill = new ProjectManager({
  name: "Bill",
  location: "Minnesota",
  age: 28,
  gender: "male",
  specialty: "Responsive Design",
  favLanguage: "Klingon",
  catchPhrase: `Wubba lubba dub dub!`,
  gradClassName: `CS3`,
  favInstructor: `Tina`
});

keating.demo(fred.favSubjects[1]);
fred.listsSubjects();
barney.sprintChallenge("CSS");
barney.PRAssignment("CSS");
stein.grade(barney, "CSS");
janet.standUp("web19_janet");
bill.debugsCode(barney, "CSS");
console.log(fred);
janet.adjustGrade(fred);
bill.adjustGrade(barney);
fred.graduate();
barney.graduate();
