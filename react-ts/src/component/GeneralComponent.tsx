import { useEffect, useLayoutEffect, useState } from "react";

interface Item {
    title: string,
    description?: string,
    content: any
}

export default function GeneralComponent(props: Item) {
    const [width, setWidth] = useState("");
    const style = {
        card: {
            margin: "auto",
            width,
            border: "2px solid gray",
            borderRadius: "8px",
            marginTop: "1rem",
            padding: "1rem"
        },
        title: {
            margin: 0,
            fontSize: "20px",
            fontWeight: "bold",
            paddingLeft: "1rem"
        },
        description: {
            borderBottom: "3px solid lightcoral",
            margin: 0,
            marginLeft: "2rem",
            marginBottom: "5rem"
        },
        content: {
            marginTop: "0.5rem", marginBottom: "0.5rem",
            marginLeft: "1.5rem", marginRight: "1.5rem",
            // border: "1px solid lightgrey"
        }
    };

    const resizeWindows = () => {
        const windowsWidth = window.innerWidth;
        const cardWidth = windowsWidth < 750 ? "90%"
                : windowsWidth < 950 ? "80%"
                    : windowsWidth < 1150 ? "70%"
                        : "55%";
        setWidth(cardWidth);
    }

    useLayoutEffect(() => resizeWindows(), []);

    useEffect(() => {
        window.addEventListener("resize", resizeWindows);
        return() => window.addEventListener("resize", resizeWindows);
    }, []);

    return (
        <div style={style.card}>
            <p style={style.title}>{props.title}</p>
            { props.description &&
                // <span style={style.description}> { props.description } </span>
                <p > <span style={style.description}>{ props.description } </span> </p>
            }
            <div style={style.content}> { props.content }</div>
        </div>
    );
}