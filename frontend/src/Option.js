import React from 'react';
// Material
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

export class Option extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			liked: false
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleLike = this.handleLike.bind(this);
	}

	componentDidMount() {
		this.setState({
			selected: false,
		});
	}

	handleClick() {
		const title = this.props.title;
		this.props.onClick(title);
		this.setState({
			selected: !this.state.selected,
			liked: this.state.liked
		});
	}

	handleLike() {
		this.setState( {
			selected: this.state.selected,
			liked: !this.state.liked
		});
		const title = this.props.title;
		this.props.likeHandler(title);
	}

	render() {
		const title = this.props.title.title[0].toUpperCase() + this.props.title.title.slice(1)
		return (
			<Grid item xs={12} sm={6} md={this.props.gridM}>
				<Card style={{ backgroundColor: this.state.selected ? '#6DECAF' : 'white' }}>
					<CardActionArea onClick={this.handleClick}>
						<CardContent style={{ minHeight: 140 }}>
							<Typography color="textSecondary" gutterBottom>
		          	{this.props.type}
		        	</Typography>
		        	<Typography variant="h4" component="h2" style={{ overflowWrap: 'break-word' }}>
			          {title}
			        </Typography>
			        <Typography variant="body2" component="p">
			          {this.props.title.info}
			        </Typography>
			    	</CardContent>
			    </CardActionArea>
					<CardActions>
						<Button size="small" onClick={() => this.handleLike()}>{this.state.liked ? <StarIcon color={"primary"}/> : <StarBorderIcon/>} Merken</Button>
		      </CardActions>
				</Card>
			</Grid>
		);
	}
}