import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, ScrollView, Image, TouchableOpacity, FlatList } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import { connect } from "react-redux"
import { gold_color, red_color } from "../../assets/colors"
import { device_id } from "../../configs/device_id"
import { addMovieComment } from "../../redux/reducers/AddMovieCommentReducer"
import { getMovieComments } from "../../redux/reducers/GetMovieCommentsReducer"
import MyButton from "../SharedComponents/MyButton"
import MyTextInput from "../SharedComponents/MyTextInput"

class MyRating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            comment: '',
            my_rating: 1,
            ratings: [
                {id: '1', value: 1},
                {id: '2', value: 2},
                {id: '3', value: 3},
                {id: '4', value: 4},
                {id: '5', value: 5},
                {id: '6', value: 6},
                {id: '7', value: 7},
                {id: '8', value: 8},
                {id: '9', value: 9},
                {id: '10', value: 10},
            ]
        }
    }

    setRatig = (rating) => {
        this.setState({
            my_rating: rating
        })
    }

    handleChange = (field, input) => {
        console.log(input)
        if (field == 'Emri') {
            this.setState({
                name: input,
                error: ''
            })
        } else if (field == 'Komenti...') {
            this.setState({
                comment: input,
                error: ''
            })
        }
    }

    submitComment = async() => {

        if (this.state.name == '') {
            this.setState({
                error: 'Emri është i domosdoshëm.'
            })
            return
        } else if (this.state.comment == '') {
            this.setState({
                error: 'Komenti është i domosdoshëm.'
            })
            return
        }

        let data = {
            id: device_id,
            name: this.state.name,
            comment: this.state.comment,
            movie_id: this.props.movie.id,
            movie_img_url: this.props.movie.img_url,
            movie_name: this.props.movie.name,
            rating: this.state.my_rating,
            time: new Date(Date.now())
        }

        console.log(data)
        // return
        await this.props.addMovieComment(data)
        if (this.props.error !== null) {
            this.setState({
                error: this.props.error
            })
        } 
        if (this.props.success) {
            // alert('OK')
           this.props.loadComments()
        }
    }


    componentDidMount() {
        // alert(this.props.my_rating)
    }

    render() {

        const styles = StyleSheet.create({
            mainInfos: {
                // flexDirection: 'row',
                padding: 10,
                width: '100%',
                alignSelf: 'center',
                justifyContent: 'space-between'
            },
            starContainer: {
                justifyContent: 'center',
                alignItems: 'center',
                width: Dimensions.get('screen').width*1/12
            },
            errorTxt: {
                color: 'red',
                textAlign: 'center',
                marginTop: 10
            }
        })

        return (
            <View style={styles.mainInfos}>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={this.state.ratings}
                    style={{alignSelf: 'center'}}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity 
                                style={styles.starContainer}
                                onPress={() => this.setRatig(item.value)} >
                                {this.state.my_rating >= item.value ? 
                                <AntDesign name={'star'} size={25} color={gold_color} />
                                :
                                <AntDesign name={'staro'} size={25} color={gold_color} />}
                            </TouchableOpacity>
                        )
                    }} />
                <View style={{height: 10}} />
                <MyTextInput 
                    placeholder={'Emri'}
                    handleChange={this.handleChange}
                    color={'#ddd'} />
                <View style={{height: 10}} />
                <MyTextInput 
                    multiline
                    placeholder={'Komenti...'}
                    numberOfLines={3}
                    handleChange={this.handleChange}
                    color={'#ddd'} />
                <View style={{height: 10}} />
                <MyButton 
                    onPress={this.submitComment}
                    buttonText={'Komento'}
                    backgroundColor={red_color}
                    borderColor={red_color}
                    textColor={'#fff'} />
                {this.state.error ? 
                <Text style={styles.errorTxt}>{this.state.error}</Text> : null }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.addMovieCommentsReducer.loading,
        success: state.addMovieCommentsReducer.success,
        error: state.addMovieCommentsReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMovieComment: (data) => dispatch(addMovieComment(data)),
        getMovieComments: (movie_id) => dispatch(getMovieComments(movie_id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyRating)