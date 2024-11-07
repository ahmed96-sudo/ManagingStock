import { useEffect, useState } from "react";
const Listclient = () => {
    const [list_client, setListClient] = useState([]);
    const [index_client_edit, setIndexClientEdit] = useState(0);
    const [list_group, setListGroup] = useState([]);
    useEffect(() => {
        document.getElementById(`menu4`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu4`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu4`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu4`).children[1].classList.replace(`h-[120px]`, "h-0");
        document.getElementById(`menu4`).classList.replace(`h-[180px]`, "h-[60px]");
        document.getElementById(`menu4`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu4`).children[0].children[2].classList.add("fa-caret-down");
        /* fetch("https://asyd12855.pythonanywhere.com/listclient",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListClient(data.listclientarray);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
    }, []);
    const popupclientlist = (index)=>{
        let pop_up = document.getElementById('popupclientlist');
        pop_up.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === pop_up) {
                pop_up.classList.replace("block", "hidden");
                document.getElementById("genseledit").value = '';
                document.getElementById("clientnamedit").value = '';
                document.getElementById("phnumedit").value = '';
                document.getElementById("cbiedit").value = '';
                document.getElementById("nidedit").value = '';
                document.getElementById("addressedit").value = '';
                setIndexClientEdit(0);
            }
        }
        let obj_client_edit = list_client[index];
        setIndexClientEdit(obj_client_edit.client_id);
        document.getElementById("genseledit").value = obj_client_edit.generale_name/* "bikers" */;
        document.getElementById("clientnamedit").value = obj_client_edit.client_number/* "Ahmed" */;
        document.getElementById("phnumedit").value = obj_client_edit.client_number/* "061216951691" */;
        document.getElementById("cbiedit").value = obj_client_edit.client_n_ice/* "456919198" */;
        document.getElementById("nidedit").value = obj_client_edit.client_cin/* "484891215" */;
        document.getElementById("addressedit").value = obj_client_edit.client_addresse/* "asdsadas56562asd" */;
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
            setListGroup(data.select_generale);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListGroup([]);
    }
    const submit_search_client_ice = (e) => {
        e.preventDefault();
        /* let ice_input_search_list_client = document.getElementById("ice_input_search_list_client_id").value;
        fetch("https://asyd12855.pythonanywhere.com/client/ice/search",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : ice_input_search_list_client
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListClient(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListClient([]);
    }
    const submit_search_client_name = (e) => {
        e.preventDefault();
        /* let name_input_search_list_client = document.getElementById("name_input_search_list_client_id").value;
        fetch("https://asyd12855.pythonanywhere.com/client/name/search",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : name_input_search_list_client
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListClient(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListClient([]);
    }
    const del_list_client = (/* ind */) => {
        if (window.confirm('are you sure you want to delete that Client?')) {
            /* fetch("https://asyd12855.pythonanywhere.com/listclient/" + ind,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then((data) => {
                window.location.reload();
            })
            .catch(error => {
                console.error(
                    "There has been a problem:",
                    error
                );
            }); */
            window.location.reload();
        }
    }
    const submit_edit_client = (e) => {
        e.preventDefault();
        /* let edit_client1 = document.getElementById("genseledit").value;
        let edit_client2 = document.getElementById("clientnamedit").value;
        let edit_client3 = document.getElementById("phnumedit").value;
        let edit_client4 = document.getElementById("cbiedit").value;
        let edit_client5 = document.getElementById("nidedit").value;
        let edit_client6 = document.getElementById("addressedit").value;
        let index_of_edit_client = index_client_edit;
        fetch("https://asyd12855.pythonanywhere.com/editclient",{
            method: "POST",
            body: JSON.stringify({
                index_of_edit_client : index_of_edit_client,
                edit_client1 : edit_client1,
                edit_client2 : edit_client2,
                edit_client3 : edit_client3,
                edit_client4 : edit_client4,
                edit_client5 : edit_client5,
                edit_client6 : edit_client6
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
                alert("You have Edited a Client");
                let pop_up = document.getElementById('popupclientlist');
                pop_up.classList.replace("block", "hidden");
                window.location.reload();
            }
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        alert("You have Edited a Client");
        let pop_up = document.getElementById('popupclientlist');
        pop_up.classList.replace("block", "hidden");
        window.location.reload();
    }
    return (
        <>
            <div className="h-full w-full flex flex-col bg-[#EFF2F6] flex-1 overflow-auto">
                <h1 className="font-[arial] h-[10%] flex items-center text-[#43546D] text-[30px] justify-center">Clients List</h1>
                <div className='w-full h-1/5 flex flex-row'>
                    <div className='h-full w-1/2'>
                        <form className="h-full w-full flex flex-row items-center" onSubmit={submit_search_client_ice} method='POST'>
                            <input required className="w-[40%] h-[50px] pl-[15px] rounded-tl-[15px] rounded-br-[0] rounded-tr-[0] rounded-bl-[15px] ml-[20px] font-bold text-[black] font-[arial] text-[15px] max-[1024px]:w-[70%]" type="text" name="ice_input_search_list_client_name" id='ice_input_search_list_client_id' placeholder='Common Business Identifier'  />
                            <button className="h-[52px] w-[10%] rounded-tl-[0] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[0] bg-[white] cursor-pointer font-bold text-[20px] max-[1024px]:w-[15%]" type="submit"><span className='fas fa-search'></span></button>
                        </form>
                    </div>
                    <div className='h-full w-1/2'>
                        <form className="h-full w-full flex flex-row items-center justify-end" onSubmit={submit_search_client_name} method='POST'>
                            <input required className="w-[40%] h-[50px] pl-[15px] rounded-tl-[15px] rounded-br-[0] rounded-tr-[0] rounded-bl-[15px] font-bold text-[black] font-[arial] text-[15px] max-[1024px]:w-[70%]" type="text" name="generale_input_search_list_client_name" id='name_input_search_list_client_id' placeholder='Client Name'  />
                            <button className="h-[52px] w-[10%] rounded-tl-[0] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[0] bg-[white] cursor-pointer font-bold text-[20px] mr-[40px] max-[1024px]:w-[15%]" type="submit"><span className='fas fa-search'></span></button>
                        </form>
                    </div>
                </div>
                <div className='h-4/5 w-full flex items-center justify-center'>
                    <table className="font-[Arial,_Helvetica,_sans-serif] [border-spacing:0] h-[90%] w-[95%] flex flex-col">
                        <thead>
                            <tr className="flex">
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Group</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Client Name</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Common Business Identifier</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Phone Number</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Address</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Action</th>
                            </tr>
                        </thead>
                        <tbody className="block h-[80%] overflow-auto w-full [&>*:nth-child(odd)]:bg-[#d1d8e1]">
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Bikers</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">456919198</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">061216951691</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">asdsadas56562asd</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => del_list_client(1)} className='fas fa-trash text-[red]'></span><span onClick={popupclientlist} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Bikers</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">456919198</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">061216951691</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">asdsadas56562asd</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => del_list_client(1)} className='fas fa-trash text-[red]'></span><span onClick={popupclientlist} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Bikers</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">456919198</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">061216951691</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">asdsadas56562asd</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => del_list_client(1)} className='fas fa-trash text-[red]'></span><span onClick={popupclientlist} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Bikers</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">456919198</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">061216951691</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">asdsadas56562asd</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => del_list_client(1)} className='fas fa-trash text-[red]'></span><span onClick={popupclientlist} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Bikers</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">456919198</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">061216951691</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">asdsadas56562asd</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => del_list_client(1)} className='fas fa-trash text-[red]'></span><span onClick={popupclientlist} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            {
                                list_client.map((val, index) => {
                                    return (
                                        <tr key={index} className="flex">
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.generale_name}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.client_name}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.client_n_ice}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.client_number}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.client_addresse}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => del_list_client(val.client_id)} className='fas fa-trash text-[red]'></span><span onClick={() => popupclientlist(index)} className='fas fa-edit text-[black]'></span></td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="popupclientlist">
                <div className='bg-[#fefefe] mx-[auto] my-[6%] border-[1px] border-[solid] border-[#888] w-[70%] h-[500px]'>
                    <form className="h-full w-full bg-[#ECECEC] [box-shadow:2px_2px_10px_0px_#686571]" onSubmit={submit_edit_client} method='POST'>
                        <div className='h-1/5 w-full flex flex-row'>
                            <div className='h-full flex items-center w-full justify-center'>
                                <select className="h-[50px] w-[255px] pl-[20px] text-[#888] rounded-[15px] font-bold text-[14px] mr-[10px]" onClickCapture={select_group} required name='generale_add_client_select_name' id='genseledit' >
                                    <option value="">Group</option>
                                    <option value="bikers">Bikers</option>
                                    <option value="egypt">Egypt</option>
                                    {
                                        list_group.map((val,index) => {
                                            return (
                                                <option key={index} value={val.id}>{val.name}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='h-1/5 w-full flex flex-row items-center justify-evenly'>
                            <div>
                                <input className="h-[50px] w-[255px] pl-[20px] text-[#888] rounded-[10px] font-bold text-[14px]" required type="text" name="normal_info_add_client_name_add_name"  id='clientnamedit' placeholder='Client Name' />
                            </div>
                            <div>
                                <input className="h-[50px] w-[255px] pl-[20px] text-[#888] rounded-[10px] font-bold text-[14px]" type="text" name="normal_info_add_client_tele_number_name"  id='phnumedit' placeholder='Phone Number' />
                            </div>
                        </div>
                        <div className='h-1/5 w-full flex flex-row items-center justify-evenly'>
                            <div>
                                <input className="h-[50px] w-[255px] pl-[20px] text-[#888] rounded-[10px] font-bold text-[14px]" type="text" name="cin_add_client_n_ice_name"  id='cbiedit' placeholder='Common Business Identifier' />
                            </div>
                            <div>
                                <input className="h-[50px] w-[255px] pl-[20px] text-[#888] rounded-[10px] font-bold text-[14px]" type="text" name="cin_add_client_cin_name"  id='nidedit' placeholder='National Identity Card' />
                            </div>
                        </div>
                        <div className='h-1/5 w-full flex flex-row items-center justify-center'>
                            <div>
                                <input className="h-[50px] w-[500px] pl-[20px] text-[#888] rounded-[10px] font-bold text-[14px]" type="text" name="address_add_client_adresse_name"  id='addressedit' placeholder='Address' />
                            </div>
                        </div>
                        <div className='h-1/5 w-full flex flex-row items-center justify-center'>
                            <div>
                                <input className="w-[450px] h-[55px] border-[1px] border-[#F80808] bg-[#F80808] rounded-[15px] text-[white] font-bold text-[17px] cursor-pointer mb-[30px] hover:opacity-70" type="submit" name="submit_add_client_submit_name" value="Save" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Listclient;