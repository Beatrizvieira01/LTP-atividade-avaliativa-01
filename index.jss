class Noticia {
   constructor(titulo, data_publicação, resumo, texto){
    this.titulo = titulo
    this.data_publicação = data_publicação
    this.resumo = resumo
    this.texto = texto
   }
  mostrarNoticias() {
     return this.titulo + "\n" +         this.data_publicação + "\n" + this.resumo + "\n" + "\n" + this.texto + "\n"
}
  }
let noticia = new Noticia("Bolsonaro sente desconforto e é levado a hospital para exames, informa ministro", "28/03/2022", "Problema fez com que presidente deixasse de comparecer a evento de filiação dos ministros Tarcísio Gomes de Freitas e Damares Alves ao partido Republicanos.", "O presidente Jair Bolsonaro foi levado na noite desta segunda-feira 28 para o Hospital das Forças Armadas HFA, em Brasília, a fim de se submeter a exames devido a um desconforto, segundo informou o ministro das Comunicações, Fabio Faria.Bolsonaro se dirigia a um evento do Republicanos, partido da base de apoio ao governo, mas deixou de comparecer para ir ao hospital. A TV Globo apurou que ele deve passar a noite no HFA.")  
console.log(noticia.mostrarNoticias())
