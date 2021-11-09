count=0,count1=0,count2=0,w1=0,w2=0;
    function player1()
    {
        var m = document.getElementById("maxscore");
        var result = m.options[m.selectedIndex].value;

                    if(result=="")
                    {

                        alert("selecionar pontuação vencedora");
                        document.getElementById("score").style.display="block";

                    }
                    else
                    {
                           count1+=1;    
                        document.getElementById("inc1").innerHTML=count1;
                        if (result==count1)
                        {
                            w1=document.getElementById("Player1").value;                             
                            alert("parabéns " +w1+ " Voce é vencedor :D !!");
                            Reset();
                            
                        }
                    }
    }
    function player2()
    {

        var m = document.getElementById("maxscore");
        var result = m.options[m.selectedIndex].value;

                    if(result=="")
                    {

                        alert("selecionar pontuação vencedora");
                        document.getElementById("score").style.display="block";
                    

                    }
                    else
                    {
                           count2+=1;    
                        document.getElementById("inc2").innerHTML=count2;
                        if (result==count2)
                        {
                            w2=document.getElementById("Player2").value;                             
                            alert("parabéns " +w2+ " Voce é vencedor");
                            Reset();
                        
                        }
                    }
    }
    function Reset()
    {

        document.getElementById("inc1").innerHTML=count;
        document.getElementById("inc2").innerHTML=count;
        document.getElementById("maxscore").value="";
        count1=0,count2=0;
    }
    function startGame()
    {


        var p1=document.getElementById("p1").value;
        var p2=document.getElementById("p2").value;



        if (p1=="" && p2=="") 
        {
            alert("o nome do jogador ou grupo deve ser obrigatório");
            document.getElementById("score").style.display="none";
        }
        else
        {
            document.getElementById("score").style.display="block";        
            document.getElementById("player-data").style.display="none";
            w1=document.getElementById("Player1").value=p1;
            w2=document.getElementById("Player2").value=p2;
        }
        
      
    }    
