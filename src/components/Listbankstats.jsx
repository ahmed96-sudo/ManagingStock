import { useEffect, useState } from "react";
const Listbankstats = () => {
    const [list_bank, setListBank] = useState([]);
    useEffect(() => {
        document.getElementById(`menu7`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu7`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu7`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu7`).children[1].classList.replace(`h-[90px]`, "h-0");
        document.getElementById(`menu7`).classList.replace(`h-[150px]`, "h-[60px]");
        document.getElementById(`menu7`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu7`).children[0].children[2].classList.add("fa-caret-down");
        /* fetch("https://asyd12855.pythonanywhere.com/listbank",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListBank(data.listbankarray);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
    }, []);
    const submit_search_bank = (e) => {
        e.preventDefault();
        /* let client_srch_list_banque = document.getElementById("client_srch_list_banque_id").value;
        fetch("https://asyd12855.pythonanywhere.com/bank/search",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : client_srch_list_banque
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListBank(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListBank([]);
    }
    return (
        <div className="h-full w-full flex flex-col bg-[#EFF2F6] flex-1 overflow-auto">
            <div className='h-1/5 w-full flex flex-row'>
                <div className='h-full w-2/5 flex items-center'>
                    <h1 className="font-[arial] text-[#777] pl-[40px]">Bank Statements</h1>
                </div>
                <div className='h-full w-3/5 flex flex-row'>
                    <div className='h-full w-full'>
                        <form className="h-full w-full flex flex-row items-center justify-end -ml-[30px]" onSubmit={submit_search_bank} method='POST'>
                            <input className="w-[190px] h-[50px] pl-[15px] rounded-tl-[15px] rounded-br-[0] rounded-tr-[0] rounded-bl-[15px] ml-[20px] font-bold text-[black] font-[arial] text-[15px]" required type="text" name="client_srch_list_banque_name" id='client_srch_list_banque_id' placeholder='Client'  />
                            <button className="h-[52px] w-[35px] rounded-tl-[0] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[0] bg-[white] cursor-pointer font-bold text-[20px]" type="submit"><span className='fas fa-search'></span></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='h-4/5 w-full flex items-center justify-center'>
                <table className="font-[Arial,_Helvetica,_sans-serif] [border-spacing:0] h-[95%] w-[95%] flex flex-col">
                    <thead>
                        <tr className="flex">
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Date of Transaction</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Client</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Check Number</th>
                            <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="block h-[80%] overflow-auto w-full [&>*:nth-child(odd)]:bg-[#d1d8e1]">
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">151854151</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">$133</td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">151854151</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">$133</td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">151854151</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">$133</td>
                        </tr>
                        <tr className="flex">
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">22-11-2022</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">151854151</td>
                            <td className="w-[-webkit-fill-available] max-w-[-webkit-fill-available] whitespace-nowrap overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">$133</td>
                        </tr>
                    {
                        list_bank.map((val, index) => {
                            return (
                                <tr key={index}>
                                    <td className="w-[225px] max-w-[225px] overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">{val.Date_operation_bank}</td>
                                    <td className="w-[225px] max-w-[225px] overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">{val.client_name}</td>
                                    <td className="w-[225px] max-w-[225px] overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">{val.check_number}</td>
                                    <td className="w-[225px] max-w-[225px] overflow-auto text-center font-bold text-[#7e7e7e] border-[1px] border-[#ddd] p-[8px]">{val.montant_bank}</td>
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

export default Listbankstats;