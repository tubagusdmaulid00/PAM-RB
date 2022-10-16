import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

export default class Katagori extends Component {
	constructor(props){
		super(props);
			this.state = {
					datatampil:[]
			}
		}
	 getMoviesFromApiAsync = async () => {
			try {
				const response = await fetch(
					this.props.title
				);
				const json = await response.json();
				this.setState({ datatampil: json.Search})
				console.log(json)
			} catch (error) {
				console.error(error);
			}
		};
		componentDidMount=()=>{
			this.getMoviesFromApiAsync();
			console.log('get data film')
			console.log(this.props.title)
		}
	render() {
		return (
			<View>
				<FlatGrid 
				data={this.state.datatampil}
				renderItem={({item, index}) => (
					<View>
						<Text>{item.Title}</Text>
						<Text>{item.Year}</Text>
					</View>
				)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({})
