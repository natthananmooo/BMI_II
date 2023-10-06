import './Hello.css'
const Hello=({name="aem",age=18,salary=3000})=>{
    
    return(
    <>
    <h1>Heloo{name}{age}{salary}<br></br></h1>
    </>
    );
}
export default Hello;