import { PostFull } from "../../../components";
import  { connect } from "react-redux";
import  { withRouter } from 'react-router';
import {Component} from "react";
import PostsListActions from "../../PostList/action";

class FullPostContainer extends Component {
    componentDidMount() {
        const { post, postId, fetchItem } = this.props;
        if (!post) {
            fetchItem(postId);
        }
    }
    render() {
        const { post } = this.props;
        return !post ? (
            'Loading...'
        ) : (
            <PostFull text={post && post.text} createdAt={post && post.createdAt} />
        );
    }
}

const mapStateToProps = ({ posts }, { match }) => ({
    post: posts.items && posts.items.filter(post => post._id === match.params.id)[0],
    postId: match.params.id,
});

export default withRouter(
    connect(
        mapStateToProps,
        PostsListActions
)(FullPostContainer)
);