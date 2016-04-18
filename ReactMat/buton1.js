/**
 * Created by Ivan on 21.02.2016.
 */
/** @jsx React.DOM */

var Modal = require('react-materialize');




<Modal header = 'Modal Header' trigger = {<Button waves='light'>MODAL</Button>}>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
</Modal>

React.render(<Modal/>, document.getElementById('App'));