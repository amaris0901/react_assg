import Card from "./component/Card";
import List from "./component/List";
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
    </div>
  );
    
}
  
export default App;