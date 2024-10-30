export default function Counter({currentCount, incrementCounterFunction, decrementCounterFunction})
{

    let btnDisable = false;
    let btn2Disable = false;
    if(currentCount >= 20)
    {
        btnDisable = true;
    }
    if(currentCount == 0)
    {
        btn2Disable = true;
    }

    let btnStyles = "bg-black text-white rounded py-2 px-4 mt-5 w-15 h-15 mr-5 ml-3 hover:bg-blue-900 active:bg-yellow-500 disabled:bg-gray-400"

    return(
        <div className="bg-sky-800 p-5 w-52 rounded-full mt-5" style={{ display: 'flex', justifyContent: 'center'}}>
            <p className="text-lg">Count {currentCount}</p>
            <button 
                className={btnStyles}
                onClick={decrementCounterFunction}
                disabled={btn2Disable}
                type="button"
                >
                -
            </button>
            <button
                className={btnStyles}
                onClick={incrementCounterFunction}
                disabled={btnDisable}
                type="button"
                >
                +   
            </button>
        </div>
    );
}