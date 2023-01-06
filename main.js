var lista_nome=["ratinho indiano", "sosias?", "drew", "cara da caneta azul" ];
var lista_imagem=["https://pbs.twimg.com/media/EeRIMskXsAEarDZ.png", "https://uploads.metropoles.com/wp-content/uploads/2022/11/07114234/lula-e-bolsonaro-6-600x400.jpg", "http://4.bp.blogspot.com/-Mij38BMrFRU/VXfFsZ_7urI/AAAAAAAAA0U/0k_OBaWSrNc/s1600/00000000.jpg", "https://uploads.metropoles.com/wp-content/uploads/2022/07/22153152/Caneta-azul-1.jpg"];
var indice=0;
function update(){
    indice++;
    var comprimento=lista_imagem.length;
    if(indice>=comprimento){
        indice=0;
    }
    document.getElementById("img").src=lista_imagem[indice];
    document.getElementById("nome").innerHTML=lista_nome[indice];
}
