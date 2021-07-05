// let API_URL = "https://ntu-toilet-app.herokuapp.com"

//if in production, let API_URL = "http://localhost:4000"
let API_URL  = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://ntu-toilet-app.herokuapp.com' 

export default API_URL