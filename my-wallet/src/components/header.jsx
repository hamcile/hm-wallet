

function Head () {

  const navigator = [
    {text: 'asset',  id: 'nav1'},
    {text: 'wallet',  id: 'nav2'},
    {text: 'sign out',  id: 'nav3'}
  ]

  return (
    <div className="flex justify-between text-1xl text-cyan-400 w-[70%] m-auto">
      <div>
        <h1>hm wallet</h1>
      </div>
      <div className="flex flex-row justify-between align-middle w-1/2">
        {navigator.map (navBar => (
          <div key = {navBar.id}>{navBar.text} </div>
        ))}
      </div>
    </div>
  );
}

export default Head

