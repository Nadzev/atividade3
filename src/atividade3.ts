class Functions{
    num: number;
    word : string;
    constructor(num :number, word:string){
        this.num = num;
        this.word = word;
    }
    /*ama,abcba,*/ 
    impar_ou_par(){
        if(this.num%2 == 0){
            console.log("O número é par");
        }
        else{
            console.log("O número é impar");
        }
    }
    palindromo(){
        let tam : number = (this.word.length)
        let vetor : string[] = [];
        for(let i = 0;i<tam;i++){
            vetor[i] = this.word[i];
            /*if(this.word[i]=this.word[tam]){ 
            }*/
        }
        let b :boolean = false;
        vetor.reverse();
        for(let i = 0;i<tam;i++){
            if(vetor[i] == this.word[i]){
                b = true;
            }
            else{
                b = false;
                break;
            }
            
        }
        if(b == false){
            console.log("Não é palindroma");
        }
        else{
            console.log("É palindroma");
        }
    }
}