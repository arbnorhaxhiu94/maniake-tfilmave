import React, {Component} from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, StatusBar, Animated, FlatList, Image, TouchableOpacity, TextInput } from "react-native"
import { background_black_color } from "../../assets/colors"
import MyHeader from "../../components/SharedComponents/MyHeader"
import MySearchInput from "../../components/SharedComponents/MySearchInput"

export default class MainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [
                {
                    id: '1', 
                    name: 'Paul', 
                    year: '2011',
                    budget: '23M',
                    box_office: '100M',
                    actors: ['Simon Pegg', 'Someone someone', 'Paul Paul'],
                    rating: 7,
                    desc: "For the past 60 years, a wisecracking alien named Paul (Seth Rogen) has resided at a top-secret military base in America's UFO heartland. When Paul decides he has had enough of Earth, he escapes from the compound and hops on the first handy vehicle -- a rented RV manned by two British sci-fi nerds named Graeme (Simon Pegg) and Clive (Nick Frost). With federal agents and the father of an accidental kidnap victim on their tail, the two hatch a crazy plan to help Paul return to his spaceship.",
                    url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSe_kU5XAjXW1s2PSkXSZQ_uloRHKvd-R5kGwM1tcPNxl-OslUX',
                    trailer: 'BJxlNYb8sJQ'
                },
                {
                    id: '2', 
                    name: 'Three Idiots', 
                    year: '2011',
                    budget: '23M',
                    box_office: '100M',
                    actors: ['Simon Pegg', 'Someone someone', 'Paul Paul'],
                    rating: 8,
                    desc: 'One heck of a movie with an alien and two fat friends.',
                    url: 'https://resizing.flixster.com/2JNllvqWQ2FgfC7KeaHKOhcHCyY=/206x305/v2/https://flxt.tmsimg.com/assets/p7951929_p_v10_aa.jpg',
                    trailer: 'BJxlNYb8sJQ'
                },
                {
                    id: '3', 
                    name: 'Avengers', 
                    year: '2011',
                    budget: '23M',
                    box_office: '100M',
                    actors: ['Simon Pegg', 'Someone someone', 'Paul Paul'],
                    rating: 8,
                    desc: 'One heck of a movie with an alien and two fat friends.',
                    url: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg',
                    trailer: 'BJxlNYb8sJQ'
                }
            ]
        }
    }

    render() {

        const styles = StyleSheet.create({
            movieContainer: {
                flex: 1,
                width: '100%',
                // height: 300,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#555',
                borderRadius: 20,
                paddingBottom: 20,
                marginVertical: 20,
                overflow: 'hidden',
                backgroundColor: '#222',
                elevation: 10
            },
            image: {
                width: '100%', 
                height: 200, 
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20
            },
            title: {
                fontSize: 18,
                color: '#ddd',
                fontWeight: 'bold',
                paddingVertical: 10
            },
            desc: {
                fontSize: 14,
                color: '#aaa',
                width: '100%',
                paddingLeft: 10,
                paddingRight: 5
            }
        })

        return (
            <View style={{flex: 1, backgroundColor: background_black_color}}>
                <StatusBar backgroundColor={background_black_color} barStyle={'light-content'} />
                <MyHeader 
                    title={'Ballina'}
                    navigation={this.props.navigation}
                    backgroundColor={background_black_color}
                    textColor={'#ddd'} />
                <View style={{flex: 1}}>
                    {/* <MySearchInput 
                        placeholder={'Emri i filmit...'}
                        buttonText={'Kërko'}
                        onPress={() => alert('Search')}/> */}
                    <FlatList 
                        style={{
                            width: Dimensions.get('screen').width,
                            height: Dimensions.get('screen').height,
                            padding: 10
                        }}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        data={this.state.movies}
                        renderItem={({item}) => {
                            return(
                                <TouchableOpacity 
                                    style={styles.movieContainer}
                                    onPress={() => this.props.navigation.navigate('MovieDetailsScreen', {item: item})} >
                                    <Image 
                                        source={{uri: item.url}}
                                        style={styles.image} />
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.desc}>{item.desc}</Text>
                                </TouchableOpacity>
                            )
                        }} />
                </View>
                
            </View>
        )
    }
}