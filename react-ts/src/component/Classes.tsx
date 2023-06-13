import GeneralComponent from "./GeneralComponent";

const Classes = () => {
    const description = "They are the fundamental entities used to create reusable components."

    const content = (
        <>
- <b>Classes</b> attributes can be private, public or protected <br />
  &nbsp;&nbsp;. private attribute is accessed (read or written) only within the class <br />
  &nbsp;&nbsp;. protected can be acessed only from whitin the origin class or an extended one <br />
  &nbsp;&nbsp;. public is the default way of protection <br />
<pre>
    <code>
{`class Person {
    id: number
    name: string
    private age: number
    protected address: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.age = 30;
        this.address = "Burnaby";
    }

    getInfo() {
        return ("all data for this object is: ", JSON.stringify(this));
    }
}
const user1 = new Person(123, "TK");
console.log("user1.name is ok: ", user1.name);
// this.age or this.address is not possible
console.log("info about user1: ", user1.getInfo());`}
    </code>
</pre>

<br />- <b>Classes and Interface</b>
<pre>
    <code>
{`interface StudentInterface {
    id: number
    name: string
    getName(): string
}
class Student implements StudentInterface {
    id: number
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    getName(): string {
        return this.name
    }
}
const std1 = new Student(1, "Test Student");
console.log("student name is: ", std1.name);`}
    </code>
</pre>

<br />- <b>Subclasses</b> are used to extend an existing class.
<pre>
    <code>
{`class Alumni extends Student {
    yearGraduation: number
    constructor(id: number, name: string, yearGrad: string) {
        super(id, name); // it calls the method from the parent class
        // it is also possible to call methods from the extended class
        this.yearGraduation = Number(yearGrad);
    }
    getData() {
        return JSON.stringify(this);
    }
}
const alumni1 = new Alumni(11, "Alumni Std", "2020");
console.log("Alumni info::: ", alumni1, alumni1.getName());
`}
    </code>
</pre>
    </>
  );

    return (
        <GeneralComponent
            title="Classes" 
            description={description}
            content={content}
        />
    );
}

export default Classes;
