import React, { useState } from 'react'
import InputBox from './components/InputBox';
import { useCurrencyInfo } from './hooks/useCurrencyInfo';

const App = () => {

    const [amount,setAmount] = useState()
    const [from,setFrom] = useState("usd")
    const [to,setTo] = useState("inr")
    const [convertedAmount,setconvertedAmount] = useState()

    const imgLink = "https://static.vecteezy.com/system/resources/thumbnails/002/256/477/small/stock-and-graph-design-background-business-graph-banner-design-eps10-illustration-free-vector.jpg"

    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)

    const convert=()=> setconvertedAmount(amount*currencyInfo[to])

    const swap = ()=>{
        setTo(from)
        setFrom(to)
        setAmount(convertedAmount)
        setconvertedAmount(amount)
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{backgroundImage: `url(${imgLink})`}}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-black rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amount)=>setAmount(amount)}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                currencyOptions={options}
                                selectCurrency={from}

                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                currencyOptions={options}
                                amountDisable
                                selectCurrency={to}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default App
