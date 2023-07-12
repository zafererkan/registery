import axios from 'axios';


const searchimages = async(term) => {
    const Response = await axios.get('https://api.unsplash.com/search/photos',{
      headers: {
        Authorization:'Client-ID cgCqClmgrwW-04UDkzbV-5fhO1VLktXQME-M0SRP6co',
      },                        
      params: {
        query:term,
      },
  
      });
      debugger;
      return Response.data.results;
    
    };
    export default searchimages;