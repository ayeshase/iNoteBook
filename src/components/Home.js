import Notes from './Notes';
const Home = () => {

  return (
    <div className='container'>
      <h1>Add Your Note</h1>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Write a Note</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your notes with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
     <Notes/>
    </div>
  )
}

export default Home;