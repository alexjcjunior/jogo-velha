import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import react, { useState, useEffect } from 'react';

const App = () => {
  const [tabuleiro, setTabuleiro] = useState([
    { id: 1, index: 2, marcado: '' },
    { id: 2, index: 2, marcado: '' },
    { id: 3, index: 2, marcado: '' },
    { id: 4, index: 5, marcado: '' },
    { id: 5, index: 5, marcado: '' },
    { id: 6, index: 5, marcado: '' },
    { id: 7, index: 8, marcado: '' },
    { id: 8, index: 8, marcado: '' },
    { id: 9, index: 8, marcado: '' }
  ]);

  const [valorCaixa, setValorCaixa] = useState('X');

  const [jogador, setJogador] = useState(true);
  const jogador1 = 'green';
  const jogador2 = 'pink';


  const marcar = (caixa) => {
    if (caixa.marcado === '') {
      caixa.marcado = valorCaixa;
      setValorCaixa(valorCaixa => valorCaixa === 'X' ? 'O' : 'X');
    }
    else {
      alert('campo ja selecionado!');
    }
    verificaGanhador()
  };

  function verificaGanhador() {
    if (tabuleiro[0].marcado === 'X' && tabuleiro[1].marcado === 'X' && tabuleiro[2].marcado === 'X') {
      return alert('jogador 1 ganhou')
    }
    else if (tabuleiro[0].marcado === 'O' && tabuleiro[1].marcado === 'O' && tabuleiro[2].marcado === 'O') {
      alert('jogador 2 ganhou')
    }
    if (tabuleiro[3].marcado === 'X' && tabuleiro[4].marcado === 'X' && tabuleiro[5].marcado === 'X') {
      return alert('jogador 1 ganhou')
    }
    else if (tabuleiro[3].marcado === 'O' && tabuleiro[4].marcado === 'O' && tabuleiro[5].marcado === 'O') {
      alert('jogador 2 ganhou')
    }
    if (tabuleiro[6].marcado === 'X' && tabuleiro[7].marcado === 'X' && tabuleiro[8].marcado === 'X') {
      return alert('jogador 1 ganhou')
    }
    else if (tabuleiro[6].marcado === 'O' && tabuleiro[7].marcado === 'O' && tabuleiro[8].marcado === 'O') {
      alert('jogador 2 ganhou')
    }
    if (tabuleiro[0].marcado === 'X' && tabuleiro[3].marcado === 'X' && tabuleiro[6].marcado === 'X') {
      return alert('jogador 1 ganhou')
    }
    else if (tabuleiro[0].marcado === 'O' && tabuleiro[3].marcado === 'O' && tabuleiro[6].marcado === 'O') {
      alert('jogador 2 ganhou')
    }
    if (tabuleiro[1].marcado === 'X' && tabuleiro[4].marcado === 'X' && tabuleiro[7].marcado === 'X') {
      return alert('jogador 1 ganhou')
    }
    else if (tabuleiro[1].marcado === 'O' && tabuleiro[4].marcado === 'O' && tabuleiro[7].marcado === 'O') {
      alert('jogador 2 ganhou')
    }
    if (tabuleiro[2].marcado === 'X' && tabuleiro[5].marcado === 'X' && tabuleiro[8].marcado === 'X') {
      return alert('jogador 1 ganhou')
    }
    else if (tabuleiro[2].marcado === 'O' && tabuleiro[5].marcado === 'O' && tabuleiro[8].marcado === 'O') {
      alert('jogador 2 ganhou')
    }
    if (tabuleiro[0].marcado === 'X' && tabuleiro[4].marcado === 'X' && tabuleiro[8].marcado === 'X') {
      return alert('jogador 1 ganhou')
    }
    else if (tabuleiro[0].marcado === 'O' && tabuleiro[4].marcado === 'O' && tabuleiro[8].marcado === 'O') {
      alert('jogador 2 ganhou')
    }
    if (tabuleiro[2].marcado === 'X' && tabuleiro[4].marcado === 'X' && tabuleiro[6].marcado === 'X') {
      return alert('jogador 1 ganhou')
    }
    else if (tabuleiro[2].marcado === 'O' && tabuleiro[4].marcado === 'O' && tabuleiro[6].marcado === 'O') {
      alert('jogador 2 ganhou')
    }

  }

  const estilo = StyleSheet.create({
    quadrado: {
      width: 100,
      height: 100,
      backgroundColor: '#6495ED',
      borderColor: 'black',
      borderWidth: 3,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });


  return (
    <SafeAreaView >
      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Text style={{ fontSize: 30, padding: 10, color: '#FA8072', }}>Jogo da velha</Text>
        {
          tabuleiro.map((a, index) => (
            a.id % 3 === 0 && (
              <View key={a.id} style={{ flexDirection: 'row' }}>
                {tabuleiro.map(t => index === t.index && <TouchableOpacity key={t.id} onPress={() => marcar(t)}><View style={estilo.quadrado}><Text style={{ color: 'white', fontSize: 26 }}>{t.marcado}</Text></View></TouchableOpacity>)}
              </View>
            )
          ))
        }
      </View>
    </SafeAreaView>
  );
};





export default App;