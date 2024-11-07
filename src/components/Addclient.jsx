import { useEffect, useState } from "react";
const Addclient = () => {
    const [group, setGroup] = useState([]);
    useEffect(() => {
        document.getElementById(`menu4`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu4`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu4`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu4`).children[1].classList.replace(`h-[120px]`, "h-0");
        document.getElementById(`menu4`).classList.replace(`h-[180px]`, "h-[60px]");
        document.getElementById(`menu4`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu4`).children[0].children[2].classList.add("fa-caret-down");
    }, []);
    const handlegroup = ()=>{
        let pop_up = document.getElementById('pop_up_add_group');
        pop_up.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === pop_up) {
                pop_up.classList.replace("block", "hidden");
            }
        }
    }
    const select_group = ()=>{
        /* fetch("https://asyd12855.pythonanywhere.com/selectgenerale",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setGroup(data.select_generale);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setGroup([]);
    }
    const submit_add_client = (e) => {
        e.preventDefault();
        /* let generale_add_client_select = document.getElementById("generale_add_client_select_id1").value;
        let normal_info_add_client_name_add = document.getElementById("normal_info_add_client_name_add_id1").value;
        let normal_info_add_client_tele_number = document.getElementById("normal_info_add_client_tele_number_id1").value;
        let cin_add_client_n_ice = document.getElementById("cin_add_client_n_ice_id1").value;
        let cin_add_client_cin = document.getElementById("cin_add_client_cin_id1").value;
        let address_add_client_adresse = document.getElementById("address_add_client_adresse_id1").value;
        fetch("https://asyd12855.pythonanywhere.com/addclient",{
            method: "POST",
            body: JSON.stringify({
                generale_add_client: generale_add_client_select,
                name_add_client: normal_info_add_client_name_add,
                tele_number_add_client: normal_info_add_client_tele_number,
                n_ice_add_client: cin_add_client_n_ice,
                cin_add_client: cin_add_client_cin,
                adresse_add_client: address_add_client_adresse
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.found === 'yes') {
                alert('You have that Client in the website');
            } else {
                alert("You have added a Client");
                window.location.reload();
            }
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        alert("You have added a Client");
        window.location.reload();
    }
    const add_group = (e) => {
        e.preventDefault();
        /* let new_generale = document.getElementById("input_for_generale_new_id").value;
        fetch("https://asyd12855.pythonanywhere.com/addgenerale",{
            method: "POST",
            body: JSON.stringify({
                new_generale_add: new_generale
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then((data) => {
            alert("You have added a Group");
            let pop_up = document.getElementById('pop_up_add_group');
            pop_up.classList.replace("block", "hidden");
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        alert("You have added a Group");
        let pop_up = document.getElementById('pop_up_add_group');
        pop_up.classList.replace("block", "hidden");
    }
    return (
        <>
            <div className="h-full w-full bg-[#EFF2F6] flex-1 overflow-auto">
                <h1 className="font-[arial] h-[10%] flex items-center text-[#43546D] text-[30px] justify-center">Add a Client</h1>
                <form className="h-[90%] w-full" onSubmit={submit_add_client} method='POST'>
                    <div className='h-1/5 w-full flex flex-row'>
                        <div className='h-full w-3/5 flex items-center justify-end'>
                            <select className="h-[50px] w-[255px] pl-[20px] border-[none] text-[#888] rounded-[15px] font-bold text-[14px] mr-[10px]" onClickCapture={select_group} required name='generale_add_client_select_name' id='generale_add_client_select_id1' >
                                <option value="">Group</option>
                                <option value="bikers">Bikers</option>
                                <option value="egypt">Egypt</option>
                                {
                                    group.map((val,index) => {
                                        return (
                                            <option key={index} value={val.id}>{val.name}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className='h-full w-2/5 flex items-center justify-start'>
                            <div className="w-[160px] h-[50px] flex items-center justify-center bg-[#438eff] rounded-[10px] ml-[30px] cursor-pointer text-[white] font-bold font-[arial] hover:opacity-80" onClick={handlegroup}>
                                New Group
                            </div>
                        </div>
                    </div>
                    <div className='h-1/5 w-full flex flex-row items-center justify-evenly'>
                        <div>
                            <input required className="h-[50px] w-[255px] pl-[20px] border-[none] text-[#888] rounded-[10px] font-bold text-[14px]" type="text" name="normal_info_add_client_name_add_name"  id='normal_info_add_client_name_add_id1' placeholder='Client Name' />
                        </div>
                        <div>
                            <input className="h-[50px] w-[255px] pl-[20px] text-[#888] rounded-[10px] font-bold text-[14px]" type="text" name="normal_info_add_client_tele_number_name" id='normal_info_add_client_tele_number_id1' placeholder='Phone Number' />
                        </div>
                    </div>
                    <div className='h-1/5 w-full flex flex-row items-center justify-evenly'>
                        <div>
                            <input className="h-[50px] w-[255px] pl-[20px] border-[none] text-[#888] rounded-[10px] font-bold text-[14px]" type="text" name="cin_add_client_n_ice_name" id='cin_add_client_n_ice_id1' placeholder='Common Business Identifier' />
                        </div>
                        <div>
                            <input className="h-[50px] w-[255px] pl-[20px] border-[none] text-[#888] rounded-[10px] font-bold text-[14px]" type="text" name="cin_add_client_cin_name" id='cin_add_client_cin_id1' placeholder='National Identity Card' />
                        </div>
                    </div>
                    <div className='h-1/5 w-full flex flex-row items-center justify-center'>
                        <div>
                            <input className="h-[50px] w-[500px] pl-[20px] text-[#888] rounded-[10px] font-bold text-[14px]" type="text" name="address_add_client_adresse_name" id='address_add_client_adresse_id1' placeholder='Address' />
                        </div>
                    </div>
                    <div className='h-1/5 w-full flex flex-row items-center justify-center'>
                        <div>
                            <input className="w-[450px] h-[55px] border-[1px] border-[#00e5ff] bg-[#00e5ff] rounded-[15px] text-[white] font-bold text-[17px] cursor-pointer mb-[30px] hover:opacity-70" type="submit" name="submit_add_client_submit_name" value="Register" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="pop_up_add_group">
                <div className='bg-[#fefefe] mx-[auto] my-[6%] border-[1px] border-[#888] w-2/5 h-[250px] max-lg:w-[50%]'>
                    <form className="h-full w-full bg-[#FAF9FE] [box-shadow:2px_2px_10px_0px_#686571] flex flex-row items-center justify-evenly" onSubmit={add_group} method='POST'>
                        <div>
                            <input required className="h-[35px] w-[200px] pl-[20px] text-[black] text-[14px] font-bold border-[1px] border-[#777] rounded-[10px]" type="text" name="input_for_generale_new_name" id='input_for_generale_new_id' placeholder='Group' />
                        </div>
                        <div>
                            <input type="submit" className="h-[35px] w-[130px] bg-[#FEA6A6] border-[1px] border-[#FEA6A6] rounded-[10px] text-[14px] cursor-pointer font-bold hover:opacity-80" name="submit_for_generale_new_name" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Addclient;