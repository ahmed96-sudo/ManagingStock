import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    useEffect(() => {
        /* fetch("http://localhost:5000/verifytoken",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": document.cookie.slice(6) ? document.cookie.slice(6) : ""
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success == false && data.message == 'notfound') {
                alert("You should go to the login and sign in again");
                navigate("/");
            }
            if (data.success == false && data.message == 'notAdmin') {
                alert("Only Admins can see this page");
                navigate("/");
            }
            if (data.success == false && data.message == 'Invalid token') {
                alert("You should go to the login and sign in again");
                navigate("/");
            }
            setName(data.name);
        })
        .catch(error => {
            console.error(
                "There has been a problem with the login credentials verifying:",
                error
            );
            alert("There has been a problem with the login credentials verifying");
            navigate("/");
        }); */
        /* // notifications
        fetch("https://asyd12855.pythonanywhere.com/notifi",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                notifi: data.notification_info
            })
            if (this.state.notifi.length > 0) {
                document.getElementById("alerticon").style.display = "flex";
            }
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
        // checking admin
        fetch("https://asyd12855.pythonanywhere.com/admin",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                admin : data.admin
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setName('Admin');
        if (window.location.pathname == "/dashboard") {
            document.getElementById("menu1").classList.add("bg-[#6B7A94]");
        }
    }, [navigate]);
    const nav = useNavigate();
    const handleclick = (menu_type)=>{
        document.getElementById(`menu${menu_type}`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu${menu_type}`).classList.add("bg-[#6B7A94]");
        for (let i = 0; i < 8; i++) {
            if (i+1 == menu_type) {
                continue;
            }
            document.getElementById(`menu${i+1}`).classList.remove("bg-[#6B7A94]");
        }
        if (menu_type < 8 && menu_type > 1) {
            const objofarr = [
                {
                    low:200,
                    high: 260
                },
                {
                    low:90,
                    high: 150
                },
                {
                    low:120,
                    high: 180
                },
                {
                    low:80,
                    high: 140
                },
                {
                    low:160,
                    high: 220
                },
                {
                    low:90,
                    high: 150
                },
            ];
            let {low, high} = objofarr[menu_type-2];
            if ((document.getElementById(`menu${menu_type}`).classList.contains("h-[60px]"))) {
                document.getElementById(`menu${menu_type}`).classList.replace("h-[60px]", `h-[${high}px]`);
                document.getElementById(`menu${menu_type}`).children[1].classList.replace("opacity-0", "opacity-1");
                document.getElementById(`menu${menu_type}`).children[1].classList.replace("h-0", `h-[${low}px]`);
            }
            document.getElementById(`menu${menu_type}`).children[0].children[2].classList.contains("fa-caret-down") ? document.getElementById(`menu${menu_type}`).children[0].children[2].classList.remove("fa-caret-down") : "";
            for (let w = 1; w < 7; w++) {
                if (w+1 == menu_type) {
                    continue;
                }
                document.getElementById(`menu${w+1}`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu${w+1}`).children[0].children[2].classList.add("fa-caret-down");
            }
            for (let f = 2; f < 8; f++) {
                if (f == menu_type) {
                    continue;
                }
                let {low, high} = objofarr[f-2];
                if (!(document.getElementById(`menu${f}`).classList.contains("h-[60px]"))) {
                    document.getElementById(`menu${f}`).children[1].classList.replace("opacity-1", "opacity-0");
                    document.getElementById(`menu${f}`).children[1].classList.replace(`h-[${low}px]`, "h-0");
                    document.getElementById(`menu${f}`).classList.replace(`h-[${high}px]`, "h-[60px]");
                }
            }
        } else {
            for (let q = 1; q < 7; q++) {
                document.getElementById(`menu${q+1}`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu${q+1}`).children[0].children[2].classList.add("fa-caret-down");
            }
            document.getElementById(`menu2`).children[1].classList.replace("opacity-1", "opacity-0");
            document.getElementById(`menu2`).children[1].classList.replace("h-[200px]", "h-0");
            document.getElementById(`menu2`).classList.replace("h-[260px]", "h-[60px]");
            document.getElementById(`menu3`).children[1].classList.replace("opacity-1", "opacity-0");
            document.getElementById(`menu3`).children[1].classList.replace("h-[90px]", "h-0");
            document.getElementById(`menu3`).classList.replace("h-[150px]", "h-[60px]");
            document.getElementById(`menu4`).children[1].classList.replace("opacity-1", "opacity-0");
            document.getElementById(`menu4`).children[1].classList.replace("h-[120px]", "h-0");
            document.getElementById(`menu4`).classList.replace("h-[180px]", "h-[60px]");
            document.getElementById(`menu5`).children[1].classList.replace("opacity-1", "opacity-0");
            document.getElementById(`menu5`).children[1].classList.replace("h-[80px]", "h-0");
            document.getElementById(`menu5`).classList.replace("h-[140px]", "h-[60px]");
            document.getElementById(`menu6`).children[1].classList.replace("opacity-1", "opacity-0");
            document.getElementById(`menu6`).children[1].classList.replace("h-[160px]", "h-0");
            document.getElementById(`menu6`).classList.replace("h-[220px]", "h-[60px]");
            document.getElementById(`menu7`).children[1].classList.replace("opacity-1", "opacity-0");
            document.getElementById(`menu7`).children[1].classList.replace("h-[90px]", "h-0");
            document.getElementById(`menu7`).classList.replace("h-[150px]", "h-[60px]");
        }
        if (menu_type == 1) {
            nav("/dashboard");
        } else if (menu_type == 8) {
            nav("/dashboard/setting");
        }
    }
    let today = new Date();
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    // let day2 = today.getDate();
    // let month2 = today.getMonth() + 1;
    // let year2 = today.getFullYear();
    // if (month2 < 10) month2 = "0" + month2;
    // if (day2 < 10) day2 = "0" + day2;
    // let today2 = year2 + "-" + month2 + "-" + day2;
    // let year1 = today.getFullYear();
    const opennotif = ()=>{
        let notif_heading = document.getElementById("notifheading");
        notif_heading.classList.replace("hidden", "block");
        document.getElementById("alerticon").classList.replace("flex", "hidden");
        window.onclick = function(event){
            if (event.target === notif_heading) {
                notif_heading.classList.replace("block", "hidden");
            }
        }
    }
    const logout = (e)=>{
        e.preventDefault();
        let logout_heading = document.getElementById("logoutheading");
        logout_heading.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === logout_heading) {
                logout_heading.classList.replace("block", "hidden");
            }
        }
    }
    const handlelogout = (e)=>{
        e.preventDefault();
        document.cookie = 'token=';
        nav('/');
    }
    return (
        <>
            <div className="flex h-screen">
                <aside className="w-[18%] h-full bg-[#43546d] overflow-y-auto max-[1024px]:w-[20%]">
                    <div className="h-[15%] flex items-center justify-center">
                        <h2 className="text-[30px] text-white font-[600] font-sans max-lg:text-[20px]"><span className='fas fa-atom'></span> KingStock</h2>
                    </div>
                    <nav className="h-auto w-full text-white">
                        <ul>
                            <li id="menu1" className="flex h-[60px] transition-all duration-300 flex-col overflow-hidden" onClick={()=>{handleclick(1)}}>
                                <div className="h-[60px] font-mono cursor-pointer text-2xl flex max-[1024px]:text-[15px]">
                                    <span className='fas fa-th-large h-full w-[40px] flex justify-center items-center'></span>
                                    <span className="ml-2 flex items-center">Dashboard</span>
                                </div>
                            </li>
                            {/* h-[260px] */}
                            <li id="menu2" className="flex h-[60px] transition-all duration-300 flex-col overflow-hidden" onClick={()=>{handleclick(2)}}>
                                <div className="h-[60px] font-mono cursor-pointer text-2xl flex max-[1024px]:text-[15px]">
                                    <span className='fas fa-money-bill-alt h-full w-[40px] flex justify-center items-center'></span>
                                    <span className="ml-2 flex items-center w-[90%]">Point of Sale</span>
                                    <span className='fas fa-caret-down h-full w-[30px] mr-[5px] flex justify-end items-center'></span>
                                </div>
                                {/* h-[200px] opacity-0 */}
                                <div className="w-full h-0 opacity-0">
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"sales"} className="text-[16px] cursor-pointer">
                                            Sales
                                        </Link>
                                    </div>
                                    <hr className="mx-auto" />
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"listsales"} className="text-[16px] cursor-pointer">
                                            Sales List
                                        </Link>
                                    </div>
                                    <hr className="mx-auto" />
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"returns"} className="text-[16px] cursor-pointer">
                                            Returns & Credits
                                        </Link>
                                    </div>
                                    <hr className="mx-auto" />
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"listreturns"} className="text-[16px] cursor-pointer">
                                            Returns & Credits List
                                        </Link>
                                    </div>
                                    <hr className="mx-auto" />
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"charges"} className="text-[16px] cursor-pointer">
                                            Charges
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            {/* h-[150px] */}
                            <li id="menu3" className="flex h-[60px] transition-all duration-300 flex-col overflow-hidden" onClick={()=>{handleclick(3)}}>
                                <div className="h-[60px] font-mono cursor-pointer text-2xl flex max-[1024px]:text-[15px]">
                                    <span className='fas fa-lightbulb h-full w-[40px] flex justify-center items-center'></span>
                                    <span className="ml-2 flex items-center w-[90%]">Products</span>
                                    <span className='fas fa-caret-down h-full w-[30px] mr-[5px] flex justify-end items-center'></span>
                                </div>
                                {/* h-[90px] opacity-0 */}
                                <div className="w-full h-0 opacity-0">
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"addproduct"} className="text-[16px] cursor-pointer">
                                            Add a Product
                                        </Link>
                                    </div>
                                    <hr className="mx-auto" />
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"listproduct"} className="text-[16px] cursor-pointer">
                                            Products List
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            {/* h-[180px] */}
                            <li id="menu4" className="flex h-[60px] transition-all duration-300 flex-col overflow-hidden" onClick={()=>{handleclick(4)}}>
                                <div className="h-[60px] font-mono cursor-pointer text-2xl flex max-[1024px]:text-[15px]">
                                    <span className='fas fa-user h-full w-[40px] flex justify-center items-center'></span>
                                    <span className="ml-2 flex items-center w-[90%]">Clients</span>
                                    <span className='fas fa-caret-down h-full w-[30px] mr-[5px] flex justify-end items-center'></span>
                                </div>
                                {/* h-[120px] opacity-0 */}
                                <div className="w-full h-0 opacity-0">
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"addclient"} className="text-[16px] cursor-pointer">
                                            Add a Client
                                        </Link>
                                    </div>
                                    <hr className="mx-auto" />
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"listclient"} className="text-[16px] cursor-pointer">
                                            Clients List
                                        </Link>
                                    </div>
                                    <hr className="mx-auto" />
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"clientcredits"} className="text-[16px] cursor-pointer">
                                            Client Credits
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            {/* h-[140px] */}
                            <li id="menu5" className="flex h-[60px] transition-all duration-300 flex-col overflow-hidden" onClick={()=>{handleclick(5)}}>
                                <div className="h-[60px] font-mono cursor-pointer text-2xl flex max-[1024px]:text-[15px]">
                                    <span className='fas fa-user-tie h-full w-[40px] flex justify-center items-center'></span>
                                    <span className="ml-2 flex items-center w-[90%]">Supplier</span>
                                    <span className='fas fa-caret-down h-full w-[30px] mr-[5px] flex justify-end items-center'></span>
                                </div>
                                {/* h-[80px] opacity-0 */}
                                <div className="w-full h-0 opacity-0">
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"addsupp"} className="text-[16px] cursor-pointer">
                                            Add a Supplier
                                        </Link>
                                    </div>
                                    <hr className="mx-auto" />
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"listsupp"} className="text-[16px] cursor-pointer">
                                            Suppliers List
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            {/* h-[220px] */}
                            <li id="menu6" className="flex h-[60px] transition-all duration-300 flex-col overflow-hidden" onClick={()=>{handleclick(6)}}>
                                <div className="h-[60px] font-mono cursor-pointer text-2xl flex max-[1024px]:text-[15px]">
                                    <span className='fas fa-receipt h-full w-[40px] flex justify-center items-center'></span>
                                    <span className="ml-2 flex items-center w-[90%]">Invoices</span>
                                    <span className='fas fa-caret-down h-full w-[30px] mr-[5px] flex justify-end items-center'></span>
                                </div>
                                {/* h-[160px] opacity-0 */}
                                <div className="w-full h-0 opacity-0">
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"listinv"} className="text-[16px] cursor-pointer">
                                            Invoices List
                                        </Link>
                                    </div>
                                    <hr className="mx-auto" />
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"listdraft"} className="text-[16px] cursor-pointer">
                                            Draft Invoices List
                                        </Link>
                                    </div>
                                    <hr className="mx-auto" />
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"listuninv"} className="text-[16px] cursor-pointer">
                                            Un-invoiced List
                                        </Link>
                                    </div>
                                    <hr className="mx-auto" />
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"listdelnotes"} className="text-[16px] cursor-pointer">
                                            Delivery Notes List
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            {/* h-[150px] */}
                            <li id="menu7" className="flex h-[60px] transition-all duration-300 flex-col overflow-hidden" onClick={()=>{handleclick(7)}}>
                                <div className="h-[60px] font-mono cursor-pointer text-2xl flex max-[1024px]:text-[15px]">
                                    <span className='fas fa-money-check-alt h-full w-[40px] flex justify-center items-center'></span>
                                    <span className="ml-2 flex items-center w-[90%]">Accounting</span>
                                    <span className='fas fa-caret-down h-full w-[30px] mr-[5px] flex justify-end items-center'></span>
                                </div>
                                {/* h-[90px] opacity-0 */}
                                <div className="w-full h-0 opacity-0">
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"listbankstats"} className="text-[16px] cursor-pointer">
                                            Bank Statements List
                                        </Link>
                                    </div>
                                    <hr className="mx-auto" />
                                    <div className='h-[35px] flex items-center justify-center text-[#c4c9d4]'>
                                        <Link to={"listcash"} className="text-[16px] cursor-pointer">
                                            Cash Transactions List
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li id="menu8" className="flex h-[60px] transition-all duration-300 flex-col overflow-hidden" onClick={()=>{handleclick(8)}}>
                                <div className="h-[60px] font-mono cursor-pointer text-2xl flex max-[1024px]:text-[15px]">
                                    <span className='fas fa-cog h-full w-[40px] flex justify-center items-center'></span>
                                    <span className="ml-2 flex items-center">Settings</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1 flex flex-col bg-white w-[82%] max-[1024px]:w-[80%]">
                    <div className='h-[10%] w-full'>
                        <div className='h-[99%] w-full flex justify-end'>
                            <div className='h-full w-[300px] flex'>
                                <div className='h-full w-[100px] flex'>
                                    <div className='border-l-[1px] border-l-[#808080] h-full mr-auto'></div>
                                    <span className='text-[30px] flex items-center justify-center cursor-pointer fas fa-bell' onClick={opennotif}></span>
                                    <span id='alerticon' className='text-[30px] flex items-center justify-center text-[red] fas fa-exclamation'></span>
                                    <div className='border-l-[1px] border-l-[#808080] h-full ml-auto'></div>
                                </div>
                                <div className='h-full w-[300px]'>
                                    <div className='h-full w-full flex justify-center items-center'>
                                        <div className='w-[40px]'>
                                            <img className='h-[30px] w-[30px]' src='src/usericon.jpg' alt="user-icon" />
                                        </div>
                                        <div className='w-[130px]'>
                                            <div className='text-center'>
                                                <div>{name}</div>
                                            </div>
                                            <div className='text-center'>
                                                <div>{date}</div>
                                            </div>
                                        </div>
                                        <div className='cursor-pointer' onClick={logout}>
                                            <span className='fas fa-arrow-alt-circle-down'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='w-full border-t-black'/>
                    </div>
                    <Outlet />
                </main>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="notifheading">
                <div className='w-[40%] bg-[#fefefe] mx-[auto] my-[6%] border-[1px] border-[#888] h-[400px]'>
                    <div className='h-[10%] w-full flex items-center justify-center'>
                        <h4 className="pl-[20px] font-bold text-[15px] font-[arial]">Notification</h4>
                    </div>
                    <div className='h-[90%] w-full block overflow-y-auto'>
                        <div className='h-[50px] w-[90%] flex items-center border-[1px] border-[gray] rounded-[10px] pl-[10px] bg-[lightgray] text-[white] ml-[10px] mb-[10px]'>
                            <p className="h-full w-full block overflow-y-auto">jahksbduhbuhbiashbdnihbibibasdib</p>
                        </div>
                        <div className='h-[50px] w-[90%] flex items-center border-[1px] border-[gray] rounded-[10px] pl-[10px] bg-[lightgray] text-[white] ml-[10px] mb-[10px]'>
                            <p className="h-full w-full block overflow-y-auto">jahksbduhbuhbiashbdnihbibibasdib</p>
                        </div>
                        <div className='h-[50px] w-[90%] flex items-center border-[1px] border-[gray] rounded-[10px] pl-[10px] bg-[lightgray] text-[white] ml-[10px] mb-[10px]'>
                            <p className="h-full w-full block overflow-y-auto">jahksbduhbuhbiashbdnihbibibasdib</p>
                        </div>
                        <div className='h-[50px] w-[90%] flex items-center border-[1px] border-[gray] rounded-[10px] pl-[10px] bg-[lightgray] text-[white] ml-[10px] mb-[10px]'>
                            <p className="h-full w-full block overflow-y-auto">jahksbduhbuhbiashbdnihbibibasdib</p>
                        </div>
                        <div className='h-[50px] w-[90%] flex items-center border-[1px] border-[gray] rounded-[10px] pl-[10px] bg-[lightgray] text-[white] ml-[10px] mb-[10px]'>
                            <p className="h-full w-full block overflow-y-auto">jahksbduhbuhbiashbdnihbibibasdib</p>
                        </div>
                        {/* {
                            this.state.notifi.map((val, index) => {
                                return (
                                    <div key={index} className='h-[50px] w-[90%] flex items-center border-[1px] border-[gray] rounded-[10px] pl-[10px] bg-[lightgray] text-[white] ml-[10px] mb-[10px]'>
                                        <p className="h-full w-full block overflow-y-auto">{val}</p>
                                    </div>
                                )
                            })
                        } */}
                    </div>
                </div>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id='logoutheading'>
                <div className="rounded-[10px] w-[40%] bg-[#fefefe] mx-[auto] my-[17%] border-[1px] border-[#888] h-[100px]">
                    <form className="flex h-full w-full items-center justify-center" onSubmit={handlelogout}>
                        <input className="h-[40px] w-[150px] border-[1px] border-[gray] rounded-[10px] font-bold text-[14px] text-[white] bg-[#3CBADB] cursor-pointer hover:opacity-80" type="submit" name="logout_heading_name" id='logoutheadingid' value="LogOut" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Dashboard;