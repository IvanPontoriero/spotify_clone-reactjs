
export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectURI = "http://localhost:3000/"
const clientID = "07f9c09a109b4507a98acbabcfad7d88"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const getTokenFromUrl = () => {
    // pull the access token out
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            // #accessToken=mysupersecretkey&name=joaquin& (e.g)
            let parts = item.split('=')
            // va al primer elemento de parts, decodifica uricomponent y lo coloca en la posicion dos de parts
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {})
}

export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`