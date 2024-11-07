import "../stylesheets/Dashbord.css"
const Menu = () => {
    const handleClick1 = () => {
        let tbodys = document.getElementById("tbodys");
        tbodys.children[0].style.backgroundColor = '#6B7A94';
        tbodys.children[1].style.backgroundColor = '#43546d';
        tbodys.children[2].style.backgroundColor = '#43546d';
        tbodys.children[3].style.backgroundColor = '#43546d';
        tbodys.children[4].style.backgroundColor = '#43546d';
        tbodys.children[5].style.backgroundColor = '#43546d';
        tbodys.children[6].style.backgroundColor = '#43546d';
        tbodys.children[7].style.backgroundColor = '#43546d';
        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'block';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'none';
        let point_vente1 = document.getElementById("point_vente1");
        point_vente1.style.display = 'none';
        let avoire = document.getElementById("avoire");
        avoire.style.display = 'none';
        let list_des_avoire = document.getElementById("list_des_avoire");
        list_des_avoire.style.display = 'none';
        let charge = document.getElementById("charge");
        charge.style.display = 'none';
        let add_product = document.getElementById("add_product");
        add_product.style.display = 'none';
        let list_product = document.getElementById("list_product");
        list_product.style.display = 'none';
        let add_client = document.getElementById("add_client");
        add_client.style.display = 'none';
        let list_client1 = document.getElementById("list_client");
        list_client1.style.display = 'none';
        let list_credit = document.getElementById("list_credit");
        list_credit.style.display = 'none';
        let add_fourn = document.getElementById("add_fourn");
        add_fourn.style.display = 'none';
        let list_fourn = document.getElementById("list_fourn");
        list_fourn.style.display = 'none';
        let list_factures = document.getElementById("list_factures");
        list_factures.style.display = 'none';
        let list_devis = document.getElementById("list_devis");
        list_devis.style.display = 'none';
        let list_sans_factures = document.getElementById("list_sans_factures");
        list_sans_factures.style.display = 'none';
        let list_bl = document.getElementById("list_bl");
        list_bl.style.display = 'none';
        let list_banque = document.getElementById("list_banque");
        list_banque.style.display = 'none';
        let list_caisse = document.getElementById("list_caisse");
        list_caisse.style.display = 'none';
        let settings_tab = document.getElementById("settings_tab");
        settings_tab.style.display = 'none';
        let point_vente_menu = document.getElementById("point_vente_menu");
        let produits_menu = document.getElementById("produits_menu");
        let client_menu = document.getElementById("client_menu");
        let fourn_menu = document.getElementById("fourn_menu");
        let factur_menu = document.getElementById("factur_menu");
        let comptab_menu = document.getElementById("comptab_menu");
        point_vente_menu.style.display = 'none';
        produits_menu.style.display = 'none';
        client_menu.style.display = 'none';
        fourn_menu.style.display = 'none';
        factur_menu.style.display = 'none';
        comptab_menu.style.display = 'none';
        fetch("https://asyd12855.pythonanywhere.com/moneycompany",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                benefic: data.benefic,
                totalvente : data.total_vente,
                productsunit : data.product
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
        fetch("https://asyd12855.pythonanywhere.com/chart",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            let dashbord = data.chart;
            let data1 = [
                ["January", dashbord[0].price],
                ["February", dashbord[1].price],
                ["March", dashbord[2].price],
                ["April", dashbord[3].price],
                ["May", dashbord[4].price],
                ["June", dashbord[5].price],
                ["July", dashbord[6].price],
                ["August", dashbord[7].price],
                ["September", dashbord[8].price],
                ["October", dashbord[9].price],
                ["November", dashbord[10].price],
                ["December", dashbord[11].price]
                ];
            this.setState({
                chart : data1
            });
        })
        .catch(/* error */() => {
            alert("You have a problem in the Chart");
        });
    }
    const handleClick2 = () => {
        let tbodys = document.getElementById("tbodys");
        tbodys.children[0].style.backgroundColor = '#43546d';
        tbodys.children[1].style.backgroundColor = '#6B7A94';
        tbodys.children[2].style.backgroundColor = '#43546d';
        tbodys.children[3].style.backgroundColor = '#43546d';
        tbodys.children[4].style.backgroundColor = '#43546d';
        tbodys.children[5].style.backgroundColor = '#43546d';
        tbodys.children[6].style.backgroundColor = '#43546d';
        tbodys.children[7].style.backgroundColor = '#43546d';
        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-right");
        tbodys.children[1].children[2].children[0].classList.add("fa-caret-left");
        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'block';
        let point_vente1 = document.getElementById("point_vente1");
        point_vente1.style.display = 'none';
        let avoire = document.getElementById("avoire");
        avoire.style.display = 'none';
        let list_des_avoire = document.getElementById("list_des_avoire");
        list_des_avoire.style.display = 'none';
        let charge = document.getElementById("charge");
        charge.style.display = 'none';
        let add_product = document.getElementById("add_product");
        add_product.style.display = 'none';
        let list_product = document.getElementById("list_product");
        list_product.style.display = 'none';
        let add_client = document.getElementById("add_client");
        add_client.style.display = 'none';
        let list_client1 = document.getElementById("list_client");
        list_client1.style.display = 'none';
        let list_credit = document.getElementById("list_credit");
        list_credit.style.display = 'none';
        let add_fourn = document.getElementById("add_fourn");
        add_fourn.style.display = 'none';
        let list_fourn = document.getElementById("list_fourn");
        list_fourn.style.display = 'none';
        let list_factures = document.getElementById("list_factures");
        list_factures.style.display = 'none';
        let list_devis = document.getElementById("list_devis");
        list_devis.style.display = 'none';
        let list_sans_factures = document.getElementById("list_sans_factures");
        list_sans_factures.style.display = 'none';
        let list_bl = document.getElementById("list_bl");
        list_bl.style.display = 'none';
        let list_banque = document.getElementById("list_banque");
        list_banque.style.display = 'none';
        let list_caisse = document.getElementById("list_caisse");
        list_caisse.style.display = 'none';
        let settings_tab = document.getElementById("settings_tab");
        settings_tab.style.display = 'none';
        let point_vente_menu = document.getElementById("point_vente_menu");
        let produits_menu = document.getElementById("produits_menu");
        let client_menu = document.getElementById("client_menu");
        let fourn_menu = document.getElementById("fourn_menu");
        let factur_menu = document.getElementById("factur_menu");
        let comptab_menu = document.getElementById("comptab_menu");
        point_vente_menu.style.display = 'block';
        produits_menu.style.display = 'none';
        client_menu.style.display = 'none';
        fourn_menu.style.display = 'none';
        factur_menu.style.display = 'none';
        comptab_menu.style.display = 'none';
    }
    const handleClick3 = () => {
        let tbodys = document.getElementById("tbodys");
        tbodys.children[0].style.backgroundColor = '#43546d';
        tbodys.children[1].style.backgroundColor = '#43546d';
        tbodys.children[2].style.backgroundColor = '#6B7A94';
        tbodys.children[3].style.backgroundColor = '#43546d';
        tbodys.children[4].style.backgroundColor = '#43546d';
        tbodys.children[5].style.backgroundColor = '#43546d';
        tbodys.children[6].style.backgroundColor = '#43546d';
        tbodys.children[7].style.backgroundColor = '#43546d';
        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-right");
        tbodys.children[2].children[2].children[0].classList.add("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'none';
        let point_vente1 = document.getElementById("point_vente1");
        point_vente1.style.display = 'none';
        let avoire = document.getElementById("avoire");
        avoire.style.display = 'none';
        let list_des_avoire = document.getElementById("list_des_avoire");
        list_des_avoire.style.display = 'none';
        let charge = document.getElementById("charge");
        charge.style.display = 'none';
        let add_product = document.getElementById("add_product");
        add_product.style.display = 'none';
        let list_product = document.getElementById("list_product");
        list_product.style.display = 'flex';
        let add_client = document.getElementById("add_client");
        add_client.style.display = 'none';
        let list_client1 = document.getElementById("list_client");
        list_client1.style.display = 'none';
        let list_credit = document.getElementById("list_credit");
        list_credit.style.display = 'none';
        let add_fourn = document.getElementById("add_fourn");
        add_fourn.style.display = 'none';
        let list_fourn = document.getElementById("list_fourn");
        list_fourn.style.display = 'none';
        let list_factures = document.getElementById("list_factures");
        list_factures.style.display = 'none';
        let list_devis = document.getElementById("list_devis");
        list_devis.style.display = 'none';
        let list_sans_factures = document.getElementById("list_sans_factures");
        list_sans_factures.style.display = 'none';
        let list_bl = document.getElementById("list_bl");
        list_bl.style.display = 'none';
        let list_banque = document.getElementById("list_banque");
        list_banque.style.display = 'none';
        let list_caisse = document.getElementById("list_caisse");
        list_caisse.style.display = 'none';
        let settings_tab = document.getElementById("settings_tab");
        settings_tab.style.display = 'none';
        let point_vente_menu = document.getElementById("point_vente_menu");
        let produits_menu = document.getElementById("produits_menu");
        let client_menu = document.getElementById("client_menu");
        let fourn_menu = document.getElementById("fourn_menu");
        let factur_menu = document.getElementById("factur_menu");
        let comptab_menu = document.getElementById("comptab_menu");
        point_vente_menu.style.display = 'none';
        produits_menu.style.display = 'block';
        client_menu.style.display = 'none';
        fourn_menu.style.display = 'none';
        factur_menu.style.display = 'none';
        comptab_menu.style.display = 'none';
    }
    const handleClick4 = () => {
        let tbodys = document.getElementById("tbodys");
        tbodys.children[0].style.backgroundColor = '#43546d';
        tbodys.children[1].style.backgroundColor = '#43546d';
        tbodys.children[2].style.backgroundColor = '#43546d';
        tbodys.children[3].style.backgroundColor = '#6B7A94';
        tbodys.children[4].style.backgroundColor = '#43546d';
        tbodys.children[5].style.backgroundColor = '#43546d';
        tbodys.children[6].style.backgroundColor = '#43546d';
        tbodys.children[7].style.backgroundColor = '#43546d';
        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-right");
        tbodys.children[3].children[2].children[0].classList.add("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'none';
        let point_vente1 = document.getElementById("point_vente1");
        point_vente1.style.display = 'none';
        let avoire = document.getElementById("avoire");
        avoire.style.display = 'none';
        let list_des_avoire = document.getElementById("list_des_avoire");
        list_des_avoire.style.display = 'none';
        let charge = document.getElementById("charge");
        charge.style.display = 'none';
        let add_product = document.getElementById("add_product");
        add_product.style.display = 'none';
        let list_product = document.getElementById("list_product");
        list_product.style.display = 'none';
        let add_client = document.getElementById("add_client");
        add_client.style.display = 'none';
        let list_client1 = document.getElementById("list_client");
        list_client1.style.display = 'flex';
        let list_credit = document.getElementById("list_credit");
        list_credit.style.display = 'none';
        let add_fourn = document.getElementById("add_fourn");
        add_fourn.style.display = 'none';
        let list_fourn = document.getElementById("list_fourn");
        list_fourn.style.display = 'none';
        let list_factures = document.getElementById("list_factures");
        list_factures.style.display = 'none';
        let list_devis = document.getElementById("list_devis");
        list_devis.style.display = 'none';
        let list_sans_factures = document.getElementById("list_sans_factures");
        list_sans_factures.style.display = 'none';
        let list_bl = document.getElementById("list_bl");
        list_bl.style.display = 'none';
        let list_banque = document.getElementById("list_banque");
        list_banque.style.display = 'none';
        let list_caisse = document.getElementById("list_caisse");
        list_caisse.style.display = 'none';
        let settings_tab = document.getElementById("settings_tab");
        settings_tab.style.display = 'none';
        let point_vente_menu = document.getElementById("point_vente_menu");
        let produits_menu = document.getElementById("produits_menu");
        let client_menu = document.getElementById("client_menu");
        let fourn_menu = document.getElementById("fourn_menu");
        let factur_menu = document.getElementById("factur_menu");
        let comptab_menu = document.getElementById("comptab_menu");
        point_vente_menu.style.display = 'none';
        produits_menu.style.display = 'none';
        client_menu.style.display = 'block';
        fourn_menu.style.display = 'none';
        factur_menu.style.display = 'none';
        comptab_menu.style.display = 'none';
    }
    const handleClick5 = () => {
        let tbodys = document.getElementById("tbodys");
        tbodys.children[0].style.backgroundColor = '#43546d';
        tbodys.children[1].style.backgroundColor = '#43546d';
        tbodys.children[2].style.backgroundColor = '#43546d';
        tbodys.children[3].style.backgroundColor = '#43546d';
        tbodys.children[4].style.backgroundColor = '#6B7A94';
        tbodys.children[5].style.backgroundColor = '#43546d';
        tbodys.children[6].style.backgroundColor = '#43546d';
        tbodys.children[7].style.backgroundColor = '#43546d';
        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-right");
        tbodys.children[4].children[2].children[0].classList.add("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'none';
        let point_vente1 = document.getElementById("point_vente1");
        point_vente1.style.display = 'none';
        let avoire = document.getElementById("avoire");
        avoire.style.display = 'none';
        let list_des_avoire = document.getElementById("list_des_avoire");
        list_des_avoire.style.display = 'none';
        let charge = document.getElementById("charge");
        charge.style.display = 'none';
        let add_product = document.getElementById("add_product");
        add_product.style.display = 'none';
        let list_product = document.getElementById("list_product");
        list_product.style.display = 'none';
        let add_client = document.getElementById("add_client");
        add_client.style.display = 'none';
        let list_client1 = document.getElementById("list_client");
        list_client1.style.display = 'none';
        let list_credit = document.getElementById("list_credit");
        list_credit.style.display = 'none';
        let add_fourn = document.getElementById("add_fourn");
        add_fourn.style.display = 'none';
        let list_fourn = document.getElementById("list_fourn");
        list_fourn.style.display = 'flex';
        let list_factures = document.getElementById("list_factures");
        list_factures.style.display = 'none';
        let list_devis = document.getElementById("list_devis");
        list_devis.style.display = 'none';
        let list_sans_factures = document.getElementById("list_sans_factures");
        list_sans_factures.style.display = 'none';
        let list_bl = document.getElementById("list_bl");
        list_bl.style.display = 'none';
        let list_banque = document.getElementById("list_banque");
        list_banque.style.display = 'none';
        let list_caisse = document.getElementById("list_caisse");
        list_caisse.style.display = 'none';
        let settings_tab = document.getElementById("settings_tab");
        settings_tab.style.display = 'none';
        let point_vente_menu = document.getElementById("point_vente_menu");
        let produits_menu = document.getElementById("produits_menu");
        let client_menu = document.getElementById("client_menu");
        let fourn_menu = document.getElementById("fourn_menu");
        let factur_menu = document.getElementById("factur_menu");
        let comptab_menu = document.getElementById("comptab_menu");
        point_vente_menu.style.display = 'none';
        produits_menu.style.display = 'none';
        client_menu.style.display = 'none';
        fourn_menu.style.display = 'block';
        factur_menu.style.display = 'none';
        comptab_menu.style.display = 'none';
    }
    const handleClick6 = () => {
        let tbodys = document.getElementById("tbodys");
        tbodys.children[0].style.backgroundColor = '#43546d';
        tbodys.children[1].style.backgroundColor = '#43546d';
        tbodys.children[2].style.backgroundColor = '#43546d';
        tbodys.children[3].style.backgroundColor = '#43546d';
        tbodys.children[4].style.backgroundColor = '#43546d';
        tbodys.children[5].style.backgroundColor = '#6B7A94';
        tbodys.children[6].style.backgroundColor = '#43546d';
        tbodys.children[7].style.backgroundColor = '#43546d';
        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-right");
        tbodys.children[5].children[2].children[0].classList.add("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'none';
        let point_vente1 = document.getElementById("point_vente1");
        point_vente1.style.display = 'none';
        let avoire = document.getElementById("avoire");
        avoire.style.display = 'none';
        let list_des_avoire = document.getElementById("list_des_avoire");
        list_des_avoire.style.display = 'none';
        let charge = document.getElementById("charge");
        charge.style.display = 'none';
        let add_product = document.getElementById("add_product");
        add_product.style.display = 'none';
        let list_product = document.getElementById("list_product");
        list_product.style.display = 'none';
        let add_client = document.getElementById("add_client");
        add_client.style.display = 'none';
        let list_client1 = document.getElementById("list_client");
        list_client1.style.display = 'none';
        let list_credit = document.getElementById("list_credit");
        list_credit.style.display = 'none';
        let add_fourn = document.getElementById("add_fourn");
        add_fourn.style.display = 'none';
        let list_fourn = document.getElementById("list_fourn");
        list_fourn.style.display = 'none';
        let list_factures = document.getElementById("list_factures");
        list_factures.style.display = 'flex';
        let list_devis = document.getElementById("list_devis");
        list_devis.style.display = 'none';
        let list_sans_factures = document.getElementById("list_sans_factures");
        list_sans_factures.style.display = 'none';
        let list_bl = document.getElementById("list_bl");
        list_bl.style.display = 'none';
        let list_banque = document.getElementById("list_banque");
        list_banque.style.display = 'none';
        let list_caisse = document.getElementById("list_caisse");
        list_caisse.style.display = 'none';
        let settings_tab = document.getElementById("settings_tab");
        settings_tab.style.display = 'none';
        let point_vente_menu = document.getElementById("point_vente_menu");
        let produits_menu = document.getElementById("produits_menu");
        let client_menu = document.getElementById("client_menu");
        let fourn_menu = document.getElementById("fourn_menu");
        let factur_menu = document.getElementById("factur_menu");
        let comptab_menu = document.getElementById("comptab_menu");
        point_vente_menu.style.display = 'none';
        produits_menu.style.display = 'none';
        client_menu.style.display = 'none';
        fourn_menu.style.display = 'none';
        factur_menu.style.display = 'block';
        comptab_menu.style.display = 'none';
    }
    const handleClick7 = () => {
        let tbodys = document.getElementById("tbodys");
        tbodys.children[0].style.backgroundColor = '#43546d';
        tbodys.children[1].style.backgroundColor = '#43546d';
        tbodys.children[2].style.backgroundColor = '#43546d';
        tbodys.children[3].style.backgroundColor = '#43546d';
        tbodys.children[4].style.backgroundColor = '#43546d';
        tbodys.children[5].style.backgroundColor = '#43546d';
        tbodys.children[6].style.backgroundColor = '#6B7A94';
        tbodys.children[7].style.backgroundColor = '#43546d';
        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-right");
        tbodys.children[6].children[2].children[0].classList.add("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[7].children[2].children[0].classList.add("fa-caret-right");
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'none';
        let point_vente1 = document.getElementById("point_vente1");
        point_vente1.style.display = 'none';
        let avoire = document.getElementById("avoire");
        avoire.style.display = 'none';
        let list_des_avoire = document.getElementById("list_des_avoire");
        list_des_avoire.style.display = 'none';
        let charge = document.getElementById("charge");
        charge.style.display = 'none';
        let add_product = document.getElementById("add_product");
        add_product.style.display = 'none';
        let list_product = document.getElementById("list_product");
        list_product.style.display = 'none';
        let add_client = document.getElementById("add_client");
        add_client.style.display = 'none';
        let list_client1 = document.getElementById("list_client");
        list_client1.style.display = 'none';
        let list_credit = document.getElementById("list_credit");
        list_credit.style.display = 'none';
        let add_fourn = document.getElementById("add_fourn");
        add_fourn.style.display = 'none';
        let list_fourn = document.getElementById("list_fourn");
        list_fourn.style.display = 'none';
        let list_factures = document.getElementById("list_factures");
        list_factures.style.display = 'none';
        let list_devis = document.getElementById("list_devis");
        list_devis.style.display = 'none';
        let list_sans_factures = document.getElementById("list_sans_factures");
        list_sans_factures.style.display = 'none';
        let list_bl = document.getElementById("list_bl");
        list_bl.style.display = 'none';
        let list_banque = document.getElementById("list_banque");
        list_banque.style.display = 'none';
        let list_caisse = document.getElementById("list_caisse");
        list_caisse.style.display = 'flex';
        let settings_tab = document.getElementById("settings_tab");
        settings_tab.style.display = 'none';
        let point_vente_menu = document.getElementById("point_vente_menu");
        let produits_menu = document.getElementById("produits_menu");
        let client_menu = document.getElementById("client_menu");
        let fourn_menu = document.getElementById("fourn_menu");
        let factur_menu = document.getElementById("factur_menu");
        let comptab_menu = document.getElementById("comptab_menu");
        point_vente_menu.style.display = 'none';
        produits_menu.style.display = 'none';
        client_menu.style.display = 'none';
        fourn_menu.style.display = 'none';
        factur_menu.style.display = 'none';
        comptab_menu.style.display = 'block';
    }
    const handleClick8 = () => {
        fetch("https://asyd12855.pythonanywhere.com/settingsinfo",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("nom_settings_tab_id").value = data.all_info.nom_ste_company;
            document.getElementById("patente_settings_tab_id").value = data.all_info.patente_company;
            document.getElementById("rc_settings_tab_id").value = data.all_info.r_c_company;
            document.getElementById("tel_settings_tab_id").value = data.all_info.tel_company;
            document.getElementById("if_settings_tab_id").value = data.all_info.if_company;
            document.getElementById("cnss_settings_tab_id").value = data.all_info.cnss_company;
            document.getElementById("ice_settings_tab_id").value = data.all_info.ice_company;
            document.getElementById("adrresse_field_settings_tab_id").value = data.all_info.addresse_company;
            document.getElementById("output").setAttribute('src', 'https://asyd12855.pythonanywhere.com/companylogo/'+data.all_info.image_name_company)
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
        let tbodys = document.getElementById("tbodys");
        tbodys.children[0].style.backgroundColor = '#43546d';
        tbodys.children[1].style.backgroundColor = '#43546d';
        tbodys.children[2].style.backgroundColor = '#43546d';
        tbodys.children[3].style.backgroundColor = '#43546d';
        tbodys.children[4].style.backgroundColor = '#43546d';
        tbodys.children[5].style.backgroundColor = '#43546d';
        tbodys.children[6].style.backgroundColor = '#43546d';
        tbodys.children[7].style.backgroundColor = '#6B7A94';
        tbodys.children[7].children[2].children[0].classList.remove("fa-caret-right");
        tbodys.children[7].children[2].children[0].classList.add("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[1].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[2].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[2].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[3].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[3].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[4].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[4].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[5].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[5].children[2].children[0].classList.add("fa-caret-right");
        tbodys.children[6].children[2].children[0].classList.remove("fa-caret-left");
        tbodys.children[6].children[2].children[0].classList.add("fa-caret-right");
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let settings_tab = document.getElementById("settings_tab");
        settings_tab.style.display = 'block';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'none';
        let avoire = document.getElementById("avoire");
        avoire.style.display = 'none';
        let point_vente1 = document.getElementById("point_vente1");
        point_vente1.style.display = 'none';
        let list_des_avoire = document.getElementById("list_des_avoire");
        list_des_avoire.style.display = 'none';
        let charge = document.getElementById("charge");
        charge.style.display = 'none';
        let add_product = document.getElementById("add_product");
        add_product.style.display = 'none';
        let list_product = document.getElementById("list_product");
        list_product.style.display = 'none';
        let add_client = document.getElementById("add_client");
        add_client.style.display = 'none';
        let list_client1 = document.getElementById("list_client");
        list_client1.style.display = 'none';
        let list_credit = document.getElementById("list_credit");
        list_credit.style.display = 'none';
        let add_fourn = document.getElementById("add_fourn");
        add_fourn.style.display = 'none';
        let list_fourn = document.getElementById("list_fourn");
        list_fourn.style.display = 'none';
        let list_factures = document.getElementById("list_factures");
        list_factures.style.display = 'none';
        let list_devis = document.getElementById("list_devis");
        list_devis.style.display = 'none';
        let list_sans_factures = document.getElementById("list_sans_factures");
        list_sans_factures.style.display = 'none';
        let list_bl = document.getElementById("list_bl");
        list_bl.style.display = 'none';
        let list_banque = document.getElementById("list_banque");
        list_banque.style.display = 'none';
        let list_caisse = document.getElementById("list_caisse");
        list_caisse.style.display = 'none';
        let point_vente_menu = document.getElementById("point_vente_menu");
        let produits_menu = document.getElementById("produits_menu");
        let client_menu = document.getElementById("client_menu");
        let fourn_menu = document.getElementById("fourn_menu");
        let factur_menu = document.getElementById("factur_menu");
        let comptab_menu = document.getElementById("comptab_menu");
        point_vente_menu.style.display = 'none';
        produits_menu.style.display = 'none';
        client_menu.style.display = 'none';
        fourn_menu.style.display = 'none';
        factur_menu.style.display = 'none';
        comptab_menu.style.display = 'none';
    }

    const ventesclick = () => {
        let point_vente_menu = document.getElementById("point_vente_menu");
        point_vente_menu.style.display = 'none';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'none';
        let point_vente1 = document.getElementById("point_vente1");
        point_vente1.style.display = 'block';
    }
    const listventesclick = () => {
        let point_vente_menu = document.getElementById("point_vente_menu");
        point_vente_menu.style.display = 'none';
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'block';
        fetch("https://asyd12855.pythonanywhere.com/listfactur",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listfactur: data.listfacturarray
            })
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
            this.setState({
                listsansfactur: data.listsansfacturarray
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const avoireclick = () => {
        let point_vente_menu = document.getElementById("point_vente_menu");
        point_vente_menu.style.display = 'none';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'none';
        let avoire = document.getElementById("avoire");
        avoire.style.display = 'block';
    }
    const list_des_avoire_click = () => {
        let point_vente_menu = document.getElementById("point_vente_menu");
        point_vente_menu.style.display = 'none';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'none';
        let list_des_avoire = document.getElementById("list_des_avoire");
        list_des_avoire.style.display = 'block';
        fetch("https://asyd12855.pythonanywhere.com/listavoire",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listavoire: data.listavoirearray
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const charge_click = () => {
        let point_vente_menu = document.getElementById("point_vente_menu");
        point_vente_menu.style.display = 'none';
        let list_des_ventes = document.getElementById("list_des_ventes");
        list_des_ventes.style.display = 'none';
        let charge = document.getElementById("charge");
        charge.style.display = 'block';
        fetch("https://asyd12855.pythonanywhere.com/listcharge",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listcharge: data.listchargeall
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const addproduct = () => {
        let produits_menu = document.getElementById("produits_menu");
        produits_menu.style.display = 'none';
        let list_product = document.getElementById("list_product");
        list_product.style.display = 'none';
        let add_product = document.getElementById("add_product");
        add_product.style.display = 'flex';
    }
    const listproduct = () => {
        let produits_menu = document.getElementById("produits_menu");
        produits_menu.style.display = 'none';
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let list_product = document.getElementById("list_product");
        list_product.style.display = 'flex';
        fetch("https://asyd12855.pythonanywhere.com/listproduct",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listproduct: data.listproductarray
            });
            var tableproduct = document.getElementsByClassName("tableproduct");
            for (var i = 0; i < tableproduct.length; i++) {
                tableproduct[i].style.color = "blue";
                tableproduct[i].style.textDecoration = "underline";
                tableproduct[i].style.cursor = "pointer";
            }
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const add_client = () => {
        let client_menu = document.getElementById("client_menu");
        client_menu.style.display = 'none';
        let list_client1 = document.getElementById("list_client");
        list_client1.style.display = 'none';
        let add_client = document.getElementById("add_client");
        add_client.style.display = 'block';
    }
    const list_client = () => {
        let client_menu = document.getElementById("client_menu");
        client_menu.style.display = 'none';
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let list_client1 = document.getElementById("list_client");
        list_client1.style.display = 'flex';
        fetch("https://asyd12855.pythonanywhere.com/listclient",{
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
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const list_credit = () => {
        let client_menu = document.getElementById("client_menu");
        client_menu.style.display = 'none';
        let list_client1 = document.getElementById("list_client");
        list_client1.style.display = 'none';
        let list_credit = document.getElementById("list_credit");
        list_credit.style.display = 'flex';
        fetch("https://asyd12855.pythonanywhere.com/listcredit",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listcredit: data.listcreditarray
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const add_fourn = () => {
        let fourn_menu = document.getElementById("fourn_menu");
        fourn_menu.style.display = 'none';
        let list_fourn = document.getElementById("list_fourn");
        list_fourn.style.display = 'none';
        let add_fourn = document.getElementById("add_fourn");
        add_fourn.style.display = 'flex';
    }
    const list_fourn = () => {
        let fourn_menu = document.getElementById("fourn_menu");
        fourn_menu.style.display = 'none';
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let list_fourn = document.getElementById("list_fourn");
        list_fourn.style.display = 'flex';
        fetch("https://asyd12855.pythonanywhere.com/listfourn",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listfourn: data.listfournall
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const list_facture = () => {
        let factur_menu = document.getElementById("factur_menu");
        factur_menu.style.display = 'none';
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let list_factures = document.getElementById("list_factures");
        list_factures.style.display = 'flex';
        fetch("https://asyd12855.pythonanywhere.com/listfactur",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listfactur: data.listfacturarray
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const list_devis = () => {
        let factur_menu = document.getElementById("factur_menu");
        factur_menu.style.display = 'none';
        let list_factures = document.getElementById("list_factures");
        list_factures.style.display = 'none';
        let list_devis = document.getElementById("list_devis");
        list_devis.style.display = 'flex';
        fetch("https://asyd12855.pythonanywhere.com/listdevis",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listdevis: data.listdevisarray
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const list_sans_facture = () => {
        let factur_menu = document.getElementById("factur_menu");
        factur_menu.style.display = 'none';
        let list_factures = document.getElementById("list_factures");
        list_factures.style.display = 'none';
        let list_sans_factures = document.getElementById("list_sans_factures");
        list_sans_factures.style.display = 'flex';
        fetch("https://asyd12855.pythonanywhere.com/listsansfactur",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listsansfactur: data.listsansfacturarray
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const list_bl = () => {
        let factur_menu = document.getElementById("factur_menu");
        factur_menu.style.display = 'none';
        let list_factures = document.getElementById("list_factures");
        list_factures.style.display = 'none';
        let list_bl = document.getElementById("list_bl");
        list_bl.style.display = 'flex';
        fetch("https://asyd12855.pythonanywhere.com/listbl",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listbl: data.listblarray
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const list_banque = () => {
        let comptab_menu = document.getElementById("comptab_menu");
        comptab_menu.style.display = 'none';
        let list_caisse = document.getElementById("list_caisse");
        list_caisse.style.display = 'none';
        let list_banque = document.getElementById("list_banque");
        list_banque.style.display = 'flex';
        fetch("https://asyd12855.pythonanywhere.com/listbank",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listbank: data.listbankarray
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    const list_caisson = () => {
        let comptab_menu = document.getElementById("comptab_menu");
        comptab_menu.style.display = 'none';
        let dashbordfull = document.getElementById("dashbordfull");
        dashbordfull.style.display = 'none';
        let list_caisse = document.getElementById("list_caisse");
        list_caisse.style.display = 'flex';
        fetch("https://asyd12855.pythonanywhere.com/listcaisson",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listcaisson: data.listcaissonarray
            })
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
        });
    }
    return (
        <>
            <div className='menu'>
                <div className="heading">
                    <h2><span className='fas fa-atom'></span> KingStock</h2>
                </div>
                <div className="menuContent">
                    <table>
                        <tbody id='tbodys'>
                            <tr onClick={handleClick1}>
                                <td className='table-span'><span className='fas fa-th-large'></span></td>
                                <td><span className='span2'>Dashboard</span></td>
                                <td className='table-span1'><span className='span1'></span></td>
                            </tr>
                            <tr onClick={handleClick2}>
                                <td className='table-span'><span className='fas fa-money-bill-alt'></span></td>
                                <td><span className='span2'>Point Vente</span></td>
                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>
                            </tr>
                            <tr onClick={handleClick3}>
                                <td className='table-span'><span className='fas fa-lightbulb'></span></td>
                                <td><span className='span2'>Produits</span></td>
                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>
                            </tr>
                            <tr onClick={handleClick4}>
                                <td className='table-span'><span className='fas fa-user'></span></td>
                                <td><span className='span2'>Clients</span></td>
                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>
                            </tr>
                            <tr onClick={handleClick5}>
                                <td className='table-span'><span className='fas fa-user-tie'></span></td>
                                <td><span className='span2'>Fournisseur</span></td>
                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>
                            </tr>
                            <tr onClick={handleClick6}>
                                <td className='table-span'><span className='fas fa-receipt'></span></td>
                                <td><span className='span2'>Facturation</span></td>
                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>
                            </tr>
                            <tr onClick={handleClick7}>
                                <td className='table-span'><span className='fas fa-money-check-alt'></span></td>
                                <td><span className='span2'>Comptabilite</span></td>
                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>
                            </tr>
                            <tr onClick={handleClick8}>
                                <td className='table-span'><span className='fas fa-cog'></span></td>
                                <td><span className='span2'>Settings</span></td>
                                <td className='table-span1'><span className='span1 fas fa-caret-right'></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id='point_vente_menu'>
                <div className='ventesdiv'>
                    <div onClick={ventesclick}>
                        Ventes
                    </div>
                </div>
                <hr />
                <div className='listventesdiv'>
                    <div onClick={listventesclick}>
                        List des Ventes
                    </div>
                </div>
                <hr />
                <div className='avoirediv'>
                    <div onClick={avoireclick}>
                        Avoire
                    </div>
                </div>
                <hr />
                <div className='listavoirediv'>
                    <div onClick={list_des_avoire_click}>
                        List des Avoire
                    </div>
                </div>
                <hr />
                <div className='chargediv'>
                    <div onClick={charge_click}>
                        Charge
                    </div>
                </div>
            </div>
            <div id='produits_menu'>
                <div className='addproduitsdiv'>
                    <div onClick={addproduct}>
                        Ajouter Produit
                    </div>
                </div>
                <hr />
                <div className='listproduitsdiv'>
                    <div onClick={listproduct}>
                        List Produit
                    </div>
                </div>
            </div>
            <div id='client_menu'>
                <div className='addclientdiv'>
                    <div onClick={add_client}>
                        Ajouter Client
                    </div>
                </div>
                <hr />
                <div className='listclientdiv'>
                    <div onClick={list_client}>
                        List Clients
                    </div>
                </div>
                <hr />
                <div className='listcreditdiv'>
                    <div onClick={list_credit}>
                        List Credit
                    </div>
                </div>
            </div>
            <div id='fourn_menu'>
                <div className='addfourndiv'>
                    <div onClick={add_fourn}>
                        Ajou Fournisseur
                    </div>
                </div>
                <hr />
                <div className='listfourndiv'>
                    <div onClick={list_fourn}>
                        List Fournisseur
                    </div>
                </div>
            </div>
            <div id='factur_menu'>
                <div className='listfacturdiv'>
                    <div onClick={list_facture}>
                        List Facturation
                    </div>
                </div>
                <hr />
                <div className='listdevisdiv'>
                    <div onClick={list_devis}>
                        List Devis
                    </div>
                </div>
                <hr />
                <div className='listsansfacturdiv'>
                    <div onClick={list_sans_facture}>
                        Liste sans Fact
                    </div>
                </div>
                <hr />
                <div className='listBLdiv'>
                    <div onClick={list_bl}>
                        Liste B.L
                    </div>
                </div>
            </div>
            <div id='comptab_menu'>
                <div className='listbanquediv'>
                    <div onClick={list_banque}>
                        List Banque
                    </div>
                </div>
                <hr />
                <div className='listcaissondiv'>
                    <div onClick={list_caisson}>
                        List Caisson
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;