
const Login = () => {
  return (
    <>
      <form>
        <div className="container p-5">
          <div className="form-group mb-4">
            <label forhtml="exampleInputEmail1">Enter your URL</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your store name" />

          </div>

          <button className="btn btn-large btn-block btn-primary" type="button">Submit</button>

        </div>
      </form>

    </>
  )
}

export default Login;