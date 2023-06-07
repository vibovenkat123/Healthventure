import styles from "../styles";
import {View, Text, Pressable, Image, ScrollView} from "react-native";
import React, {useState} from "react";
import food from "../content/food";
import nutrition_styles from "./nutrition_styles";
enum Page {
    INFO = 1,
    CATEGORY,
    REVIEW,
    SCORE,
}
export default function HealthyFood() {
    const [started, setStarted] = useState(false);
    return (
        (!started) ? <DefaultWaiting setStarted={setStarted}/> : <Game/>
    )
}

function DefaultWaiting(props: {setStarted: React.Dispatch<React.SetStateAction<boolean>>}) {
   return (
       <View style={{...styles.bg, flex: 1, display: "flex", alignItems: "center", paddingTop: "30%"}}>
           <Image source={require("../assets/food_plate.png")} style={{width: 100, height: 100, marginBottom: 30}}/>
           <Text style={{...styles.baseText, ...styles.subTitleText}}>Nutrition Game</Text>
           <Pressable style={styles.ctaBtn} onPress={() =>
                props.setStarted(true)
           }>
                <Text style={{...styles.baseText, ...styles.regularText}} accessible={true} accessibilityLabel={"Start the nutrition game"}>Start</Text>
           </Pressable>
       </View>
   )
}
function renderGamePage(page: Page, setPage: React.Dispatch<React.SetStateAction<Page>>) {
    switch (page){
        case Page.INFO:
            return <Info setPage={setPage}/>
    }
}
function Game() {
    const [page, setPage] = useState(Page.INFO)
    return (
        <View style={{...styles.container, ...styles.bg}}>
            {renderGamePage(page, setPage)}
        </View>
    )
}
function Info(props: {setPage: React.Dispatch<React.SetStateAction<Page>>}) {
    const food_items = food.map((item, index) => {
        return (
            <View accessible={true} key={index} style={nutrition_styles.infoContainer}>
                <Text style={{...styles.baseText, ...styles.regularText}}>{item.name}</Text>
                {item.isHealthy ? <Text style={nutrition_styles.foodIsHealthy} accessibilityLabel={"is Healthy"}>✅</Text> : <Text style={nutrition_styles.foodIsHealthy} accessibilityLabel={"is Unhealthy"}>❌</Text>}
            </View>
        )
    })
    const rows = [];
    for (let i = 0; i < food_items.length; i += 2) {
        rows.push(
            <View key={i} style={{...nutrition_styles.row, ...styles.container, ...styles.bg}}>
                {food_items[i]}
                {food_items[i + 1]}
            </View>
        )
    }
    return (
       <>
           <ScrollView contentContainerStyle={{...styles.container, width: "100%", ...styles.bg}}>
               {rows}
           </ScrollView>
       </>
    )
}