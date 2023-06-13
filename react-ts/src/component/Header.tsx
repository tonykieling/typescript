export interface Props {
    title: string,
    color?: string,
    size?: string
};

const Header = (props: Props) => {
    return (
        <header>
            <h1 
                style={{color: props.color || "blue", fontSize: props.size || "28px"}}
            > 
                {props.title}
            </h1>
        </header>
    );
}

export default Header;