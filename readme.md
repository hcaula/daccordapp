# daccordapp

## Instruções para primeira criação de aplicativo React Native com suporte ao SDK do Spotify

- Tutoriais e módulos seguidos:
1. [rn-spotify-sdk](https://www.npmjs.com/package/rn-spotify-sdk): Módulo NPM para integração do Spotify SDK com o React Native;
2. [Spotify iOS SDK Tutorial](https://developer.spotify.com/documentation/ios-sdk/quick-start/): Tutorial do Spotify para uso do SDK em iOS;
3. [Spotify Android SDK Tutorial](https://developer.spotify.com/documentation/android-sdk/quick-start/): Tutorial do Spotify para uso do SDK em Android;
4. [Facebook SDK for React Native](https://developers.facebook.com/docs/react-native/getting-started): Guia para uso do SDK do Facebook no React Native (não utilizamos o SDK do Facebook, mas algumas dúvidas podem ser tiradas lá).

### Criando o projeto (Android e iOS)

1. Inicie o projeto React Native
    - Não crie o projeto com `create-react-native-app <app-name>`, pois essa forma não suporta SDK’s externos (na verdade, o Expo que não suporta, então é melhor já criar o projeto com acesso aos códigos nativos);
    - Ao invés disso, crie o projeto rodando `react-native init <app-name>`

2.  Baixe o módulo de React Native que dá suporte ao SDK do Spotify
    - Rode `npm install —save rn-spotify-sdk`

3. Baixe o módulo de eventos do React Native
    - Este deveria já vir como dependência do rn-spotify-sdk, porém, por garantia, melhor baixá-lo;
    - Rode `npm install —save react-native-events`

4. Parte automática do link entre módulos e projeto Xcode/Android Studio
    - React Native já possui um comando que lida com boa parte;
    - Rode `react-native link`

### Android

1. Edite o arquivo `android/build.grade` e adicione `flatDir`
```java
...
allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
        flatDir {
            dirs project(':rn-spotify-sdk').file('libs'), 'libs'
        }
    }
}
...
```

2. Edite o arquivo `android/app/build.gradle` e adicione `packagingOptions`
```java
...
buildTypes {
    release {
        minifyEnabled enableProguardInReleaseBuilds
        proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
    }
}
packagingOptions {
    pickFirst 'lib/armeabi-v7a/libgnustl_shared.so'
    pickFirst 'lib/x86/libgnustl_shared.so'
}
...
```

3. Configure o home address do Java em seu terminal rodando `export JAVA_HOME="$(/usr/libexec/java_home -v 1.8)"`

### iOS

1. Parte manual do link entre módulos e projeto Xcode
    - Abra o projeto do Xcode com `open ios/<app-name>.xcodeproj`
    - Clique no projeto na aba esquerda para revelar o <b>Project Navigator</b>
    - Clique na aba <b>Build Phases</b>
    - Em <b>Link Binary With Libraries</b>, adicione os 3 arquivo com extensão `.frameworks` encontrados em `<project-root>/node_modules/rn-spotify-sdk/ios/external/SpotifySDK`. <b>Isto dará as referências das frameworks para que se possa utlizá-las nas headers</b>
    - Clique na aba <b>Build Settings</b>, procure a lista <b>Search Paths</b> e, depois, a sublista <b>Frameworks Search Paths</b>
    - Adicione o endereço `$(SRCROOT)/../node_modules/rn-spotify-sdk/ios` com a opção "recursive". <b>Isto dirá ao projeto aonde os arquivos de framework podem ser encontrados</b>
    - Agora, procure a lista <b>Linking</b> e depois a sublista <b>Other Link Flags</b>. Certifique-se de que a substring `-ObjC` está presente neste campo.


2. Testando a build em simulador
    - Clique no botão de play na parte superior esquerda da tela ou utilize o atalho Cmd + B. Certifique-se de o build ocorreu sem problemas
    - Caso sim, agora você pode rodar o projeto em um simulador diretamente do terminal com `react-native run-ios`

3. Possíveis bugs e soluções (importante)
    - Se o Xcode acusar não ser possível fazer análise de símbolos por conta da arquitetura 64x, isto se dá por um bug do React Native. É possível que este já tenha sido resolvido, porém, caso não tenha, remova o diretório `node_modules/react/third-party`

    