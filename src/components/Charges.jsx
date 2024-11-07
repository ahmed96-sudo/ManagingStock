import { useEffect, useState } from "react";
const Charges = () => {
    const [list_charges, setListCharges] = useState([]);
    useEffect(() => {
        document.getElementById(`menu2`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu2`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu2`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu2`).children[1].classList.replace(`h-[200px]`, "h-0");
        document.getElementById(`menu2`).classList.replace(`h-[260px]`, "h-[60px]");
        document.getElementById(`menu2`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu2`).children[0].children[2].classList.add("fa-caret-down");
        /* fetch("https://asyd12855.pythonanywhere.com/listcharge",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListCharges(data.listchargeall);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
    }, []);
    const del_list_charge = (/* id */) => {
        if (window.confirm('are you sure you want to delete the Charge?')) {
            /* fetch("https://asyd12855.pythonanywhere.com/dellistcharge/" + id,{
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
    const submit_search_charge_date = (e)=>{
        e.preventDefault();
        /* let from_date_srch_lst_ventes = document.getElementById("from_date_srch_lst_ventes_id3").value;
        fetch("https://asyd12855.pythonanywhere.com/charge/search/date",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : from_date_srch_lst_ventes
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListCharges(data.result_charge);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListCharges([]);
    }
    const submit_add_charge = (e) => {
        e.preventDefault();
        /* let listdes_avoire_description = document.getElementById("addchargedesc").value;
        let listdes_avoire_prix = document.getElementById("addchargeprice").value;
        fetch("https://asyd12855.pythonanywhere.com/addcharge",{
            method: "POST",
            body: JSON.stringify({
                descrip_charge: listdes_avoire_description,
                prix_charge: listdes_avoire_prix
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then((data) => {
            alert("Your charge is added");
            window.location.reload();
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        alert("Your charge is added");
        window.location.reload();
    }
    return (
        <div className="h-full w-full bg-[#EFF2F6] flex-1 overflow-auto">
            <h1 className="font-[arial] h-[10%] flex items-center text-[#43546D] text-[30px] justify-center">Charges</h1>
            <div className='h-1/4 w-full flex flex-row items-center'>
                <div className='h-full flex items-center w-[45%] max-[1024px]:w-[40%]'>
                    <form className="ml-[70px] flex flex-col h-[75px] w-[385px] border-[1px] border-[gray] max-[1024px]:ml-[10px]" onSubmit={submit_search_charge_date} method='POST'>
                        <div className='flex flex-row items-center h-[30px] w-full'>
                            <div className='w-[150px] ml-[10px]'>
                                <h3 className="text-[16px] font-[arial]">Search by Date</h3>
                            </div>
                            <div className='ml-auto mr-[20px]'>
                                <button className="h-[25px] w-[50px] rounded-[10px] border-[1px] border-[gray] cursor-pointer mt-[5px] bg-[white] hover:opacity-[0.79]" type="submit"><span className='fas fa-search'></span></button>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-center h-[45px] w-full'>
                            <div className='w-[170px]'>
                                <input className="w-[155px] h-[30px] pl-[10px] font-bold" required type="date" name="from_date_srch_lst_ventes_name" id='from_date_srch_lst_ventes_id3' />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='w-[55%] h-full flex items-center max-[1024px]:w-[60%]'>
                    <form className="h-full w-full flex flex-row items-center justify-evenly" onSubmit={submit_add_charge} method='POST'>
                        <div className='w-[33.33%] h-full flex items-center justify-center max-[1024px]:w-[40%]'>
                            <input className="w-[60%] h-[35px] border-[1px] border-[gray] rounded-[15px] pl-[15px] font-bold max-[1024px]:w-[80%]" required type="text" name="listdes_avoire_description_name" id='addchargedesc' placeholder='Description'  />
                        </div>
                        <div className='w-[33.33%] h-full flex items-center justify-center max-[1024px]:w-[30%]'>
                            <input className="w-[60%] h-[35px] border-[1px] border-[gray] rounded-[15px] pl-[15px] font-bold max-[1024px]:w-[80%]" required type="number" name="listdes_avoire_prix_name" id='addchargeprice' placeholder='Price'  />
                        </div>
                        <div className='w-[33.33%] h-full flex items-center justify-center max-[1024px]:w-[30%]'>
                            <input className="w-[50%] h-[35px] bg-[#88ff00] border-[1px] border-[#88ff00] rounded-[10px] cursor-pointer [box-shadow:0.3px_0.3px_1.9px_0px] hover:opacity-70 hover:[transition:all_ease-in_0.3s] max-[1024px]:w-[70%]" type="submit" name="listdes_avoire_add_name" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
            <div className='h-[65%] w-full flex items-center justify-center'>
                <table className="font-[Arial,_Helvetica,_sans-serif] [border-spacing:0] h-[90%] w-[95%] flex flex-col">
                    <thead>
                        <tr className="flex">
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Date</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Description</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Price</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Remove</th>
                        </tr>
                    </thead>
                    <tbody className="block h-[80%] overflow-auto w-full">
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">kjanbsdjhjkhjasj</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 123</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_charge()} className='fas fa-trash text-[red]'></span></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">kjanbsdjhjkhjasj</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 123</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_charge()} className='fas fa-trash text-[red]'></span></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">kjanbsdjhjkhjasj</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 123</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_charge()} className='fas fa-trash text-[red]'></span></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">kjanbsdjhjkhjasj</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 123</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_charge()} className='fas fa-trash text-[red]'></span></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">kjanbsdjhjkhjasj</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 123</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_charge()} className='fas fa-trash text-[red]'></span></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">kjanbsdjhjkhjasj</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 123</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_charge()} className='fas fa-trash text-[red]'></span></td>
                        </tr>
                        {
                            list_charges.map((val, index) => {
                                return (
                                    <tr key={index} className="flex">
                                        <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.Date_operation_list_charge}</td>
                                        <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.description_list_charge}</td>
                                        <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.price_list_charge}</td>
                                        <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_charge(val.id)} className='fas fa-trash text-[red]'></span></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Charges;