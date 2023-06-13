import GeneralComponent from "./GeneralComponent";

const Unions = () => {
    const description = "It allows a variable to be more than one type."

    const content = (
        <>
            let uExampl: number | string = 123; <br />
            uExampl = "123a"; <br />
        </>
    );

    return (
        <GeneralComponent
            title="Unions" 
            description={description}
            content={content}
        />
    );
}

export default Unions;
