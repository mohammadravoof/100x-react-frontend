import React from 'react'
import x from '../../assets/signup-x.svg'
import Button from '../../components/ui/Button'
import Fieldset from '../../components/ui/Fieldset'
function Step1() {
  return (

    <div className="w-[390px] h-[868px] shrink-0 bg-neutral-1000 font-inter">
  
  <div className="flex w-[390px] h-[824px] pt-0 px-[15px] pb-5 flex-col items-start gap-3 shrink-0 ">
    <div className="flex py-3 px-0 items-center gap-5 self-stretch">
      <button><a href="https://100x-engineers.github.io/layouts-assignment-mohammadravoof/src/login/index.html"><img src={x} /></a></button>
      <p className="text-neutral-50 text-[15px] font-bold ">Step 1 of 4</p>
    </div>
    <div className="flex flex-col items-start gap-5 self-stretch text-neutral-50 text-2xl font-bold">Create your account</div> 
    <div className="flex flex-col items-center gap-8 self-stretch">
    <Fieldset text="Name" input="Name"/>
    <Fieldset text="Email" input="Email"/>
      <div className="flex flex-col items-start gap-2 self-stretch">
        <div className="text-neutral-50 text-[15px] font-bold">Date of birth</div>
        <div className="self-stretch text-secondary text-sm/normal  ">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or <br /> something else.</div>
      </div>
      <div className="flex w-[360px] items-center gap-3 self-stretch">
        <div className="flex w-[171px] relative items-center self-stretch group border border-neutral-500 focus-within:border-twitter-blue-default rounded py-4 px-3 justify-between">
          <select className="peer relative grow appearance-none bg-transparent text-neutral-50 focus:outline-none">
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
          <img className src="../../public/images/chevron-down.svg" />
        </div>
        <div className="flex w-[82.5px] relative  items-center self-stretch group border border-neutral-500 focus-within:border-twitter-blue-default rounded py-4 px-3 justify-between">
          <select className="peer relative grow appearance-none bg-transparent text-neutral-50 focus:outline-none">
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
          <img className src="../../public/images/chevron-down.svg" />
        </div>
        <div className="flex w-[86px] relative items-center self-stretch group border border-neutral-500 focus-within:border-twitter-blue-default rounded py-4 px-3 justify-between">
          <select className="peer relative grow appearance-none bg-transparent text-neutral-50 focus:outline-none">
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
          </select>
          <div className="absolute inline-flex items-center justify-center px-1 py-0 -top-2 text-xs/normal font-medium text-neutral-500  bg-neutral-1000 peer-focus:text-twitter-blue-default ">Year</div>
          <img className src="../../public/images/chevron-down.svg" />
        </div>
      </div>
    </div>
    <div className="flex pt-20 px-5 pb-0 flex-col justify-end items-center gap-[10px] self-stretch grow shrink-0 basis-0">
    <Button variant="white">Create account</Button>
    </div>
  </div>
</div>
  )
}

export default Step1