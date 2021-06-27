import { connect } from "react-redux";
import { PostsList } from "../../../components";
import { Component } from "react";
import PostsListActions from "../action";

class PostsListContainer extends Component {
    componentDidMount() {
        const { fetchItems } = this.props;
        fetchItems();
    }
    render() {
        return <PostsList items={this.props.items} />
    }
}


export default connect(
    ({posts}) => posts,
    PostsListActions
)(PostsListContainer);