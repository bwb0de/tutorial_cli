function insert_on_list() {
    produto = document.getElementById("produto").value;
    quantidade = document.getElementById("quantidade").value;
    preco = document.getElementById("preço").value;
    clear_form();
    document.getElementById("info").innerHTML += update_info(produto, quantidade, preco);
};

function clear_form() {
    document.getElementById("produto").value = '';
    document.getElementById("quantidade").value = '';
    document.getElementById("preço").value = '';
};

function update_info(produto, quantidade, preco) {
    output  = "<b>" + produto + "</b><br>";
    output += quantidade + "<br>";
    output += "preço unitário, " + preco + "<br>";
    output += (parseInt(quantidade) * convert_to_float(preco)).toString() + "<br><br>";
    return output

};

function convert_to_float(num) {
    return parseFloat(num.replace(",", "."))
}