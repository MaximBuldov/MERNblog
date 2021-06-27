import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { HeaderBlock } from '../../../components';

const mapStateToProps = ({ posts }, { location: { pathname } }) => {
    const postId = pathname.split('/post/')[1];
    return !posts.items ? {} : posts.items.filter(post => post._id === postId)[0];
};

HeaderBlock.defaultProps = {
    title: 'React Blog',
    description: 'Blog on ReactJS и MongoDB',
    image: 'https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg',
};

export default withRouter(connect(mapStateToProps)(HeaderBlock));