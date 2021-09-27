// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app= new Vue({
    el:"#root",
    data:{
        mailingList:null,
        randomMail:null,
        check:"",
    },
    methods:{
        

    },
    mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response)=>{
            for(var i=0;i <10;i++){
                this.randomMail=response.data.response;
                if(this.mailingList.includes(this.randomMail)){
                }else{
                    this.mailingList.push(this.randomMail);
                }
            }
        }
        )},

    
});