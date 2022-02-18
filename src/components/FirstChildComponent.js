import SecondChildComponent from "./SecondChildComponent";

const FirstChildComponent = (props) => {
    return (
        <>
            <h1>I am from First Child Component</h1>
            <SecondChildComponent data={props.data}/>
        </>
    );
}
 
export default FirstChildComponent;