import React from "react";


function Signup() {

    return (
        <>
            <div className="container pt-5">
                <div className=" col-sm-6 col-xs-12 mx-auto border bg-info p-5">
                    <h2>Sign up</h2>
                    <form >
                    <div class="mb-3">
                            <label for="firstname" class="form-label text-start d-block">First Name</label>
                            <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp" />
                            
                        </div>
                    <div class="mb-3">
                            <label for="lastname" class="form-label text-start d-block">Last Name</label>
                            <input type="text" class="form-control" id="lastname" aria-describedby="emailHelp" />
                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-start d-block">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                           </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-start d-block">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="ConfirmPassword1" class="form-label text-start d-block">Confirm Password</label>
                            <input type="password" class="form-control" id="ConfirmPassword1" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>



        </>
    )
};

export default Signup;