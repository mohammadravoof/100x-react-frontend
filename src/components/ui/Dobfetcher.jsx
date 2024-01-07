import React, { useContext } from 'react'
import chevrondown from '../../assets/chevron-down.svg'
import { UserContext } from "../../context/UserContext";




function Dobfetcher() {

  const { updateFormData } = useContext(UserContext);
  
  
  const handleInputChange = (event, field) => {
    const value = event.target.value;
    updateFormData(field, value);
  };

  return (
    <div className="flex w-[360px] items-center gap-3 self-stretch">
        <div className="flex w-[171px] relative items-center self-stretch group border border-neutral-500 focus-within:border-twitter-blue-default rounded py-4 px-3 justify-between">
          <select className="peer relative grow appearance-none bg-transparent text-neutral-50 focus:outline-none" onChange={event => handleInputChange(event, 'month')}>
            <option />
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
          <div className="absolute inline-flex items-center justify-center px-1 py-0 -top-2 text-xs/normal font-medium text-neutral-500  bg-neutral-1000 peer-focus:text-twitter-blue-default ">Month</div>
          <img src={chevrondown} />
        </div>
        <div className="flex w-[82.5px] relative  items-center self-stretch group border border-neutral-500 focus-within:border-twitter-blue-default rounded py-4 px-3 justify-between">
          <select className="peer relative grow appearance-none bg-transparent text-neutral-50 focus:outline-none" onChange={event => handleInputChange(event, 'day')}>
            <option />
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </select>
          <div className="absolute inline-flex items-center justify-center px-1 py-0 -top-2 text-xs/normal font-medium text-neutral-500  bg-neutral-1000 peer-focus:text-twitter-blue-default ">Day</div>
          <img src={chevrondown} />
        </div>
        <div className="flex w-[86px] relative items-center self-stretch group border border-neutral-500 focus-within:border-twitter-blue-default rounded py-4 px-3 justify-between">
          <select className="peer relative grow appearance-none bg-transparent text-neutral-50 focus:outline-none" onChange={event => handleInputChange(event, 'year')}>
            <option />
            <option>2006</option>
            <option>2005</option>
            <option>2004</option>
            <option>2003</option>
            <option>2002</option>
            <option>2001</option>
            <option>2000</option>
            <option>1999</option>
            <option>1998</option>
            <option>1997</option>
            <option>1996</option>
            <option>1995</option>
            <option>1994</option>
            <option>1993</option>
            <option>1992</option>
            <option>1991</option>
            <option>1990</option>
            <option>1989</option>
            <option>1988</option>
            <option>1987</option>
            <option>1986</option>
            <option>1985</option>
            <option>1984</option>
            <option>1983</option>
            <option>1982</option>
            <option>1981</option>
            <option>1980</option>
            <option>1979</option>
            <option>1978</option>
            <option>1977</option>
            <option>1976</option>
            <option>1975</option>
            <option>1974</option>
            <option>1973</option>
            <option>1972</option>
            <option>1971</option>
            <option>1970</option>
            <option>1969</option>
            <option>1968</option>
            <option>1967</option>
            <option>1966</option>
            <option>1965</option>
            <option>1964</option>
            <option>1963</option>
            <option>1962</option>
            <option>1961</option>
            <option>1960</option>
            <option>1959</option>
            <option>1958</option>
            <option>1957</option>
            <option>1956</option>
            <option>1955</option>
            <option>1954</option>
            <option>1953</option>
            <option>1952</option>
            <option>1951</option>
            <option>1950</option>
            <option>1949</option>
            <option>1948</option>
            <option>1947</option>
            <option>1946</option>
            <option>1945</option>
            <option>1944</option>
            <option>1943</option>
            <option>1942</option>
            <option>1941</option>
            <option>1940</option>
            <option>1939</option>
            <option>1938</option>
            <option>1937</option>
            <option>1936</option>
            <option>1935</option>
            <option>1934</option>
            <option>1933</option>
            <option>1932</option>
            <option>1931</option>
            <option>1930</option>
            <option>1929</option>
            <option>1928</option>
            <option>1927</option>
            <option>1926</option>
            <option>1925</option>
            <option>1924</option>
            <option>1923</option>
            <option>1922</option>
            <option>1921</option>
            <option>1920</option>
          </select>
          <div className="absolute inline-flex items-center justify-center px-1 py-0 -top-2 text-xs/normal font-medium text-neutral-500  bg-neutral-1000 peer-focus:text-twitter-blue-default ">Year</div>
          <img src={chevrondown} />
        </div>
        </div>
  )
}

export default Dobfetcher