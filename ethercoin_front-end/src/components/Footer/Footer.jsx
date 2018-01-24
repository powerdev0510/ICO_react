import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
            <footer className="footer">
                <Grid>
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="/#/dashboard">
                                    Home
                                </a>
                            </li>
                            
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        &copy;copyright
                        {/* &copy; {(new Date()).getFullYear()}  */}
                    </p>
                </Grid>
            </footer>
		);
	}
}

export default Footer;
