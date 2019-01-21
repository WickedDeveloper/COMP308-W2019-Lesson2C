var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Person = /** @class */ (function () {
        function Person(age, name) {
            this.age = age;
            this.name = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            // public properties
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (newAge) {
                this._age = newAge;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        Person.prototype.saysHello = function () {
            console.log("%c " + this.name + " says hello!", "font-size: 20px; color: blue; font-weight: bold;");
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        // constructor
        function Student(age, name, studentID) {
            var _this = _super.call(this, age, name) || this;
            _this.studentID = studentID;
            return _this;
        }
        Object.defineProperty(Student.prototype, "studentID", {
            // public properties
            get: function () {
                return this._studentID;
            },
            set: function (newID) {
                this._studentID = newID;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        Student.prototype.studies = function () {
            console.log("%c " + this.name + " is studying and has studentID of " + this._studentID, "font-size: 18px; color: green;");
        };
        return Student;
    }(Person));
    objects.Student = Student;
})(objects || (objects = {}));
/*
const person = new Person(30, "Tom");
person.saysHello();
*/
var student;
student = new objects.Student(20, "David", "D123456789");
student.saysHello();
student.studies();
//# sourceMappingURL=app.js.map