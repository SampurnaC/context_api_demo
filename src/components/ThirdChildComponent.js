import FourthChildComponent from "./FourthChildComponent";

const ThirdChildComponent = (props) => {
    return (
        <>
            <h1>I am from Third Child Component</h1>
            <FourthChildComponent data={props.data}/>
        </>
    );
}
 
export default ThirdChildComponent;