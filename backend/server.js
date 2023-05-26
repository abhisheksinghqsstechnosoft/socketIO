

import express from 'express';
import { createServer } from 'http';

import { Server } from 'socket.io';


const app = express();


const server = createServer( app );

const io = new Server( server, {
    cors: {
        origin: '*'
    }
} );

io.on( 'connection', ( socket ) =>
{
    console.log( 'socket connected successfully' );

    // console.log( `sockei si : ${ socket }` );

    socket.on( 'chat', ( payload ) =>
    {
        console.log( `payload is :  ${ payload.msg } and the user is ${ payload.user }` );
        io.emit( 'chat', payload )

    } );



} );



server.listen( 7000, () =>
{
    console.log( "app is running on http port 7000" );

} );
