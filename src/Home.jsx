import {Link} from "react-router-dom"
export default function Home() {

  function handleform(e){
e.preventDefault()
  }
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">About</Link>
       <form onSubmit={handleform} className="forma">
        <p>
          <input type="text" id="name"/>
          <label htmlFor="name">ism kiriting</label>
        </p>

        <p>
          <input type="password" id="password"/>
          <label htmlFor="password">parol  kiriting</label>
        </p>

        <button type="submit">submit</button>
       </form>
    </>
  )
}