import GeneralComponent from "./GeneralComponent";

const Tuples = () => {
    const description = "It makes a variable to be an array of values of multiple types.";

    const content = (
        <>
            let example1: [number, boolean, string]; <br />
            example1 = [123, true, "Tony"]; <br />
 <br />
            &#47;/ Tuple array <br />
            let example2: [number, boolean][] = [[1, true], [2, true], [3, false]];
        </>
    );

    return (
        <GeneralComponent
            title="Tuples"
            description={description}
            content={content}
        />
    );
}

export default Tuples;
