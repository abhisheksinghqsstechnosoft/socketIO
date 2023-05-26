// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import io from 'socket.io-client';
const socket = io.connect( 'http://localhost:7000' );



function App ()
{


  const [ msg, setMsg ] = useState( '' );
  const [ chat, setChat ] = useState( [] );

  const onSubmitHandeller = ( event ) =>
  {
    event.preventDefault();

    socket.emit( 'chat', {
      msg,
      user: 'abhishek'
    } );

    setMsg( '' );
  }

  useEffect( () =>
  {
    socket.on( 'chat', ( payload ) =>
    {
      setChat( ( prevChat ) => [ ...prevChat, payload ] );
    } );
    console.log( "sdfgfdg" )

  }, [] );

  return (
    <div className="App">
      <header className="App-header">

        { chat?.map( ( payload, index ) => (
          <div key={ index }>{ payload.msg }</div>
        ) ) }


        <form onSubmit={ onSubmitHandeller }>
          <input type="text" name='msg' value={ msg } onChange={ ( event ) =>
          {
            setMsg( event.target.value )
          } } />
          <button type='submit'>send</button>
        </form>


      </header>
    </div>
  );
}

export default App;
