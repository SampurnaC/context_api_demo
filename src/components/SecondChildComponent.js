import ThirdChildComponent from "./ThirdChildComponent";

const SecondChildComponent = (props) => {
    return (
        <>
            <h1>I am from Second Child Component</h1>
            <ThirdChildComponent data={props.data}/>
        </>
    );
}
 
export default SecondChildComponent;