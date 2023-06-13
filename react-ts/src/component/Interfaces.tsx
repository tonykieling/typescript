import GeneralComponent from "./GeneralComponent";

const Interfaces = () => {
    const description = "Interface is a structure that defines the contract in your application.";

    const content = (
        <>
            Classes that are derived from an interface must follow the structure provided by that interface.<br />
            The TypeScript compiler does not convert interface to JavaScript.<br />
            It uses interface for type checking. This is also known as "duck typing" or "structural subtyping".<br /><br />

<br />- Interfaces are <b>similar to type</b>, but type is more flexible bkz it accepts Unions. (|)
<pre>
    <code>
{`interface UserI {
    id: number,
    readonly name: string,
    dob?: string
};
const userInterfaceExample: UserI = {
    id: 1122,
    name: "TK-Jr"
};
// userInterfaceExample.name = "TK"; // it's NOT OK`}
    </code>
</pre>

<br /><b>- Interface in functions</b>
<pre>
    <code>
{`interface MathFunc {
    (a: number, b: number): number
};
const addNum: MathFunc = (x: number, y: number) : number => x + y;
const subNum: MathFunc = (x: number, y: number) : number => x - y;`}
    </code>
</pre>

<br /><b>- Interface for Array Type</b><br />
An interface can also define the <b>type of an array</b>, also able to define <b>type of index</b>.<br />
<pre>
    <code>{`
interface NumList {
    [index:number]:number
}
let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];

interface IStringList {
    [index:string]:string // it is more like an object
}
let strArr : IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
`}
    </code>
</pre>


        </>
    );

    return (
        <GeneralComponent
            title="Interfaces" 
            description={description}
            content={content}
        />
    );
}

export default Interfaces;
