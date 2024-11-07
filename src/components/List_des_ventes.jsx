import "../stylesheets/Dashbord.css";
import { useState, /* useEffect */ } from "react";
const List_des_ventes = () => {
    const [listfactur, setListfactur] = useState([]);
    const [listsansfactur, setListsansfactur] = useState([]);
    // useEffect(() => {}, []);
    const submit_search_vente_date = (e) => {
        e.preventDefault();
        let from_date_srch_lst_ventes = document.getElementById("from_date_srch_lst_ventes_id1").value;
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
            setListfactur(data.result_client);
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
            setListsansfactur(data.result_client);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const submit_search_vente_client = (e) => {
        e.preventDefault();
        let name_srch_lst_ventes = document.getElementById("name_srch_lst_ventes_id").value;
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
            setListfactur(data.search_result);
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
            setListsansfactur(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    return (
        <div id='list_des_ventes'>
            <div className='srch_lst_ventes'>
                <div className='srch_date_lst_ventes'>
                    <form onSubmit={submit_search_vente_date} method='POST'>
                        <div className='head_srch_date_lst_ventes'>
                            <div className='h3_srch_date_lst_ventes'>
                                <h3>Search by Date</h3>
                            </div>
                            <div className='sbmt_srch_date_lst_ventes'>
                                <button type="submit"><span className='fas fa-search'></span></button>
                            </div>
                        </div>
                        <div className='inpts_srch_date_lst_ventes'>
                            <div className='from_inpt_srch_date_lst_ventes'>
                                <input required type="date" name="from_date_srch_lst_ventes_name" id='from_date_srch_lst_ventes_id1' />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='srch_name_lst_ventes'>
                    <form onSubmit={submit_search_vente_client} method='POST'>
                        <div className='head_srch_name_lst_ventes'>
                            <div className='h3_srch_name_lst_ventes'>
                                <h3>Search by Name</h3>
                            </div>
                            <div className='sbmt_srch_name_lst_ventes'>
                                <button type="submit"><span className='fas fa-search'></span></button>
                            </div>
                        </div>
                        <div className='inpts_srch_name_lst_ventes'>
                            <div className='txtfield_srch_name_lst_ventes'>
                                <input required type="search" name="name_srch_lst_ventes_name"  id='name_srch_lst_ventes_id' placeholder='Name' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='table_lst_ventes'>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Nom Client</th>
                            <th>Total HT</th>
                            <th>etat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listfactur.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{val.Date_operation_list_factur}</td>
                                        <td>{val.client_name}</td>
                                        <td>{val.montant_list_factur}</td>
                                        <td><a href={'/factur/'+ val.id} target='_blank' rel="noopener noreferrer" className='fas fa-eye'> </a></td>
                                    </tr>
                                );
                            })
                        }
                        {
                            listsansfactur.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{val.Date_operation_list_sans_factur}</td>
                                        <td>{val.client_name}</td>
                                        <td>{val.montant_list_sans_factur}</td>
                                        <td></td>
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

export default List_des_ventes;