import GeneralComponent from "./GeneralComponent";
// import test  from "../jsFile";

const Primitives = () => {
    // test("console.log('asd')");
    // test(`
    // let n = 500;
    // console.log("nnnnn: ", n);
    // `);

    const content = (
        <>
            <pre>
                <code>
{`let n: number = 500; <br />
n++; <br />
const word: string = "TK"; <br />

let state: boolean; <br />
let any: any = true; <br />

state = true; <br />
any = 123; <br />
any = "anything"; <br />


let arr: number[] = [1, 11, 2, 345]; <br />
arr = [...arr, 789]; <br />
// arr.push("text"); // it throwns an error, but still compiles it`}
                </code>
            </pre>
        </>
    );

    return (
        <GeneralComponent
            title="Primitives" 
            content={content}
        />
    );
}

export default Primitives;
