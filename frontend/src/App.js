import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {AddForm, NotFound} from './components';
import {PostsList, FullPost, HeaderBlock} from "./modules";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <HeaderBlock />
                    <div className="container">
                        <div className="content">
                            <div>
                                <button type="button" className="btn btn-primary">
                                    Add post
                                </button>
                                <Link to="/">
                                    <button className="btn btn-primary">Back</button>
                                </Link>
                            </div>

                            <Switch>
                                <Route path="/" exact component={() => <PostsList/>}/>
                                <Route path="/post/:id" exact component={FullPost}/>
                                <Route path="/post/:id/edit"
                                       exact
                                       component={AddForm}/>
                                <Route path="*" component={NotFound}/>
                            </Switch>

                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
