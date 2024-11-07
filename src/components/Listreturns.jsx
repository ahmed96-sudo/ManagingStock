import { useEffect, useState } from "react";
const Listreturns = () => {
    const [list_returns, setListReturns] = useState([]);
    useEffect(() => {
        document.getElementById(`menu2`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu2`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu2`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu2`).children[1].classList.replace(`h-[200px]`, "h-0");
        document.getElementById(`menu2`).classList.replace(`h-[260px]`, "h-[60px]");
        document.getElementById(`menu2`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu2`).children[0].children[2].classList.add("fa-caret-down");
        /* fetch("https://asyd12855.pythonanywhere.com/listavoire",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListReturns(data.listavoirearray);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
    }, []);
    const submit_search_avoire_date = (e) => {
        e.preventDefault();
        /* let from_date_srch_lst_ventes = document.getElementById("from_date_srch_lst_ventes_id2").value;
        fetch("https://asyd12855.pythonanywhere.com/avoire/search/date",{
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
            setListReturns(data.result_charge);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListReturns([]);
    }
    const del_list_avoire = (/* id */) => {
        if (window.confirm('are you sure you want to delete the Return?')) {
            /* fetch("https://asyd12855.pythonanywhere.com/dellistavoire/" + id,{
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
    return (
        <div className="h-full w-full bg-[#EFF2F6] flex-1 overflow-auto">
            <h1 className="font-[arial] h-[10%] flex items-center text-[#43546D] text-[30px] justify-center">Returns & Credits List</h1>
            <div className='h-1/4 w-full flex flex-row items-center justify-center'>
                <div className='w-[45%] h-full flex items-center'>
                    <form className="ml-[70px] flex flex-col h-[75px] w-[385px] border-[1px] border-[gray]" onSubmit={submit_search_avoire_date} method='POST'>
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
                                <input className="w-[155px] h-[30px] pl-[10px] font-bold" required type="date" name="from_date_srch_lst_ventes_name" id='from_date_srch_lst_ventes_id2' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='h-[65%] w-full flex items-center justify-center'>
                <table className="font-[Arial,_Helvetica,_sans-serif] [border-spacing:0] h-[90%] w-[95%] flex flex-col">
                    <thead>
                        <tr className="flex">
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Date</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Client Name</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Total Price</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Remove</th>
                        </tr>
                    </thead>
                    <tbody className="block h-[80%] overflow-auto w-full">
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Ahmed Saeed</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 110</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_avoire()} className='fas fa-trash text-[red]'></span><a href=/* {'/avoire/'+ val.id} */"#" target='_blank' rel="noopener noreferrer" className='fas fa-eye text-black'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Ahmed Saeed</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 110</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_avoire()} className='fas fa-trash text-[red]'></span><a href=/* {'/avoire/'+ val.id} */"#" target='_blank' rel="noopener noreferrer" className='fas fa-eye text-black'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Ahmed Saeed</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 110</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_avoire()} className='fas fa-trash text-[red]'></span><a href=/* {'/avoire/'+ val.id} */"#" target='_blank' rel="noopener noreferrer" className='fas fa-eye text-black'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Ahmed Saeed</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 110</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_avoire()} className='fas fa-trash text-[red]'></span><a href=/* {'/avoire/'+ val.id} */"#" target='_blank' rel="noopener noreferrer" className='fas fa-eye text-black'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Ahmed Saeed</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ 110</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_avoire()} className='fas fa-trash text-[red]'></span><a href=/* {'/avoire/'+ val.id} */"#" target='_blank' rel="noopener noreferrer" className='fas fa-eye text-black'> </a></td>
                        </tr>
                        {
                            list_returns.map((val, index) => {
                                return (
                                    <tr key={index} className="flex">
                                        <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.Date_operation_list_avoire}</td>
                                        <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.client_name}</td>
                                        <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.montant_list_avoire}</td>
                                        <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={() => del_list_avoire(val.id)} className='fas fa-trash text-[red]'></span><a href={'/avoire/'+ val.id} target='_blank' rel="noopener noreferrer" className='fas fa-eye text-black'> </a></td>
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

export default Listreturns;