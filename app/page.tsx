import fetchNews from "../lib/fetchNews";
import { categories } from "../constants";
import NewsList from "./NewsList";
import response from "../response.json"

async function Homepage() {
  const news: NewsResponse | undefined = response /* || await fetchNews(categories.join(","));
   */
  if (news) {
    console.log(news);

    return <div>
      <NewsList news={news}/>
    </div>;
  }
}

export default Homepage;

// TODO borrar carpeta api de pages, ordenar codigo shify alt f, agregar imagen por default cuando no la tiene y camibar colores y letras
