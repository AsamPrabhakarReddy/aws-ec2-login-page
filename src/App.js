

function App() {
  return (
    <div className="bg-white w-full h-[100vh] flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-white rounded-lg shadow-xl">
            <div className="flex flex-col text-center gap-6">
                <h1 className="font-bold text-4xl py-4 text-orange-600">Login Page</h1>
                <p className="font-bold text-2xl py-4 text-orange-600">Deployed on AWS EC2</p>
                    <form  className="flex flex-col text-center gap-6"> 
                       
                        <input className="p-4 mx-4 bg-gray-300 rounded-lg border-bg-green"
                            type="email" 
                            placeholder="Enter an Email"
                            name='email'
                            
                         />
                        <input className="p-4 mx-4 bg-gray-300 rounded-lg border-bg-green"
                            type="password" 
                            placeholder="Enter an password"
                            name='password'
                            
                        />
                        <button type="submit" className="p-4 bg-green-600 text-white mx-4 rounded-lg font-semibold">Sumbit</button>
                        <p className="text-xl font-semibold text-right mx-4">Don't have account? <span className="cursor-pointer font-bold  text-orange-600">SignUp</span></p>
                    </form>
                  
            </div>
        </div>
    </div>
  );
}

export default App;
