import 'bootstrap/dist/css/bootstrap.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import './App.css';
import { changeNameAnjaliActionCreator, changeNameRudranshActionCreator, decreamentActionCreator, increamentActionCreator } from './redux/ActionCreator/ActionCreator';

function App() {

  // const state = useSelector(store=>store);
  let state = useSelector((storeObject)=>{
    return storeObject;
  })

  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1 className='mt-5 mb-5'>Redux</h1> 
      <h1> {state}</h1><br />
      <button className='btn btn-success me-4 btn-lg' onClick={()=>{dispatch(changeNameAnjaliActionCreator())}}>Change Name Anjali</button>
      <button className='btn btn-success btn-lg' onClick={()=>{dispatch(changeNameRudranshActionCreator())}}>Change Name Rudransh</button><br />
      <button className='btn btn-success mt-1 me-4 btn-lg' onClick={()=>{dispatch(increamentActionCreator())}}>Increament</button>
      <button className='btn btn-success mt-1 btn-lg' onClick={()=>{dispatch(decreamentActionCreator())}}>Decreament</button>

    </div>
  );
}

export default App;
