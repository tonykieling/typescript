import GeneralComponent from "./GeneralComponent";

const Generics = () => {
    const description = "They provide a way to make components work with any data type and not restrict to one data type."

    const content = (
        <>
Instead of
<pre>
    <code>
{`function reverseArray(arr: any[]): any[] {
    const temp: any[] = [];
    for (let i = arr.length - 1; i >= 0; i--)
        temp.push(arr[i]);
    return temp;
}
console.log(reverseArray<string>(["a", "b", "c", "d", "e"]));
console.log(reverseArray<number>([1, 22, 333, 4444, 55555]));`}
    </code>
</pre>
Generics go:
<pre>
    <code>
{`function reverseArray<T>(arr: T[]): T[] {
    const temp: any[] = [];
    for (let i = arr.length - 1; i >= 0; i--)
        temp.push(arr[i]);
    return temp;
}
console.log(reverseArray<string>(["a", "b", "c", "d", "e"]));
console.log(reverseArray<number>([1, 22, 333, 4444, 55555]));
// the type right before the array sets the type of array being passed`}
    </code>
</pre>
    </>
  );

    return (
        <GeneralComponent
            title="Generics" 
            description={description}
            content={content}
        />
    );
}

export default Generics;
