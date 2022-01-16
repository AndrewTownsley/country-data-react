import ListHeader from './ListHeader';
import CountryItem from './CountryItem';

const DataListMain = ({countries, setCountries, isLoading }) => {

    return (
      
      <section className="country-list-container"> 
                <ListHeader/>
                <section className="country-list">
                    { isLoading ? (<p>Loading...</p>) :
                    countries.map((country, index) => {
                      return <CountryItem
                      key={country.numericCode}
                      countries={countries}
                      country={country}
                      index={index}
               />
              })}
                </section>
        </section>

    )
}

export default DataListMain;
