import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import Routes from 'scripts/routes/index.jsx';

render(<Routes />, document.getElementById('app'));
