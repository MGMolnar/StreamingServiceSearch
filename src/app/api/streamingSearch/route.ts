const API_KEY: string = process.env.DATA_API_KEY_STREAMING_API as string;
const url = 'https://streaming-availability.p.rapidapi.com/search/filters?services=prime.subscription&country=us&keyword=zombie&output_language=en&order_by=year&genres_relation=and&show_type=all';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

export async function GET(){
    try{
        const res = await fetch(url, options);

        const json = await res.json();
        return Response.json(json);
    }
    catch (error){
        console.log(error + " here in the route");
    }
}