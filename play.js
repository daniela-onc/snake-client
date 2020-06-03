<<<<<<< HEAD
const { connect } = require('./client');
=======
 const { connect } = require('./client');
>>>>>>> 923ee07f2fabae28a7f4c5ceca510606c0331c65
const { setupInput } = require('./input');

console.log('Connecting ...');
let conn = connect();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

setupInput(conn);
