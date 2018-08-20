import RNSpotify from 'rn-spotify-sdk';

class SpotifyHelper {

    /* Inicializa o módulo do Spotify e retorna se o usuário já possui uma sessão */
    async initialize() {
        const options = {
            clientID: "a7a18c498afd4a60a192a36169c69d8a",
            redirectURL: "daccordapp://"
        }
        return await RNSpotify.initialize(options);
    }
}

export default new SpotifyHelper();