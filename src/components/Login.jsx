import '../fontawesome-free-5.15.3-web/css/fontawesome.css';
import '../fontawesome-free-5.15.3-web/css/brands.css';
import '../fontawesome-free-5.15.3-web/css/solid.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        const input_user = document.getElementById("inputuser").value;
        const input_pass = document.getElementById("inputpassword").value;
        const log_obj = {
            input_user: input_user,
            input_pass: input_pass
        };
        e.preventDefault();
        /* fetch("http://localhost:5000/login",{
            method: "POST",
            body: JSON.stringify(log_obj),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success && data.token != '') {
                document.cookie = `token=${data.token}`;
                if (data.role == "Admin") {
                    navigate("/dashboard");
                } else {
                    if (data.role == "worker") {
                        navigate("/dashboard/sales");
                    } else {
                        navigate('/');
                    }
                }
            } else {
                alert("Your password/username isn't correct");
            }
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
            alert("There has been a problem with the login");
        }); */
        if (input_user == "admin" && input_pass == "admin") {
            navigate("/dashboard");
        } else {
            alert("Your password/username isn't correct");
        }
    }
    const handleClick = ()=>{
        const userps = document.getElementById("inputpassword");
        if (userps.type == "password") {
            userps.type = "text";
        } else {
            userps.type = "password";
        }
    }
    return (
        <div className='h-full w-full bg-[#EFF2F6] flex items-center justify-center'>
            <div className='w-[370px] h-[390px] bg-[#43546D] flex flex-col items-center justify-center [box-shadow:2px_2px_3px_#888888] rounded-[10px]'>
                <div className='h-[100px] w-full flex flex-row items-center justify-center'>
                    <span className='fas fa-atom text-[#00E5FF] text-[xx-large]'></span>
                    <h1 className="ml-[10px] text-[white] font-bold font-['Courier_New',_Courier,_monospace] text-[xx-large]">KingStock</h1>
                </div>
                <form method='POST' onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                    <input type="text" className='bg-[#6b7a94] text-[#ffffff] h-[40px] w-[250px] mb-[15px] pl-[20px] rounded-[10px] placeholder:text-[#ffffff]' id='inputuser' required placeholder='UserName' />
                    <input type="password" className='bg-[#6b7a94] text-[#ffffff] h-[40px] w-[250px] mb-[15px] pl-[20px] rounded-[10px] placeholder:text-[#ffffff]' id='inputpassword' required placeholder='Password' />
                    <label className='mb-[10px]' htmlFor="showpass"><input type="checkbox" name='showpass' id='showpass' onClick={handleClick} /> Show Password</label>
                    <input type="submit" className='bg-[#00E5FF] text-[#ffffff] cursor-pointer h-[35px] w-[100px] rounded-[7px]' value="Login" id='submit_login' />
                </form>
            </div>
        </div>
    );
}

export default Login;