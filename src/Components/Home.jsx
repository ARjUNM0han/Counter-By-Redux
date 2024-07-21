import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from '../Redux/counterSlice'
function Home() {
    const [amount, setAmount] = useState(0)
    // console.log(amount)
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counterReducer.count)
    return (
        <>
            <div className='bg-black d-flex justify-content-center align-itmes-center ' style={{ height: '100vh' }}>
                <div className='border border-white container-fluid w-100'>
                    <div className='d-flex  align-items-center justify-content-center  p-5 '>
                        <h3 className='text-info'>Counter</h3>
                        <h3 className='text-info ms-5'>{count}</h3>
                    </div>
                    <div className='d-flex flex-column align-items-center  '>
                        <button className='col-3 btn btn-success m-2' onClick={() => dispatch(increment())} >Increment +</button>
                        <button className='col-3 btn btn-info  m-2' onClick={() => dispatch(decrement())} >decrement -</button>
                        <button className='col-3 btn btn-warning  m-2' onClick={() => dispatch(reset())} >Reset</button>
                    </div>
                    <div className='col-6 d-flex  align-items-center container-fluid '>
                        <div className='col-3 ms-5'>
                            <input type="text" className='form-control ' onChange={(e) => setAmount(e.target.value)} placeholder='enter amount' />
                        </div>
                        <div className='col-4'>
                            <button className='btn btn-primary w-100' onClick={() => dispatch(incrementByAmount(Number(amount)))}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home