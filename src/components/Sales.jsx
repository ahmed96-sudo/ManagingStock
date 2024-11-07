import { useEffect, useState } from "react";
const Sales = () => {
    const [addsales, setAddsales] = useState([]);
    const [price_out_fee_sales, setPrice_out_fee_sales] = useState(0);
    const [final_price_sales, setFinal_price_sales] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [fee_sales, setFee_sales] = useState(0);
    const [total_red_sales, setTotal_red_sales] = useState(0);
    const [pay_sale, setPay_sale] = useState({});
    const [list_client, setList_client] = useState([]);
    useEffect(() => {
        document.getElementById(`menu2`).classList.contains("bg-[#6B7A94]") ? "" : document.getElementById(`menu2`).classList.add("bg-[#6B7A94]");
        document.getElementById(`menu2`).children[1].classList.replace("opacity-1", "opacity-0");
        document.getElementById(`menu2`).children[1].classList.replace(`h-[200px]`, "h-0");
        document.getElementById(`menu2`).classList.replace(`h-[260px]`, "h-[60px]");
        document.getElementById(`menu2`).children[0].children[2].classList.contains("fa-caret-down") ? "" : document.getElementById(`menu2`).children[0].children[2].classList.add("fa-caret-down");
    }, []);
    const newclientvente = ()=>{
        let pop_up = document.getElementById('newclientvente');
        pop_up.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === pop_up) {
                pop_up.classList.replace("block", "hidden");
            }
        }
    }
    const regelmentvente = ()=>{
        let pop_up = document.getElementById('regelmentvente');
        pop_up.classList.replace("hidden", "block");
        window.onclick = function(event){
            if (event.target === pop_up) {
                pop_up.classList.replace("block", "hidden");
            }
        }
    }
    const checkbank = ()=>{
        let radio_btns_regelment = document.querySelector(".radio_btns_regelment2");
        radio_btns_regelment.classList.replace("h-1/4", "h-[20%]");
        let price_btns_regelment = document.querySelector(".price_btns_regelment2");
        price_btns_regelment.classList.replace("h-1/4", "h-[20%]");
        let checkbox_btns_regelment = document.querySelector(".checkbox_btns_regelment2");
        checkbox_btns_regelment.classList.replace("h-1/4", "h-[20%]");
        let submit_btns_regelment = document.querySelector(".submit_btns_regelment2");
        submit_btns_regelment.classList.replace("h-1/4", "h-[20%]");
        let checkbank_btns_regelement = document.querySelector("#checkbankbtnsregelement1");
        checkbank_btns_regelement.classList.replace("h-1/4", "h-[20%]");
        checkbank_btns_regelement.classList.replace("hidden", "flex");
        let espece1 = document.querySelector("#cash1");
        espece1.addEventListener("click", function(){
            let radio_btns_regelment = document.querySelector(".radio_btns_regelment2");
            radio_btns_regelment.classList.replace("h-[20%]", "h-1/4");
            let price_btns_regelment = document.querySelector(".price_btns_regelment2");
            price_btns_regelment.classList.replace("h-[20%]", "h-1/4");
            let checkbox_btns_regelment = document.querySelector(".checkbox_btns_regelment2");
            checkbox_btns_regelment.classList.replace("h-[20%]", "h-1/4");
            let submit_btns_regelment = document.querySelector(".submit_btns_regelment2");
            submit_btns_regelment.classList.replace("h-[20%]", "h-1/4");
            let checkbank_btns_regelement = document.querySelector("#checkbankbtnsregelement1");
            checkbank_btns_regelement.classList.replace("h-[20%]", "h-1/4");
            checkbank_btns_regelement.classList.replace("flex", "hidden");
        });
    }
    const addsale = () => {
        let obje = {};
        let bar_code_vente_add = document.getElementById("bar_code_sale_add").value;
        let referance_vente_add = document.getElementById("ref_sale_add").value;
        let qty_vente_add = document.getElementById("qty_sale_add").value;
        let remise_vente_add = document.getElementById("red_val_sale_add").value ? document.getElementById("red_val_sale_add").value : 0;
        if (qty_vente_add === '') {
            alert("You should type QTY");
        } else {
            if ((bar_code_vente_add === '') && (referance_vente_add === '')) {
                alert("You should type bar code or referance");
            } else {
                if ((bar_code_vente_add !== '') && (referance_vente_add !== '')) {
                    obje.code_sale_add = bar_code_vente_add;
                    var the_code = 'barcode';
                } else {
                    if ((bar_code_vente_add !== '')) {
                        obje.code_sale_add = bar_code_vente_add;
                        the_code = 'barcode';
                    }
                    if ((referance_vente_add !== '')) {
                        obje.code_sale_add = referance_vente_add;
                        the_code = 'referance';
                    }
                }
                obje.the_code = the_code;
                obje.qty_sale_add = qty_vente_add;
                obje.red_val_sale_add = remise_vente_add;
                /* fetch("https://asyd12855.pythonanywhere.com/ajouterproduct",{
                    method: "POST",
                    body: JSON.stringify({
                        code_ref_product : obje.code_sale_add,
                        code_or_ref_product : the_code
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(data => {
                    obje.descri = data.the_product_info.descri;
                    obje.price_unit = (data.the_product_info.pu);
                    obje.meassurement = data.the_product_info.meassurement;
                    if ((remise_vente_add == '') || (remise_vente_add == 0)) {
                        obje.price_out_fee = Number(obje.price_unit) * Number(obje.qty_sale_add);
                        let new_price_out_fee = Number(price_out_fee_sales) + (Number(obje.price_unit) * Number(obje.qty_sale_add));
                        let new_fee_sales = Number(new_price_out_fee) * 0.14;
                        let new_final_price_sales = Number(final_price_sales) + (Number(new_price_out_fee) + Number(new_fee_sales));
                        setPrice_out_fee_sales(parseFloat(new_price_out_fee.toFixed(2)));
                        setFinal_price_sales(parseFloat(new_final_price_sales.toFixed(2)));
                        setFee_sales(parseFloat(new_fee_sales.toFixed(2)));
                    } else {
                        obje.price_out_fee = (Number(obje.price_unit) * Number(obje.qty_sale_add)) - Number(remise_vente_add);
                        let new_price_out_fee = Number(price_out_fee_sales) + ((Number(obje.price_unit) * Number(obje.qty_sale_add)) - Number(remise_vente_add));
                        let new_fee_sales = Number(new_price_out_fee) * 0.14;
                        let new_final_price_sales = Number(final_price_sales) + (Number(new_price_out_fee) + Number(new_fee_sales));
                        let new_total_red_sales = Number(total_red_sales) + Number(remise_vente_add);
                        setPrice_out_fee_sales(parseFloat(new_price_out_fee.toFixed(2)));
                        setFee_sales(parseFloat(new_fee_sales.toFixed(2)));
                        setFinal_price_sales(parseFloat(new_final_price_sales.toFixed(2)));
                        setTotal_red_sales(parseFloat(new_total_red_sales.toFixed(2)));
                    }
                    setAddsales([...addsales, obje]);
                })
                .catch(error => {
                    alert("this barcode/referance is not registed with a product");
                    console.log(error);
                }); */
                obje.descri = "asdsadasd5691956asd";
                obje.price_unit = 12;
                obje.meassurement = "KG";
                if ((remise_vente_add == '') || (remise_vente_add == 0)) {
                    obje.price_out_fee = Number(obje.price_unit) * Number(obje.qty_sale_add);
                    let new_price_out_fee = Number(price_out_fee_sales) + (Number(obje.price_unit) * Number(obje.qty_sale_add));
                    let new_fee_sales = Number(new_price_out_fee) * 0.14;
                    let new_final_price_sales = Number(final_price_sales) + (Number(new_price_out_fee) + Number(new_fee_sales));
                    setPrice_out_fee_sales(parseFloat(new_price_out_fee.toFixed(2)));
                    setFee_sales(parseFloat(new_fee_sales.toFixed(2)));
                    setFinal_price_sales(parseFloat(new_final_price_sales.toFixed(2)));
                    document.getElementById("bar_code_sale_add").value = "";
                    document.getElementById("ref_sale_add").value = "";
                    document.getElementById("qty_sale_add").value = "";
                    document.getElementById("red_val_sale_add").value = "";
                } else {
                    obje.price_out_fee = (Number(obje.price_unit) * Number(obje.qty_sale_add)) - Number(remise_vente_add);
                    let new_price_out_fee = Number(price_out_fee_sales) + ((Number(obje.price_unit) * Number(obje.qty_sale_add)) - Number(remise_vente_add));
                    let new_fee_sales = Number(new_price_out_fee) * 0.14;
                    let new_final_price_sales = Number(final_price_sales) + (Number(new_price_out_fee) + Number(new_fee_sales));
                    let new_total_red_sales = Number(total_red_sales) + Number(remise_vente_add);
                    setPrice_out_fee_sales(parseFloat(new_price_out_fee.toFixed(2)));
                    setFee_sales(parseFloat(new_fee_sales.toFixed(2)));
                    setFinal_price_sales(parseFloat(new_final_price_sales.toFixed(2)));
                    setTotal_red_sales(parseFloat(new_total_red_sales.toFixed(2)));
                    document.getElementById("bar_code_sale_add").value = "";
                    document.getElementById("ref_sale_add").value = "";
                    document.getElementById("qty_sale_add").value = "";
                    document.getElementById("red_val_sale_add").value = "";
                }
                setAddsales([...addsales, obje]);
            }
        }
    }
    const remove_vente = (index)=>{
        var new_add_sales = [...addsales];
        if (addsales.length == 0) {
            alert("Add some Items");
            return;
        } else {
            if (addsales.length == 1) {
                setAddsales([]);
                setPrice_out_fee_sales(0);
                setFee_sales(0);
                setFinal_price_sales(0);
                setTotal_red_sales(0);
            } else {
                let last_item = addsales[index];
                let last_price_out_fee = Number(last_item.price_out_fee);
                let last_total_red_sales = Number(last_item.red_val_sale_add);
                if (last_total_red_sales == 0) {
                    let new_price_out_fee = Number(price_out_fee_sales) - Number(last_price_out_fee);
                    let new_fee_sales = Number(new_price_out_fee) * 0.14;
                    let new_final_price_sales = Number(final_price_sales) - (Number(new_price_out_fee) + Number(new_fee_sales));
                    setPrice_out_fee_sales(parseFloat(new_price_out_fee.toFixed(2)));
                    setFee_sales(parseFloat(new_fee_sales.toFixed(2)));
                    setFinal_price_sales(parseFloat(new_final_price_sales.toFixed(2)));
                    new_add_sales.splice(index, 1);
                    setAddsales(new_add_sales);
                } else {
                    let new_price_out_fee = Number(price_out_fee_sales) - Number(last_price_out_fee);
                    let new_fee_sales = Number(new_price_out_fee) * 0.14;
                    let new_final_price_sales = Number(final_price_sales) - (Number(new_price_out_fee) + Number(new_fee_sales));
                    let new_total_red_sales = Number(total_red_sales) - Number(last_total_red_sales);
                    setPrice_out_fee_sales(parseFloat(new_price_out_fee.toFixed(2)));
                    setFee_sales(parseFloat(new_fee_sales.toFixed(2)));
                    setFinal_price_sales(parseFloat(new_final_price_sales.toFixed(2)));
                    setTotal_red_sales(parseFloat(new_total_red_sales.toFixed(2)));
                    new_add_sales.splice(index, 1);
                    setAddsales(new_add_sales);
                }
            }
        }
    }
    const facturbtn = (e)=>{
        e.preventDefault();
        let chooseclientid1 = document.getElementById("chooseclientsaleid1").value;
        let choosedateid1 = document.getElementById("choosedatesaleid1").value;
        if (addsales.length === 0) {
            alert("You Must add one product");
        } else {
            if (Object.keys(pay_sale).length === 0) {
                alert("You Must choose how to pay");
            } else {
                if (chooseclientid1 == "" || choosedateid1 == "") {
                    alert("You Must choose the Client and choose the Date");
                } else {
                    /* fetch("https://asyd12855.pythonanywhere.com/addfactur",{
                        method: "POST",
                        body: JSON.stringify({
                            client_id : chooseclientid1,
                            date : choosedateid1,
                            vente_add : addsales,
                            paying_method : pay_sale,
                            price_out_fee_sales : price_out_fee_sales,
                            final_price_sales : final_price_sales,
                            total_red_sales : total_red_sales,
                            fee_sales : fee_sales
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.factur_id === '') {
                            alert("You will not have a Facture untill you type the ICE of the client");
                        } else {
                            if (data.factur_id === 'All is empty') {
                                alert("Choose the client ,Regelement and add products and press again");
                            } else {
                                alert("You have added a Facture");
                                window.open("https://managementstock.vercel.app/factur/" + data.factur_id, "_blank");
                                window.location.reload();
                            }
                        }
                    })
                    .catch((error) => {
                        alert("Choose the client ,Regelement and add products and press again");
                        console.log(error);
                    }); */
                    alert("You have added a Facture");
                    window.open("/facture", "_blank");
                    window.location.reload();
                }
            }
        }
    }
    const sansfacturbtn = (e)=>{
        e.preventDefault();
        let chooseclientid1 = document.getElementById("chooseclientsaleid1").value;
        let choosedateid1 = document.getElementById("choosedatesaleid1").value;
        if (addsales.length === 0) {
            alert("You Must add one product");
        } else {
            if (Object.keys(pay_sale).length === 0) {
                alert("You Must choose how to pay");
            } else {
                if (chooseclientid1 == "" || choosedateid1 == "") {
                    alert("You Must choose the Client and choose the Date");
                } else {
                    /* fetch("https://asyd12855.pythonanywhere.com/addsansfactur",{
                        method: "POST",
                        body: JSON.stringify({
                            client_id : chooseclientid1,
                            date : choosedateid1,
                            vente_add : addsales,
                            paying_method : pay_sale,
                            price_out_fee_sales : price_out_fee_sales,
                            final_price_sales : final_price_sales,
                            total_red_sales : total_red_sales,
                            fee_sales : fee_sales
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.created === 'cannot be created') {
                            alert("Choose the client ,Regelement and add products and press again");
                        } else {
                            alert("You have added a Sans Facture");
                            window.location.reload();
                        }
                    })
                    .catch((error) => {
                        alert("Choose the client ,Regelement and add products and press again");
                        console.log(error);
                    }); */
                    alert("You have added a Sans Facture");
                    window.location.reload();
                }
            }
        }
    }
    const devisbtn =(e)=>{
        e.preventDefault();
        let chooseclientid1 = document.getElementById("chooseclientsaleid1").value;
        let choosedateid1 = document.getElementById("choosedatesaleid1").value;
        if (addsales.length === 0) {
            alert("You Must add one product");
        } else {
            if (Object.keys(pay_sale).length === 0) {
                alert("You Must choose how to pay");
            } else {
                if (chooseclientid1 == "" || choosedateid1 == "") {
                    alert("You Must choose the Client and choose the Date");
                } else {
                    /* fetch("https://asyd12855.pythonanywhere.com/adddevis",{
                        method: "POST",
                        body: JSON.stringify({
                            client_id : chooseclientid1,
                            date : choosedateid1,
                            vente_add : addsales,
                            paying_method : pay_sale,
                            price_out_fee_sales : price_out_fee_sales,
                            final_price_sales : final_price_sales,
                            total_red_sales : total_red_sales,
                            fee_sales : fee_sales
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.created === 'cannot be created') {
                            alert("Choose the client ,Regelement and add products and press again");
                        } else {
                            alert("You have added a Devis");
                            window.open("https://managementstock.vercel.app/devis/" + data.devis_id, "_blank");
                            window.location.reload();
                        }
                    })
                    .catch((error) => {
                        alert("Choose the client ,Regelement and add products and press again");
                        console.log(error);
                    }); */
                    alert("You have added a Devis");
                    window.open("/devis", "_blank");
                    window.location.reload();
                }
            }
        }
    }
    const blbtn = (e)=>{
        e.preventDefault();
        let chooseclientid1 = document.getElementById("chooseclientsaleid1").value;
        let choosedateid1 = document.getElementById("choosedatesaleid1").value;
        if (addsales.length === 0) {
            alert("You Must add one product");
        } else {
            if (Object.keys(pay_sale).length === 0) {
                alert("You Must choose how to pay");
            } else {
                if (chooseclientid1 == "" || choosedateid1 == "") {
                    alert("You Must choose the Client and choose the Date");
                } else {
                    /* fetch("https://asyd12855.pythonanywhere.com/addbl",{
                        method: "POST",
                        body: JSON.stringify({
                            client_id : chooseclientid1,
                            date : choosedateid1,
                            vente_add : addsales,
                            paying_method : pay_sale,
                            price_out_fee_sales : price_out_fee_sales,
                            final_price_sales : final_price_sales,
                            total_red_sales : total_red_sales,
                            fee_sales : fee_sales
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.created === 'cannot be created') {
                            alert("Choose the client ,Regelement and add products and press again");
                        } else {
                            alert("You have added a B.L");
                            window.open("https://managementstock.vercel.app/bl/" + data.bl_id, "_blank");
                            window.location.reload();
                        }
                    })
                    .catch((error) => {
                        alert("Choose the client ,Regelement and add products and press again");
                        console.log(error);
                    }); */
                    alert("You have added a B.L");
                    window.open("/bl", "_blank");
                    window.location.reload();
                }
            }
        }
    }
    const submit_regelment_vente = (e)=>{
        e.preventDefault();
        let obj = {};
        let regelementvente = document.querySelector('input[name="regelementvente"]:checked').value;
        var checkbox_btns_regelment = document.getElementById("pdp1").checked;
        let pop_up = document.getElementById('regelmentvente');
        if (checkbox_btns_regelment == false && document.getElementById("price_regelment_id1").value == "") {
            alert("You must pay all the price or pay it with credit pricing");
        } else {
            switch (regelementvente) {
                case 'cash':
                    obj.type_of_paying = 'cash';
                    obj.check_number = '';
                    if (checkbox_btns_regelment === true) {
                        obj.wholeprice = Number(final_price_sales);
                        obj.creditprice = 0;
                        setPay_sale(obj);
                        alert("You have added a regelement");
                        pop_up.classList.replace("block", "hidden");
                    } else {
                        let price_btns_regelment = document.getElementById("price_regelment_id1").value;
                        let credit_price = final_price_sales - price_btns_regelment;
                        obj.wholeprice = Number(price_btns_regelment);
                        obj.creditprice = Number(credit_price);
                        setPay_sale(obj);
                        alert("You have added a regelement");
                        pop_up.classList.replace("block", "hidden");
                    }
                    break;
                case 'check':
                    var check_btns_regelment = document.getElementById("check_regelment_id1").value;
                    if (check_btns_regelment === '') {
                        alert("You have to type the check number");
                    } else {
                        obj.type_of_paying = 'check';
                        obj.check_number = Number(check_btns_regelment);
                        if (checkbox_btns_regelment === true) {
                            obj.wholeprice = Number(final_price_sales);
                            obj.creditprice = 0;
                            setPay_sale(obj);
                            alert("You have added a regelement");
                            pop_up.classList.replace("block", "hidden");
                        } else {
                            let price_btns_regelment = document.getElementById("price_regelment_id1").value;
                            let credit_price = final_price_sales - price_btns_regelment;
                            obj.wholeprice = Number(price_btns_regelment);
                            obj.creditprice = Number(credit_price);
                            setPay_sale(obj);
                            alert("You have added a regelement");
                            pop_up.classList.replace("block", "hidden");
                        }
                    }
                    break;
                default:
                    alert("You should choose one of the following:cash, check");
                    break;
            }
        }
        console.log(obj);
    }
    const submit_add_client_vente = (e)=>{
        e.preventDefault();
        /* let generale_add_client_select = 1;
        let normal_info_add_client_name_add = document.getElementById("normal_info_add_client_name_add_id2").value;
        let normal_info_add_client_tele_number = document.getElementById("normal_info_add_client_tele_number_id2").value;
        let cin_add_client_n_ice = document.getElementById("cin_add_client_n_ice_id2").value;
        let cin_add_client_cin = document.getElementById("cin_add_client_cin_id2").value;
        let address_add_client_adresse = document.getElementById("address_add_client_adresse_id2").value;
        fetch("https://asyd12855.pythonanywhere.com/addclient",{
            method: "POST",
            body: JSON.stringify({
                generale_add_client: generale_add_client_select,
                name_add_client: normal_info_add_client_name_add,
                tele_number_add_client: normal_info_add_client_tele_number,
                n_ice_add_client: cin_add_client_n_ice,
                cin_add_client: cin_add_client_cin,
                adresse_add_client: address_add_client_adresse
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
                alert("You have added a Client");
                let pop_up = document.getElementById('newclientvente');
                pop_up.classList.replace("block", "hidden");
            }
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        alert("You have added a Client");
        let pop_up = document.getElementById('newclientvente');
        pop_up.classList.replace("block", "hidden");
    }
    const selectclient = () => {
        /* fetch("https://asyd12855.pythonanywhere.com/listclient",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listclient: data.listclientarray
            })
            setList_client(data.listclientarray);
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        }); */
        setList_client([]);
    }
    let today = new Date();
    // let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    let day2 = today.getDate();
    let month2 = today.getMonth() + 1;
    let year2 = today.getFullYear();
    if (month2 < 10) month2 = "0" + month2;
    if (day2 < 10) day2 = "0" + day2;
    let today2 = year2 + "-" + month2 + "-" + day2;
    // let year1 = today.getFullYear();
    return (
        <>
            <div className="h-full w-full bg-[#EFF2F6] flex-1 overflow-auto">
                <h1 className="font-[arial] h-[10%] flex items-center text-[#43546D] text-[30px] justify-center">Sales</h1>
                <form className="h-[90%] w-full" action='' method='POST'>
                    <div className='h-[15%] w-full flex flex-row'>
                        <div className='h-full w-[65%] flex flex-row'>
                            <div className='h-full w-1/4 flex items-center justify-center'>
                                <input className="h-[40px] w-[50%] rounded-[10px] border-[1px] border-[#3aff14] bg-[#3aff14] cursor-pointer text-[white] font-bold hover:opacity-70 max-[1440px]:w-[80%] max-[1440px]:text-[13px]" onClick={facturbtn} id='facturebtnid' type="submit" name="facturebtnname" value="Invoice" />
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center'>
                                <input className="h-[40px] w-[70%] whitespace-normal bg-[#ff7070] rounded-[10px] border-[1px] border-[#ff7070] cursor-pointer text-[white] font-bold hover:opacity-70 max-[1440px]:w-[90%] max-[1440px]:text-[11px]" onClick={sansfacturbtn} id='sansfacturbtnid' type="submit" name="sansfacturbtnname" value="Un-Invoiced Invoice" />
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-center'>
                                <input className="h-[40px] w-[60%] border-[1px] border-[#a29b9b] rounded-[10px] bg-[#a29b9b] text-[white] font-bold cursor-pointer hover:opacity-70 max-[1440px]:w-[90%] max-[1440px]:text-[13px]" onClick={devisbtn} id='devisbtnid' type="submit" name="devisbtnname" value="Draft Invoice" />
                            </div>
                            <div className='h-full w-1/4 flex items-center justify-start'>
                                <input className="h-[40px] w-[80%] whitespace-normal border-[1px] border-[#69bbbb] rounded-[10px] bg-[#69bbbb] text-[white] cursor-pointer font-bold hover:opacity-70 max-[1440px]:w-[90%] max-[1440px]:text-[13px]" onClick={blbtn} id='BLbtnid' type="submit" name="BLbtnname" value="Delivery Note Invoice" />
                            </div>
                        </div>
                        <div className='h-full w-[35%] flex items-center'>
                            <div className="text-[#747272] font-bold">
                                Final Price (Fee 14%) : $ {final_price_sales}
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[15%] flex flex-row justify-evenly'>
                        <div className='h-full w-[24%] flex items-center justify-center'>
                            <select className="h-[40px] w-[80%] pl-[20px] rounded-[10px] text-[#747272] font-bold border-[2px] border-[#d2d3d4] max-[1024px]:w-full" onClickCapture={selectclient} required name='chooseclientname' id='chooseclientsaleid1' >
                                <option value="">Select Client</option>
                                <option value="ahmed">Ahmed</option>
                                <option value="saeed">Saeed</option>
                                <option value="mohamed">Mohamed</option>
                                {
                                    list_client.map((val,index) => {
                                        return (
                                            <option key={index} value={val.client_id}>{val.client_name}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className='h-full w-1/5 flex items-center justify-center'>
                            <div className="h-[40px] w-[70%] bg-[white] border-[2px] border-[#d2d3d4] rounded-[10px] flex items-center justify-center text-[#747272] font-bold cursor-pointer hover:opacity-70 max-[1024px]:w-full" onClick={newclientvente}>
                                New Client
                            </div>
                        </div>
                        <div className='h-full w-1/5 flex items-center justify-center'>
                            <input className="h-[40px] w-[70%] rounded-[10px] pl-[10px] text-[#747272] font-bold max-[1024px]:w-full" required type="date" defaultValue={today2} name="choosedatename" id='choosedatesaleid1' />
                        </div>
                        <div className='h-full w-1/5 flex items-center justify-center'>
                            <div className="h-[40px] w-[130px] bg-[#70f5ff] flex items-center justify-center rounded-[10px] text-[white] font-bold cursor-pointer hover:opacity-70" onClick={regelmentvente}>
                                Paying Method
                            </div>
                        </div>
                    </div>
                    <div className='h-1/5 w-full flex flex-row'>
                        <div className='h-full w-[95%] flex ml-auto mr-auto flex-row border-[2px] border-[#c3c5c8]'>
                            <div className='h-full w-1/5 flex items-center justify-center'>
                                <input className="w-[60%] h-[35px] rounded-[15px] pl-[20px] border-[1.5px] border-[#c3c5c8] font-bold text-[#7e7e7e] max-[1024px]:w-[80%]" type="number" name="barcodename" id="bar_code_sale_add" placeholder='BAR CODE' />
                            </div>
                            <div className='h-full w-1/5 flex items-center justify-center'>
                                <input className="h-[35px] w-[60%] pl-[20px] border-[1.5px] border-[#c3c5c8] rounded-[15px] text-[#7e7e7e] font-bold max-[1024px]:w-[90%]" type="text" name="referancename" id="ref_sale_add" placeholder='Reference' />
                            </div>
                            <div className='h-full w-1/5 flex items-center justify-center'>
                                <input className="w-[60%] h-[35px] border-[1.5px] border-[#c3c5c8] rounded-[15px] pl-[15px] text-[#7e7e7e] font-bold max-[1024px]:w-[80%]" type="number" required name="qtyname" id="qty_sale_add" placeholder='QTY' />
                            </div>
                            <div className='h-full w-1/5 flex items-center justify-center'>
                                <input className="h-[35px] w-[60%] pl-[20px] border-[1.5px] border-[#c3c5c8] rounded-[15px] text-[#7e7e7e] font-bold max-[1024px]:w-[90%]" type="number" name="remisename" id="red_val_sale_add" placeholder='Reduction Value' />
                            </div>
                            <div className='h-full w-1/5 flex items-center justify-center'>
                                <div className="w-[60%] h-[35px] bg-[white] text-[#7e7e7e] border-[1.5px] border-[#c3c5c8] flex items-center justify-center rounded-[10px] font-bold text-[17px] cursor-pointer hover:opacity-75 max-[1024px]:w-[80%]" onClick={addsale}>
                                    Ajouter
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[50%] w-full flex items-center justify-center'>
                        <table className="font-[Arial,_Helvetica,_sans-serif] [border-spacing:0] h-[90%] w-[95%] flex flex-col">
                            <thead>
                                <tr className="flex">
                                    <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Code</th>
                                    <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Description</th>
                                    <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">UNIT PRICE</th>
                                    <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">QTY</th>
                                    <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Price without Fee</th>
                                    <th className="w-[-webkit-fill-available] border-collapse whitespace-nowrap text-center border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="block h-[80%] overflow-auto w-full">
                                {
                                    addsales.map((val, index) => {
                                        return (
                                            <tr className="flex" id={'sales_remove_element' + index} key={index}>
                                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.code_sale_add}</td>
                                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.descri}</td>
                                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.price_unit}</td>
                                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{val.qty_sale_add} {val.meassurement}</td>
                                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">{parseFloat((val.price_out_fee).toFixed(2))}</td>
                                                <td className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]"><span onClick={()=>remove_vente(index)} className='fas fa-trash text-[red] cursor-pointer'></span></td>
                                            </tr>
                                        );
                                    })
                                }
                                <tr className="flex">
                                    <td colSpan='4' className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">Total Price without Fee</td>
                                    <td colSpan='2' className="w-[-webkit-fill-available] border-collapse whitespace-nowrap overflow-auto text-center font-bold border-[1px] border-[#ddd] p-[8px] text-[#7e7e7e]">$ {price_out_fee_sales}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="newclientvente">
                <div className='bg-[#fefefe] mx-[auto] my-[6%] border-[1px] border-[#888] w-[70%] h-[400px]'>
                    <form className="h-full w-full bg-[#FAF9FE] [box-shadow:2px_2px_10px_0px_#686571]" onSubmit={submit_add_client_vente} method='POST'>
                        <div className='w-full flex flex-row items-center justify-evenly h-1/4'>
                            <div>
                                <input className="h-[50px] w-[255px] pl-[20px] text-[#888] rounded-[10px] font-bold text-[14px] border border-[#999]" required type="text" name="normal_info_add_client_name_add_name"  id='normal_info_add_client_name_add_id2' placeholder='Client Name' />
                            </div>
                            <div>
                                <input className="h-[50px] w-[255px] pl-[20px] text-[#888] rounded-[10px] font-bold text-[14px] border border-[#999]" type="number" name="normal_info_add_client_tele_number_name" id='normal_info_add_client_tele_number_id2' placeholder='Phone Number' />
                            </div>
                        </div>
                        <div className='h-1/4 w-full flex flex-row items-center justify-evenly'>
                            <div>
                                <input className="h-[50px] w-[255px] pl-[20px] text-[#888] rounded-[10px] font-bold text-[14px] border border-[#999]" type="text" name="cin_add_client_n_ice_name" id='cin_add_client_n_ice_id2' placeholder='Common Business Identifier' />
                            </div>
                            <div>
                                <input className="h-[50px] w-[255px] pl-[20px] text-[#888] rounded-[10px] font-bold text-[14px] border border-[#999]" type="text" name="cin_add_client_cin_name" id='cin_add_client_cin_id2' placeholder='National Identity Card' />
                            </div>
                        </div>
                        <div className='h-1/4 w-full flex flex-row items-center justify-center'>
                            <div>
                                <input className="h-[50px] w-[615px] pl-[20px] text-[#888] rounded-[10px] font-bold text-[14px] max-[1024px]:w-[500px] border border-[#999]" type="text" name="address_add_client_adresse_name" id='address_add_client_adresse_id2' placeholder='Address' />
                            </div>
                        </div>
                        <div className='h-1/4 w-full flex flex-row items-center justify-center'>
                            <div>
                                <input className="w-[450px] h-[55px] border-[1px] border-[#BBBBBB] bg-[#BBBBBB] rounded-[15px] text-[white] font-bold text-[17px] cursor-pointer mb-[30px] hover:opacity-70" type="submit" name="submit_add_client_submit_name" value="Add" /* id='submit_add_client_submit_id' */ />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden fixed left-[0] top-[0] w-full h-full overflow-auto bg-[rgba(0,_0,_0,_0.4)]" id="regelmentvente">
                <div className='bg-[#fefefe] mx-[auto] my-[10%] border-[1px] border-[#888] w-1/2 h-[250px]'>
                    <form className="h-full w-full bg-[#FAF9FE] [box-shadow:2px_2px_10px_0px_#686571]" onSubmit={submit_regelment_vente} method='POST'>
                        <div className='h-1/4 w-full flex items-center justify-center radio_btns_regelment2'>
                            <label className="mr-[30px] font-bold text-[16px] font-[arial]" htmlFor="cash1"><input required type="radio" id="cash1" name="regelementvente" value="cash"/> Cash</label>
                            <label className="mr-[30px] font-bold text-[16px] font-[arial]" htmlFor="check1"><input required onClick={checkbank} type="radio" id="check1" name="regelementvente" value="check" /> Check</label>
                        </div>
                        <div className='h-1/4 w-full flex items-center justify-center price_btns_regelment2'>
                            <input className="h-[35px] w-[260px] mr-[20px] pl-[20px] bg-[#EFF2F6] border-[1px] border-[#EFF2F6] font-bold text-[15px]" type="number" name="price_btns_regelment_name" id='price_regelment_id1' placeholder='Credit Price' />
                        </div>
                        <div className='h-1/4 w-full hidden items-center justify-center' id='checkbankbtnsregelement1'>
                            <input className="h-[35px] w-[260px] mr-[20px] pl-[20px] bg-[#EFF2F6] border-[1px] border-[#EFF2F6] font-bold text-[15px]" type="number" name="check_number_btns_regelment_name" id='check_regelment_id1' placeholder='Check Number' />
                        </div>
                        <div className='h-1/4 w-full flex items-center justify-center flex-row checkbox_btns_regelment2'>
                            <input className="mr-[7px] mt-[3px]" type="checkbox" id="pdp1" name="checkbox_btns_regelment_name" value="paidall" />
                            <label htmlFor="pdp1"> paid all price</label>
                        </div>
                        <div className='h-1/4 w-full flex items-start justify-center submit_btns_regelment2'>
                            <input className="bg-[#BBBBBB] border-[1px] border-[#BBBBBB] text-[white] h-[45px] w-[170px] rounded-[15px] font-bold text-[15px] font-[arial] cursor-pointer hover:opacity-80" type="submit" name="submit_btns_regelment_name" value="SAVE" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Sales;