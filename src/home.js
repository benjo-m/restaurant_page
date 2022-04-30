import './style.css'

function Home() {
    let homeDiv = document.createElement('div')
    homeDiv.textContent = 'Home div'
    homeDiv.setAttribute('id', 'homeDiv')
    return homeDiv
}

export default Home()