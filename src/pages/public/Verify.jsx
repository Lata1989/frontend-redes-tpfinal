import { useState } from "react";

export const Verify = () => {

    // Variables
    const [otp, setOtp] = useState("");


    // Funciones
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(otp);
    }


    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <form className="bg-white p-6 rounded shadow-md w-fyu md:w-[500px]" onSubmit={submitHandler}>
                    <h2 className="text-2xl mb-4">Verificar</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="otp">OTP:</label>
                        <input type="number" id="otp" className="border p-2 w-full rounded outline-none focus:ring-2-blue-500" required
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        ></input>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Ingresar</button>
                </form>
            </div>
        </>
    );
}