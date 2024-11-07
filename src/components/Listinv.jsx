import { useEffect, useState } from "react";
const Listinv = () => {
    const [list_inv, setListInv] = useState([]);
    useEffect(() => {
        document.getElementById(`menu6`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu6`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu6`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu6`).children[1].classList.replace(`h-[160px]`, "h-0");
        document.getElementById(`menu6`).classList.replace(`h-[220px]`, "h-[60px]");
        document.getElementById(`menu6`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu6`).children[0].children[2].classList.add("fa-caret-down");
        /* fetch("https://asyd12855.pythonanywhere.com/listfactur",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListInv(data.listfacturarray);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
    }, []);
    const submit_search_factur_client = (e) => {
        e.preventDefault();
        /* let client_srch_list_factures = document.getElementById("client_srch_list_factures_id").value;
        fetch("https://asyd12855.pythonanywhere.com/factur/search/client",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : client_srch_list_factures
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListInv(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListInv([]);
    }
    const submit_search_factur_date = (e) => {
        e.preventDefault();
        /* let Date_srch_list_factures = document.getElementById("Date_srch_list_factures_id").value;
        fetch("https://asyd12855.pythonanywhere.com/factur/search/date",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : Date_srch_list_factures
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListInv(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListInv([]);
    }
    const del_list_factur = (/* id */) => {
        if (window.confirm('are you sure you want to delete the Invoice?')) {
            /* fetch("https://asyd12855.pythonanywhere.com/dellistfactur/" + id,{
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
        <div className="h-full w-full flex flex-col bg-[#EFF2F6] flex-1 overflow-auto">
            <div className='h-1/5 w-full flex flex-row'>
                <div className='h-full w-1/5 flex items-center justify-center'>
                    <h1 className="font-[arial] text-[#777]">Invoices List</h1>
                </div>
                <div className='h-full w-[80%] flex flex-row'>
                    <div className='h-full w-1/2'>
                        <form className="h-full w-full flex flex-row items-center justify-center" onSubmit={submit_search_factur_client} method='POST'>
                            <input required className="w-[40%] h-[50px] pl-[15px] rounded-tl-[15px] rounded-br-[0] rounded-tr-[0] rounded-bl-[15px] font-bold text-[black] font-[arial] text-[15px] max-[1024px]:w-[80%]" type="text" name="client_srch_list_factures_name"id='client_srch_list_factures_id' placeholder='Client'  />
                            <button className="h-[52px] w-[10%] rounded-tl-[0] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[0] bg-[white] cursor-pointer font-bold text-[20px] max-[1024px]:w-[15%]" type="submit"><span className='fas fa-search'></span></button>
                        </form>
                    </div>
                    <div className='h-full w-1/2'>
                        <form className="h-full w-full flex flex-row items-center justify-center" onSubmit={submit_search_factur_date} method='POST'>
                            <input required className="w-[40%] h-[50px] pl-[15px] rounded-tl-[15px] rounded-br-[0] rounded-tr-[0] rounded-bl-[15px] font-bold text-[black] font-[arial] text-[15px] max-[1024px]:w-[80%]" type="Date" name="Date_srch_list_factures_name" id='Date_srch_list_factures_id'  />
                            <button className="h-[52px] w-[10%] rounded-tl-[0] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[0] bg-[white] cursor-pointer font-bold text-[20px] max-[1024px]:w-[15%]" type="submit"><span className='fas fa-search'></span></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='h-4/5 w-full flex justify-center'>
                <table className="font-[Arial,_Helvetica,_sans-serif] [border-spacing:0] h-[95%] w-[95%] flex flex-col">
                    <thead>
                        <tr className="flex">
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Invoice Date</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Client</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Amount</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Action</th>
                        </tr>
                    </thead>
                    <tbody className="block h-[80%] overflow-auto w-full [&>*:nth-child(odd)]:bg-[#d1d8e1]">
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">$133</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]"><span className="text-[red] fas fa-trash" onClick={() => del_list_factur(1)}></span><a href={'/facture/'}/* "#" */ target='_blank' rel="noopener noreferrer" className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">$133</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]"><span className="text-[red] fas fa-trash" onClick={() => del_list_factur(1)}></span><a href={'/facture/'}/* "#" */ target='_blank' rel="noopener noreferrer" className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">$133</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]"><span className="text-[red] fas fa-trash" onClick={() => del_list_factur(1)}></span><a href={'/facture/'}/* "#" */ target='_blank' rel="noopener noreferrer" className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">$133</td>
                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]"><span className="text-[red] fas fa-trash" onClick={() => del_list_factur(1)}></span><a href={'/facture/'}/* "#" */ target='_blank' rel="noopener noreferrer" className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'> </a></td>
                        </tr>
                        {
                            list_inv.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="w-[225px] max-w-[225px] overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">{val.Date_operation_list_factur}</td>
                                        <td className="w-[225px] max-w-[225px] overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">{val.client_name}</td>
                                        <td className="w-[225px] max-w-[225px] overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">{val.montant_list_factur}</td>
                                        <td className="w-[225px] max-w-[225px] overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]"><span className="text-[red] fas fa-trash" onClick={() => del_list_factur(val.id)}></span><a href={'/facture/'+ val.id} target='_blank' rel="noopener noreferrer" className='fas fa-eye text-[#3aff14]'> </a></td>
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

export default Listinv;