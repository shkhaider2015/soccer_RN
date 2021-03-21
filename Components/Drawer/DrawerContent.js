import React, { useContext } from 'react'
import { View, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from "react-native-paper";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import LALIGA_LOGO from "../../RawData/images/laliga.png";
import BUNDESLIGA_LOGO from "../../RawData/images/bundes.png";
import EPL_LOGO from "../../RawData/images/epl.png";
import SERIEA_LOGO from "../../RawData/images/seriea.png";
import CHAMPIONS_LEAGUE from "../../RawData/images/uefa_champions_league.png";
import EUROPA_LEAGUE from "../../RawData/images/uefa_europa_league.png";
import FOOTBALL_LOGO from "../../RawData/images/football.png";
import DOWN_ARROW from "../../RawData/images/DownArrow.png";

import LeagueIdContext from "../team/Context/mCTX";


const DrawerContent = (props) => {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false)
    const [isMajorLeague, setIsMajorLeague] = React.useState(false)
    const leaguemCTX = useContext(LeagueIdContext)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
    const toggleMenu = () => {
        setIsMajorLeague(!isMajorLeague)
    }

    return (
        <View style={{ flex: 1 }} >
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent} >
                    <View style={styles.userInfoSection} >
                        <View style={{ flexDirection: 'row', marginTop: 15 }} >
                            <Avatar.Image
                                source={{ uri: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" }}
                                size={50}
                            />
                            <View style={{ flexDirection: 'column', marginLeft: 15 }} >
                                <Title style={styles.title} >Shakeel Haider</Title>
                                <Caption style={styles.caption} >shkhaider@gmail.com</Caption>
                            </View>
                        </View>
                        <View style={styles.row} >
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph, styles.caption} >60</Paragraph>
                                <Caption style={styles.caption} > Following</Caption>
                            </View>
                            <View style={styles.section} >
                                <Paragraph style={styles.paragraph, styles.caption} >100</Paragraph>
                                <Caption style={styles.caption} > Followers</Caption>
                            </View>
                        </View>

                    </View>
                    <Drawer.Section style={styles.drawerSection} >
                        <Drawer.Item
                            icon={({ color, size }) => (<Icon name="home-outline" color={color} size={size} />)}
                            label="Home"
                            onPress={() => { props.navigation.navigate('StackNavigator') }}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (<Icon name="account-outline" color={color} size={size} />)}
                            label="Profile"
                            onPress={() => { props.navigation.navigate('About') }}
                        />
                        <Drawer.Item
                            // icon={({ color, size }) => (<Icon name="bookmark-outline" color={color} size={size} />)}
                            icon={CHAMPIONS_LEAGUE}
                            label="UEFA Champions League"
                            onPress={() => { 
                                leaguemCTX[1]({
                                    id : 2,
                                    title: "UEFA CHAMPION LEAGUE",
                                    logo: CHAMPIONS_LEAGUE,
                                    isGroup: true,
                                    color: "#122c54"
                                })
                                return props.navigation.navigate('StackNavigator')
                            }}
                        />
                        <Drawer.Item
                            // icon={({ color, size }) => (<Icon name="bookmark-outline" color={color} size={size} />)}
                            icon={EUROPA_LEAGUE}
                            label="UEFA Europa Cup"
                        // onPress={() => { props.navigation.navigate('Laliga') }}
                        />
                        {/* <Drawer.Item
                            icon={({ color, size }) => (<Icon name="account-check-outline" color={color} size={size} />)}
                            label="Major League"
                            onPress={() => toggleMenu()}
                        /> */}
                        <Drawer.Section>
                            <TouchableRipple onPress={() => toggleMenu()} >
                                <View style={{ flexDirection: 'row', marginTop: 20 }} >
                                    <View style={{ flex: 2 }} >
                                        <Image
                                            style={{ width: 20, height: 20, marginStart: 20 }}
                                            source={FOOTBALL_LOGO}
                                        />
                                    </View>
                                    <View style={{ flex: 4 }}  >
                                        <Text >Major Leagues</Text>
                                    </View>
                                    <View pointerEvents="none" style={{ flex: 1 }} >
                                        {
                                            isMajorLeague
                                                ? <Icon name="chevron-up" size={15} />
                                                : <Icon name="chevron-down" size={15} />
                                        }


                                    </View>

                                </View>
                            </TouchableRipple>

                        </Drawer.Section>
                        {
                            isMajorLeague
                                ? <Drawer.Section>
                                    <Drawer.Item
                                        style={{ marginStart: 30 }}
                                        // icon={({ color, size }) => (<Icon name="account-check-outline" color={color} size={size} />)}
                                        icon={LALIGA_LOGO}
                                        label="La Liga"
                                        onPress={() => {
                                            leaguemCTX[1]({
                                                id : 140,
                                                title: "LA LIGA",
                                                logo: LALIGA_LOGO,
                                                isGroup: false,
                                                color: "#1a4078"
                                            })
                                            return props.navigation.navigate('StackNavigator')
                                        }}
                                    />
                                    <Drawer.Item
                                        style={{ marginStart: 30 }}
                                        // icon={({ color, size }) => (<Icon name="account-check-outline" color={color} size={size} />)}
                                        icon={EPL_LOGO}
                                        label="English Premier League"
                                        onPress={() => {
                                            leaguemCTX[1]({
                                                id : 30,
                                                title: "ENGLISH PREMIER LEAGUE",
                                                logo: EPL_LOGO,
                                                isGroup: false,
                                                color: "#3d145e"
                                            })
                                            return props.navigation.navigate('StackNavigator')
                                        }}
                                    />
                                    <Drawer.Item
                                        style={{ marginStart: 30 }}
                                        // icon={({ color, size }) => (<Icon name="account-check-outline" color={color} size={size} />)}
                                        icon={SERIEA_LOGO}
                                        label="Serie A"
                                        onPress={() => {
                                            leaguemCTX[1]({
                                                id : 135,
                                                title: "SERIE A",
                                                logo: SERIEA_LOGO,
                                                isGroup: false,
                                                color: "#122c54"
                                            })
                                            return props.navigation.navigate('StackNavigator')
                                        }}
                                    />
                                    <Drawer.Item
                                        style={{ marginStart: 30 }}
                                        // icon={({ color, size }) => (<Icon name="account-check-outline" color={color} size={size} />)}
                                        icon={BUNDESLIGA_LOGO}
                                        label="Bundesliga"
                                        onPress={() => {
                                            leaguemCTX[1]({
                                                id : 78,
                                                title: "BUNDESLIGA",
                                                logo: BUNDESLIGA_LOGO,
                                                isGroup: false,
                                                color: "#a12525"
                                            })
                                            return props.navigation.navigate('StackNavigator')
                                        }}
                                    />
                                </Drawer.Section>
                                : null
                        }

                    </Drawer.Section>
                    <Drawer.Section title="Preferences" >
                        <TouchableRipple onPress={() => toggleTheme()} >
                            <View style={styles.preference} >
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none" >
                                    <Switch value={isDarkTheme} />
                                </View>

                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection} >
                <Drawer.Item
                    icon={({ color, size }) => (<Icon name="exit-to-app" color={color} size={size} />)}
                    label="Sign Out"
                />

            </Drawer.Section>

        </View>
    )
}

export { DrawerContent }

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#F4F4F4",
        borderTopWidth: 1
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})