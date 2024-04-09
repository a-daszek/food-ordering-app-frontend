import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-green-100 rounded-lg shadow-lg py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-green-600">
          Zamów Twoje ulubione jedzenie do domu!
        </h1>
        <span className="text-xl">
          Wybierz miasto, restaurację, złóż zamówienie i gotowe!
        </span>
        <SearchBar
          placeHolder="Szukaj w wybranym mieście"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="bg-gray-100 grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Zamawiaj jeszcze szybciej!
          </span>
          <span>Aplikacja mobilna jest już w drodze</span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
