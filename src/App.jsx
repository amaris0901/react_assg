import Card from "./component/Card";
  function App(){
      const user = {
      name: 'John Doe',
      job: 'Engineer',
      hobby: 'Listening to music',
    }
  return (
    <div className="App">
      <Card user={user} />
    </div>
  );
    
}
  
export default App;