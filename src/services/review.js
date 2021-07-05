import API_URL from "../helper/url"

export async function getReview(){
    let reviewData = await fetch(API_URL + '/api/reviews/')
    let reviewJSONData = reviewData.json()
    return reviewJSONData
}