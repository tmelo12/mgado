import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal, 
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'
import { DataTable, Divider } from 'react-native-paper';


export default function ResumoAnimal({route, navigation}) {
    const [modalF012Visible, setModalF012Visible] = useState(false);
    const [modalF1324Visible, setModalF1324Visible] = useState(false);
    const [modalF2536Visible, setModalF2536Visible] = useState(false);
    const [modalF36Visible, setModalF36Visible] = useState(false);

    const [modalM012Visible, setModalM012Visible] = useState(false);
    const [modalM1324Visible, setModalM1324Visible] = useState(false);
    const [modalM2536Visible, setModalM2536Visible] = useState(false);
    const [modalM36Visible, setModalM36Visible] = useState(false);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>{route.params.tipo}</Text>
                    </View>

                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title style={styles.alignTable}>
                                <Text style={styles.headerTable}>Gênero</Text>
                            </DataTable.Title>

                            <DataTable.Title style={styles.alignTable}>
                                <Text style={styles.headerTable}>Idade(meses)</Text>
                            </DataTable.Title>

                            <DataTable.Title style={styles.alignTable}>
                                <Text style={styles.headerTable}>Ver Total</Text>
                            </DataTable.Title>
                        </DataTable.Header>

                        <Divider />

                        {/**MODAL FEMEA 0 A 12 */}

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalF012Visible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalF012Visible(!modalF012Visible);
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTittle}>Fêmea(s) 0 a 12 Meses</Text>
                                <Text style={styles.modalText}>Total: 100</Text>
                                <Text style={styles.modalText}>Declarados: 99</Text>
                                <Text style={styles.modalText}>AD Nascimento: 98</Text>
                                <Text style={styles.modalText}>AD Sumiço: 97</Text>
                                <Text style={styles.modalText}>AD Morte: 96</Text>
                                <Text style={styles.modalText}>AD Venda: 95</Text>
                                <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalF012Visible(!modalF012Visible)}
                                >
                                <Text style={styles.textStyle}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </Modal>


                        <DataTable.Row>
                            <DataTable.Cell style={styles.alignTable}>Fêmea</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.alignTable}>0 a 12</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.btnDetails}>
                                <TouchableOpacity
                                onPress={() => setModalF012Visible(true)}
                                >
                                    <Icon name="eye" size={30} color="#008000" />
                                </TouchableOpacity>
                            </DataTable.Cell>
                            
                        </DataTable.Row>


                        {/**MODAL FEMEA 13 A 24 */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalF1324Visible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalF1324Visible(!modal1324Visible);
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTittle}>Fêmea(s) 13 a 24 Meses</Text>
                                <Text style={styles.modalText}>Total: 100</Text>
                                <Text style={styles.modalText}>Declarados: 99</Text>
                                <Text style={styles.modalText}>AD Nascimento: 98</Text>
                                <Text style={styles.modalText}>AD Sumiço: 97</Text>
                                <Text style={styles.modalText}>AD Morte: 96</Text>
                                <Text style={styles.modalText}>AD Venda: 95</Text>
                                <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalF1324Visible(!modalF1324Visible)}
                                >
                                <Text style={styles.textStyle}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </Modal>

                        <DataTable.Row>
                            <DataTable.Cell style={styles.alignTable}>Fêmea</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.alignTable}>13 a 24</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.btnDetails}>
                                <TouchableOpacity
                                    onPress={() => setModalF1324Visible(true)}
                                >
                                    <Icon name="eye" size={30} color="#008000" />
                                </TouchableOpacity>
                            </DataTable.Cell>
                            
                        </DataTable.Row>


                        {/**MODAL FEMEA 25 A 36 */}

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalF2536Visible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalF2536Visible(!modalF2536Visible);
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTittle}>Fêmea(s) 25 a 36 Meses</Text>
                                <Text style={styles.modalText}>Total: 100</Text>
                                <Text style={styles.modalText}>Declarados: 99</Text>
                                <Text style={styles.modalText}>AD Nascimento: 98</Text>
                                <Text style={styles.modalText}>AD Sumiço: 97</Text>
                                <Text style={styles.modalText}>AD Morte: 96</Text>
                                <Text style={styles.modalText}>AD Venda: 95</Text>
                                <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalF2536Visible(!modalF2536Visible)}
                                >
                                <Text style={styles.textStyle}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </Modal>
                        <DataTable.Row>
                            <DataTable.Cell style={styles.alignTable}>Fêmea</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.alignTable}>25 a 36</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.btnDetails}>
                                <TouchableOpacity
                                    onPress={() => setModalF2536Visible(true)}
                                >
                                    <Icon name="eye" size={30} color="#008000" />
                                </TouchableOpacity>
                            </DataTable.Cell>
                            
                        </DataTable.Row>

                        {/**MODAL FEMEA 36+ */}

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalF36Visible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalF36Visible(!modalF36Visible);
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTittle}>Fêmea(s) 25 a 36 Meses</Text>
                                <Text style={styles.modalText}>Total: 100</Text>
                                <Text style={styles.modalText}>Declarados: 99</Text>
                                <Text style={styles.modalText}>AD Nascimento: 98</Text>
                                <Text style={styles.modalText}>AD Sumiço: 97</Text>
                                <Text style={styles.modalText}>AD Morte: 96</Text>
                                <Text style={styles.modalText}>AD Venda: 95</Text>
                                <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalF36Visible(!modalF36Visible)}
                                >
                                <Text style={styles.textStyle}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </Modal>
                        <DataTable.Row>
                            <DataTable.Cell style={styles.alignTable}>Fêmea</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.alignTable}>36+</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.btnDetails}>
                                <TouchableOpacity
                                    onPress={() => setModalF36Visible(true)}
                                >
                                    <Icon name="eye" size={30} color="#008000" />
                                </TouchableOpacity>
                            </DataTable.Cell>
                            
                        </DataTable.Row>
                        

                        {/**MODAL MACHO 0 A 12 */}

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalM012Visible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalM012Visible(!modalM012Visible);
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTittle}>Macho(s) 0 a 12 Meses</Text>
                                <Text style={styles.modalText}>Total: 100</Text>
                                <Text style={styles.modalText}>Declarados: 99</Text>
                                <Text style={styles.modalText}>AD Nascimento: 98</Text>
                                <Text style={styles.modalText}>AD Sumiço: 97</Text>
                                <Text style={styles.modalText}>AD Morte: 96</Text>
                                <Text style={styles.modalText}>AD Venda: 95</Text>
                                <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalM012Visible(!modalM012Visible)}
                                >
                                <Text style={styles.textStyle}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </Modal>
                        <DataTable.Row>
                            <DataTable.Cell style={styles.alignTable}>Macho</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.alignTable}>0 a 12</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.btnDetails}>
                                <TouchableOpacity
                                    onPress={() => setModalM012Visible(true)}
                                >
                                    <Icon name="eye" size={30} color="#008000" />
                                </TouchableOpacity>
                            </DataTable.Cell>
                            
                        </DataTable.Row>


                        {/**MODAL MACHO 13 A 24 */}

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalM1324Visible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalM1324Visible(!modalM1324Visible);
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTittle}>Macho(s) 13 a 24 Meses</Text>
                                <Text style={styles.modalText}>Total: 100</Text>
                                <Text style={styles.modalText}>Declarados: 99</Text>
                                <Text style={styles.modalText}>AD Nascimento: 98</Text>
                                <Text style={styles.modalText}>AD Sumiço: 97</Text>
                                <Text style={styles.modalText}>AD Morte: 96</Text>
                                <Text style={styles.modalText}>AD Venda: 95</Text>
                                <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalM1324Visible(!modalM1324Visible)}
                                >
                                <Text style={styles.textStyle}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </Modal>
                        <DataTable.Row>
                            <DataTable.Cell style={styles.alignTable}>Macho</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.alignTable}>13 a 24</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.btnDetails}>
                                <TouchableOpacity
                                    onPress={() => setModalM1324Visible(true)}
                                >
                                    <Icon name="eye" size={30} color="#008000" />
                                </TouchableOpacity>
                            </DataTable.Cell>
                            
                        </DataTable.Row>

                        {/**MODAL MACHO 25 A 36 */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalM2536Visible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalM2536Visible(!modalM2536Visible);
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTittle}>Macho(s) 25 a 36 Meses</Text>
                                <Text style={styles.modalText}>Total: 100</Text>
                                <Text style={styles.modalText}>Declarados: 99</Text>
                                <Text style={styles.modalText}>AD Nascimento: 98</Text>
                                <Text style={styles.modalText}>AD Sumiço: 97</Text>
                                <Text style={styles.modalText}>AD Morte: 96</Text>
                                <Text style={styles.modalText}>AD Venda: 95</Text>
                                <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalM2536Visible(!modalM2536Visible)}
                                >
                                <Text style={styles.textStyle}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </Modal>
                        <DataTable.Row>
                            <DataTable.Cell style={styles.alignTable}>Macho</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.alignTable}>25 a 36</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.btnDetails}>
                                <TouchableOpacity
                                    onPress={() => setModalM2536Visible(true)}
                                >
                                    <Icon name="eye" size={30} color="#008000" />
                                </TouchableOpacity>
                            </DataTable.Cell>
                            
                        </DataTable.Row>

                        {/**MODAL MACHO 36+ */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalM36Visible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalM36Visible(!modalM36Visible);
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTittle}>Macho(s) 25 a 36 Meses</Text>
                                <Text style={styles.modalText}>Total: 100</Text>
                                <Text style={styles.modalText}>Declarados: 99</Text>
                                <Text style={styles.modalText}>AD Nascimento: 98</Text>
                                <Text style={styles.modalText}>AD Sumiço: 97</Text>
                                <Text style={styles.modalText}>AD Morte: 96</Text>
                                <Text style={styles.modalText}>AD Venda: 95</Text>
                                <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalM36Visible(!modalM36Visible)}
                                >
                                <Text style={styles.textStyle}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </Modal>
                        <DataTable.Row>
                            <DataTable.Cell style={styles.alignTable}>Macho</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.alignTable}>36+</DataTable.Cell>
                            
                            <DataTable.Cell style={styles.btnDetails}>
                                <TouchableOpacity
                                    onPress={() => setModalM36Visible(true)}
                                >
                                    <Icon name="eye" size={30} color="#008000" />
                                </TouchableOpacity>
                            </DataTable.Cell>
                            
                        </DataTable.Row>

                    </DataTable>
                    
                    <TouchableOpacity style={styles.btnBack} onPress={() =>navigation.goBack() }>
                        <Text style= {{color: 'white'}}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView> 
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25
  },
  title:{
    fontSize:32,
    marginTop: 30,
  },
  resumo:{
      backgroundColor: 'red'
  },
  btnDetails:{
      justifyContent: 'center',
      alignItems: 'center'
  },
  alignTable:{
    justifyContent: 'center'
  },
  headerTable:{
      fontWeight: 'bold',
      fontSize: 15
  },
  btnBack:{
    margin:10,
    borderWidth:1,
    borderColor: '#ff3333',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ff3333',
    borderRadius:10,
    alignSelf:'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalTittle: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20
  }
});