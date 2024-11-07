import { useEffect, useState } from "react";
const Listproduct = () => {
    const [list_product, setListProduct] = useState([]);
    const [list_info_product, setListInfoProduct] = useState([]);
    const [info_for_product, setInfoForProduct] = useState({});
    useEffect(() => {
        document.getElementById(`menu3`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu3`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu3`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu3`).children[1].classList.replace(`h-[90px]`, "h-0");
        document.getElementById(`menu3`).classList.replace(`h-[150px]`, "h-[60px]");
        document.getElementById(`menu3`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu3`).children[0].children[2].classList.add("fa-caret-down");
        /* fetch("https://asyd12855.pythonanywhere.com/listproduct",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListProduct(data.listproductarray);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
    }, []);
    const popupproductlistedit = (index)=>{
        let pop_up = document.getElementById('popupproductlistedit');
        pop_up.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === pop_up) {
                pop_up.classList.replace("block", "hidden");
                document.getElementById("qtyeditpro").value = "";
                document.getElementById("minqtyeditpro").value = "";
                document.getElementById("sellprieditpro").value = "";
                document.getElementById("addprieditpro").value = "0";
                document.getElementById("fiprieditpro").value = "";
            }
        }
        let obje = list_product[index];
        document.getElementById("qtyeditpro").value = obje.product_qty/* "44" */;
        document.getElementById("minqtyeditpro").value = obje.min_qty_alert/* "10" */;
        document.getElementById("sellprieditpro").value = obje.product_p_devis/* "12" */;
        document.getElementById("addprieditpro").value = obje.product_p_avhat/* "0" */;
        document.getElementById("fiprieditpro").value = obje.product_p_vente/* "12" */;
        setInfoForProduct({'id' : obje.product_id, 'ref' : obje.product_ref, 'barcode' : obje.product_barcode, 'fourn' : obje.product_fourn_name, 'cate' : obje.product_cate_name, 'description' : obje.product_description, 'qtyall' : obje.product_qty, 'logo_product' : obje.logo_product});
    }
    const popupproductlistref = (index)=>{
        let pop_up = document.getElementById('popupproductlistref');
        pop_up.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === pop_up) {
                pop_up.classList.replace("block", "hidden");
            }
        }
        let obje = list_product[index];
        /* fetch("https://asyd12855.pythonanywhere.com/infolistproduct/" + obje.product_id,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListInfoProduct(data.infolistproduct);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListInfoProduct([]);
        setInfoForProduct({'id' : obje.product_id, 'ref' : obje.product_ref, 'barcode' : obje.product_barcode, 'fourn' : obje.product_fourn_name, 'cate' : obje.product_cate_name, 'description' : obje.product_description, 'qtyall' : obje.product_qty, 'logo_product' : obje.logo_product})
    }
    const submit_search_product_category = (e) => {
        e.preventDefault();
        /* let categorie_input_search_list_product = document.getElementById("categorie_input_search_list_product_id").value;
        fetch("https://asyd12855.pythonanywhere.com/product/category/search",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : categorie_input_search_list_product
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListProduct(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListProduct([]);
    }
    const submit_search_product_barcode = (e) => {
        e.preventDefault();
        /* let recherche_input_search_list_product = document.getElementById("recherche_input_search_list_product_id").value;
        fetch("https://asyd12855.pythonanywhere.com/product/barcode/search",{
            method: "POST",
            body: JSON.stringify({
                searchTerm : recherche_input_search_list_product
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setListProduct(data.search_result);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setListProduct([]);
    }
    const del_list_product = (/* ind */) => {
        if (window.confirm('are you sure you want to delete the Product?')) {
            /* fetch("https://asyd12855.pythonanywhere.com/dellistproduct/" + ind,{
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
    const submit_add_product_info = (e) => {
        e.preventDefault();
        /* let qty_add_product = document.getElementById("qtyeditpro").value;
        let min_qty_alert = document.getElementById("minqtyeditpro").value;
        let pu_devis_add_product = document.getElementById("sellprieditpro").value;
        let prix_d_achat_add_product = document.getElementById("addprieditpro").value;
        let prix_de_vente_add_product = document.getElementById("fiprieditpro").value;
        fetch("https://asyd12855.pythonanywhere.com/addproductstorage",{
            method: "POST",
            body: JSON.stringify({
                storage_qty: qty_add_product,
                storage_min_qty_alert: min_qty_alert,
                storage_p_devis: pu_devis_add_product,
                storage_p_achat: prix_d_achat_add_product,
                storage_p_vente: prix_de_vente_add_product,
                storage_product_id: this.state.info_for_product.id
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then((data) => {
            alert('You have added a shipment to the storage')
            let pop_up = document.getElementById('popupproductlistedit');
            pop_up.classList.replace("block", "hidden");
            window.location.reload();
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        alert('You have added a shipment to the storage')
        let pop_up = document.getElementById('popupproductlistedit');
        pop_up.classList.replace("block", "hidden");
        window.location.reload();
    }
    return (
        <>
            <div className="h-full w-full flex flex-col bg-[#EFF2F6] flex-1 overflow-auto">
                <h1 className="font-[arial] h-[10%] flex items-center text-[#43546D] text-[30px] justify-center">Products List</h1>
                <div className='w-full h-1/5 flex flex-row'>
                    <div className='h-full w-1/2'>
                        <form className="h-full w-full flex flex-row items-center" onSubmit={submit_search_product_category} method='POST'>
                            <input required className="w-[40%] h-[50px] pl-[15px] rounded-tl-[15px] rounded-br-[0] rounded-tr-[0] rounded-bl-[15px] ml-[20px] font-bold text-[black] font-[arial] text-[15px] max-[1024px]:w-[70%]" type="text" name="categorie_input_search_list_product_name" id='categorie_input_search_list_product_id' placeholder='Category'/>
                            <button className="h-[52px] w-[10%] rounded-tl-[0] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[0] bg-[white] cursor-pointer font-bold text-[20px] max-[1024px]:w-[15%]" type="submit"><span className='fas fa-search'></span></button>
                        </form>
                    </div>
                    <div className='h-full w-1/2'>
                        <form className="h-full w-full flex flex-row items-center justify-end" onSubmit={submit_search_product_barcode} method='POST'>
                            <input required className="w-[40%] h-[50px] pl-[15px] rounded-tl-[15px] rounded-br-[0] rounded-tr-[0] rounded-bl-[15px] font-bold text-[black] font-[arial] text-[15px] max-[1024px]:w-[70%]" type="text" name="recherche_input_search_list_product_name" id='recherche_input_search_list_product_id' placeholder='Barcode'  />
                            <button className="h-[52px] w-[10%] rounded-tl-[0] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[0] bg-[white] cursor-pointer font-bold text-[20px] mr-[40px] max-[1024px]:w-[15%]" type="submit"><span className='fas fa-search'></span></button>
                        </form>
                    </div>
                </div>
                <div className='h-4/5 w-full flex items-center justify-center'>
                    <table className="font-[Arial,_Helvetica,_sans-serif] [border-spacing:0] h-[90%] w-[95%] flex flex-col">
                        <thead>
                            <tr className="flex">
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center border-[1px] border-[#ddd] p-[8px] text-[black]">REF</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center border-[1px] border-[#ddd] p-[8px] text-[black]">Bar Code</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center border-[1px] border-[#ddd] p-[8px] text-[black]">QTY</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center border-[1px] border-[#ddd] p-[8px] text-[black]">Category</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center border-[1px] border-[#ddd] p-[8px] text-[black]">Description</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center border-[1px] border-[#ddd] p-[8px] text-[black]">Sell.P</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center border-[1px] border-[#ddd] p-[8px] text-[black]">Added.P</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center border-[1px] border-[#ddd] p-[8px] text-[black]">Final.P</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center border-[1px] border-[#ddd] p-[8px] text-[black]">Supp</th>
                                <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center border-[1px] border-[#ddd] p-[8px] text-[black]">Action</th>
                            </tr>
                        </thead>
                        <tbody className="block h-[80%] overflow-auto w-full [&>*:nth-child(odd)]:bg-[#d1d8e1]">
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><p onClick={() => popupproductlistref()} className='text-[#43546D] underline cursor-pointer'>asd55</p></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">159196</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">12</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">Trucks</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">asdasdfadshinasdijknijkahsdbnihjkb</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 20</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 0</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 20</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">Egypt</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]"><span onClick={() => del_list_product(1)} className='fas fa-trash text-[red]'></span><span onClick={/* () => this.pop_up_product_list_edit(index,val.product_id) */popupproductlistedit} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><p onClick={() => popupproductlistref()} className='text-[#43546D] underline cursor-pointer'>asd55</p></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">159196</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">12</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">Trucks</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">asdasdfadshinasdijknijkahsdbnihjkb</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 20</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 0</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 20</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">Egypt</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]"><span onClick={() => del_list_product(1)} className='fas fa-trash text-[red]'></span><span onClick={/* () => this.pop_up_product_list_edit(index,val.product_id) */popupproductlistedit} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><p onClick={() => popupproductlistref()} className='text-[#43546D] underline cursor-pointer'>asd55</p></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">159196</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">12</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">Trucks</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">asdasdfadshinasdijknijkahsdbnihjkb</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 20</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 0</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 20</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">Egypt</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]"><span onClick={() => del_list_product(1)} className='fas fa-trash text-[red]'></span><span onClick={/* () => this.pop_up_product_list_edit(index,val.product_id) */popupproductlistedit} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><p onClick={() => popupproductlistref()} className='text-[#43546D] underline cursor-pointer'>asd55</p></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">159196</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">12</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">Trucks</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">asdasdfadshinasdijknijkahsdbnihjkb</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 20</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 0</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 20</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">Egypt</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]"><span onClick={() => del_list_product(1)} className='fas fa-trash text-[red]'></span><span onClick={/* () => this.pop_up_product_list_edit(index,val.product_id) */popupproductlistedit} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            <tr className="flex">
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><p onClick={() => popupproductlistref()} className='text-[#43546D] underline cursor-pointer'>asd55</p></td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">159196</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">12</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">Trucks</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">asdasdfadshinasdijknijkahsdbnihjkb</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 20</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 0</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">$ 20</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">Egypt</td>
                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]"><span onClick={() => del_list_product(1)} className='fas fa-trash text-[red]'></span><span onClick={/* () => this.pop_up_product_list_edit(index,val.product_id) */popupproductlistedit} className='fas fa-edit text-[black]'></span></td>
                            </tr>
                            {
                                list_product.map((val, index) => {
                                    return (
                                        <tr key={index} className="flex">
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px]"><p onClick={() => popupproductlistref(index)} className='text-[#43546D] underline cursor-pointer'>{val.product_ref}</p></td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">{val.product_barcode}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">{val.product_qty + val.product_meassurement}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">{val.product_cate_name}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">{val.product_description}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">{val.product_p_devis}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">{val.product_p_avhat}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">{val.product_p_vente}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]">{val.product_fourn_name}</td>
                                            <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[black]"><span onClick={() => del_list_product(val.product_id)} className='fas fa-trash text-[red]'></span><span onClick={() => popupproductlistedit(index)} className='fas fa-edit text-[black]'></span></td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="popupproductlistedit">
                <div className='bg-[#fefefe] mx-[auto] my-[8%] border-[1px] border-[#888] w-[70%] h-[400px]'>
                    <form className="h-full w-full bg-[#FAF9FE] [box-shadow:2px_2px_10px_0px_#686571]" onSubmit={submit_add_product_info} method='POST'>
                        <div className='h-[30%] w-full flex flex-row items-center justify-center'>
                            <div className='flex items-center justify-center h-full w-1/2'>
                                <input className="w-[40%] h-[45px] border-[1px] border-[#888] rounded-[15px] text-center font-bold text-[#888] text-[13px] max-[1024px]:w-[70%]" required type="number" name="qty_add_product_name" id='qtyeditpro'  placeholder='Quantity' />
                            </div>
                            <div className='flex items-center justify-center h-full w-1/2'>
                                <input className="h-[45px] w-[40%] border-[1px] border-[#777] rounded-[10px] text-center max-[1024px]:w-[70%]" type="number" name="" id='minqtyeditpro'  placeholder='Min QTY Alert' />
                            </div>
                        </div>
                        <div className='h-[30%] w-full flex flex-row items-center'>
                            <div className='flex w-1/3 h-full items-center justify-center'>
                                <input className="w-[50%] h-[45px] pl-[20px] border-[1px] border-[#888] rounded-[15px] font-bold text-[14px] text-[#888] max-[1024px]:w-[70%]" type="number" name="pu_devis_add_product_name" id='sellprieditpro' placeholder='Selling Price'  />
                            </div>
                            <div className='flex w-1/3 h-full items-center justify-center'>
                                <input className="w-[50%] h-[45px] pl-[20px] border-[1px] border-[#888] rounded-[15px] font-bold text-[14px] text-[#888] max-[1024px]:w-[70%]" type="number" name="prix_d_achat_add_product_name" id='addprieditpro' placeholder='Added Price'  />
                            </div>
                            <div className='flex w-1/3 h-full items-center justify-center'>
                                <input className="w-[50%] h-[45px] pl-[20px] border-[1px] border-[#888] rounded-[15px] font-bold text-[14px] text-[#888] max-[1024px]:w-[70%]" type="number" name="prix_de_vente_add_product_name" id='fiprieditpro' placeholder='Final Price'  />
                            </div>
                        </div>
                        <div className='h-2/5 w-full'>
                            <div className='h-full w-full flex items-center justify-center'>
                                <input className="w-[450px] h-[55px] border-[1px] border-[#00e5ff] bg-[#00e5ff] rounded-[15px] text-[white] font-bold text-[17px] cursor-pointer mb-[30px] hover:opacity-[0.66] hover:[transition:all_ease-in_0.3s]" type="submit" name="submit_button_add_product_name" /* id='submit_button_add_product_id' */ value="Save" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="popupproductlistref">
                <div className='bg-[#fefefe] mx-[auto] my-[6%] border-[1px] border-[solid] border-[#888] w-[70%] h-[500px]'>
                    <form className="h-full w-full bg-[#FAF9FE] [box-shadow:2px_2px_10px_0px_#686571] flex flex-col" action='' method='POST'>
                        <div className='h-[35%] w-full flex flex-row justify-around items-center text-[#0077FF] font-bold text-[16px]'>
                            <div className='info_for_product_list_product'>
                                {info_for_product.ref}asdasd12<br />
                                5616165<br />
                                Ahmed<br />
                                Bikes
                            </div>
                            <div className='info1_for_product_list_product'>
                                jkahsbdubuasdhb<br /><br />
                                88
                            </div>
                            <div className='h-[100px] w-[150px] flex items-center justify-center'>
                                <img className="h-full w-full bg-[#219B3E]" src=/* {'https://asyd12855.pythonanywhere.com/productlogo/' + info_for_product.logo_product} */"/src/usericon.jpg" alt='productLogo' />
                            </div>
                        </div>
                        <div className='overflow-auto h-[65%] w-full'>
                            <ul className="flex flex-col">
                                <li className="flex flex-row items-center justify-evenly mb-[20px] text-[#0077FF] text-[15px] font-bold" /* key={index} */><p>22-11-2022{/* {val.Date_operation_info_product} */}</p><p>{/* {val.qty_info_product} */}22</p><p>$ 12</p><p>0</p><p>$ 12</p></li>
                                <li className="flex flex-row items-center justify-evenly mb-[20px] text-[#0077FF] text-[15px] font-bold" /* key={index} */><p>22-11-2022{/* {val.Date_operation_info_product} */}</p><p>{/* {val.qty_info_product} */}22</p><p>$ 12</p><p>0</p><p>$ 12</p></li>
                                <li className="flex flex-row items-center justify-evenly mb-[20px] text-[#0077FF] text-[15px] font-bold" /* key={index} */><p>22-11-2022{/* {val.Date_operation_info_product} */}</p><p>{/* {val.qty_info_product} */}22</p><p>$ 12</p><p>0</p><p>$ 12</p></li>
                                <li className="flex flex-row items-center justify-evenly mb-[20px] text-[#0077FF] text-[15px] font-bold" /* key={index} */><p>22-11-2022{/* {val.Date_operation_info_product} */}</p><p>{/* {val.qty_info_product} */}22</p><p>$ 12</p><p>0</p><p>$ 12</p></li>
                                {
                                    list_info_product.map((val, index) => {
                                        return (
                                            <li className="flex flex-row items-center justify-evenly mb-[20px] text-[#0077FF] text-[15px] font-bold" key={index}><p>{val.Date_operation_info_product}</p><p>{val.qty_info_product}</p><p>{val.prix_devis_info_product}</p><p>{val.prix_achat_info_product}</p><p>{val.prix_vente_info_product}</p></li>
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

export default Listproduct;