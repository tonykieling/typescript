import GeneralComponent from "./GeneralComponent";

const Objects = () => {
    // const description = "It allows a variable to be more than one type."

    const content = (
        <>
Either <br />
<pre>
    <code>
        {
            `let user: {
                id: number,
                name: string
            } = {
                id: 11,
                name: "TK"
            };`
        }
    </code> <br />
</pre>
OR <br />
<pre>
    <code>
        {
            `type User = {
                id: number,
                readonly name: string,
                address?: string // this is optional
            };
const user: User = {
    id: 11,
    name: "TK"
};
// user.name = "asd"; // it errors
console.log("user - ", user);`
        }
    </code>
</pre>
<br />
<b>Type Assertion</b> says to the compiler we want treat a variable in a diff type
<pre>
    <code>
        {`let cid: any = 1;
        let customerId = <boolean>cid; 
        // OR let customerId = cid as boolean;
        console.log("customerId: ", customerId);
        cid = "anything is OK";
        // customerId = "it is NOT OK";`}
    </code>
</pre>

it is okay do not define a <b>variable type</b>, but in a functioon, it is MANDATORY specify them. <br />
The return type is optional.
<pre>
    <code>{`const sumUp = (a: number, b: number): number => a + b;`}
    </code>
</pre>

<b>Void</b>
<pre>
    <code>{`function logMessage(message: number | string): void { 
    console.log("logMessage is ", message);
}
logMessage("test");
`}
    </code>
</pre>
        </>
    );

    return (
        <GeneralComponent
            title="Objects" 
            // description={description}
            content={content}
        />
    );
}

export default Objects;
