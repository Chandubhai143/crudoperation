import react from 'react';

function Login(){
    return(
        <>
        <div className="container">
    <h2>Login</h2>
    <form>
    <div class="mb-4">
            <label for="Email" class="form-label text-start d-block">Email</label>
            <input type="text" class="form-control" id="Email" aria-describedby="emailHelp" />
                            
     </div>
    <div class="mb-4">
           <label for="Password" class="form-label text-start d-block">Password</label>
           <input type="text" class="form-control" id="Password" aria-describedby="emailHelp" />
                            
     </div>
      <button type="button" class="btn btn-success">Login</button>
    </form>
  </div>
        </>
    )
}

export default Login;