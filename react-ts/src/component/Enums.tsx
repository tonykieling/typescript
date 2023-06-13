import GeneralComponent from "./GeneralComponent";

const Enums = () => {
    const description = "It allows to define a set of constant values for a variable."

    const content = (
        <>
            {`enum directions1 { "Up" = 10, "Down", "Left", "Right"};`} <br />
            &#47;/ by default, the first item is ZERO <br />
            &#47;/ in the case above, Up = 10, Down = 11, Left = 12 and Right = 13 <br />
            {`enum directions2 { "up" = "UP", "down" = 'DOWN', "left" = "LEFT", "right" = "RIGHT"};`} <br /> 
        </>
    );

    return (
        <GeneralComponent
            title="Enums" 
            description={description}
            content={content}
        />
    );
}

export default Enums;
