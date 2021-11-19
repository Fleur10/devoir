import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import FlatListBasics from './assets/classes/FlatListBasics'

//Declaration de la fonction anonyme AppTest

const AppTest = () => {
  const [data, setData] = useState([]);

  const addListElement = () => {
    Alert.prompt(
      'test prompt',
      'entrez votre nom',
      (text) => {
        setData( list => [ ...list, text]);
      }
    );
  }
   ////////////////////////////////////////////////////////////////////////////////////////
  return(
    <View style={styles.principal}>

      {/*Debut de l'en-tête l'application*/}

      <View style={styles.header}>
        <Text style={styles.title}>Projet SJP5 {/*🎉*/}</Text>
      </View>

      {/*Debut du corps de l'application*/}

      <View style={styles.body}>
       
        <View style={styles.left}>
          {/*Codes des parties constituants la partie gauche du corps de l'application*/}
          <View style={[styles.textContent, {borderColor: 'darkorchid',}]}>
          </View>

          <View style={styles.btnContent}>

            <View style={styles.btnView}>
              {/*Boutton ajouter*/}
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*Boutton modifier*/}
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*Boutton retirer*/}
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.center}>
          {/*Boutons du centre de l'application*/}
          <View style={styles.centerBtnView1}>
              {/*Boutton ajouter*/}
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'dimgray'}}>{">>"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.centerBtnView2}>
              {/*Boutton modifier*/}
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 30, color: 'dimgray'}}>{"<<"}</Text>
              </TouchableOpacity>
            </View>

        </View>

        <View style={styles.right}>
          {/*Codes des parties constituants la partie droite du corps de l'application*/}
          <View style={[styles.textContent, {borderColor: 'darkorange',}]}>
            <FlatListBasics donnee={data == null ? ['ffff'] : data}/>
          </View>

          <View style={styles.btnContent}>
            {/*Boutons de la partie droite de l'application*/}

            <View style={styles.btnView}>
              {/*Boutton ajouter*/}
              <TouchableOpacity onPress={() => addListElement()}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*Boutton modifier*/}
              <TouchableOpacity onPress={() => Alert.alert('Hello, world!')}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*Boutton retirer*/}
              <TouchableOpacity onPress={() => Alert.alert("123")}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>

      {/* Debut du bas de l'application*/}

      <View style={styles.footer}>
       
        {/* <Text style={styles.message}>Projet SJP5 V 0.0.1</Text>
        <Text style={styles.message}>fait à Douala le 16 Novembre 2021</Text>
        <Text style={styles.message}>par CHUENTE KOUAGUE FLORA </Text>
        <Text style={styles.message}>email: dchuente@univ-catho-sjd.com</Text> */}

      </View>
    </View>
  );
}


/*Mise en forme des différents composants de l'application*/

const styles = StyleSheet.create({

  /*Composant principal */

  principal: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'whitesmoke',
    flexDirection: "column"
  },

  /*En-tête de l'application */
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 3,
    paddingLeft: 20,
    paddingRight: 20,
  },

  /*Corps de l'application */

  body: {
    flex: 8,
    flexDirection: "row",
  },
  right:{
    flex: 5,
  },
  center: {
    flex: 1.5,
  },
  left: {
    flex: 5,
  },

  //Sous partie contenue dans les blocs gauche et 
  //droit de l'application

  textContent:{
    flex: 8,
    // borderColor: "blue",
    borderWidth: 2,
  },
  btnContent:{
    flex: 1,
    marginTop: 1,
    flexDirection: 'row'
  },
  btnView:{
    flex: 1,
    borderWidth: 1,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  centerBtnView1:{
    borderWidth: 1,
    margin: 1,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },
  centerBtnView2:{
    borderWidth: 1,
    margin: 1,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
  },

  /*Bas de l'application */

  footer: {
    flex: 0.8,
    paddingTop: 5,
    paddingLeft: 5,
  },
  message: {
    fontSize: 10,
    color: 'darkgray',
  },

});

/*Execution dans un terminal */
export default AppTest;