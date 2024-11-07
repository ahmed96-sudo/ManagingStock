import { useEffect, useState } from "react";
const Listdelnotes = () => {
    const [list_del, setListDel] = useState([]);
    useEffect(() => {
        document.getElementById(`menu6`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu6`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu6`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu6`).children[1].classList.replace(`h-[160px]`, "h-0");
        document.getElementById(`menu6`).classList.replace(`h-[220px]`, "h-[60px]");
        document.getElementById(`menu6`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu6`).children[0].children[2].classList.add("fa-caret-down");
        /* fetch("https://asyd12855.pythonanywhere.com/listbl",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListDel(data.listblarray);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
    }, []);
    const bl_be_factur = () => {
        let array_of_bl =  [];
        for (let i = 0; i < list_del.length; i++) {
            let del_notes = list_del[i];
            let client_id_list_bl = document.getElementsByClassName('checkboxclass' + del_notes.client_id_list_bl);
            for (let x = 0; x < client_id_list_bl.length; x++) {
                if ((client_id_list_bl[x].checked) === true) {
                    if ((client_id_list_bl[x].id) in array_of_bl) {
                        console.log("not again");
                    } else {
                            array_of_bl.push(client_id_list_bl[x].id);
                    }
                }
            }
        }
        if (array_of_bl.length > 0) {
            if (window.confirm('are you sure you want to make that Delivery Note an Invoice?')) {
                console.log("not again");
                /* fetch("https://asyd12855.pythonanywhere.com/blbefactur",{
                    method: "POST",
                    body: JSON.stringify({
                        bl_id : array_of_bl
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(data => {
                    if (data.blbefactur === 'You do not have a ICE') {
                        alert("You will not have an Invoice Until You type Your CBI");
                    } else {
                        alert('You have made an Invoice');
                        array_of_bl = [];
                        window.location.reload();
                    }
                })
                .catch(error => {
                    console.error(
                        "There has been a problem:",
                        error
                    );
                }); */
                console.log(array_of_bl);
                alert('You have made an Invoice');
                array_of_bl = [];
                window.location.reload();
            }
        } else {
            alert('You have to check at least one checkbox');
        }
    }
    const submit_search_bl_client = (e) => {
        e.preventDefault();
        /* let client_srch_list_bl = document.getElementById("client_srch_list_bl_id").value;
        fetch("https://asyd12855.pythonanywhere.com/bl/search/client",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : client_srch_list_bl
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListDel(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListDel([]);
    }
    const submit_search_bl_date = (e) => {
        e.preventDefault();
        /* let Date_srch_list_bl = document.getElementById("Date_srch_list_bl_id").value;
        fetch("https://asyd12855.pythonanywhere.com/bl/search/date",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : Date_srch_list_bl
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListDel(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListDel([]);
    }
    const del_list_bl = (/* id */) => {
        if (window.confirm('are you sure you want to delete the Delivery Note?')) {
            /* fetch("https://asyd12855.pythonanywhere.com/dellistbl/" + id,{
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
                <div className='h-full w-1/5 flex items-center justify-center max-[1024px]:w-[30%]'>
                    <h1 className="font-[arial] text-[#777]">Delivery Notes List</h1>
                    <span onClick={() => bl_be_factur()} className='fas fa-check cursor-pointer text-[#3aff14] ml-[10px] border border-[#999]'></span>
                </div>
                <div className='h-full w-[80%] flex flex-row max-[1024px]:w-[70%]'>
                    <div className='h-full w-1/2'>
                        <form className="h-full w-full flex flex-row items-center justify-center" onSubmit={submit_search_bl_client} method='POST'>
                            <input required className="w-[40%] h-[50px] pl-[15px] rounded-tl-[15px] rounded-br-[0] rounded-tr-[0] rounded-bl-[15px] font-bold text-[black] font-[arial] text-[15px] max-[1024px]:w-[80%]" type="text" name="client_srch_list_factures_name" id='client_srch_list_bl_id' placeholder='Client'  />
                            <button className="h-[52px] w-[10%] rounded-tl-[0] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[0] bg-[white] cursor-pointer font-bold text-[20px] max-[1024px]:w-[15%]" type="submit"><span className='fas fa-search'></span></button>
                        </form>
                    </div>
                    <div className='h-full w-1/2'>
                        <form className="h-full w-full flex flex-row items-center justify-center" onSubmit={submit_search_bl_date} method='POST'>
                            <input required className="w-[40%] h-[50px] pl-[15px] rounded-tl-[15px] rounded-br-[0] rounded-tr-[0] rounded-bl-[15px] font-bold text-[black] font-[arial] text-[15px] max-[1024px]:w-[80%]" type="Date" name="Date_srch_list_factures_name" id='Date_srch_list_bl_id'  />
                            <button className="h-[52px] w-[10%] rounded-tl-[0] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[0] bg-[white] cursor-pointer font-bold text-[20px] max-[1024px]:w-[15%]" type="submit"><span className='fas fa-search'></span></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='h-4/5 w-full flex justify-center'>
                <table className="font-[Arial,_Helvetica,_sans-serif] [border-spacing:0] h-[95%] w-[95%] flex flex-col">
                    <thead>
                        <tr className="flex">
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Delivery Notes Date</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Client</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Amount</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Action</th>
                        </tr>
                    </thead>
                    <tbody className="block h-[80%] overflow-auto w-full [&>*:nth-child(odd)]:bg-[#d1d8e1]">
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">$133</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]"><input type="checkbox" id={1} value={1} className={'checkboxclass' + 1} /><span className="text-[red] fas fa-trash" onClick={() => del_list_bl(1)}></span><a href={'/bl/'}/* "#" */ target='_blank' rel="noopener noreferrer" className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">$133</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]"><input type="checkbox" id={2} value={2} className={'checkboxclass' + 1} /><span className="text-[red] fas fa-trash" onClick={() => del_list_bl(1)}></span><a href={'/bl/'}/* "#" */ target='_blank' rel="noopener noreferrer" className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">$133</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]"><input type="checkbox" id={3} value={3} className={'checkboxclass' + 2} /><span className="text-[red] fas fa-trash" onClick={() => del_list_bl(1)}></span><a href={'/bl/'}/* "#" */ target='_blank' rel="noopener noreferrer" className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'> </a></td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">$133</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]"><input type="checkbox" id={4} value={4} className={'checkboxclass' + 2} /><span className="text-[red] fas fa-trash" onClick={() => del_list_bl(1)}></span><a href={'/bl/'}/* "#" */ target='_blank' rel="noopener noreferrer" className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'> </a></td>
                        </tr>
                        {
                            list_del.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="w-[225px] max-w-[225px] overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">{val.Date_operation_list_bl}</td>
                                        <td className="w-[225px] max-w-[225px] overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">{val.client_name}</td>
                                        <td className="w-[225px] max-w-[225px] overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">{val.montant_list_bl}</td>
                                        <td className="w-[225px] max-w-[225px] overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]"><input type="checkbox" id={val.id} value={val.id} className={'checkboxclass' + val.client_id_list_bl} /><span className="text-[red] fas fa-trash" onClick={() => del_list_bl(val.id)}></span><a href={'/bl/'+ val.id} target='_blank' rel="noopener noreferrer" className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'> </a></td>
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

export default Listdelnotes;