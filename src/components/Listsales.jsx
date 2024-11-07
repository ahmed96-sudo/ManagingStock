import { useEffect, useState } from "react";
const Listsales = () => {
    const [list_sales, setList_sales] = useState([]);
    const [list_uninv, setList_uninv] = useState([]);
    useEffect(() => {
        document.getElementById(`menu2`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu2`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu2`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu2`).children[1].classList.replace(`h-[200px]`, "h-0");
        document.getElementById(`menu2`).classList.replace(`h-[260px]`, "h-[60px]");
        document.getElementById(`menu2`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu2`).children[0].children[2].classList.add("fa-caret-down");
        /* fetch("https://asyd12855.pythonanywhere.com/listfactur",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setList_sales(data.listfacturarray);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
        fetch("https://asyd12855.pythonanywhere.com/listsansfactur",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setList_uninv(data.listsansfacturarray);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
    }, []);
    const submit_search_vente_date = (e) => {
        e.preventDefault();
        /* let from_date_srch_lst_ventes = document.getElementById("from_date_srch_lst_ventes_id1").value;
        fetch("https://asyd12855.pythonanywhere.com/factur/search/date",{
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
            setList_sales(data.result_client);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
        fetch("https://asyd12855.pythonanywhere.com/sans/search/date",{
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
            setList_uninv(data.result_client);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setList_sales([]);
    }
    const submit_search_vente_client = (e) => {
        e.preventDefault();
        /* let name_srch_lst_ventes = document.getElementById("name_srch_lst_ventes_id").value;
        fetch("https://asyd12855.pythonanywhere.com/factur/search/client",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : name_srch_lst_ventes
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setList_sales(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
        fetch("https://asyd12855.pythonanywhere.com/sans/search/client",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : name_srch_lst_ventes
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setList_uninv(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setList_uninv([]);
    }
    return (
        <div className="h-full w-full bg-[#EFF2F6] flex-1 overflow-auto">
            <h1 className="font-[arial] h-[10%] flex items-center text-[#43546D] text-[30px] justify-center">Sales List</h1>
            <div className='h-1/4 w-full flex flex-row items-center'>
                <div className='w-3/5 h-full flex items-center max-[1024px]:w-[50%]'>
                    <form className="ml-[70px] flex flex-col h-[75px] w-[40%] border-[1px] border-[gray] max-[1024px]:w-[90%] max-[1024px]:ml-[20px]" onSubmit={submit_search_vente_date} method='POST'>
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
                                <input className="w-[155px] h-[30px] pl-[10px] font-bold" required type="date" name="from_date_srch_lst_ventes_name" id='from_date_srch_lst_ventes_id1' />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='w-2/5 h-full flex items-center max-[1024px]:w-[50%]'>
                    <form className="flex flex-col h-[75px] w-[50%] border-[1px] border-[gray] max-[1024px]:w-[90%]" onSubmit={submit_search_vente_client} method='POST'>
                        <div className='flex flex-row items-center h-[30px] w-full'>
                            <div className='w-[150px] ml-[10px]'>
                                <h3 className="text-[16px] font-[arial]">Search by Name</h3>
                            </div>
                            <div className='ml-auto mr-[20px]'>
                                <button className="h-[25px] w-[50px] rounded-[10px] border-[1px] border-[gray] cursor-pointer mt-[5px] bg-[white]" type="submit"><span className='fas fa-search'></span></button>
                            </div>
                        </div>
                        <div className='h-[45px] w-full'>
                            <div className='h-full w-full flex flex-row items-center justify-center'>
                                <input className="h-[35px] w-[175px] rounded-[15px] border-[1px] border-[gray] pl-[20px]" required type="search" name="name_srch_lst_ventes_name" id='name_srch_lst_ventes_id' placeholder='Client Name' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='h-[65%] w-full flex items-center justify-center'>
                <table className="font-[Arial,_Helvetica,_sans-serif] [border-spacing:0] h-[90%] w-[95%] flex flex-col">
                    <thead>
                        <tr className="flex">
                            <th className="w-[-webkit-fill-available] whitespace-nowrap border-collapse text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] overflow-auto">Date</th>
                            <th className="w-[-webkit-fill-available] whitespace-nowrap border-collapse text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] overflow-auto">Client Name</th>
                            <th className="w-[-webkit-fill-available] whitespace-nowrap border-collapse text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] overflow-auto">Total Price</th>
                            <th className="w-[-webkit-fill-available] whitespace-nowrap border-collapse text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] overflow-auto">Display</th>
                        </tr>
                    </thead>
                    <tbody className="block h-[80%] overflow-auto w-full">
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">Ahmed Saeed</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">$ 110</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap"><a href=/* {'/factur/'+ val.id} */"#" target='_blank' rel="noopener noreferrer" className='fas fa-eye text-black'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">Ahmed Saeed</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">$ 110</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap"><a href=/* {'/factur/'+ val.id} */"#" target='_blank' rel="noopener noreferrer" className='fas fa-eye text-black'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">Ahmed Saeed</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">$ 110</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap"><a href=/* {'/factur/'+ val.id} */"#" target='_blank' rel="noopener noreferrer" className='fas fa-eye text-black'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">Ahmed Saeed</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">$ 110</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap"><a href=/* {'/factur/'+ val.id} */"#" target='_blank' rel="noopener noreferrer" className='fas fa-eye text-black'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">Ahmed Saeed</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap">$ 110</td>
                            <td className="w-[-webkit-fill-available] border-collapse overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e] whitespace-nowrap"><a href=/* {'/factur/'+ val.id} */"#" target='_blank' rel="noopener noreferrer" className='fas fa-eye text-black'> </a></td>
                        </tr>
                        {
                            list_sales.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="w-[185px] max-w-[185px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.Date_operation_list_factur}</td>
                                        <td className="w-[185px] max-w-[185px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.client_name}</td>
                                        <td className="w-[185px] max-w-[185px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.montant_list_factur}</td>
                                        <td className="w-[185px] max-w-[185px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><a href={'/factur/'+ val.id} target='_blank' rel="noopener noreferrer" className='fas fa-eye text-black'> </a></td>
                                    </tr>
                                );
                            })
                        }
                        {
                            list_uninv.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="w-[185px] max-w-[185px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.Date_operation_list_sans_factur}</td>
                                        <td className="w-[185px] max-w-[185px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.client_name}</td>
                                        <td className="w-[185px] max-w-[185px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.montant_list_sans_factur}</td>
                                        <td className="w-[185px] max-w-[185px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"></td>
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

export default Listsales;