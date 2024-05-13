const API_KEY: string = process.env.IMAGE_DETAIL_API_KEY as string;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

export async function GET(request: Request){
  const { searchParams } = new URL(request.url);
  const tmdbId = searchParams.get('tmdbId');
  try{
    const res = await fetch('https://api.themoviedb.org/3/movie/' + tmdbId + '/images?language=en', options)

    const json = await res.json();
    
    return Response.json(json);
  }
  catch (error){
      console.log(error);
  }
}