import Card from "./component/Card";
import List from "./component/List";
import TypeMe from "./component/TypeMe";
import MyForm from "./component/MyForm";
  function App(){
      const user = {
      name: 'John Doe',
      job: 'Engineer',
      hobby: 'Listening to music',
    }
  return (
    <div className="App">
      <div>
      <Card user={user} />
    </div>
    <List />
    <TypeMe /> 
    
    <div className="Form">
 
      <MyForm />
    </div>
    </div>
  );
    
}
  
export default App;