  import { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import { styles } from './Styles'

export default function App() {
  const [emailField, setEmailField] = useState<string>('')
  const [passwordField, setPasswordField] = useState<string>('')



const handleForgotButtontwo = () => {
   alert('Entrar com')
 }
  // Função do Esqueci minha senha
 const handleForgotButton = () => {
   alert('Criar nova senha')
 }
 
  // Função do Botão Entrar
  const handleLoginButton = () => {
    
    alert('Erro . Verifique se seus dados estão corretos , e tente novamente dentro de alguns minutos')
  }

  // Função do Cadastre-se
  const handleSignUpButton = () => {
     alert('Criar nova Conta')
  }
  




  return (
    

    <ScrollView style={styles.scrollview}>
   <Image style={styles.logocobertura} source={require('./assets/R(1).jpg')}/>
      <View style={styles.container}>
      
        <Image style={styles.logo} source={require('./assets/icons8-brownie-62.png')}/>
        <Text style={styles.h0}>santos</Text>
        <Text style={styles.h1}>BROWNERIA</Text>
        <Text style={styles.h2}> Bem vindo(a) ao site oficial da nossa Browneria!</Text>

        <Text style={styles.h3}> Faça seu login e Faça seu pedido!</Text> 
        <Image style={styles.emoji} source={require('./assets/icons8-yummy-savoring-emoji-reaction-after-tasting-food-28(1).png')}/>
        
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu email'
            placeholderTextColor='black'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='**********' 
            placeholderTextColor='black'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>
        
       
  
          <TouchableOpacity style={styles.forgotBtn} onPress={handleForgotButton}>
        
             <Text style={styles.buttonesqueci}>esqueci minha senha</Text>

          </TouchableOpacity>
        
    
        <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem conta?</Text>
        
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text 
            style={styles.signUpBtnText}>Cadastre-se aqui</Text>

          </TouchableOpacity>
            
           <TouchableOpacity style={styles.forgotBtnentrarcomo} onPress={handleForgotButtontwo}>
         
             <Text style={styles.entrarcomo}>Entrar como :</Text>
             
          </TouchableOpacity>
        </View>
        

        <Image style={styles.logoface} source={require('./assets/icons8-facebook-48.png')}/>
         <Image style={styles.logogoo} source={require('./assets/icons8-google-48.png')}/>
         <Image style={styles.logovk} source={require('./assets/icons8-vk-24.png')}/>

        <View style={styles.footerArea}>
        
          <Text style={styles.footerText}>Site feito por Samuel Santos</Text>
        </View>
      </View>
    </ScrollView>
  )
}