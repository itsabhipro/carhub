
import axios from "axios";
import { ApiOptions } from "./apiOptions"
import { CarInterface } from "@/types/car";
const getCars = async ({method="GET",url,model,manufacturer,year,fuel,limit}:ApiOptions)=>{
    console.log(process.env.RAPID_API_BASE_URL);
    const option = {
        method: method,
        url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/${url}`,
        params: {model:model,manufacturer,year,"fuel_type":fuel,limit},
        headers: {
            'X-RapidAPI-Key': <rapidapi-key>,
            'X-RapidAPI-Host': <rapid-api-host-name>
        }
    }
    try {
        console.log(process.env.RAPID_API_KEY)
        const response = await axios.request(option);
        console.log(response.data)
        return response.data;
    
    } catch (error) {
        console.log(error)
    }
    

}

export const getCarImage = (car:CarInterface,angle?:string)=>{
  const url = new URL('https://cdn.imagin.studio/getimage');
  url.searchParams.append('customer','hrjavascript-mastery');
  url.searchParams.append('make',car.make);
  url.searchParams.append('modelFamily',car.model.split(' ')[0]);
  url.searchParams.append('zoomType','fullscreen');
  url.searchParams.append('modelYear',car.year.toString());
  url.searchParams.append('angle',angle as string);

  return url.toString();

} 
export default getCars;