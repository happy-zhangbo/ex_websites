var headerHtml = "";
headerHtml += "<div class=\"container\">\n";
headerHtml += "        <div class=\"d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom\">\n";
headerHtml += "          <a href=\"/public\" class=\"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none\">\n";
headerHtml += "            <span class=\"fs-4\">万博龙腾<\/span>\n";
headerHtml += "          <\/a>\n";
headerHtml += "          <ul class=\"nav col-12 col-md-auto mb-2 justify-content-center mb-md-0\">\n";
headerHtml += "            <li><a href=\"indexbak.html\" class=\"nav-link px-2 link-dark\">首页<\/a><\/li>\n";
headerHtml += "            <li><a href=\"dealer.html\" class=\"nav-link px-2 link-dark\">材料<\/a><\/li>\n";
headerHtml += "            <li><a href=\"services.html\" class=\"nav-link px-2 link-dark\">服务<\/a><\/li>\n";
headerHtml += "            <li><a href=\"contact.html\" class=\"nav-link px-2 link-dark\">关于<\/a><\/li>\n";
headerHtml += "          <\/ul>\n";
headerHtml += "\n";
headerHtml += "        <\/div>\n";
headerHtml += "      <\/div>\n";

document.querySelector("header").innerHTML = headerHtml;


const footerHtml = "<div class=\"container\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-md-6 mb-3 mb-md-0\">\n" +
    "              <p>&copy;京ICP备2021031512号-1 万博龙腾科技有限公司. All rights reserved.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "              <ul class=\"list-inline mb-0 ms-auto\">\n" +
    "                <li class=\"list-inline-item\"><a href=\"indexbak.html\" class=\"text-white\">首页</a></li>\n" +
    "                <li class=\"list-inline-item\"><a href=\"dealer.html\" class=\"text-white\">产品</a></li>\n" +
    "                <li class=\"list-inline-item\"><a href=\"contact.html\" class=\"text-white\">联系我们</a></li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>"

document.querySelector("footer").innerHTML = footerHtml;


// // Bootstrap and Tailwindcss
// const cssAll = document.querySelector("head").innerHTML + "\n" +
//     "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css\">" +
//     "<link href=\"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css\" rel=\"stylesheet\">"
// document.querySelector("head").innerHTML = cssAll;
//
//
// const jsAll = document.querySelector("body").innerHTML + "\n" +
//     "<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js\"></script>"
// document.querySelector("body").innerHTML = jsAll;
document.writeln("<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js\"></script>")