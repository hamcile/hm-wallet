function Register (){


  return(
    <>
      <div className="flex self-auto w-[70%] justify-evenly align-middle mx-auto shadow-2xl rounded-2xl p-2 flex-col uppercase mt-12 text-2 h-50">
        <div className="flex flex-row ">
          <div className="mr-3">name:</div>
          <input type="text" placeholder="full name" />
        </div>
        <div className="flex flex-row" >
          <div className="mr-3">email:</div>
          <input type="email" placeholder="your email" title="email"  />
        </div>
        <div className="flex flex-row">
          <div className="mr-3">password:</div>
          <input type="password" placeholder="password" title="password" />
        </div>
        <button className="w-fit h-fit uppercase italic rounded-2xl  p-0.5 align-middle justify-self-center">register</button>
      </div>
    </>
  )
}

export default Register