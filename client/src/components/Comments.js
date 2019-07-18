import React, { Component } from 'react';
import axios from 'axios';
import { fetchComments } from '../utils';
export default class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			commentsList: []
		};
	}
	componentDidMount() {
		fetchComments(this.props.postId.toString()).then(res => {
			console.log('res:' + JSON.stringify(res));
			this.setState({ commentsList: res });
		});
	}

	renderComments() {
		let { commentsList } = this.state;
		return commentsList.map(comment => {
			return (
				<div className="comment" key={comment.id}>
					<div className="comment-name">
						<em>{comment.name}</em>
					</div>
					<div className="comment-email">
						<em>{comment.email}</em>
					</div>
					<div className="comment-body">{comment.body}</div>
				</div>
			);
		});
	}
	render() {
		let { commentsList } = this.state;
		if (!commentsList.length > 0) return 'Loading...';
		return (
			<div className="comments-container">{this.renderComments()}</div>
		);
	}
}