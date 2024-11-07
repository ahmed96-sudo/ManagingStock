import { useEffect, useState } from "react";
const Clientcredits = () => {
    const [list_credit, setListCredit] = useState([]);
    const [info_for_client_credit, setInfoForClientCredit] = useState({});
    const [list_info_credit, setListInfoCredit] = useState([]);
    useEffect(() => {
        document.getElementById(`menu4`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu4`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu4`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu4`).children[1].classList.replace(`h-[120px]`, "h-0");
        document.getElementById(`menu4`).classList.replace(`h-[180px]`, "h-[60px]");
        document.getElementById(`menu4`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu4`).children[0].children[2].classList.add("fa-caret-down");
        /* fetch("https://asyd12855.pythonanywhere.com/listcredit",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListCredit(data.listcreditarray);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
    }, []);
    const popupcreditlistmisejour = (index)=>{
        let pop_up = document.getElementById('popupcreditlistmisejour');
        pop_up.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === pop_up) {
                pop_up.classList.replace("block", "hidden");
            }
        }
        let obje = list_credit[index];
        setInfoForClientCredit({'generale' : obje.generale_name, 'name' : obje.client_name, 'montant' : obje.montant, 'index_id' : obje.credit_id});
    }
    const popupcreditlistafficher = (index)=>{
        let pop_up = document.getElementById('popupcreditlistafficher');
        pop_up.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === pop_up) {
                pop_up.classList.replace("block", "hidden");
            }
        }
        let obje = list_credit[index];
        /* fetch("https://asyd12855.pythonanywhere.com/infolistcredit/" + obje.credit_id,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListInfoCredit(data.listinfocredit);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListInfoCredit([]);
        setInfoForClientCredit({'generale' : obje.generale_name, 'name' : obje.client_name, 'montant' : obje.montant, 'index_id' : obje.credit_id});
    }
    const submit_search_credit_client = (e) => {
        e.preventDefault();
        /* let nom_input_search_list_credit = document.getElementById("nom_input_search_list_credit_id").value;
        fetch("https://asyd12855.pythonanywhere.com/credit/name/search",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : nom_input_search_list_credit
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListCredit(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListCredit([]);
    }
    const submit_mise_jour = (e) => {
        e.preventDefault();
        /* let input_for_montant_id = document.getElementById("input_for_montant_id").value;
        let index_id = info_for_client_credit.index_id;
        fetch("https://asyd12855.pythonanywhere.com/misejour",{
            method: "POST",
            body: JSON.stringify({
                index_of_listcredit : index_id,
                input_for_montant_id : input_for_montant_id
            }),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then((data) => {
            alert("You have Added money");
            let pop_up = document.getElementById('popupcreditlistmisejour');
            pop_up.style.display = 'none';
            window.location.reload();
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        alert("You have Added money");
        let pop_up = document.getElementById('popupcreditlistmisejour');
        pop_up.style.display = 'none';
        window.location.reload();
    }
    return (
        <>
            <div className="h-full w-full flex flex-col bg-[#EFF2F6] flex-1 overflow-auto">
                <h1 className="font-[arial] h-[10%] flex items-center text-[#43546D] text-[30px] justify-center">Client Credits</h1>
                <div className='w-full h-1/5 flex flex-row'>
                    <div className='h-full w-1/2'>
                        <form className="h-full w-full flex flex-row items-center" onSubmit={submit_search_credit_client} method='POST'>
                            <input required className="w-[230px] h-[50px] pl-[15px] rounded-tl-[15px] rounded-br-[0] rounded-tr-[0] rounded-bl-[15px] ml-[20px] font-bold text-[black] font-[arial] text-[15px]" type="text" name="nom_input_search_list_credit_name" id='nom_input_search_list_credit_id' placeholder='Client Name'  />
                            <button className="h-[52px] w-[50px] rounded-tl-[0] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[0] bg-[white] cursor-pointer font-bold text-[20px]" type="submit"><span className='fas fa-search'></span></button>
                        </form>
                    </div>
                </div>
                <div className='h-4/5 w-full flex items-center justify-center'>
                    <table className="font-[Arial,_Helvetica,_sans-serif] [border-spacing:0] h-[90%] w-[95%] flex flex-col">
                        <thead>
                            <tr className="flex">
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Group</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Client Name</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Amount</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Display</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-[black] text-center border-[1px] border-[#ddd] p-[8px]">Modify</th>
                            </tr>
                        </thead>
                        <tbody className="block h-[80%] overflow-auto w-full [&>*:nth-child(odd)]:bg-[#d1d8e1]">
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Egypt</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">$ 123</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={/* () => this.pop_up_credit_list_afficher(index) */popupcreditlistafficher} className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'></span></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => popupcreditlistmisejour(1)} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Egypt</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">$ 123</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={/* () => this.pop_up_credit_list_afficher(index) */popupcreditlistafficher} className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'></span></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => popupcreditlistmisejour(1)} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Egypt</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">$ 123</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={/* () => this.pop_up_credit_list_afficher(index) */popupcreditlistafficher} className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'></span></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => popupcreditlistmisejour(1)} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Egypt</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">$ 123</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={/* () => this.pop_up_credit_list_afficher(index) */popupcreditlistafficher} className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'></span></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => popupcreditlistmisejour(1)} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Egypt</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">Ahmed</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">$ 123</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={/* () => this.pop_up_credit_list_afficher(index) */popupcreditlistafficher} className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'></span></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => popupcreditlistmisejour(1)} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            {
                                list_credit.map((val, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="w-[175px] max-w-[175px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.generale_name}</td>
                                            <td className="w-[175px] max-w-[175px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.client_name}</td>
                                            <td className="w-[175px] max-w-[175px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]">{val.montant}</td>
                                            <td className="w-[175px] max-w-[175px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => popupcreditlistafficher(index)} className='fas fa-eye cursor-pointer text-[purple] ml-[10px]'></span></td>
                                            <td className="w-[175px] max-w-[175px] overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><span onClick={() => popupcreditlistmisejour(index)} className='fas fa-edit text-[black]'></span></td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="popupcreditlistmisejour">
                <div className='bg-[#fefefe] mx-[auto] my-[14%] border-[1px] border-[solid] border-[#888] w-[35%] h-[200px]'>
                    <form className="h-full w-full bg-[#FAF9FE] [box-shadow:2px_2px_10px_0px_#686571] flex flex-col" onSubmit={submit_mise_jour} method='POST'>
                        <div className='h-1/2 w-full flex flex-row items-center justify-around'>
                            <div className='text-center font-bold text-[25px] text-[#777]'>
                                {info_for_client_credit.generale}Egypt<br />
                                {info_for_client_credit.name}Ahmed
                            </div>
                            <div className='font-bold text-[25px] text-[#777]'>
                                Reste : {/* {info_for_client_credit.montant ? info_for_client_credit.montant : 0} */}$ 22
                            </div>
                        </div>
                        <div className='h-1/2 w-full flex items-center justify-around'>
                            <input className="h-[35px] w-[150px] border-[1px] border-[#777] rounded-[10px] pl-[10px] text-[#777] font-bold text-[14px]" required type="number" name="input_for_montant_name"  id='input_for_montant_id' placeholder='Amount' />
                            <input className="h-[35px] w-[150px] border-[1px] border-[#21E1FF] bg-[#21E1FF] rounded-[10px] font-bold text-[14px] font-[arial] cursor-pointer text-[white] hover:opacity-80" type="submit" name="submit_for__montant_name" value="Save" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="popupcreditlistafficher">
                <div className='bg-[#fefefe] mx-[auto] my-[6%] border-[1px] border-[solid] border-[#888] w-2/5 h-[400px]'>
                    <form className="h-full w-full bg-[#FAF9FE] [box-shadow:2px_2px_10px_0px_#686571] flex flex-col" action='' method='POST'>
                        <div className='w-full flex flex-row items-center justify-around h-[30%]'>
                            <div className='text-center font-bold text-[25px] text-[#777]' /* id='info_for_montant_generale_name' */>
                                {/* {info_for_client_credit.generale} */}Egypt<br />
                                {/* {info_for_client_credit.name} */}Ahmed
                            </div>
                            <div className='font-bold text-[25px] text-[#777]'>
                                Reste : {/* {info_for_client_credit.montant ? info_for_client_credit.montant : 0} DH */}$ 22
                            </div>
                        </div>
                        <div className='h-[70%] w-full flex justify-center overflow-auto items-start'>
                            <ul className='mt-[20px]'>
                                <li className="h-[30px] w-[250px] flex justify-around" /* key={index} */><span className="fa-li"><i className="fas fa-arrow-alt-circle-right"></i></span><p className="text-[#777] font-bold text-[15px]">{/* {val.Date_operation_info_list_credit} */}22-11-2022</p><p className="text-[#777] font-bold text-[15px]">{/* {val.montant_info_list_credit} */}$ 22</p></li>
                                <li className="h-[30px] w-[250px] flex justify-around" /* key={index} */><span className="fa-li"><i className="fas fa-arrow-alt-circle-right"></i></span><p className="text-[#777] font-bold text-[15px]">{/* {val.Date_operation_info_list_credit} */}20-11-2022</p><p className="text-[#777] font-bold text-[15px]">{/* {val.montant_info_list_credit} */}$ 25</p></li>
                                <li className="h-[30px] w-[250px] flex justify-around" /* key={index} */><span className="fa-li"><i className="fas fa-arrow-alt-circle-right"></i></span><p className="text-[#777] font-bold text-[15px]">{/* {val.Date_operation_info_list_credit} */}21-11-2022</p><p className="text-[#777] font-bold text-[15px]">{/* {val.montant_info_list_credit} */}$ 22</p></li>
                                <li className="h-[30px] w-[250px] flex justify-around" /* key={index} */><span className="fa-li"><i className="fas fa-arrow-alt-circle-right"></i></span><p className="text-[#777] font-bold text-[15px]">{/* {val.Date_operation_info_list_credit} */}23-11-2022</p><p className="text-[#777] font-bold text-[15px]">{/* {val.montant_info_list_credit} */}$ 23</p></li>
                                {
                                    list_info_credit.map((val, index) => {
                                        return (
                                            <li className="h-[30px] w-[250px] flex justify-around" key={index}><span className="fa-li"><i className="fas fa-arrow-alt-circle-right"></i></span><p className="text-[#777] font-bold text-[15px]">{val.Date_operation_info_list_credit}</p><p className="text-[#777] font-bold text-[15px]">{val.montant_info_list_credit}</p></li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Clientcredits;